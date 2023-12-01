// @ts-check

import * as KosherZmanim from "../libraries/kosherZmanim/kosher-zmanim.esm.js";
import { OhrHachaimZmanim, AmudehHoraahZmanim, methodNames } from "./ROYZmanim.js";
import WebsiteCalendar from "./WebsiteCalendar.js";
import { settings } from "./settings/handler.js";
import { ChaiTables } from "./chaiTables.js";

class zmanimListUpdater {
	/**
	 * @param {KosherZmanim.GeoLocation} geoLocation
	 */
	constructor(geoLocation) {
		this.jCal = new WebsiteCalendar();
		this.jCal.setUseModernHolidays(true);

		/**
		 * @type {null|KosherZmanim.Temporal.ZonedDateTime}
		 */
		this.nextUpcomingZman = null;

		this.buttonsInit = false;

		/** @type {null|NodeJS.Timeout} */ // It's not node but whatever
		this.countdownToNextDay = null;

		this.resetCalendar(geoLocation);

		// this.updateZmanimList();
	}

	/**
	 * @param {KosherZmanim.GeoLocation} geoLocation
	 */
	resetCalendar(geoLocation = this.geoLocation) {
		this.geoLocation = geoLocation;

		document.querySelectorAll('[data-zfReplace="LocationName"]')
			.forEach(locationName => locationName.innerHTML = geoLocation.getLocationName() || "No Location Name Provided");

		this.jCal.setInIsrael(geoLocation.getLocationName().toLowerCase().includes('israel'));

		const amudehHoraahIndicators = [...document.querySelectorAll('[data-zfFind="luachAmudehHoraah"]')].filter(elem => elem instanceof HTMLElement);
		const ohrHachaimIndicators = [...document.querySelectorAll('[data-zfFind="luachOhrHachaim"]')].filter(elem => elem instanceof HTMLElement);
		if (!this.jCal.getInIsrael() && settings.calendarToggle.hourCalculators() == "degrees") {
			amudehHoraahIndicators.forEach((/** @type {HTMLElement} */ ind) => ind.style.removeProperty('display'))
			ohrHachaimIndicators.forEach((/** @type {HTMLElement} */ ind) => ind.style.display = 'none');
			this.zmanFuncs = new AmudehHoraahZmanim(geoLocation)
		} else {
			ohrHachaimIndicators.forEach((/** @type {HTMLElement} */ ind) => ind.style.removeProperty('display'))
			amudehHoraahIndicators.forEach((/** @type {HTMLElement} */ ind) => ind.style.display = 'none');
			this.zmanFuncs = new OhrHachaimZmanim(geoLocation, true)
		}

		this.zmanFuncs.coreZC.setCandleLightingOffset(settings.candleLighting());

		this.zmanFuncs.coreZC.setDate(this.jCal.getDate().toZonedDateTime(this.geoLocation.getTimeZone()));

		/** @type {[string | string[], options?: Intl.DateTimeFormatOptions]} */
		this.dtF = [settings.language() == 'hb' ? 'he' : 'en', {
			hourCycle: settings.timeFormat(),
			timeStyle: settings.seconds() ? "medium" : "short"
		}];

		//this.chaiTableInfo = new ChaiTables(this.geoLocation);
		//this.chaiTableInfo.initForm();

		this.lastData = {
			'parsha': undefined,
			'day': undefined,
			'specialDay': undefined,
			'hamah': undefined,
			'levana': undefined
		}

		this.setNextUpcomingZman();
		this.changeDate(this.zmanFuncs.coreZC.getDate())
	}

	/**
	 * @param {KosherZmanim.Temporal.ZonedDateTime} date
	 * @param {boolean} internal 
	 */
	changeDate(date, internal=false) {
		this.zmanFuncs.coreZC.setDate(date)
		this.jCal.setDate(date.toPlainDate());

		if (!internal) {
			this.updateZmanimList();
			/* if (window.luxon.DateTime.now().hasSame(date, 'day')) {
				//at 12:00 AM the next day, update the zmanim to the next day's zmanim
				var tomorrow = window.luxon.DateTime.now().plus({ days: 1 });
				tomorrow = tomorrow.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
				var timeUntilTomorrow = tomorrow.diffNow().as("milliseconds");
				this.countdownToNextDay = setTimeout(() => {
					this.changeDate(tomorrow);
				}, timeUntilTomorrow);
			} else {
				this.countdownToNextDay = null;
			} */
		}
	}

