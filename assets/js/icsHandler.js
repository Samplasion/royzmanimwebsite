// @ts-check

import WebsiteCalendar, { getOrdinal } from "./WebsiteCalendar.js";
import { AmudehHoraahZmanim, OhrHachaimZmanim } from "./ROYZmanim.js";
import {ics} from "../libraries/ics/esbuild.js"
import { Temporal, GeoLocation } from "../libraries/kosherZmanim/kosher-zmanim.esm.js";
import { settings } from "./settings/handler.js";

/**
 * @param {Temporal.PlainDate|Temporal.ZonedDateTime} date
 * @returns {[number, number, number]}
*/
const exportDate = (date) => [date.year, date.month, date.day]

/**
 * @param {boolean} amudehHoraahZman
 * @param {[number, number, number, string | Temporal.CalendarProtocol]} plainDateParams
 * @param {[string, number, number, number, string]} geoLocationData
 * @param {boolean} useElevation
 */
export default function icsExport (amudehHoraahZman, plainDateParams, geoLocationData, useElevation) {
    const baseDate = new Temporal.PlainDate(...plainDateParams).with({ day: 1, month: 1 })
    const geoLocation = new GeoLocation(...geoLocationData);

    const jCal = new WebsiteCalendar(baseDate);
    const calc = (amudehHoraahZman ? new AmudehHoraahZmanim(geoLocation) : new OhrHachaimZmanim(geoLocation, useElevation));
    calc.coreZC.setDate(baseDate);

    /** @type {[string | string[], options?: Intl.DateTimeFormatOptions]} */
    const dtF = [settings.language() == 'hb' ? 'he' : 'en', {
        hourCycle: settings.timeFormat(),
        timeStyle: settings.seconds() ? "medium" : "short"
    }];

    /** @type {ics.EventAttributes[]} */
    const events = [];
    for (let index = 0; index < jCal.getDate().daysInYear; index++) {
        /**
         * Style of Events:
         * 
         * - Hebrew Date: One and done, have that be all day depending on how the calendar 
         */
        events.push({
            start: exportDate(jCal.getDate()),
            end: exportDate(jCal.getDate().add({ days: 1 })),
            title: jCal.formatJewishFullDate().hebrew,
        })

        if (jCal.tomorrow().getDayOfOmer() !== -1) {
            events.push({
                start: calc.getTzait().epochMilliseconds,
                end: calc.tomorrow().getAlotHashachar().epochMilliseconds,
                title: "Sefirat Haomer - Night " + jCal.tomorrow().getDayOfOmer()
            })
        }

        if (jCal.getDate().dayOfWeek == 5) {
            events.push({
                title: "שבת " + (jCal.getHebrewParasha().join(" / ") || jCal.tomorrow().getYomTov())
                    + (jCal.tomorrow().isChanukah() ? " | " + getOrdinal(jCal.tomorrow().getDayOfChanukah()) + " night of Hanukah" : ""),
                start: calc.getCandleLighting().epochMilliseconds,
                end: calc.tomorrow().getTzaitShabbath().epochMilliseconds,
                description: (settings.language() == "hb" ? 'ר"ת: ' : 'R"T: ') + calc.tomorrow().getTzaitRT().toLocaleString(...dtF)
            })
        }

        if (jCal.tomorrow().isChanukah()) {
            if (jCal.getDate().dayOfWeek == 6)
                events.push({
                    start: calc.getTzaitShabbath().epochMilliseconds,
                    end: calc.tomorrow().getAlotHashachar().epochMilliseconds,
                    title: "Hanukah - " + getOrdinal(jCal.tomorrow().getDayOfChanukah()) + " night of Hanukah"
                })
            else if (jCal.getDate().dayOfWeek !== 5)
                events.push({
                    start: calc.getTzait().epochMilliseconds,
                    end: calc.getTzait().add({ minutes: 30 }).epochMilliseconds,
                    title: "Hanukah - " + getOrdinal(jCal.tomorrow().getDayOfChanukah()) + " night of Hanukah"
                })
        }

        if (jCal.tomorrow().isRoshChodesh() && !jCal.isRoshChodesh()) {
            const definiteDayOfNextMonth = (jCal.tomorrow().tomorrow().isRoshChodesh() ? calc.tomorrow().tomorrow() : calc.tomorrow());
            events.push({
                start: calc.getShkiya().epochMilliseconds,
                end: definiteDayOfNextMonth.getShkiya().epochMilliseconds,
                title: "Rosh Hodesh " + definiteDayOfNextMonth.coreZC.getDate().toLocaleString('en-u-ca-hebrew', {month: 'long'})
            });
        }

        if (jCal.tomorrow().isRoshHashana() && !jCal.isRoshHashana()) {
            events.push({
                start: calc.getCandleLighting().epochMilliseconds,
                end: calc.tomorrow().tomorrow().getTzaitShabbath().epochMilliseconds,
                title: "Rosh Hashanah"
            })
        }

        if (jCal.tomorrow().isTaanis()) {
            if (jCal.tomorrow().isYomKippur())
                events.push({
                    start: calc.getCandleLighting().epochMilliseconds,
                    end: calc.tomorrow().getTzaitShabbath().epochMilliseconds,
                    title: "Yom Kippur",
                    description: (settings.language() == "hb" ? 'ר"ת: ' : 'R"T: ') + calc.tomorrow().getTzaitRT().toLocaleString(...dtF)
                })
            else if (jCal.getJewishMonth() == WebsiteCalendar.AV)
                events.push({
                    start: calc.getShkiya().epochMilliseconds,
                    end: calc.tomorrow().getTzait().epochMilliseconds,
                    title: "Tisha Be'av"
                })
            else
                events.push({
                    start: calc.tomorrow().getAlotHashachar().epochMilliseconds,
                    end: calc.tomorrow().getTzait().epochMilliseconds,
                    title: jCal.tomorrow().getYomTov()
                })
        }

        jCal.setDate(jCal.getDate().add({ days: 1 }));
        calc.coreZC.setDate(calc.coreZC.getDate().add({ days: 1 }))
    }

    const labeledEvents = events.map(obj => ({
        ...obj,
        calName:
            (calc instanceof AmudehHoraahZmanim ? "Amudeh Hora'ah Calendar" : "Ohr Hachaim Calendar")
            + " - " + calc.coreZC.getGeoLocation().getLocationName()
    }));

    const icsRespond = ics.createEvents(labeledEvents)
    if (icsRespond.error)
        throw icsRespond.error;

    return icsRespond.value;
}