	/**
	 * @param {HTMLElement} [dateContainer]
	 */
	renderDateContainer(dateContainer) {
		/** @type {{primary: string|null; secondary: string|null; other: string|null}} */
		let date = {primary: null, secondary: null, other: null}

		switch (settings.language()) {
			case 'hb':
			default:
				date.primary = this.jCal.formatJewishFullDate().hebrew;
				date.secondary = this.jCal.getDate().toLocaleString();
				date.other = this.jCal.formatJewishFullDate().english;
				break;
			case 'en-et':
				date.primary = this.jCal.formatJewishFullDate().english;
				date.secondary = this.jCal.getDate().toLocaleString();
				date.other = this.jCal.formatJewishFullDate().hebrew;
				break;
			case 'en':
				date.primary = this.jCal.getDate().toLocaleString();
				date.secondary = this.jCal.formatJewishFullDate().english;
				date.other = this.jCal.formatJewishFullDate().hebrew;
				break;
		}

		/** @type {(keyof date)[]} */
		// @ts-ignore
		const dateKeys = Object.keys(date);
		for (const dateName of dateKeys) {
			dateContainer.querySelector(`[data-zfReplace="${dateName}Date"]`).innerHTML = date[dateName]
		}

		const boldDateHandler = (this.jCal.getDate().dayOfYear == KosherZmanim.Temporal.Now.plainDateISO().dayOfYear
		&& this.jCal.getDate().year == KosherZmanim.Temporal.Now.plainDateISO().year) ? 'add' : 'remove'
		dateContainer.classList[boldDateHandler]("text-bold");

		if (!this.buttonsInit) {
			for (const dateChanger of Array.from(dateContainer.getElementsByTagName('button')).filter(btn => btn.hasAttribute('data-dateAlter'))) {
				const days = parseInt(dateChanger.getAttribute("data-dateAlter"))
				if (isNaN(days))
					continue;

				dateChanger.addEventListener("click", (e) => this.changeDate(this.zmanFuncs.coreZC.getDate().add({ days })))
			}

			for (const calendarBtn of dateContainer.getElementsByTagName('input')) {
				calendarBtn.addEventListener('calendarInsert',
					() => this.changeDate(KosherZmanim.Temporal.ZonedDateTime
						.from(new Date(calendarBtn.getAttribute("date-value")).toString())
						.with({ timeZone: this.geoLocation.getTimeZone()})
					)
				)
			}

			this.buttonsInit = true;
		}
	}

	/**
	 * @param {HTMLElement} [mourningDiv]
	 */
	writeMourningPeriod(mourningDiv) {
		if (!this.jCal.isMourningPeriod()) {
			mourningDiv.style.display = "none";
			return;
		}
		mourningDiv.style.removeProperty("display");

		/** @type {HTMLElement} */
		const sefirathHaomer = mourningDiv.querySelector('[data-zfFind="SefirathHaomer"]');

		/** @type {HTMLElement} */
		const threeWeeks = mourningDiv.querySelector('[data-zfFind="ThreeWeeksHeader"]');
		if (this.jCal.getDayOfOmer() !== -1) {
			sefirathHaomer.style.removeProperty("display");
			threeWeeks.style.display = "none";

			const omerInfo = this.jCal.getOmerInfo();

			// Hebrew
			mourningDiv.querySelector('[data-zfReplace="hbOmerDate"]').innerHTML =
				omerInfo.title.hb.mainCount;

			const hbDescription = mourningDiv.querySelector('[data-zfReplace="hbOmerDays"]');
			if (this.jCal.getDayOfOmer() >= 7) {
				hbDescription.parentElement.style.removeProperty("display");
				hbDescription.innerHTML = omerInfo.title.hb.subCount.toString();
			} else {
				hbDescription.parentElement.style.display = 'none';
			}

			// English
			mourningDiv.querySelector('[data-zfReplace="etNumOmerCount"]').innerHTML =
				omerInfo.title.et.mainCount;
			const etDescription = mourningDiv.querySelector('[data-zfReplace="etOmer"]');
			if (this.jCal.getDayOfOmer() >= 7) {
				etDescription.parentElement.style.removeProperty("display");
				etDescription.innerHTML = omerInfo.title.et.subCount.toString();
			} else {
				etDescription.parentElement.style.display = 'none';
			}

			mourningDiv.querySelector('[data-zfReplace="enOrdOmerCount"]').innerHTML =
				omerInfo.title.en.mainCount;

			/** @type {HTMLElement} */
			const enDescription = mourningDiv.querySelector('[data-zfReplace="enOmer"]');
			if (this.jCal.getDayOfOmer() >= 7) {
				enDescription.parentElement.style.removeProperty("display");
				enDescription.innerHTML = omerInfo.title.en.subCount.toString();
			} else {
				enDescription.style.display = 'none';
			}

			/** @type {HTMLElement} */
			const omerRules = mourningDiv.querySelector('[data-zfFind="omerRules"]')
			if (Object.values(this.jCal.mourningHalachot()).every(elem => elem == false)) {
				omerRules.style.display = "none"
				enDescription.classList.add("mb-0")
				etDescription.parentElement.classList.add("mb-0")
				hbDescription.parentElement.classList.add("mb-0")
			} else {
				omerRules.style.removeProperty("display")
				enDescription.classList.remove("mb-0")
				etDescription.parentElement.classList.remove("mb-0")
				hbDescription.parentElement.classList.remove("mb-0")
			}
		} else {
			sefirathHaomer.style.display = 'none';
			threeWeeks.style.removeProperty("display");

			/** @type {HTMLElement[]} */
			const threeWeeksText = Array.from(threeWeeks.querySelectorAll('[data-zfFind="threeWeeks"]'));
			/** @type {HTMLElement[]} */
			const nineDaysText = Array.from(threeWeeks.querySelectorAll('[data-zfFind="nineDays"]'));
			/** @type {HTMLElement[]} */
			const weekOfText = Array.from(threeWeeks.querySelectorAll('[data-zfFind="weekOf"]'));

			if (this.jCal.isShvuaShechalBo()) {
				weekOfText.forEach((elem) => elem.style.removeProperty("display"));

				([nineDaysText, threeWeeksText]).flat()
					.forEach((elem) => elem.style.display = "none")
			} else if (this.jCal.getJewishMonth() == KosherZmanim.JewishCalendar.AV) {
				nineDaysText.forEach((elem) => elem.style.removeProperty("display"));

				([weekOfText, threeWeeksText]).flat()
					.forEach((elem) => elem.style.display = "none")
			} else {
				threeWeeksText.forEach((elem) => elem.style.removeProperty("display"));

				([weekOfText, nineDaysText]).flat()
					.forEach((elem) => elem.style.display = "none")
			}
		}


		for (const [key, value] of Object.entries(this.jCal.mourningHalachot())) {
			/** @type {HTMLElement} */
			const halachaIndex = mourningDiv.querySelector(`[data-zfFind="${key}"]`);

			if (value)
				halachaIndex.style.removeProperty("display")
			else
				halachaIndex.style.display = "none"
		}
	}

	getZmanimInfo() {
		console.time("timerName");
		/** @type {Record<string, {display: -2|-1|0|1, code: string[], luxonObj: KosherZmanim.Temporal.ZonedDateTime, title: { hb: string, en: string, "en-et": string }}>} */
		const zmanimInfo = {}

		for (const timeSlot of document.querySelector('[data-zfFind="calendarFormatter"]').children) {
			if (!timeSlot.hasAttribute("data-zmanid"))
				continue;

			const zmanid = timeSlot.getAttribute('data-zmanid');

			zmanimInfo[zmanid] = {
				display: 1,
				code: [],
				luxonObj: null,
				title: {
					hb: null,
					en: null,
					"en-et": null
				}
			}

			if ((!timeSlot.hasAttribute('data-timeGetter')
			 || !methodNames.includes(timeSlot.getAttribute('data-timeGetter'))) && zmanid !== 'candleLighting') {
				zmanimInfo[zmanid].display = -1;
				zmanimInfo[zmanid].code.push('timeGetter unfound');
				continue;
			}

			if (timeSlot.hasAttribute('data-yomTovInclusive')) {
				/**
				 * @typedef {{[K in keyof typeof KosherZmanim.JewishCalendar]: typeof KosherZmanim.JewishCalendar[K] extends number ? K : never;}[keyof typeof KosherZmanim.JewishCalendar]} FilteredNumberType */

				/** @type {keyof Pick<typeof KosherZmanim.JewishCalendar, FilteredNumberType>} */
				// @ts-ignore
				const yomTovInclusive = timeSlot.getAttribute("data-yomtovInclusive")
				if (this.jCal.getYomTovIndex() !== KosherZmanim.JewishCalendar[yomTovInclusive])
					zmanimInfo[zmanid].display = 0;
					zmanimInfo[zmanid].code.push('non-proper Yom Tov day')
			}

			if (timeSlot.hasAttribute('data-luachInclusive')) {
				if (!['degrees', 'seasonal'].includes(timeSlot.getAttribute('data-luachInclusive'))
				 || settings.calendarToggle.hourCalculators() !== timeSlot.getAttribute('data-luachInclusive')
				 || (timeSlot.getAttribute('data-luachInclusive') == 'degrees' && this.jCal.getInIsrael())) {
					zmanimInfo[zmanid].display = -1;
					zmanimInfo[zmanid].code.push('wrong luach')
					continue;
				}
			}

			if (timeSlot.hasAttribute('data-timeGetter')) {
				/**
				 * @typedef {{[K in keyof typeof this.zmanFuncs]: typeof this.zmanFuncs[K] extends Function ? K : never;}[keyof typeof this.zmanFuncs]} FunctionType
				 * @typedef {{[K in FunctionType]: ReturnType<typeof this.zmanFuncs[K]> extends KosherZmanim.Temporal.ZonedDateTime ? K : never;}[FunctionType]} LuxonTimeType
				 */

				/** @type {keyof Pick<typeof this.zmanFuncs, LuxonTimeType>} */
				// @ts-ignore
				const getFunction = timeSlot.getAttribute('data-timeGetter');
				zmanimInfo[zmanid].luxonObj = this.zmanFuncs[getFunction]()
			}

			/* Hardcoding below - Thankfully managed to condense this entire project away from the 2700 lines of JS it was before, but some of it still needed to stay */
			switch (zmanid) {
				case 'candleLighting':
					const tzetCandle = (this.jCal.hasCandleLighting() && this.jCal.isAssurBemelacha() && this.jCal.getDayOfWeek() !== 6);
					const shabbatCandles = ((this.jCal.hasCandleLighting() && !this.jCal.isAssurBemelacha()) || this.jCal.getDayOfWeek() === 6);

					if (!tzetCandle && !shabbatCandles) {
						zmanimInfo[zmanid].display = -1;
						zmanimInfo[zmanid].code.push('not-shabbat')
						continue;
					} else
						zmanimInfo[zmanid].luxonObj = (tzetCandle ? this.zmanFuncs.getTzaitShabbath({minutes: 40, degree: 7.14 }) : this.zmanFuncs.getCandleLighting());

					break;
				case 'tzeitShabbat':
					if (this.jCal.isAssurBemelacha() && !this.jCal.hasCandleLighting()) {
						let customMinuteDisplay = `(${settings.customTimes.tzeithIssurMelakha().minutes}m${(this.zmanFuncs instanceof AmudehHoraahZmanim && `/${settings.customTimes.tzeithIssurMelakha().degree}°`) || ""})`
						if (this.jCal.isYomTovAssurBemelacha() && this.jCal.getDayOfWeek() == 7) {
							zmanimInfo[zmanid].title.hb = `צאת השבת וחג ${customMinuteDisplay}`;
							zmanimInfo[zmanid].title['en-et'] = `Tzait Shabbat & Yom Tov ${customMinuteDisplay}`;
							zmanimInfo[zmanid].title.en = `Shabbat & Yom Tov Ends ${customMinuteDisplay}`;
						} else if (this.jCal.getDayOfWeek() == 7) {
							zmanimInfo[zmanid].title.hb = `צאת השבת ${customMinuteDisplay}`;
							zmanimInfo[zmanid].title['en-et'] = `Tzait Shabbat ${customMinuteDisplay}`;
							zmanimInfo[zmanid].title.en = `Shabbat Ends ${customMinuteDisplay}`;
						} else {
							zmanimInfo[zmanid].title.hb = `צאת חג ${customMinuteDisplay}`;
							zmanimInfo[zmanid].title['en-et'] = `Tzait Yom Tov ${customMinuteDisplay}`;
							zmanimInfo[zmanid].title.en = `Yom Tov Ends ${customMinuteDisplay}`;
						}
					} else {
						zmanimInfo[zmanid].display = 0;
						zmanimInfo[zmanid].code.push("Not a day with Tzet")
					}
					break;
				case 'tzeit':
					if ((this.jCal.isAssurBemelacha() && !this.jCal.hasCandleLighting()) || (this.jCal.isTaanis() && this.zmanFuncs instanceof AmudehHoraahZmanim)) {
						zmanimInfo[zmanid].display = 0;
						zmanimInfo[zmanid].code.push("Isur Melacha Tzet")
					}
					break;
				case 'tzeitLechumra':
					if (this.jCal.isTaanis() && this.jCal.getYomTovIndex() !== KosherZmanim.JewishCalendar.YOM_KIPPUR) {
						zmanimInfo[zmanid].title.hb = "צאת תענית (צאת הכוכבים)";
						zmanimInfo[zmanid].title['en-et'] = "Tzeit Ta'anith (Tzeit Hakochavim)";
						zmanimInfo[zmanid].title.en = "Fast Ends (Nightfall)";
					} else {
						zmanimInfo[zmanid].title.hb = "צאת הכוכבים לחומרא";
						zmanimInfo[zmanid].title['en-et'] = "Tzait Hakokhavim LeKhumra";
						zmanimInfo[zmanid].title.en = "Nightfall (Stringent)";
					}
					break;
				case 'tzeitTaanitLChumra':
					if (!settings.calendarToggle.tzeitTaanitHumra()) {
						zmanimInfo[zmanid].display = 0;
						zmanimInfo[zmanid].code.push("Settings-Hidden")
					}
					break;
				case 'rt':
					if (zmanimInfo[zmanid].luxonObj) {
						if (zmanimInfo[zmanid].luxonObj.epochMilliseconds == this.zmanFuncs.getTzait72Zmanit().epochMilliseconds) {
							zmanimInfo[zmanid].title.hb = 'ר"ת (זמנית)';
							zmanimInfo[zmanid].title['en-et'] = "Rabbeinu Tam (Zmanit)";
							zmanimInfo[zmanid].title.en = "Rabbeinu Tam (Seasonal)";
						} else {
							zmanimInfo[zmanid].title.hb = 'ר"ת (קבוע)';
							zmanimInfo[zmanid].title['en-et'] = "Rabbeinu Tam (Kavuah)";
							zmanimInfo[zmanid].title.en = "Rabbeinu Tam (Fixed)";
						}
					}
			}

			if (timeSlot.hasAttribute('data-condition')) {
				switch (timeSlot.getAttribute('data-condition')) {
					// Default: isTaanis - Cannot use that method because we're supposed to exclude YomKippur
					case 'isTaanit':
						if (!(this.jCal.isTaanis() && this.jCal.getYomTovIndex() !== KosherZmanim.JewishCalendar.YOM_KIPPUR)) {
							zmanimInfo[zmanid].display = 0;
							zmanimInfo[zmanid].code.push("Not a fast day")
						}
				}
			}

			if (!zmanimInfo[zmanid].luxonObj) {
				zmanimInfo[zmanid].display = -2;
				zmanimInfo[zmanid].code.push("Invalid Date");
			}
		}

		console.timeEnd("timerName");
		return zmanimInfo;
	}

	updateZmanimList() {
		for (let dateContainer of document.querySelectorAll('[data-zfFind="dateContainer"]')) {
			if (dateContainer instanceof HTMLElement)
				this.renderDateContainer(dateContainer);
		}

		const parashaText = this.jCal.getHebrewParasha().join(" / ");
		if (this.lastData.parsha !== parashaText) {
			this.lastData.parsha = parashaText
			for (const parashaElem of document.querySelectorAll('[data-zfReplace="Parasha"]'))
				parashaElem.innerHTML = parashaText
		}

		const dayText = Object.values(this.jCal.getDayOfTheWeek()).join(" / ");
		if (this.lastData.day !== dayText) {
			this.lastData.day = dayText
			for (const dayElem of document.querySelectorAll('[data-zfReplace="Day"]'))
				dayElem.innerHTML = dayText;
		}

		const specialDayText = this.jCal.listOfSpecialDays().join(" / ");
		if (this.lastData.specialDay !== specialDayText) {
			this.lastData.specialDay = specialDayText;
			for (const specialDay of document.querySelectorAll('[data-zfReplace="SpecialDay"]')) {
				if (!(specialDay instanceof HTMLElement))
					return;
	
				if (!specialDayText) {
					specialDay.style.display = "none";
				} else {
					specialDay.style.removeProperty("display");
					specialDay.innerHTML = specialDayText;
				}
			}
		}

		for (const mourningDiv of document.querySelectorAll('[data-zfFind="MourningPeriod"]')) {
			if (mourningDiv instanceof HTMLElement)
				this.writeMourningPeriod(mourningDiv);
		}

		document.querySelectorAll('[data-zfReplace="Ulchaparat"]').forEach(
			(/**@type {HTMLElement} */ulchaparat) => {
				if (this.jCal.isRoshChodesh()) {
					ulchaparat.style.removeProperty("display");
					ulchaparat.innerHTML = (this.jCal.tefilahRules().amidah.ulChaparatPesha ? "Say וּלְכַפָּרַת פֶּשַׁע" : "Do not say וּלְכַפָּרַת פֶּשַׁע")
				} else {
					ulchaparat.style.display = "none";
				}
			}
		)

		document.querySelectorAll('[data-zfFind="Chamah"]').forEach(
			(/**@type {HTMLElement} */chamah) => {
				if (this.jCal.isBirkasHachamah()) {
					chamah.style.removeProperty("display");
				} else {
					chamah.style.display = "none";
				}
			}
		)

		document.querySelectorAll('[data-zfFind="BirchatHalevana"]').forEach(
			(/**@type {HTMLElement} */birchatHalevana) => {
				if (!this.birkathHalevanaCheck().current) {
					birchatHalevana.style.display = "none";
					return;
				}

				birchatHalevana.style.removeProperty("display");
				//birchatHalevana.
			}
		)

		document.querySelectorAll('[data-zfReplace="Tachanun"]').forEach(
			(/**@type {HTMLElement} */tachanun) => {
				if (this.jCal.isYomTovAssurBemelacha()) {
					tachanun.style.display = "none";
					return;
				}

				tachanun.style.removeProperty("display");
				if (this.jCal.getDayOfWeek() == 7) {
					tachanun.innerHTML = this.jCal.tefilahRules().tachanun == 0 ? "צדקתך" : "יהי שם"
				} else {
					switch (this.jCal.tefilahRules().tachanun) {
						case 2:
							tachanun.innerHTML = "No Tachanun";
							break;
						case 1:
							tachanun.innerHTML = "Only Tachanun at Shacharit";
							break;
						case 0:
							tachanun.innerHTML = "Calendar-Tachanun Day";
					}
				}
			}
		)

		const hallelText = this.jCal.tefilahRules().hallel;
		document.querySelectorAll('[data-zfReplace="Hallel"]').forEach(
			(/**@type {HTMLElement} */hallel) => {
				if (!hallelText) {
					hallel.style.display = "none";
				} else {
					hallel.style.removeProperty("display");
					hallel.innerHTML = hallelText == 2 ? "הלל שלם (עם ברכה)" : "חצי הלל (בלי ברכה)";
				}
			}
		)

		const tekufaToday = this.jCal.getTekufa();
		const tekufaNextDay = this.jCal.tomorrow().getTekufa();
		if (
			(!tekufaToday && !tekufaNextDay) || //if no tekufa today or tomorrow
			(!tekufaToday &&
				this.jCal.tomorrow().getTekufaAsDate(settings.calendarToggle.tekufa() == "hatzoth").toLocaleString() !==
				this.jCal.getDate().toLocaleString()) || //if no tekufa today but there is one tomorrow and it's not today
			(!tekufaNextDay &&
				this.jCal.getTekufaAsDate(settings.calendarToggle.tekufa() == "hatzoth").toLocaleString() !==
				this.jCal.getDate().toLocaleString())
		) {
			// if no tekufa tomorrow but there is one today and it's not today
			document.querySelectorAll('[data-zfFind="Tekufa"]').forEach(
				(/**@type {HTMLElement} */tekufa) => tekufa.style.display = "none"
			)
		} else {
			const timeBase = (
				tekufaToday !== null &&
					this.jCal.getTekufaAsDate(settings.calendarToggle.tekufa() == "hatzoth").toLocaleString() ===
					this.jCal.getDate().toLocaleString()
					? this.jCal.getTekufaAsDate(settings.calendarToggle.tekufa() == "hatzoth") : this.jCal.tomorrow().getTekufaAsDate(settings.calendarToggle.tekufa() == "hatzoth"));

			//0 for Tishrei, 1 for Tevet, 2, for Nissan, 3 for Tammuz
			const tekufaID = this.jCal.getTekufaID() || this.jCal.tomorrow().getTekufaID()

			for (let tekufa of document.querySelectorAll('[data-zfFind="Tekufa"]')) {
				if (!(tekufa instanceof HTMLElement))
					continue;

				tekufa.style.removeProperty("display");

				Array.from(tekufa.querySelectorAll('[data-zfReplace="tekufaTime"]')).forEach(element => element.innerHTML = timeBase.toLocaleString(...this.dtF));

				Array.from(tekufa.querySelectorAll('[data-zfReplace="tekufaName-en"]')).forEach(element => element.innerHTML = this.jCal.getTekufaName(tekufaID).english);
				tekufa.querySelector('[data-zfReplace="tekufaName-hb"]').innerHTML = this.jCal.getTekufaName(tekufaID).hebrew;
			}
		}

		const zmanInfo = this.getZmanimInfo();
		for (const calendarContainer of document.querySelectorAll('[data-zfFind="calendarFormatter"]')) {
			for (const timeSlot of calendarContainer.children) {
				if (!(timeSlot instanceof HTMLElement))
					continue;

				if (!timeSlot.hasAttribute('data-zmanid')) {
					timeSlot.style.display = 'none';
					continue;
				}

				const zmanId = timeSlot.getAttribute('data-zmanid');
				if (zmanInfo[zmanId].display == -1) {
					timeSlot.style.display = 'none';
					continue;
				}

				if (zmanInfo[zmanId].display == -2) {
					timeSlot.style.removeProperty("display");
					timeSlot.querySelector('.timeDisplay').innerHTML = "XX:XX"
					continue;
				}

				const actionToClass = (this.isNextUpcomingZman(zmanInfo[zmanId].luxonObj) ? "add" : "remove")
				timeSlot.classList[actionToClass]("nextZman")

				timeSlot.querySelector('.timeDisplay').innerHTML = zmanInfo[zmanId].luxonObj.toLocaleString(...this.dtF)

				/* if (timeSlot.hasAttribute('specialDropdownContent')) {
					const description = timeSlot.querySelector('.accordianContent');
					description.innerHTML = description.innerHTML
						.replaceAll('${getAteretTorahSunsetOffset()}', this.zmanMethods.coreCZC.getAteretTorahSunsetOffset().toString())
						.replaceAll('${getCandleLightingOffset()}', this.zmanMethods.coreCZC.getCandleLightingOffset().toString())
				} */

				if (zmanInfo[zmanId].title.hb)
					timeSlot.querySelector('.lang-hb').innerHTML = zmanInfo[zmanId].title.hb

				if (zmanInfo[zmanId].title.en)
					timeSlot.querySelector('.lang-en').innerHTML = zmanInfo[zmanId].title.en

				if (zmanInfo[zmanId].title["en-et"])
					timeSlot.querySelector('.lang-et').innerHTML = zmanInfo[zmanId].title["en-et"]

				// Calculate but hide! Can be derived via Inspect Element
				if (!zmanInfo[zmanId].display)
					timeSlot.style.display = 'none';
				else {
					timeSlot.style.removeProperty('display')
					timeSlot.classList.remove('loading')
				}
			}
		}

		for (let dafContainer of document.querySelectorAll('[data-zfFind="DafYomi"]')) {
			if (dafContainer instanceof HTMLElement)
				this.renderDafYomi(dafContainer);
		}

		const seasonalRules = [
			this.jCal.tefilahRules().amidah.mechayehHametim,
			this.jCal.tefilahRules().amidah.mevarechHashanim
		];
		document.querySelectorAll('[data-zfReplace="SeasonalPrayers"]').forEach((seasonal) => seasonal.innerHTML = seasonalRules.filter(Boolean).join(" / "))
		
		this.shaahZmanits();
	}

	/**
	 * @param {HTMLElement} [dafContainer]
	 */
	renderDafYomi(dafContainer) {
		const daf = dafContainer.querySelector('[data-zfReplace="dafBavli"]');
		const dafYerushalmi = dafContainer.querySelector('[data-zfReplace="DafYerushalmi"]');

		if (this.jCal.getJewishYear() < 5684) {
			daf.innerHTML = "N/A. Daf Yomi (Bavli) was only created on Rosh Hashanah 5684 and continues onto this day"
		} else {
			const dafObject = KosherZmanim.YomiCalculator.getDafYomiBavli(this.jCal);
			daf.innerHTML =
				dafObject.getMasechta() + " " +
				numberToHebrew(dafObject.getDaf());
		}

		const dafYerushalmiObject = KosherZmanim.YerushalmiYomiCalculator.getDafYomiYerushalmi(this.jCal);
		if (!dafYerushalmiObject || dafYerushalmiObject.getDaf() == 0) {
			dafYerushalmi.innerHTML = "N/A";
		} else {
			dafYerushalmi.innerHTML = dafYerushalmiObject.getYerushalmiMasechta() + " " + numberToHebrew(dafYerushalmiObject.getDaf());
		}
	}

	shaahZmanits() {
		const hourFormatter = new Intl.DateTimeFormat(settings.language() == 'hb' ? 'he' : 'en', {
			timeStyle: "short",
			hourCycle: "h11",
			timeZone: "UTC"
		});

		const mgaTime = new Date(this.zmanFuncs.coreZC.getTemporalHour(this.zmanFuncs.getAlotHashachar(), this.zmanFuncs.getTzait72Zmanit()));
		document.querySelectorAll('[data-zfReplace="mgaShaahZmanit"]')
			.forEach(mgaLi => mgaLi.innerHTML = hourFormatter.format(mgaTime).split(" ")[0]);

		const graTime = new Date(this.zmanFuncs.coreZC.getShaahZmanisGra());
		document.querySelectorAll('[data-zfReplace="graShaahZmanit"]')
			.forEach(graLi => graLi.innerHTML = hourFormatter.format(graTime).split(" ")[0]);
	}

	birkathHalevanaCheck() {
		const dateObjs = {
			start: this.jCal.getTchilasZmanKidushLevana7Days(),
			end: this.jCal.getSofZmanKidushLevana15Days(),
			current: this.jCal.getDate()
		}

		if ([KosherZmanim.JewishCalendar.AV, KosherZmanim.JewishCalendar.TISHREI].includes(this.jCal.getJewishMonth())) {
			const monthCalc = new KosherZmanim.ZmanimCalendar(this.zmanFuncs.coreZC.getGeoLocation());
			monthCalc.setUseElevation(this.zmanFuncs.coreZC.isUseElevation())

			switch (this.jCal.getJewishMonth()) {
				case KosherZmanim.JewishCalendar.AV:
					const tishaBeav = this.jCal.clone();
					tishaBeav.setJewishDayOfMonth(9);
					if (tishaBeav.getDayOfWeek() == 7)
						tishaBeav.setJewishDayOfMonth(10);
	
					monthCalc.setDate(tishaBeav.getDate().toZonedDateTime(this.geoLocation.getTimeZone()));
					break;
				case KosherZmanim.JewishCalendar.TISHREI:
					const yomKippur = this.jCal.clone();
					yomKippur.setJewishDayOfMonth(10);
	
					monthCalc.setDate(yomKippur.getDate().toZonedDateTime(this.geoLocation.getTimeZone()));
					break;
			}

			dateObjs.start = (monthCalc.isUseElevation() ? monthCalc.getSunset() : monthCalc.getSeaLevelSunset());
		}



		return {
			current: compare(dateObjs.start.epochMilliseconds, dateObjs.current.toZonedDateTime(this.geoLocation.getTimeZone()).epochMilliseconds, dateObjs.end.epochMilliseconds),
			data: dateObjs
		}
	}

	setNextUpcomingZman() {
		/** @type {KosherZmanim.Temporal.ZonedDateTime[]} */
		const zmanim = [];
		const currentSelectedDate = this.zmanFuncs.coreZC.getDate();

		for (const time of [0, 1]) {
			this.changeDate(KosherZmanim.Temporal.Now.zonedDateTimeISO(this.geoLocation.getTimeZone()).add({ days: time }), true);
			zmanim.push(...Object.values(this.getZmanimInfo()).filter(obj => obj.display == 1).map(time => time.luxonObj));
		}

		this.changeDate(currentSelectedDate, true); //reset the date to the current date
		zmanim.sort((a,b) => a.epochMilliseconds - b.epochMilliseconds)
		this.nextUpcomingZman = zmanim.find(zman => KosherZmanim.Temporal.Now.zonedDateTimeISO(this.geoLocation.getTimeZone()).until(zman).total({ unit: "milliseconds" }) > 0)

		setTimeout(
			() => {this.setNextUpcomingZman(); this.updateZmanimList()},
			KosherZmanim.Temporal.Now.zonedDateTimeISO(this.geoLocation.getTimeZone()).until(this.nextUpcomingZman).total({ unit: "milliseconds" })
		);
	}

	/**
	 * @param {KosherZmanim.Temporal.ZonedDateTime} zman
	 */
	isNextUpcomingZman(zman) {
		return !(this.nextUpcomingZman == null || !(zman.epochMilliseconds == this.nextUpcomingZman.epochMilliseconds))
	};
}

/**
 * @param {number} num
 */
function numberToHebrew(num) {
	var buffer = [];
	if (num <= 0 || num >= 6000) return null; // only support 1-5999 for now, since that's all we need, but could be extended
	var let1000 = [" א'", " ב'", " ג'", " ד'", " ה'"];
	var let100 = ["ק", "ר", "ש", "ת"];
	var let10 = ["י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
	var let1 = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];

	if (num >= 100) {
		if (num >= 1000) {
			buffer.push(let1000[Math.floor(num) / 1000 - 1]);
			num %= 1000;
		}

		if (num < 500) {
			buffer.push(let100[Math.floor(num) / 100 - 1]);
		} else if (num < 900) {
			buffer.push("ת");
			buffer.push(let100[(Math.floor(num) - 400) / 100 - 1]);
		} else {
			buffer.push("תת");
			buffer.push(let100[(Math.floor(num) - 800) / 100 - 1]);
		}

		num %= 100;
	}
	switch (num) {
		// Avoid letter combinations from the Tetragrammaton
		case 16:
			buffer.push("טז");
			break;
		case 15:
			buffer.push("טו");
			break;
		default:
			if (num >= 10) {
				buffer.push(let10[Math.floor(num / 10) - 1]);
				num %= 10;
			}
			if (num > 0) {
				buffer.push(let1[Math.floor(num) - 1]);
			}
			break;
	}
	return buffer.join("");
}

/**
 * @param {number} a
 * @param {number} middle
 * @param {number} end
 */
function compare(a, middle, end, inclusive=true) {
	var min = Math.min.apply(Math, [a, end]),
	  max = Math.max.apply(Math, [a, end]);
	return inclusive ? middle >= min && middle <= max : middle > min && middle < max;
  };

if (isNaN(settings.location.lat()) && isNaN(settings.location.long())) {
	window.location.href = "/"
}

/** @type {[string, number, number, number, string]} */
// @ts-ignore
const glArgs = Object.values(settings.location).map(numberFunc => numberFunc())
const geoLocation = new KosherZmanim.GeoLocation(...glArgs);

const zmanimListUpdater2 = new zmanimListUpdater(geoLocation)

// @ts-ignore
window.zmanimListUpdater2 = zmanimListUpdater2;
// @ts-ignore
window.KosherZmanim = KosherZmanim;