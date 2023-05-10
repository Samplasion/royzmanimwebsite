import { DateTime } from '../luxon/index.d.ts';
import { ZmanimCalendar } from './ZmanimCalendar';
/**
 * <p>This class extends ZmanimCalendar and provides many more zmanim than available in the ZmanimCalendar. The basis for
 * most zmanim in this class are from the <em>sefer</em> <b><a href="http://hebrewbooks.org/9765">Yisroel Vehazmanim</a></b>
 * by <b><a href="https://en.wikipedia.org/wiki/Yisroel_Dovid_Harfenes">Rabbi Yisrael Dovid Harfenes</a></b>.
 * As an example of the number of different <em>zmanim</em> made available by this class, there are methods to return 14
 * different calculations for <em>alos</em> (dawn) and 25 for <em>tzais</em> available in this API. The real power of this
 * API is the ease in calculating <em>zmanim</em> that are not part of the library. The methods for <em>zmanim</em>
 * calculations not present in this class or it's superclass  {@link ZmanimCalendar} are contained in the
 * {@link AstronomicalCalendar}, the base class of the calendars in our API since they are generic methods for calculating
 * time based on degrees or time before or after {@link #getSunrise sunrise} and {@link #getSunset sunset} and are of interest
 * for calculation beyond <em>zmanim</em> calculations. Here are some examples.
 * <p>First create the Calendar for the location you would like to calculate:
 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 * String locationName = &quot;Lakewood, NJ&quot;;
 * double latitude = 40.0828; // Lakewood, NJ
 * double longitude = -74.2094; // Lakewood, NJ
 * double elevation = 20; // optional elevation correction in Meters
 * // the String parameter in getTimeZone() has to be a valid timezone listed in
 * // {@link java.util.TimeZone#getAvailableIDs()}
 * TimeZone timeZone = TimeZone.getTimeZone(&quot;America/New_York&quot;);
 * GeoLocation location = new GeoLocation(locationName, latitude, longitude, elevation, timeZone);
 * ComplexZmanimCalendar czc = new ComplexZmanimCalendar(location);
 * // Optionally set the date or it will default to today's date
 * czc.getCalendar().set(Calendar.MONTH, Calendar.FEBRUARY);
 * czc.getCalendar().set(Calendar.DAY_OF_MONTH, 8);</pre>
 *
 * <b>Note:</b> For locations such as Israel where the beginning and end of daylight savings time can fluctuate from
 * year to year, if your version of Java does not have an <a href=
 * "http://www.oracle.com/technetwork/java/javase/tzdata-versions-138805.html">up to date timezone database</a>, create a
 * {@link java.util.SimpleTimeZone} with the known start and end of DST.
 * To get <em>alos</em> calculated as 14&deg; below the horizon (as calculated in the calendars published in Montreal),
 * add {@link AstronomicalCalendar#GEOMETRIC_ZENITH} (90) to the 14&deg; offset to get the desired time:
 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 *  Date alos14 = czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 14);</pre>
 *
 * To get <em>mincha gedola</em> calculated based on the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern"
 * >Magen Avraham (MGA)</a></em> using a <em>shaah zmanis</em> based on the day starting
 * 16.1&deg; below the horizon (and ending 16.1&deg; after sunset) the following calculation can be used:

 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date minchaGedola = czc.getTimeOffset(czc.getAlos16point1Degrees(), czc.getShaahZmanis16Point1Degrees() * 6.5);</pre>
 * <p>
 * or even simpler using the included convenience methods
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date minchaGedola = czc.getMinchaGedola(czc.getAlos16point1Degrees(), czc.getShaahZmanis16Point1Degrees());</pre>
 *
 * A little more complex example would be calculating zmanim that rely on a <em>shaah zmanis</em> that is
 * not present in this library. While a drop more complex, it is still rather easy. An example would be to calculate
 * the <em><a href="https://en.wikipedia.org/wiki/Israel_Isserlein">Trumas Hadeshen</a>'s</em> <em>alos</em> to
 * <em>tzais</em> based <em>plag hamincha</em> as calculated in the Machzikei Hadass calendar in Manchester, England.
 * A number of this calendar's zmanim are calculated based on a day starting at <em>alos</em> of 12&deg; before sunrise
 * and ending at <em>tzais</em> of 7.083&deg; after sunset. Be aware that since the <em>alos</em> and <em>tzais</em>
 * do not use identical degree based offsets, this leads to <em>chatzos</em> being at a time other than the
 * {@link #getSunTransit() solar transit} (solar midday). To calculate this zman, use the following steps. Note that
 * <em>plag hamincha</em> is 10.75 hours after the start of the day, and the following steps are all that it takes.
 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date plag = czc.getPlagHamincha(czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 12),
 *        czc.getSunsetOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + ZENITH_7_POINT_083));</pre>
 *
 * Something a drop more challenging, but still simple, would be calculating a zman using the same "complex" offset day
 * used in the above mentioned Manchester calendar, but for a <em>shaos zmaniyos</em> based <em>zman</em> not not
 * supported by this library, such as calculating the point that one should be <em>makpid</em>
 * not to eat on <em>erev Shabbos</em> or <em>erev Yom Tov</em>. This is 9 <em>shaos zmaniyos</em> into the day.
 * <ol>
 *  <li>Calculate the <em>shaah zmanis</em> in milliseconds for this day</li>
 *  <li>Add 9 of these <em>shaos zmaniyos</em> to alos starting at 12&deg;</li>
 * </ol>
 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 * long shaahZmanis = czc.getTemporalHour(czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 12),
 *            czc.getSunsetOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + ZENITH_7_POINT_083));
 * Date sofZmanAchila = getTimeOffset(czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 12),
 *          shaahZmanis * 9);</pre>
 *
 * Calculating this <em>sof zman achila</em> according to the <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>
 * is simplicity itself.
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date sofZmanAchila = czc.getTimeOffset(czc.getSunrise(), czc.getShaahZmanisGra() * 9);</pre>
 *
 * <h2>Documentation from the {@link ZmanimCalendar} parent class</h2>
 * {@inheritDoc}
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2016
 */
export declare class ComplexZmanimCalendar extends ZmanimCalendar {
    /**
     * The zenith of 3.7&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> that <em>tzais</em> is the
     * time it takes to walk 3/4 of a <em>Mil</em> at 18 minutes a <em>Mil</em>, or 13.5 minutes after sunset. The sun
     * is 3.7&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} at this time in Jerusalem on March 16, about 4 days
     * before the equinox, the day that a solar hour is 60 minutes.
     *
     * @see #getTzaisGeonim3Point7Degrees()
     */
    protected static readonly ZENITH_3_POINT_7: number;
    /**
     * The zenith of 3.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> that <em>tzais</em> is the
     * time it takes to walk 3/4 of a <em>Mil</em> at 18 minutes a <em>Mil</em>, or 13.5 minutes after sunset. The sun
     * is 3.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} at this time in Jerusalem on March 16, about 4 days
     * before the equinox, the day that a solar hour is 60 minutes.
     *
     * @see #getTzaisGeonim3Point8Degrees()
     */
    protected static readonly ZENITH_3_POINT_8: number;
    /**
     * The zenith of 5.95&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun 24 minutes after sunset in Jerusalem on March 16, about 4 days before the equinox, the day that a solar
     * hour is 60 minutes, which calculates to 5.95&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getTzaisGeonim5Point95Degrees()
     */
    protected static readonly ZENITH_5_POINT_95: number;
    /**
     * The zenith of 7.083&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This is often referred to as
     * 7&deg;5' or 7&deg; and 5 minutes. This calculation is used for calculating <em>alos</em> (dawn) and
     * <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of the sun 30
     * minutes after sunset in Jerusalem on March 16, about 4 days before the equinox, the day that a solar hour is 60
     * minutes, which calculates to 7.0833333&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}. This is time some
     * opinions consider dark enough for 3 stars to be visible. This is the opinion of the
     * <em><a href="http://www.hebrewbooks.org/1053">Sh"Ut Melamed Leho'il</a></em>, <em>Sh"Ut Bnei Tziyon</em>, <em>Tenuvas
     * Sadeh</em> and very close to the time of the <em><a href="http://www.hebrewbooks.org/22044">Mekor Chesed</a></em> of
     * the <em>Sefer chasidim</em>. TODO Confirm the proper source.
     *
     * @see #getTzaisGeonim7Point083Degrees()
     * @see #getBainHasmashosRT13Point5MinutesBefore7Point083Degrees()
     */
    protected static readonly ZENITH_7_POINT_083: number;
    /**
     * The zenith of 10.2&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun
     * 45 minutes before {@link #getSunrise sunrise} in Jerusalem on March 16, about 4 days before the equinox, the day
     * that a solar hour is 60 minutes which calculates to 10.2&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getMisheyakir10Point2Degrees()
     */
    protected static readonly ZENITH_10_POINT_2: number;
    /**
     * The zenith of 11&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun
     * 48 minutes before {@link #getSunrise sunrise} in Jerusalem on March 16, about 4 days before the equinox, the day
     * that a solar hour is 60 minutes which calculates to 11&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @see #getMisheyakir11Degrees()
     */
    protected static readonly ZENITH_11_DEGREES: number;
    /**
     * The zenith of 11.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun
     * 52 minutes before {@link #getSunrise sunrise} in Jerusalem on March 16, about 4 days before the equinox, the day
     * that a solar hour is 60 minutes which calculates to 11.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @see #getMisheyakir11Point5Degrees()
     */
    protected static readonly ZENITH_11_POINT_5: number;
    /**
     * The zenith of 13.24&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>Rabbeinu Tam's bain hashmashos</em> according to some opinions.
     * NOTE: See comments on {@link #getBainHasmashosRT13Point24Degrees} for additional details about the degrees.
     *
     * @see #getBainHasmashosRT13Point24Degrees
     *
     */
    protected static readonly ZENITH_13_POINT_24: number;
    /**
     * The zenith of 19&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> according to some opinions.
     *
     * @see #getAlos19Degrees()
     * @see #getAlos18Degrees()
     */
    protected static readonly ZENITH_19_DEGREES: number;
    /**
     * The zenith of 19.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> (dawn) and <em>tzais</em> (nightfall) according to some opinions. This calculation is
     * based on the position of the sun 90 minutes after sunset in Jerusalem on March 16, about 4 days before the
     * equinox, the day that a solar hour is 60 minutes which calculates to 19.8&deg; below {@link #GEOMETRIC_ZENITH
       * geometric zenith}
     *
     * @see #getTzais19Point8Degrees()
     * @see #getAlos19Point8Degrees()
     * @see #getAlos90()
     * @see #getTzais90()
     */
    protected static readonly ZENITH_19_POINT_8: number;
    /**
     * The zenith of 26&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> (dawn) and <em>tzais</em> (nightfall) according to some opinions. This calculation is
     * based on the position of the sun {@link #getAlos120() 120 minutes} after sunset in Jerusalem on March 16, about 4
     * days before the equinox, the day that a solar hour is 60 minutes which calculates to 26&deg; below
     * {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @see #getAlos26Degrees()
     * @see #getTzais26Degrees()
     * @see #getAlos120()
     * @see #getTzais120()
     */
    protected static readonly ZENITH_26_DEGREES: number;
    /**
     * The zenith of 4.37&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun {@link #getTzaisGeonim4Point37Degrees() 16 7/8 minutes} after sunset (3/4 of a 22.5 minute Mil) in
     * Jerusalem on March 16, about 4 days before the equinox, the day that a solar hour is 60 minutes which calculates
     * to 4.37&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @see #getTzaisGeonim4Point37Degrees()
     */
    protected static readonly ZENITH_4_POINT_37: number;
    /**
     * The zenith of 4.61&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun {@link #getTzaisGeonim4Point37Degrees() 18 minutes} after sunset (3/4 of a 24 minute Mil) in Jerusalem on
     * March 16, about 4 days before the equinox, the day that a solar hour is 60 minutes which calculates to 4.61&deg;
     * below {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @see #getTzaisGeonim4Point61Degrees()
     */
    protected static readonly ZENITH_4_POINT_61: number;
    /**
     * The zenith of 5.88&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). TODO add more documentation
     * @see #getTzaisGeonim4Point8Degrees()
     */
    protected static readonly ZENITH_4_POINT_8: number;
    /**
     * The zenith of 3.65&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun {@link #getTzaisGeonim3Point65Degrees() 13.5 minutes} after sunset (3/4 of an 18 minute Mil) in Jerusalem
     * on March 16, about 4 days before the equinox, the day that a solar hour is 60 minutes which calculates to
     * 3.65&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @see #getTzaisGeonim3Point65Degrees()
     */
    protected static readonly ZENITH_3_POINT_65: number;
    /**
     * The zenith of 3.676&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). TODO add more documentation
     */
    protected static readonly ZENITH_3_POINT_676: number;
    /**
     * The zenith of 5.88&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). TODO add more documentation
     */
    protected static readonly ZENITH_5_POINT_88: number;
    /**
     * The zenith of 1.583&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>netz amiti</em> (sunrise) and <em>shkiah amiti</em> (sunset) based on the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a></em>.
     *
     * @see #getSunriseBaalHatanya()
     * @see #getSunsetBaalHatanya()
     */
    protected static readonly ZENITH_1_POINT_583: number;
    /**
     * The zenith of 16.9&deg; below geometric zenith (90&deg;). This calculation is used for determining <em>alos</em>
     * (dawn) based on the opinion of the <em>Baal Hatanya</em>. It is based on the calculation that the time between dawn
     * and <em>netz amiti</em> (sunrise) is 72 minutes, the time that is takes to walk 4 <em>mil</em> at 18 minutes
     * a mil (<em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others). The sun's position at 72
     * minutes before {@link #getSunriseBaalHatanya <em>netz amiti</em> (sunrise)} in Jerusalem on the equinox (on March 16,
     * about 4 days before the astronomical equinox, the day that a solar hour is 60 minutes) is 16.9&deg; below
     * {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getAlosBaalHatanya()
     */
    protected static readonly ZENITH_16_POINT_9: number;
    /**
     * The zenith of 6&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for calculating
     * <em>tzais</em> (nightfall) based on the opinion of the <em>Baal Hatanya</em>. This calculation is based on the position
     * of the sun 24 minutes after {@link #getSunset sunset} in Jerusalem on March 16, about 4 days before the equinox, the day
     * that a solar hour is 60 minutes, which is 6&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getTzaisBaalHatanya()
     */
    protected static readonly ZENITH_6_DEGREES: number;
    /**
     * calculating <em>tzais</em> (nightfall) according to some opinions. This is based on the calculations of <a href=
     * "https://en.wikipedia.org/wiki/Yechiel_Michel_Tucazinsky">Rabbi Yechiel Michel Tucazinsky</a> of the position of
     * the sun no later than {@link #getTzaisGeonim6Point45Degrees() 31 minutes} after sunset in Jerusalem, and at the
     * height of the summer solstice, this zman is 28 minutes after<em>shkiah</em>. This computes to 6.45&deg; below
     * {@link #GEOMETRIC_ZENITH geometric zenith}. This calculation is found in the <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=50536&st=&pgnum=51">Birur Halacha Yoreh Deah 262</a> it the commonly used
     * <em>zman</em> in Israel. It should be noted that this differs from the 6.1&deg;/6.2&deg; calculation for Rabbi
     * Tucazinsky's time as calculated by the Hazmanim Bahalacha Vol II chapter 50:7 (page 515).
     *
     * @see #getTzaisGeonim6Point45Degrees()
     */
    protected static readonly ZENITH_6_POINT_45: number;
    /**
     * The zenith of 7.65&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions.
     *
     * @see #getMisheyakir7Point65Degrees()
     */
    protected static readonly ZENITH_7_POINT_65: number;
    /**
     * The zenith of 7.67&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> according to some opinions.
     *
     * @see #getMisheyakir7Point65Degrees()
     */
    protected static readonly ZENITH_7_POINT_67: number;
    /**
     * The zenith of 9.3&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions.
     *
     * @see #getTzaisGeonim9Point3Degrees()
     */
    protected static readonly ZENITH_9_POINT_3: number;
    /**
     * The zenith of 9.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions.
     *
     * @see #getMisheyakir9Point5Degrees()
     */
    protected static readonly ZENITH_9_POINT_5: number;
    /**
     * The zenith of 9.75&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> (dawn) and <em>tzais</em> (nightfall) according to some opinions.
     *
     * @see #getTzaisGeonim9Point75Degrees()
     */
    protected static readonly ZENITH_9_POINT_75: number;
    /**
     * The zenith of 2.03&deg; above {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating the start of <em>bain hashmashos</em> (twilight) of 13.5 minutes before sunset converted to degrees
     * according to the Yereim. As is traditional with degrees below the horizon, this is calculated without refraction
     * and from the center of the sun. It would be 0.833&deg; less without this.
     *
     * @see #getBainHasmashosYereim2Point1Degrees()
     */
    protected static readonly ZENITH_MINUS_2_POINT_1: number;
    /**
     * The zenith of 2.75&deg; above {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating the start of <em>bain hashmashos</em> (twilight) of 16.875 minutes before sunset converted to degrees
     * according to the Yereim. As is traditional with degrees below the horizon, this is calculated without refraction
     * and from the center of the sun. It would be 0.833&deg; less without this.
     *
     * @see #getBainHasmashosYereim2Point8Degrees()
     */
    protected static readonly ZENITH_MINUS_2_POINT_8: number;
    /**
     * The zenith of 2.99&deg; above {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating the start of <em>bain hashmashos</em> (twilight) of 18 minutes before sunset converted to degrees
     * according to the Yereim. As is traditional with degrees below the horizon, this is calculated without refraction
     * and from the center of the sun. It would be 0.833&deg; less without this.
     *
     * @see #getBainHasmashosYereim3Point05Degrees()
     */
    protected static readonly ZENITH_MINUS_3_POINT_05: number;
    /**
     * The offset in minutes (defaults to 40) after sunset used for <em>tzeit</em> for Ateret Torah calculations.
     * @see #getTzaisAteretTorah()
     * @see #getAteretTorahSunsetOffset()
     * @see #setAteretTorahSunsetOffset(double)
     */
    private ateretTorahSunsetOffset;
    /**
     * Default constructor will set a default {@link GeoLocation#GeoLocation()}, a default
     * {@link AstronomicalCalculator#getDefault() AstronomicalCalculator} and default the calendar to the current date.
     *
     * @see AstronomicalCalendar#AstronomicalCalendar()
     */
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a 19.8&deg; dip. This calculation
     * divides the day based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> that the day runs from dawn to dusk. Dawn for this calculation is
     * when the sun is 19.8&deg; below the eastern geometric horizon before sunrise. Dusk for this is when the sun is
     * 19.8&deg; below the western geometric horizon after sunset. This day is split into 12 equal parts with each part
     * being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis19Point8Degrees(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a 18&deg; dip. This calculation divides
     * the day based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> that the day runs from dawn to dusk. Dawn for this calculation is when
     * the sun is 18&deg; below the eastern geometric horizon before sunrise. Dusk for this is when the sun is 18&deg;
     * below the western geometric horizon after sunset. This day is split into 12 equal parts with each part being a
     * <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis18Degrees(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 26&deg;. This calculation
     * divides the day based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> that the day runs from dawn to dusk. Dawn for this calculation is
     * when the sun is {@link #getAlos26Degrees() 26&deg;} below the eastern geometric horizon before sunrise. Dusk for
     * this is when the sun is {@link #getTzais26Degrees() 26&deg;} below the western geometric horizon after sunset.
     * This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis26Degrees(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 16.1&deg;. This calculation
     * divides the day based on the opinion that the day runs from dawn to dusk. Dawn for this calculation is when the
     * sun is 16.1&deg; below the eastern geometric horizon before sunrise and dusk is when the sun is 16.1&deg; below
     * the western geometric horizon after sunset. This day is split into 12 equal parts with each part being a
     * <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getAlos16Point1Degrees()
     * @see #getTzais16Point1Degrees()
     * @see #getSofZmanShmaMGA16Point1Degrees()
     * @see #getSofZmanTfilaMGA16Point1Degrees()
     * @see #getMinchaGedola16Point1Degrees()
     * @see #getMinchaKetana16Point1Degrees()
     * @see #getPlagHamincha16Point1Degrees()
     */
    getShaahZmanis16Point1Degrees(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (solar hour) according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em>. This calculation
     * divides the day based on the opinion of the <em>MGA</em> that the day runs from dawn to dusk. Dawn for this
     * calculation is 60 minutes before sunrise and dusk is 60 minutes after sunset. This day is split into 12 equal
     * parts with each part being a <em>shaah zmanis</em>. Alternate methods of calculating a <em>shaah zmanis</em> are
     * available in the subclass {@link ComplexZmanimCalendar}
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis60Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (solar hour) according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em>. This calculation
     * divides the day based on the opinion of the <em>MGA</em> that the day runs from dawn to dusk. Dawn for this
     * calculation is 72 minutes before sunrise and dusk is 72 minutes after sunset. This day is split into 12 equal
     * parts with each part being a <em>shaah zmanis</em>. Alternate methods of calculating a <em>shaah zmanis</em> are
     * available in the subclass {@link ComplexZmanimCalendar}
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis72Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on
     * <em>alos</em> being {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}.
     * This calculation divides the day based on the opinion of the <em>MGA</em> that the day runs from dawn to dusk.
     * Dawn for this calculation is 72 minutes <em>zmaniyos</em> before sunrise and dusk is 72 minutes <em>zmaniyos</em>
     * after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>. This is
     * identical to 1/10th of the day from {@link #getSunrise() sunrise} to {@link #getSunset() sunset}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getAlos72Zmanis()
     * @see #getTzais72Zmanis()
     */
    getShaahZmanis72MinutesZmanis(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 90 minutes. This calculation
     * divides the day based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> that the day runs from dawn to dusk. Dawn for this calculation is
     * 90 minutes before sunrise and dusk is 90 minutes after sunset. This day is split into 12 equal parts with each
     * part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis90Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on
     * <em>alos</em> being {@link #getAlos90Zmanis() 90} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}.
     * This calculation divides the day based on the opinion of the <em>MGA</em> that the day runs from dawn to dusk.
     * Dawn for this calculation is 90 minutes <em>zmaniyos</em> before sunrise and dusk is 90 minutes <em>zmaniyos</em>
     * after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>. This is
     * identical to 1/8th of the day from {@link #getSunrise() sunrise} to {@link #getSunset() sunset}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getAlos90Zmanis()
     * @see #getTzais90Zmanis()
     */
    getShaahZmanis90MinutesZmanis(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on
     * <em>alos</em> being {@link #getAlos96Zmanis() 96} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}.
     * This calculation divides the day based on the opinion of the <em>MGA</em> that the day runs from dawn to dusk.
     * Dawn for this calculation is 96 minutes <em>zmaniyos</em> before sunrise and dusk is 96 minutes <em>zmaniyos</em>
     * after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>. This is
     * identical to 1/7.5th of the day from {@link #getSunrise() sunrise} to {@link #getSunset() sunset}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getAlos96Zmanis()
     * @see #getTzais96Zmanis()
     */
    getShaahZmanis96MinutesZmanis(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the
     * <em>Chacham Yosef Harari-Raful</em> of <em>Yeshivat Ateret Torah</em> calculated with <em>alos</em> being 1/10th
     * of sunrise to sunset day, or {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em> of such a day before
     * {@link #getSunrise() sunrise}, and <em>tzais</em> is usually calculated as {@link #getTzaisAteretTorah() 40
       * minutes} (configurable to any offset via {@link #setAteretTorahSunsetOffset(double)}) after {@link #getSunset()
       * sunset}. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>. Note that with this
     * system, <em>chatzos</em> (mid-day) will not be the point that the sun is {@link #getSunTransit() halfway across
       * the sky}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getAlos72Zmanis()
     * @see #getTzaisAteretTorah()
     * @see #getAteretTorahSunsetOffset()
     * @see #setAteretTorahSunsetOffset(double)
     */
    getShaahZmanisAteretTorah(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 96 minutes. This calculation
     * divides the day based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> that the day runs from dawn to dusk. Dawn for this calculation is
     * 96 minutes before sunrise and dusk is 96 minutes after sunset. This day is split into 12 equal parts with each
     * part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis96Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 120 minutes. This calculation
     * divides the day based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> that the day runs from dawn to dusk. Dawn for this calculation is
     * 120 minutes before sunrise and dusk is 120 minutes after sunset. This day is split into 12 equal parts with each
     * part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis120Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on
     * <em>alos</em> being {@link #getAlos120Zmanis() 120} minutes <em>zmaniyos</em> before {@link #getSunrise()
       * sunrise}. This calculation divides the day based on the opinion of the <em>MGA</em> that the day runs from dawn
     * to dusk. Dawn for this calculation is 120 minutes <em>zmaniyos</em> before sunrise and dusk is 120 minutes
     * <em>zmaniyos</em> after sunset. This day is split into 12 equal parts with each part being a
     * <em>shaah zmanis</em>. This is identical to 1/6th of the day from {@link #getSunrise() sunrise} to
     * {@link #getSunset() sunset}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getAlos120Zmanis()
     * @see #getTzais120Zmanis()
     */
    getShaahZmanis120MinutesZmanis(): number;
    /**
     * This method returns the time of <em>plag hamincha</em> based on sunrise being 120 minutes <em>zmaniyos</em>
     * or 1/6th of the day before sunrise. This is calculated as 10.75 hours after {@link #getAlos120Zmanis() dawn}.
     * The formula used is 10.75 * {@link #getShaahZmanis120MinutesZmanis()} after {@link #getAlos120Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis120MinutesZmanis()
     */
    getPlagHamincha120MinutesZmanis(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> according to the <em>Magen Avraham</em> with the day
     * starting 120 minutes before sunrise and ending 120 minutes after sunset. This is calculated as 10.75 hours after
     * {@link #getAlos120() dawn 120 minutes}. The formula used is
     * 10.75 {@link #getShaahZmanis120Minutes()} after {@link #getAlos120()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis120Minutes()
     */
    getPlagHamincha120Minutes(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated as 60 minutes before sunrise. This is the time to walk the
     * distance of 4 <em>Mil</em> at 15 minutes a <em>Mil</em>. This seems to be the opinion of the <em><a href=
     * "https://en.wikipedia.org/wiki/Yair_Bacharach">Chavas Yair</a></em> in the <em>Mekor Chaim, Orach Chaim Ch.
     * 90</em>, though  the Mekor chaim in Ch. 58 and in the <em><a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=45193&amp;pgnum=214">Chut Hashani Cha 97</a></em> states that
     * a a person walks 3 and a 1/3 <em>mil</em> in an hour, or an 18 minute <em>mil</em>. Also see the <a href=
     * "https://he.wikipedia.org/wiki/%D7%9E%D7%9C%D7%9B%D7%99%D7%90%D7%9C_%D7%A6%D7%91%D7%99_%D7%98%D7%A0%D7%A0%D7%91%D7%95%D7%99%D7%9D"
     * >Divrei Malkiel</a> <a href="http://www.hebrewbooks.org/pdfpager.aspx?req=803&amp;pgnum=33">Vol. 4, Ch. 20, page 34</a>) who
     * mentions the 15 minute <em>mil</em> lechumra by baking matzos. Also see the <a href=
     * "https://en.wikipedia.org/wiki/Joseph_Colon_Trabotto">Maharik</a> <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=1142&amp;pgnum=216">Ch. 173</a> where the questioner quoting the
     * <a href="https://en.wikipedia.org/wiki/Eliezer_ben_Nathan">Ra'avan</a> is of the opinion that the time to walk a
     * <em>mil</em> is 15 minutes (5 <em>mil</em> in a little over an hour). There are many who believe that there is a
     * <em>ta'us sofer</em> (scribe's error) in the Ra'avan, and it should 4 <em>mil</em> in a little over an hour, or an
     * 18 minute <em>mil</em>. Time based offset calculations are based on the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Rishonim">Rishonim</a></em> who stated that the time of the <em>neshef</em>
     * (time between dawn and sunrise) does not vary by the time of year or location but purely depends on the time it takes to
     * walk the distance of 4* <em>mil</em>. {@link #getTzaisGeonim9Point75Degrees()} is a related <em>zman</em> that is a
     * degree based calculation based on 60 minutes.
     *
     * TODO: apply documentation to Tzais once reviewed.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getTzaisGeonim9Point75Degrees()
     */
    getAlos60(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated using 72 minutes <em>zmaniyos</em> or 1/10th of the day before
     * sunrise. This is based on an 18 minute <em>Mil</em> so the time for 4 <em>Mil</em> is 72 minutes which is 1/10th
     * of a day (12 * 60 = 720) based on the a day being from {@link #getSeaLevelSunrise() sea level sunrise} to
     * {@link #getSeaLevelSunrise sea level sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset}
     * (depending on the {@link #isUseElevation()} setting).
     * The actual calculation is {@link #getSeaLevelSunrise()}- ( {@link #getShaahZmanisGra()} * 1.2). This calculation
     * is used in the calendars published by <em><a href=
     * "https://en.wikipedia.org/wiki/Central_Rabbinical_Congress">Hisachdus Harabanim D'Artzos Habris Ve'Canada</a></em>
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getShaahZmanisGra()
     */
    getAlos72Zmanis(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated using 96 minutes before before {@link #getSunrise() sunrise} or
     * {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link #isUseElevation()} setting) that is based
     * on the time to walk the distance of 4 <em>Mil</em> at 24 minutes a <em>Mil</em>. Time based offset
     * calculations for <em>alos</em> are based on the opinion of the <em><a href="https://en.wikipedia.org/wiki/Rishonim"
     * >Rishonim</a></em> who stated that the time of the <em>Neshef</em> (time between dawn and sunrise) does not vary
     * by the time of year or location but purely depends on the time it takes to walk the distance of 4 <em>Mil</em>.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getAlos96(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated using 90 minutes <em>zmaniyos</em> or 1/8th of the day before
     * {@link #getSunrise() sunrise} or {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link
      * #isUseElevation()} setting). This is based on a 22.5 minute <em>Mil</em> so the time for 4 <em>Mil</em> is 90
     * minutes which is 1/8th of a day (12 * 60) / 8 = 90
     * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
       * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}.
     * The actual calculation used is {@link #getSunrise()} - ( {@link #getShaahZmanisGra()} * 1.5).
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getShaahZmanisGra()
     */
    getAlos90Zmanis(): DateTime | null;
    /**
     * This method returns <em>alos</em> (dawn) calculated using 96 minutes <em>zmaniyos</em> or 1/7.5th of the day before
     * {@link #getSunrise() sunrise} or {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link
      * #isUseElevation()} setting). This is based on a 24 minute <em>Mil</em> so the time for 4 <em>Mil</em> is 96
     * minutes which is 1/7.5th of a day (12 * 60 / 7.5 = 96).
     * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
       * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}.
     * The actual calculation used is {@link #getSunrise()} - ( {@link #getShaahZmanisGra()} * 1.6).
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getShaahZmanisGra()
     */
    getAlos96Zmanis(): DateTime | null;
    /**
     * offset calculations for <em>alos</em> are based on the opinion of the <em><a href=
     * "https://en.wikipedia.org/wiki/Rishonim">Rishonim</a></em> who stated that the time of the <em>Neshef</em>
     * (time between dawn and sunrise) does not vary by the time of year or location but purely depends on the time it
     * takes to walk the distance of 4 <em>Mil</em>.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getAlos90(): DateTime | null;
    /**
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Rishonim">Rishonim</a></em> who stated that the time
     * of the <em>Neshef</em> (time between dawn and sunrise) does not vary by the time of year or location but purely
     * depends on the time it takes to walk the distance of 5
     * <em>Mil</em>(<em>Ula</em>).
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getAlos120(): DateTime | null;
    /**
     * This method returns <em>alos</em> (dawn) calculated using 120 minutes <em>zmaniyos</em> or 1/6th of the day before
     * {@link #getSunrise() sunrise} or {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link
      * #isUseElevation()} setting). This is based on a 24 minute <em>Mil</em> so the time for 5 <em>Mil</em> is 120
     * minutes which is 1/6th of a day (12 * 60 / 6 = 120).
     * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
     * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}.
     * The actual calculation used is {@link #getSunrise()} - ( {@link #getShaahZmanisGra()} * 2).
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getShaahZmanisGra()
     */
    getAlos120Zmanis(): DateTime | null;
    /**
     * A method to return <em>alos</em> (dawn) calculated when the sun is {@link #ZENITH_26_DEGREES 26&deg;} below the
     * eastern geometric horizon before sunrise. This calculation is based on the same calculation of
     * {@link #getAlos120() 120 minutes} but uses a degree based calculation instead of 120 exact minutes. This
     * calculation is based on the position of the sun 120 minutes before sunrise in Jerusalem during the equinox (on March
     * 16, about 4 days before the astronomical equinox, the day that a solar hour is 60 minutes) which calculates to 26&deg;
     * below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @return the <code>Date</code> representing <em>alos</em>. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_26_DEGREES
     * @see #getAlos120()
     * @see #getTzais120()
     */
    getAlos26Degrees(): DateTime | null;
    /**
     * A method to return <em>alos</em> (dawn) calculated when the sun is {@link #ASTRONOMICAL_ZENITH 18&deg;} below the
     * eastern geometric horizon before sunrise.
     *
     * @return the <code>Date</code> representing <em>alos</em>. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ASTRONOMICAL_ZENITH
     */
    getAlos18Degrees(): DateTime | null;
    /**
     * A method to return <em>alos</em> (dawn) calculated when the sun is {@link #ZENITH_19_DEGREES 19&deg;} below the
     * eastern geometric horizon before sunrise. This is the <em><a href="https://en.wikipedia.org/wiki/Maimonides"
     * >Rambam</a></em>'s alos according to Rabbi Moshe Kosower's <a href=
     * "http://www.worldcat.org/oclc/145454098">Maaglei Tzedek</a>, page 88, <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=33464&amp;pgnum=13">Ayeles Hashachar Vol. I, page 12</a>, <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=55960&amp;pgnum=258">Yom Valayla Shel Torah, Ch. 34, p. 222</a> and
     * Rabbi Yaakov Shakow's <a href="http://www.worldcat.org/oclc/1043573513">Luach Ikvei Hayom</a>.
     *
     * @return the <code>Date</code> representing <em>alos</em>. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ASTRONOMICAL_ZENITH
     */
    getAlos19Degrees(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated when the sun is {@link #ZENITH_19_POINT_8 19.8&deg;} below the
     * eastern geometric horizon before sunrise. This calculation is based on the same calculation of
     * {@link #getAlos90() 90 minutes} but uses a degree based calculation instead of 90 exact minutes. This calculation
     * is based on the position of the sun 90 minutes before sunrise in Jerusalem during the equinox (on March 16,
     * about 4 days before the astronomical equinox, the day that a solar hour is 60 minutes) which calculates to
     * 19.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @return the <code>Date</code> representing <em>alos</em>. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_19_POINT_8
     * @see #getAlos90()
     */
    getAlos19Point8Degrees(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated when the sun is {@link #ZENITH_16_POINT_1 16.1&deg;} below the
     * eastern geometric horizon before sunrise. This calculation is based on the same calculation of
     * {@link #getAlos72() 72 minutes} but uses a degree based calculation instead of 72 exact minutes. This calculation
     * is based on the position of the sun 72 minutes before sunrise in Jerusalem during the equinox (on March 16,
     * about 4 days before the astronomical equinox, the day that a solar hour is 60 minutes) which calculates to
     * 16.1&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @return the <code>Date</code> representing <em>alos</em>. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_16_POINT_1
     * @see #getAlos72()
     */
    getAlos16Point1Degrees(): DateTime | null;
    /**
     * This method returns <em>misheyakir</em> based on the position of the sun when it is {@link #ZENITH_11_DEGREES
     * 11.5&deg;} below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for calculating
     * <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun 52 minutes
     * before {@link #getSunrise sunrise} in Jerusalem during the equinox (on March 16, about 4 days before the
     * astronomical equinox, the day that a solar hour is 60 minutes) which calculates to 11.5&deg; below
     * {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @return the <code>Date</code> of <em>misheyakir</em>. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may
     *         not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_11_POINT_5
     */
    getMisheyakir11Point5Degrees(): DateTime | null;
    /**
     * This method returns <em>misheyakir</em> based on the position of the sun when it is {@link #ZENITH_11_DEGREES
     * 11&deg;} below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for calculating
     * <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun 48 minutes
     * before {@link #getSunrise sunrise} in Jerusalem during the equinox (on March 16, about 4 days before the
     * astronomical equinox, the day that a solar hour is 60 minutes) which calculates to 11&deg; below
     * {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @return If the calculation can't be computed such as northern and southern locations even south of the Arctic
     *         Circle and north of the Antarctic Circle where the sun may not reach low enough below the horizon for
     *         this calculation, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_11_DEGREES
     */
    getMisheyakir11Degrees(): DateTime | null;
    /**
     * This method returns <em>misheyakir</em> based on the position of the sun when it is {@link #ZENITH_10_POINT_2
     * 10.2&deg;} below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for calculating
     * <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun 45 minutes
     * before {@link #getSunrise sunrise} in Jerusalem during the equinox (on March 16, about 4 days before the
     * astronomical equinox, the day that a solar hour is 60 minutes) which calculates to 10.2&deg; below
     * {@link #GEOMETRIC_ZENITH geometric zenith}
     *
     * @return the <code>Date</code> of <em>misheyakir</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_10_POINT_2
     */
    getMisheyakir10Point2Degrees(): DateTime | null;
    /**
     * This method returns <em>misheyakir</em> based on the position of the sun when it is {@link #ZENITH_7_POINT_65
     * 7.65&deg;} below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). The degrees are based on a 35/36 minute zman
     * during the equinox (on March 16, about 4 days before the astronomical equinox, the day that a solar hour is 60
     * minutes) when the <em>neshef</em> (twilight) is the shortest. This time is based on <a href=
     * "https://en.wikipedia.org/wiki/Moshe_Feinstein">Rabbi Moshe Feinstein</a> who writes in <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=14677&amp;pgnum=7">Ohr Hachaim Vol. 4, Ch. 6</a>)
     * that misheyakir in New York is 35-40 minutes before sunset, something that is a drop less than 8&deg;.
     * <a href="https://en.wikipedia.org/wiki/Yisroel_Taplin">Rabbi Yisroel Taplin</a> in <a href=
     * "http://www.worldcat.org/oclc/889556744">Zmanei Yisrael</a> (page 117) notes that <a href=
     * "https://en.wikipedia.org/wiki/Yaakov_Kamenetsky">Rabbi Yaakov Kamenetsky</a> stated that it is not less than 36
     * minutes before sunrise (maybe it is 40 minutes). Sefer Yisrael Vehazmanim (p. 7) quotes the Tamar Yifrach
     * in the name of the <a href="https://en.wikipedia.org/wiki/Joel_Teitelbaum">Satmar Rov</a> that one should be stringent
     * not consider misheyakir before 36 minutes. This is also the accepted <a href="https://en.wikipedia.org/wiki/Minhag">minhag</a>
     * in <a href="https://en.wikipedia.org/wiki/Lakewood_Township,_New_Jersey">Lakewood</a> that is used in the <a href=
     * "https://en.wikipedia.org/wiki/Beth_Medrash_Govoha">Yeshiva</a>. This follows the opinion of <a href=
     * "https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a> who provided the time of 35/36 minutes,
     * but did not provide a degree based time. Since this zman depends on the level of light, Rabbi Yaakov Shakow presented
     * this degree based calculations to Rabbi Kamenetsky who agreed to them.
     *
     * @return the <code>Date</code> of <em>misheyakir</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_7_POINT_65
     * @see #getMisheyakir9Point5Degrees()
     */
    getMisheyakir7Point65Degrees(): DateTime | null;
    /**
     * This method returns <em>misheyakir</em> based on the position of the sun when it is {@link #ZENITH_9_POINT_5
       * 9.5&deg;} below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is based on Rabbi Dovid Kronglass's
     * Calculation of 45 minutes in Baltimore as mentioned in <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=20287&amp;pgnum=29">Divrei Chachamim No. 24</a> brought down by the <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=50535&amp;pgnum=87">Birur Halacha, Tinyana, Ch. 18</a>. This calculates to
     * 9.5&deg;. Also see <a href="https://en.wikipedia.org/wiki/Jacob_Isaac_Neiman">Rabbi Yaakov Yitzchok Neiman</a> in Kovetz
     * Eitz Chaim Vol. 9, p. 202 that the Vyaan Yosef did not want to rely on times earlier than 45 minutes in New York. This
     * <em>zman</em> is also used in the calendars published by Rabbi Hershel Edelstein. As mentioned in the <em>Yisroel
     * Vehazmanim</em>,  Rabbi Edelstein who was given the 45 minute zman by Rabbi Bick. The calendars published by the
     * <em><a href="https://en.wikipedia.org/wiki/Mizrahi_Jews">Edot Hamizrach</a></em> communities also use this zman. This also
     * follows the opinion of <a href="https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a> who provided
     * the time of 36 and 45 minutes, but did not provide a degree based time. Since this zman depends on the level of light,
     * Rabbi Yaakov Shakow presented these degree based times to Rabbi Shmuel Kamenetsky who agreed to them.
     *
     * @return the <code>Date</code> of <em>misheyakir</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_9_POINT_5
     * @see #getMisheyakir7Point65Degrees()
     */
    getMisheyakir9Point5Degrees(): DateTime | null;
    /**
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based
     * on <em>alos</em> being {@link #getAlos19Point8Degrees() 19.8&deg;} before {@link #getSunrise() sunrise}. This
     * time is 3 <em>{@link #getShaahZmanis19Point8Degrees() shaos zmaniyos}</em> (solar hours) after {@link
      * #getAlos19Point8Degrees() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from dawn to
     * nightfall with both being 19.8&deg; below sunrise or sunset. This returns the time of 3 *
     * {@link #getShaahZmanis19Point8Degrees()} after {@link #getAlos19Point8Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis19Point8Degrees()
     * @see #getAlos19Point8Degrees()
     */
    getSofZmanShmaMGA19Point8Degrees(): DateTime | null;
    /**
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based
     * on <em>alos</em> being {@link #getAlos16Point1Degrees() 16.1&deg;} before {@link #getSunrise() sunrise}. This time
     * is 3 <em>{@link #getShaahZmanis16Point1Degrees() shaos zmaniyos}</em> (solar hours) after
     * {@link #getAlos16Point1Degrees() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from
     * dawn to nightfall with both being 16.1&deg; below sunrise or sunset. This returns the time of
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getAlos16Point1Degrees()
     */
    getSofZmanShmaMGA16Point1Degrees(): DateTime | null;
    /**
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based
     * on <em>alos</em> being {@link #getAlos18Degrees() 18&deg;} before {@link #getSunrise() sunrise}. This time is 3
     * <em>{@link #getShaahZmanis18Degrees() shaos zmaniyos}</em> (solar hours) after {@link #getAlos18Degrees() dawn}
     * based on the opinion of the <em>MGA</em> that the day is calculated from dawn to nightfall with both being 18&deg;
     * below sunrise or sunset. This returns the time of 3 * {@link #getShaahZmanis18Degrees()} after
     * {@link #getAlos18Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis18Degrees()
     * @see #getAlos18Degrees()
     */
    getSofZmanShmaMGA18Degrees(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos72() 72} minutes before
     * {@link #getSunrise() sunrise}. This time is 3 <em>{@link #getShaahZmanis72Minutes() shaos zmaniyos}</em> (solar
     * hours) after {@link #getAlos72() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a
     * {@link #getAlos72() dawn} of 72 minutes before sunrise to {@link #getTzais72() nightfall} of 72 minutes after
     * sunset. This returns the time of 3 * {@link #getShaahZmanis72Minutes()} after {@link #getAlos72() dawn}. This
     * class returns an identical time to {@link #getSofZmanShmaMGA()} and is repeated here for clarity.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis72Minutes()
     * @see #getAlos72()
     * @see #getSofZmanShmaMGA()
     */
    getSofZmanShmaMGA72Minutes(): DateTime | null;
    /**
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based
     * on <em>alos</em> being {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em>, or 1/10th of the day before
     * {@link #getSunrise() sunrise}. This time is 3 <em>{@link #getShaahZmanis90MinutesZmanis() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos72Zmanis() dawn} based on the opinion of the <em>MGA</em> that the day is
     * calculated from a {@link #getAlos72Zmanis() dawn} of 72 minutes <em>zmaniyos</em>, or 1/10th of the day before
     * {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getTzais72Zmanis() nightfall} of 72 minutes
     * <em>zmaniyos</em> after {@link #getSeaLevelSunset() sea level sunset}. This returns the time of 3 *
     * {@link #getShaahZmanis72MinutesZmanis()} after {@link #getAlos72Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis72MinutesZmanis()
     * @see #getAlos72Zmanis()
     */
    getSofZmanShmaMGA72MinutesZmanis(): DateTime | null;
    /**
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on
     * <em>alos</em> being {@link #getAlos90() 90} minutes before {@link #getSunrise() sunrise}. This time is 3
     * <em>{@link #getShaahZmanis90Minutes() shaos zmaniyos}</em> (solar hours) after {@link #getAlos90() dawn} based on
     * the opinion of the <em>MGA</em> that the day is calculated from a {@link #getAlos90() dawn} of 90 minutes before
     * sunrise to {@link #getTzais90() nightfall} of 90 minutes after sunset. This returns the time of 3 *
     * {@link #getShaahZmanis90Minutes()} after {@link #getAlos90() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis90Minutes()
     * @see #getAlos90()
     */
    getSofZmanShmaMGA90Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos90Zmanis() 90} minutes <em>zmaniyos</em>
     * before {@link #getSunrise() sunrise}. This time is 3
     * <em>{@link #getShaahZmanis90MinutesZmanis() shaos zmaniyos}</em> (solar hours) after {@link #getAlos90Zmanis()
       * dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a {@link #getAlos90Zmanis() dawn}
     * of 90 minutes <em>zmaniyos</em> before sunrise to {@link #getTzais90Zmanis() nightfall} of 90 minutes
     * <em>zmaniyos</em> after sunset. This returns the time of 3 * {@link #getShaahZmanis90MinutesZmanis()} after
     * {@link #getAlos90Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis90MinutesZmanis()
     * @see #getAlos90Zmanis()
     */
    getSofZmanShmaMGA90MinutesZmanis(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos96() 96} minutes before
     * {@link #getSunrise() sunrise}. This time is 3 <em>{@link #getShaahZmanis96Minutes() shaos zmaniyos}</em> (solar
     * hours) after {@link #getAlos96() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a
     * {@link #getAlos96() dawn} of 96 minutes before sunrise to {@link #getTzais96() nightfall} of 96 minutes after
     * sunset. This returns the time of 3 * {@link #getShaahZmanis96Minutes()} after {@link #getAlos96() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis96Minutes()
     * @see #getAlos96()
     */
    getSofZmanShmaMGA96Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos90Zmanis() 96} minutes <em>zmaniyos</em>
     * before {@link #getSunrise() sunrise}. This time is 3
     * <em>{@link #getShaahZmanis96MinutesZmanis() shaos zmaniyos}</em> (solar hours) after {@link #getAlos96Zmanis()
       * dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a {@link #getAlos96Zmanis() dawn}
     * of 96 minutes <em>zmaniyos</em> before sunrise to {@link #getTzais90Zmanis() nightfall} of 96 minutes
     * <em>zmaniyos</em> after sunset. This returns the time of 3 * {@link #getShaahZmanis96MinutesZmanis()} after
     * {@link #getAlos96Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis96MinutesZmanis()
     * @see #getAlos96Zmanis()
     */
    getSofZmanShmaMGA96MinutesZmanis(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) calculated as 3
     * hours (regular and not zmaniyos) before {@link ZmanimCalendar#getChatzos()}. This is the opinion of the
     * <em>Shach</em> in the <em>Nekudas Hakesef (Yora Deah 184), Shevus Yaakov, Chasan Sofer</em> and others. This
     * returns the time of 3 hours before {@link ZmanimCalendar#getChatzos()}. TODO: hyperlinks
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see ZmanimCalendar#getChatzos()
     * @see #getSofZmanTfila2HoursBeforeChatzos()
     */
    getSofZmanShma3HoursBeforeChatzos(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos120() 120} minutes or 1/6th of the day
     * before {@link #getSunrise() sunrise}. This time is 3 <em>{@link #getShaahZmanis120Minutes() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos120() dawn} based on the opinion of the <em>MGA</em> that the day is
     * calculated from a {@link #getAlos120() dawn} of 120 minutes before sunrise to {@link #getTzais120() nightfall} of
     * 120 minutes after sunset. This returns the time of 3 * {@link #getShaahZmanis120Minutes()} after
     * {@link #getAlos120() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis120Minutes()
     * @see #getAlos120()
     */
    getSofZmanShmaMGA120Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) based on the
     * opinion that the day starts at <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> and ends at
     * {@link #getSeaLevelSunset() sea level sunset}. 3 shaos zmaniyos are calculated based on this day and added to
     * {@link #getAlos16Point1Degrees() alos}to reach this time. This time is 3 <em>shaos zmaniyos</em> (solar hours)
     * after {@link #getAlos16Point1Degrees() dawn} based on the opinion that the day is calculated from a
     * <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> to {@link #getSeaLevelSunset() sea level sunset}.
     * <b>Note: </b> Based on this calculation <em>chatzos</em> will not be at midday.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em> based on this day. If the calculation can't
     *         be computed such as northern and southern locations even south of the Arctic Circle and north of the
     *         Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a null
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos16Point1Degrees()
     * @see #getSeaLevelSunset()
     */
    getSofZmanShmaAlos16Point1ToSunset(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) based on the
     * opinion that the day starts at <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> and ends at
     * <em> {@link #getTzaisGeonim7Point083Degrees() tzais 7.083&deg;}</em>. 3 <em>shaos zmaniyos</em> are calculated
     * based on this day and added to <em>{@link #getAlos16Point1Degrees() alos}</em> to reach this time. This time is 3
     * <em>shaos zmaniyos</em> (temporal hours) after <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> based on
     * the opinion that the day is calculated from a <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> to
     * <em>{@link #getTzaisGeonim7Point083Degrees() tzais 7.083&deg;}</em>.
     * <b>Note: </b> Based on this calculation <em>chatzos</em> will not be at midday.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em> based on this calculation. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos16Point1Degrees()
     * @see #getTzaisGeonim7Point083Degrees()
     */
    getSofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees(): DateTime | null;
    /**
     * From the GRA in Kol Eliyahu on Berachos #173 that states that <em>zman krias shema</em> is calculated as half the
     * time from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getFixedLocalChatzos() fixed local chatzos}.
     * The GRA himself seems to contradict this when he stated that <em>zman krias shema</em> is 1/4 of the day from
     * sunrise to sunset. See <em>Sarah Lamoed</em> #25 in Yisroel Vehazmanim Vol. III page 1016.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em> based on this calculation. If the
     *         calculation can't be computed such as in the Arctic Circle where there is at least one day a year where
     *         the sun does not rise, and one where it does not set, a null will be returned. See detailed explanation
     *         on top of the {@link AstronomicalCalendar} documentation.
     * @see #getFixedLocalChatzos()
     * @deprecated As per a conversation Rabbi Yisroel Twerski had with Rabbi Harfenes, this zman published in the Yisrael
     *         Vehazmanim was based on a misunderstanding and should not be used. This deprecated will be removed pending
     *         confirmation from Rabbi Harfenes.
     */
    getSofZmanShmaKolEliyahu(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos19Point8Degrees() 19.8&deg;} before
     * {@link #getSunrise() sunrise}. This time is 4 <em>{@link #getShaahZmanis19Point8Degrees() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos19Point8Degrees() dawn} based on the opinion of the <em>MGA</em> that the day
     * is calculated from dawn to nightfall with both being 19.8&deg; below sunrise or sunset. This returns the time of
     * 4 * {@link #getShaahZmanis19Point8Degrees()} after {@link #getAlos19Point8Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis19Point8Degrees()
     * @see #getAlos19Point8Degrees()
     */
    getSofZmanTfilaMGA19Point8Degrees(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos16Point1Degrees() 16.1&deg;} before
     * {@link #getSunrise() sunrise}. This time is 4 <em>{@link #getShaahZmanis16Point1Degrees() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos16Point1Degrees() dawn} based on the opinion of the <em>MGA</em> that the day
     * is calculated from dawn to nightfall with both being 16.1&deg; below sunrise or sunset. This returns the time of
     * 4 * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getAlos16Point1Degrees()
     */
    getSofZmanTfilaMGA16Point1Degrees(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos18Degrees() 18&deg;} before {@link #getSunrise()
       * sunrise}. This time is 4 <em>{@link #getShaahZmanis18Degrees() shaos zmaniyos}</em> (solar hours) after
     * {@link #getAlos18Degrees() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from dawn to
     * nightfall with both being 18&deg; below sunrise or sunset. This returns the time of 4 *
     * {@link #getShaahZmanis18Degrees()} after {@link #getAlos18Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis18Degrees()
     * @see #getAlos18Degrees()
     */
    getSofZmanTfilaMGA18Degrees(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos72() 72} minutes before {@link #getSunrise()
       * sunrise}. This time is 4 <em>{@link #getShaahZmanis72Minutes() shaos zmaniyos}</em> (solar hours) after
     * {@link #getAlos72() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a
     * {@link #getAlos72() dawn} of 72 minutes before sunrise to {@link #getTzais72() nightfall} of 72 minutes after
     * sunset. This returns the time of 4 * {@link #getShaahZmanis72Minutes()} after {@link #getAlos72() dawn}. This
     * class returns an identical time to {@link #getSofZmanTfilaMGA()} and is repeated here for clarity.
     *
     * @return the <code>Date</code> of the latest <em>zman tfila</em>. If the calculation can't be computed such as in
     *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis72Minutes()
     * @see #getAlos72()
     * @see #getSofZmanShmaMGA()
     */
    getSofZmanTfilaMGA72Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to the morning prayers) according to the opinion of the
     *  <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em> before
     * {@link #getSunrise() sunrise}. This time is 4 <em>{@link #getShaahZmanis72MinutesZmanis() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos72Zmanis() dawn} based on the opinion of the <em>MGA</em> that the day is
     * calculated from a {@link #getAlos72Zmanis() dawn} of 72 minutes <em>zmaniyos</em> before sunrise to
     * {@link #getTzais72Zmanis() nightfall} of 72 minutes <em>zmaniyos</em> after sunset. This returns the time of 4 *
     * {@link #getShaahZmanis72MinutesZmanis()} after {@link #getAlos72Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis72MinutesZmanis()
     * @see #getAlos72Zmanis()
     */
    getSofZmanTfilaMGA72MinutesZmanis(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the  <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos90() 90} minutes before {@link #getSunrise()
       * sunrise}. This time is 4 <em>{@link #getShaahZmanis90Minutes() shaos zmaniyos}</em> (solar hours) after
     * {@link #getAlos90() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a
     * {@link #getAlos90() dawn} of 90 minutes before sunrise to {@link #getTzais90() nightfall} of 90 minutes after
     * sunset. This returns the time of 4 * {@link #getShaahZmanis90Minutes()} after {@link #getAlos90() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman tfila</em>. If the calculation can't be computed such as in
     *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis90Minutes()
     * @see #getAlos90()
     */
    getSofZmanTfilaMGA90Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to the morning prayers) according to the opinion of the
     *  <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos90Zmanis() 90} minutes <em>zmaniyos</em> before
     * {@link #getSunrise() sunrise}. This time is 4 <em>{@link #getShaahZmanis90MinutesZmanis() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos90Zmanis() dawn} based on the opinion of the <em>MGA</em> that the day is
     * calculated from a {@link #getAlos90Zmanis() dawn} of 90 minutes <em>zmaniyos</em> before sunrise to
     * {@link #getTzais90Zmanis() nightfall} of 90 minutes <em>zmaniyos</em> after sunset. This returns the time of 4 *
     * {@link #getShaahZmanis90MinutesZmanis()} after {@link #getAlos90Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis90MinutesZmanis()
     * @see #getAlos90Zmanis()
     */
    getSofZmanTfilaMGA90MinutesZmanis(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the  <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos96() 96} minutes before {@link #getSunrise()
       * sunrise}. This time is 4 <em>{@link #getShaahZmanis96Minutes() shaos zmaniyos}</em> (solar hours) after
     * {@link #getAlos96() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a
     * {@link #getAlos96() dawn} of 96 minutes before sunrise to {@link #getTzais96() nightfall} of 96 minutes after
     * sunset. This returns the time of 4 * {@link #getShaahZmanis96Minutes()} after {@link #getAlos96() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman tfila</em>. If the calculation can't be computed such as in
     *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis96Minutes()
     * @see #getAlos96()
     */
    getSofZmanTfilaMGA96Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to the morning prayers) according to the opinion of the
     *  <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos96Zmanis() 96} minutes <em>zmaniyos</em> before
     * {@link #getSunrise() sunrise}. This time is 4 <em>{@link #getShaahZmanis96MinutesZmanis() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos96Zmanis() dawn} based on the opinion of the <em>MGA</em> that the day is
     * calculated from a {@link #getAlos96Zmanis() dawn} of 96 minutes <em>zmaniyos</em> before sunrise to
     * {@link #getTzais96Zmanis() nightfall} of 96 minutes <em>zmaniyos</em> after sunset. This returns the time of 4 *
     * {@link #getShaahZmanis96MinutesZmanis()} after {@link #getAlos96Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis90MinutesZmanis()
     * @see #getAlos90Zmanis()
     */
    getSofZmanTfilaMGA96MinutesZmanis(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the  <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos120() 120} minutes before {@link #getSunrise()
       * sunrise} . This time is 4 <em>{@link #getShaahZmanis120Minutes() shaos zmaniyos}</em> (solar hours) after
     * {@link #getAlos120() dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a
     * {@link #getAlos120() dawn} of 120 minutes before sunrise to {@link #getTzais120() nightfall} of 120 minutes after
     * sunset. This returns the time of 4 * {@link #getShaahZmanis120Minutes()} after {@link #getAlos120() dawn}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis120Minutes()
     * @see #getAlos120()
     */
    getSofZmanTfilaMGA120Minutes(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) calculated as 2 hours
     * before {@link ZmanimCalendar#getChatzos()}. This is based on the opinions that calculate
     * <em>sof zman krias shema</em> as {@link #getSofZmanShma3HoursBeforeChatzos()}. This returns the time of 2 hours
     * before {@link ZmanimCalendar#getChatzos()}.
     * TODO: Add hyperlinks to documentation
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see ZmanimCalendar#getChatzos()
     * @see #getSofZmanShma3HoursBeforeChatzos()
     */
    getSofZmanTfila2HoursBeforeChatzos(): DateTime | null;
    /**
     * This method returns mincha gedola calculated as 30 minutes after <em>{@link #getChatzos() chatzos}</em> and not
     * 1/2 of a <em>{@link #getShaahZmanisGra() shaah zmanis}</em> after <em>{@link #getChatzos() chatzos}</em> as
     * calculated by {@link #getMinchaGedola}. Some use this time to delay the start of mincha in the winter when 1/2 of
     * a <em>{@link #getShaahZmanisGra() shaah zmanis}</em> is less than 30 minutes. See
     * {@link #getMinchaGedolaGreaterThan30()}for a convenience method that returns the later of the 2 calculations. One
     * should not use this time to start <em>mincha</em> before the standard
     * <em>{@link #getMinchaGedola() mincha gedola}</em>. See <em>Shulchan Aruch
     * Orach Chayim Siman Raish Lamed Gimel seif alef</em> and the <em>Shaar Hatziyon seif katan ches</em>.
     * TODO: Add hyperlinks to documentation.
     *
     * @return the <code>Date</code> of 30 minutes after <em>chatzos</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getMinchaGedola()
     * @see #getMinchaGedolaGreaterThan30()
     */
    getMinchaGedola30Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>mincha gedola</em> according to the Magen Avraham with the day starting 72
     * minutes before sunrise and ending 72 minutes after sunset. This is the earliest time to pray <em>mincha</em>. For
     * more information on this see the documentation on <em>{@link #getMinchaGedola() mincha gedola}</em>. This is
     * calculated as 6.5 {@link #getTemporalHour() solar hours} after alos. The calculation used is 6.5 *
     * {@link #getShaahZmanis72Minutes()} after {@link #getAlos72() alos}.
     *
     * @see #getAlos72()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @see ZmanimCalendar#getMinchaGedola()
     * @return the <code>Date</code> of the time of mincha gedola. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaGedola72Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>mincha gedola</em> according to the Magen Avraham with the day starting and
     * ending 16.1&deg; below the horizon. This is the earliest time to pray <em>mincha</em>. For more information on
     * this see the documentation on <em>{@link #getMinchaGedola() mincha gedola}</em>. This is calculated as 6.5
     * {@link #getTemporalHour() solar hours} after alos. The calculation used is 6.5 *
     * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() alos}.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of mincha gedola. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaGedola16Point1Degrees(): DateTime | null;
    /**
     * This is a conveniance method that returns the later of {@link #getMinchaGedola()} and
     * {@link #getMinchaGedola30Minutes()}. In the winter when 1/2 of a <em>{@link #getShaahZmanisGra() shaah zmanis}</em> is
     * less than 30 minutes {@link #getMinchaGedola30Minutes()} will be returned, otherwise {@link #getMinchaGedola()}
     * will be returned.
     *
     * @return the <code>Date</code> of the later of {@link #getMinchaGedola()} and {@link #getMinchaGedola30Minutes()}.
     *         If the calculation can't be computed such as in the Arctic Circle where there is at least one day a year
     *         where the sun does not rise, and one where it does not set, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaGedolaGreaterThan30(): DateTime | null;
    /**
     * starting and ending 16.1&deg; below the horizon. This is the preferred earliest time to pray <em>mincha</em>
     * according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others.
     * For more information on this see the documentation on <em>{@link #getMinchaGedola() mincha gedola}</em>. This is
     * calculated as 9.5 {@link #getTemporalHour() solar hours} after alos. The calculation used is 9.5 *
     * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() alos}.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of mincha ketana. If the calculation can't be computed such as northern
     *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
     *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaKetana16Point1Degrees(): DateTime | null;
    /**
     * starting 72 minutes before sunrise and ending 72 minutes after sunset. This is the preferred earliest time to pray
     * <em>mincha</em> according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em>
     * and others. For more information on this see the documentation on <em>{@link #getMinchaGedola() mincha gedola}</em>.
     * This is calculated as 9.5 {@link #getShaahZmanis72Minutes()} after <em>alos</em>. The calculation used is 9.5 *
     * {@link #getShaahZmanis72Minutes()} after <em>{@link #getAlos72() alos}</em>.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of mincha ketana. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaKetana72Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> according to the <em>Magen Avraham</em> with the day
     * starting 60 minutes before sunrise and ending 60 minutes after sunset. This is calculated as 10.75 hours after
     * {@link #getAlos60() dawn}. The formula used is
     * 10.75 {@link #getShaahZmanis60Minutes()} after {@link #getAlos60()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis60Minutes()
     */
    getPlagHamincha60Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> according to the <em>Magen Avraham</em> with the day
     * starting 72 minutes before sunrise and ending 72 minutes after sunset. This is calculated as 10.75 hours after
     * {@link #getAlos72() dawn}. The formula used is
     * 10.75 {@link #getShaahZmanis72Minutes()} after {@link #getAlos72()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis72Minutes()
     */
    getPlagHamincha72Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> according to the <em>Magen Avraham</em> with the day
     * starting 90 minutes before sunrise and ending 90 minutes after sunset. This is calculated as 10.75 hours after
     * {@link #getAlos90() dawn}. The formula used is
     * 10.75 {@link #getShaahZmanis90Minutes()} after {@link #getAlos90()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis90Minutes()
     */
    getPlagHamincha90Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> according to the <em>Magen Avraham</em> with the day
     * starting 96 minutes before sunrise and ending 96 minutes after sunset. This is calculated as 10.75 hours after
     * {@link #getAlos96() dawn}. The formula used is
     * 10.75 {@link #getShaahZmanis96Minutes()} after {@link #getAlos96()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis96Minutes()
     */
    getPlagHamincha96Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em>. This is calculated as 10.75 hours after
     * {@link #getAlos96Zmanis() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis96MinutesZmanis()} after {@link #getAlos96Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getPlagHamincha96MinutesZmanis(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em>. This is calculated as 10.75 hours after
     * {@link #getAlos90Zmanis() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis90MinutesZmanis()} after {@link #getAlos90Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getPlagHamincha90MinutesZmanis(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em>. This is calculated as 10.75 hours after
     * {@link #getAlos72Zmanis() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis72MinutesZmanis()} after {@link #getAlos72Zmanis() dawn}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getPlagHamincha72MinutesZmanis(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the opinion that the day starts at
     * <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> and ends at
     * <em>{@link #getTzais16Point1Degrees() tzais 16.1&deg;}</em>. This is calculated as 10.75 hours <em>zmaniyos</em>
     * after {@link #getAlos16Point1Degrees() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis16Point1Degrees()
     */
    getPlagHamincha16Point1Degrees(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the opinion that the day starts at
     * <em>{@link #getAlos19Point8Degrees() alos 19.8&deg;}</em> and ends at
     * <em>{@link #getTzais19Point8Degrees() tzais 19.8&deg;}</em>. This is calculated as 10.75 hours <em>zmaniyos</em>
     * after {@link #getAlos19Point8Degrees() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis19Point8Degrees()} after {@link #getAlos19Point8Degrees()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis19Point8Degrees()
     */
    getPlagHamincha19Point8Degrees(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the opinion that the day starts at
     * <em>{@link #getAlos26Degrees() alos 26&deg;}</em> and ends at <em>{@link #getTzais26Degrees() tzais 26&deg;}</em>
     * . This is calculated as 10.75 hours <em>zmaniyos</em> after {@link #getAlos26Degrees() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis26Degrees()} after {@link #getAlos26Degrees()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis26Degrees()
     */
    getPlagHamincha26Degrees(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the opinion that the day starts at
     * <em>{@link #getAlos18Degrees() alos 18&deg;}</em> and ends at <em>{@link #getTzais18Degrees() tzais 18&deg;}</em>
     * . This is calculated as 10.75 hours <em>zmaniyos</em> after {@link #getAlos18Degrees() dawn}. The formula used is
     * 10.75 * {@link #getShaahZmanis18Degrees()} after {@link #getAlos18Degrees()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis18Degrees()
     */
    getPlagHamincha18Degrees(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the opinion that the day starts at
     * <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> and ends at {@link #getSunset() sunset}. 10.75 shaos
     * zmaniyos are calculated based on this day and added to {@link #getAlos16Point1Degrees() alos} to reach this time.
     * This time is 10.75 <em>shaos zmaniyos</em> (temporal hours) after {@link #getAlos16Point1Degrees() dawn} based on
     * the opinion that the day is calculated from a {@link #getAlos16Point1Degrees() dawn} of 16.1 degrees before
     * sunrise to {@link #getSeaLevelSunset() sea level sunset}. This returns the time of 10.75 * the calculated
     * <em>shaah zmanis</em> after {@link #getAlos16Point1Degrees() dawn}.
     *
     * @return the <code>Date</code> of the plag. If the calculation can't be computed such as northern and southern
     *         locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not reach
     *         low enough below the horizon for this calculation, a null will be returned. See detailed explanation on
     *         top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getAlos16Point1Degrees()
     * @see #getSeaLevelSunset()
     */
    getPlagAlosToSunset(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the opinion that the day starts at
     * <em>{@link #getAlos16Point1Degrees() alos 16.1&deg;}</em> and ends at {@link #getTzaisGeonim7Point083Degrees()
       * tzais}. 10.75 shaos zmaniyos are calculated based on this day and added to {@link #getAlos16Point1Degrees() alos}
     * to reach this time. This time is 10.75 <em>shaos zmaniyos</em> (temporal hours) after
     * {@link #getAlos16Point1Degrees() dawn} based on the opinion that the day is calculated from a
     * {@link #getAlos16Point1Degrees() dawn} of 16.1 degrees before sunrise to
     * {@link #getTzaisGeonim7Point083Degrees() tzais} . This returns the time of 10.75 * the calculated
     * <em>shaah zmanis</em> after {@link #getAlos16Point1Degrees() dawn}.
     *
     * @return the <code>Date</code> of the plag. If the calculation can't be computed such as northern and southern
     *         locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not reach
     *         low enough below the horizon for this calculation, a null will be returned. See detailed explanation on
     *         top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getAlos16Point1Degrees()
     * @see #getTzaisGeonim7Point083Degrees()
     */
    getPlagAlos16Point1ToTzaisGeonim7Point083Degrees(): DateTime | null;
    /**
     * Method to return the beginning of <em>bain hashmashos</em> of <em>Rabbeinu Tam</em> calculated when the sun is
     * {@link #ZENITH_13_POINT_24 13.24&deg;} below the western {@link #GEOMETRIC_ZENITH geometric horizon} (90&deg;)
     * after sunset. This calculation is based on the same calculation of {@link #getBainHasmashosRT58Point5Minutes()
     * <em>bain hashmashos</em> Rabbeinu Tam 58.5 minutes} but uses a degree based calculation instead of 58.5 exact
     * minutes. This calculation is based on the position of the sun 58.5 minutes after sunset in Jerusalem during the
     * equinox (on March 16, about 4 days before the astronomical equinox, the day that a solar hour is 60 minutes)
     * which calculates to 13.24&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     * NOTE: As per Yisrael Vehazmanim Vol. III page 1028 No 50, a dip of slightly less than 13&deg; should be used.
     * Calculations show that the proper dip to be 13.2456&deg; (truncated to 13.24 that provides about 1.5 second
     * earlier (<em>lechumra</em>) time) below the horizon at that time. This makes a difference of 1 minute and 10
     * seconds in Jerusalem during the Equinox, and 1 minute 29 seconds during the solstice as compared to the proper
     * 13.24&deg; versus 13&deg;. For NY during the solstice, the difference is 1 minute 56 seconds.
     *
     * @return the <code>Date</code> of the sun being 13.24&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *         (90&deg;). If the calculation can't be computed such as northern and southern locations even south of the
     *         Arctic Circle and north of the Antarctic Circle where the sun may not reach low enough below the horizon
     *         for this calculation, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_13_POINT_24
     * @see #getBainHasmashosRT58Point5Minutes()
     */
    getBainHasmashosRT13Point24Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>Bain hashmashos</em> of <em>Rabbeinu Tam</em> calculated as a 58.5
     * minute offset after sunset. <em>bain hashmashos</em> is 3/4 of a <em>Mil</em> before <em>tzais</em> or 3 1/4
     * <em>Mil</em> after sunset. With a <em>Mil</em> calculated as 18 minutes, 3.25 * 18 = 58.5 minutes.
     *
     * @return the <code>Date</code> of 58.5 minutes after sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     */
    getBainHasmashosRT58Point5Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> based on the calculation of 13.5 minutes (3/4 of an
     * 18 minute <em>Mil</em>) before <em>shkiah</em> calculated as {@link #getTzaisGeonim7Point083Degrees() 7.083&deg;}.
     *
     * @return the <code>Date</code> of the <em>bain hashmashos</em> of <em>Rabbeinu Tam</em> in this calculation. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returnegetBainHasmashosRT2Starsd. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getTzaisGeonim7Point083Degrees()
     */
    getBainHasmashosRT13Point5MinutesBefore7Point083Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> of <em>Rabbeinu Tam</em> calculated according to the
     * opinion of the <em>Divrei Yosef</em> (see Yisrael Vehazmanim) calculated 5/18th (27.77%) of the time between
     * <em>alos</em> (calculated as 19.8&deg; before sunrise) and sunrise. This is added to sunset to arrive at the time
     * for <em>bain hashmashos</em> of <em>Rabbeinu Tam</em>).
     *
     * @return the <code>Date</code> of <em>bain hashmashos</em> of <em>Rabbeinu Tam</em> for this calculation. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getBainHasmashosRT2Stars(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as 18 minutes
     * or 3/4 of a 24 minute <em>Mil</em> before sunset. According to the Yereim, <em>bain hashmashos</em> starts 3/4
     * of a <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of 18 minutes before sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getBainHasmashosYereim3Point05Degrees()
     */
    getBainHasmashosYereim18Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>hain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as the sun's
     * position 3.05&deg; above the horizon during the equinox (on March 16, about 4 days before the astronomical
     * equinox, the day that a solar hour is 60 minutes) in Yerushalayim, its position 18 minutes or 3/4 of an 24
     * minute <em>Mil</em> before sunset. According to the Yereim, bain hashmashos starts 3/4 of a <em>Mil</em> before
     * sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of the sun's position 2.99&deg; minutes before sunset. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_MINUS_3_POINT_05
     * @see #getBainHasmashosYereim18Minutes()
     */
    getBainHasmashosYereim2Point99Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as 16.875
     * minutes or 3/4 of a 22.5 minute <em>Mil</em> before sunset. According to the Yereim, bain hashmashos starts 3/4 of a
     * <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of 16.875 minutes before sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getBainHasmashosYereim2Point8Degrees()
     */
    getBainHasmashosYereim16Point875Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as the sun's
     * position 2.75&deg; above the horizon during the equinox (on March 16, about 4 days before the astronomical
     * equinox, the day that a solar hour is 60 minutes) in Yerushalayim, its position 16.875 minutes or 3/4 of an 18
     * minute <em>Mil</em> before sunset. According to the Yereim, bain hashmashos starts 3/4 of a <em>Mil</em> before
     * sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of the sun's position 2.75&deg; minutes before sunset. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_MINUS_2_POINT_8
     * @see #getBainHasmashosYereim16Point875Minutes()
     */
    getBainHasmashosYereim2Point8Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as 13.5 minutes
     * or 3/4 of an 18 minute <em>Mil</em> before sunset. According to the Yereim, bain hashmashos starts 3/4 of a
     * <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of 13.5 minutes before sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getBainHasmashosYereim2Point1Degrees()
     */
    getBainHasmashosYereim13Point5Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as the sun's
     * position 2.03&deg; above the horizon during the equinox (on March 16, about 4 days before the astronomical
     * equinox, the day that a solar hour is 60 minutes) in Yerushalayim, its position 13.5 minutes or 3/4 of an 18
     * minute <em>Mil</em> before sunset. According to the Yereim, bain hashmashos starts 3/4 of a <em>Mil</em> before
     * sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of the sun's position 2.03&deg; minutes before sunset. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_MINUS_2_POINT_1
     * @see #getBainHasmashosYereim13Point5Minutes()
     */
    getBainHasmashosYereim2Point1Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated at the
     * sun's position at {@link #ZENITH_3_POINT_7 3.7&deg;} below the western horizon.
     *
     * @return the <code>Date</code> representing the time when the sun is 3.7&deg; below sea level.
     * @see #ZENITH_3_POINT_7
     */
    getTzaisGeonim3Point7Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated at the
     * sun's position at {@link #ZENITH_3_POINT_8 3.8&deg;} below the western horizon.
     *
     * @return the <code>Date</code> representing the time when the sun is 3.8&deg; below sea level.
     * @see #ZENITH_3_POINT_8
     */
    getTzaisGeonim3Point8Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated at the
     * sun's position at {@link #ZENITH_5_POINT_95 5.95&deg;} below the western horizon.
     *
     * @return the <code>Date</code> representing the time when the sun is 5.95&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_5_POINT_95
     */
    getTzaisGeonim5Point95Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a <a href= "http://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on an 18
     * minute Mil, or 13.5 minutes. It is the sun's position at {@link #ZENITH_3_POINT_65 3.65&deg;} below the western
     * horizon. This is a very early <em>zman</em> and should not be relied on without Rabbinical guidance.
     *
     * @return the <code>Date</code> representing the time when the sun is 3.65&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_3_POINT_65
     */
    getTzaisGeonim3Point65Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a <a href= "http://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on an 18
     * minute Mil, or 13.5 minutes. It is the sun's position at {@link #ZENITH_3_POINT_676 3.676&deg;} below the western
     * horizon based on the calculations of Stanley Fishkind. This is a very early <em>zman</em> and should not be
     * relied on without Rabbinical guidance.
     *
     * @return the <code>Date</code> representing the time when the sun is 3.676&deg; below sea level. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #ZENITH_3_POINT_676
     */
    getTzaisGeonim3Point676Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a <a href= "http://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on a 24
     * minute Mil, or 18 minutes. It is the sun's position at {@link #ZENITH_4_POINT_61 4.61&deg;} below the western
     * horizon. This is a very early <em>zman</em> and should not be relied on without Rabbinical guidance.
     *
     * @return the <code>Date</code> representing the time when the sun is 4.61&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_4_POINT_61
     */
    getTzaisGeonim4Point61Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a <a href= "http://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a>, based on a 22.5
     * minute Mil, or 16 7/8 minutes. It is the sun's position at {@link #ZENITH_4_POINT_37 4.37&deg;} below the western
     * horizon. This is a very early <em>zman</em> and should not be relied on without Rabbinical guidance.
     *
     * @return the <code>Date</code> representing the time when the sun is 4.37&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_4_POINT_37
     */
    getTzaisGeonim4Point37Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a 24 minute <em><a href= "http://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a></em>,
     * based on a <em>Mil</em> being 24 minutes, and is calculated as 18 + 2 + 4 for a total of 24 minutes. It is the
     * sun's position at {@link #ZENITH_5_POINT_88 5.88&deg;} below the western horizon. This is a very early
     * <em>zman</em> and should not be relied on without Rabbinical guidance.
     *
     * @todo Additional detailed documentation needed.
     *
     * @return the <code>Date</code> representing the time when the sun is 5.88&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_5_POINT_88
     */
    getTzaisGeonim5Point88Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a <a href= "http://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on the
     * sun's position at {@link #ZENITH_4_POINT_8 4.8&deg;} below the western horizon. This is based on Rabbi Leo Levi's
     * calculations. This is the This is a very early <em>zman</em> and should not be relied on without Rabbinical guidance.
     * @todo Additional documentation needed.
     *
     * @return the <code>Date</code> representing the time when the sun is 4.8&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_4_POINT_8
     */
    getTzaisGeonim4Point8Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> as calculated by
     * <a href="https://en.wikipedia.org/wiki/Yechiel_Michel_Tucazinsky">Rabbi Yechiel Michel Tucazinsky</a>. It is
     * based on of the position of the sun no later than {@link #getTzaisGeonim6Point45Degrees() 31 minutes} after sunset
     * in Jerusalem the height of the summer solstice and is 28 minutes after <em>shkiah</em> at the equinox. This
     * computes to 6.45&deg; below the western horizon.
     * @todo Additional documentation details needed.
     *
     * @return the <code>Date</code> representing the time when the sun is 6.45&deg; below sea level. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #ZENITH_6_POINT_45
     */
    getTzaisGeonim6Point45Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 30
     * minutes after sunset during the equinox (on March 16, about 4 days before the astronomical equinox, the day that
     * a solar hour is 60 minutes) in Yerushalayim. The sun's position at this time computes to
     * {@link #ZENITH_7_POINT_083 7.083&deg; (or 7&deg; 5\u2032} below the western horizon. Note that this is a common
     * and rounded number. Computation shows the accurate number is 7.2&deg;
     *
     * @return the <code>Date</code> representing the time when the sun is 7.083&deg; below sea level. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #ZENITH_7_POINT_083
     */
    getTzaisGeonim7Point083Degrees(): DateTime | null;
    /**
     * This method returns <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 45 minutes
     * after sunset during the summer solstice in New York, when the <em>neshef</em> (twilight) is the longest. The sun's
     * position at this time computes to {@link #ZENITH_7_POINT_67 7.75&deg;} below the western horizon. See <a href=
     * "http://www.hebrewbooks.org/pdfpager.aspx?req=921&amp;pgnum=149">Igros Moshe Even Haezer 4, Ch. 4</a> (regarding
     * tzais for <em>krias Shema</em>). It is also mentioned in Rabbi Heber's <a href=
     * "http://www.hebrewbooks.org/53000">Shaarei Zmanim</a> on in
     * <a href="http://www.hebrewbooks.org/pdfpager.aspx?req=53055&amp;pgnum=101">chapter 10 (page 87)</a> and
     * <a href="http://www.hebrewbooks.org/pdfpager.aspx?req=53055&amp;pgnum=122">chapter 12 (page 108)</a>. Also see the
     * time of 45 minutes in <a href="https://en.wikipedia.org/wiki/Simcha_Bunim_Cohen">Rabbi Simcha Bunim Cohen's</a> <a
     * href="https://www.worldcat.org/oclc/179728985">The radiance of Shabbos</a> as the earliest zman for New York. This
     * zman is also listed in the <a href="http://www.hebrewbooks.org/pdfpager.aspx?req=1927&amp;pgnum=90">Divrei Shalom
     * Vol. III, chapter 75</a>, and <a href="http://www.hebrewbooks.org/pdfpager.aspx?req=892&amp;pgnum=431">Bais Av"i Vol.
     * III, chapter 117</a>. This zman is also listed in the Divrei Shalom etc. chapter 177. Since this
     * zman depends on the level of light, Rabbi Yaakov Shakow presented this degree based calculation to Rabbi <a href=
     * "https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a> who agreed to it.
     * @todo add hyperlinks to source of Divrei Shalom.
     *
     * @return the <code>Date</code> representing the time when the sun is 7.67&deg; below sea level. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #ZENITH_7_POINT_67
     */
    getTzaisGeonim7Point67Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated at the
     * sun's position at {@link #ZENITH_8_POINT_5 8.5&deg;} below the western horizon.
     *
     * @return the <code>Date</code> representing the time when the sun is 8.5&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_8_POINT_5
     */
    getTzaisGeonim8Point5Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the calculations used in the <a href=
     * "http://www.worldcat.org/oclc/243303103">Luach Itim Lebinah</a> as the stringent time for tzais.  It is calculated
     * at the sun's position at {@link #ZENITH_9_POINT_3 9.3&deg;} below the western horizon.
     *
     * @return the <code>Date</code> representing the time when the sun is 9.3&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getTzaisGeonim9Point3Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 60
     * minutes after sunset during the equinox (on March 16, about 4 days before the astronomical equinox, the day that
     * a solar hour is 60 minutes) in New York. The sun's position at this time computes to
     * {@link #ZENITH_9_POINT_75 9.75&deg;} below the western horizon. This is the opinion of <a href=
     * "https://en.wikipedia.org/wiki/Yosef_Eliyahu_Henkin">Rabbi Eliyahu Henkin</a>.  This also follows the opinion of
     * <a href="https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a>. Rabbi Yaakov Shakow presented
     * these degree based times to Rabbi Shmuel Kamenetsky who agreed to them.
     *
     * @return the <code>Date</code> representing the time when the sun is 9.75&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getTzais60()
     */
    getTzaisGeonim9Point75Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em><a href=
     * "https://en.wikipedia.org/wiki/Yair_Bacharach">Chavas Yair</a></em> and <em>Divrei Malkiel</em> that the time
     * to walk the distance of a <em>Mil</em> is 15 minutes for a total of 60 minutes for 4 <em>Mil</em> after
     * {@link #getSeaLevelSunset() sea level sunset}.
     *
     * @return the <code>Date</code> representing 60 minutes after sea level sunset. If the calculation can't be
     *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
     *         and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getAlos60()
     */
    getTzais60(): DateTime | null;
    /**
     * This method returns <em>tzais</em> usually calculated as 40 minutes (configurable to any offset via
     * {@link #setAteretTorahSunsetOffset(double)}) after sunset. Please note that <em>Chacham Yosef Harari-Raful</em>
     * of <em>Yeshivat Ateret Torah</em> who uses this time, does so only for calculating various other
     * <em>zmanai hayom</em> such as <em>Sof Zman Krias Shema</em> and <em>Plag Hamincha</em>. His calendars do not
     * publish a <em>zman</em> for <em>Tzais</em>. It should also be noted that <em>Chacham Harari-Raful</em> provided a
     * 25 minute <em>zman</em> for Israel. This API uses 40 minutes year round in any place on the globe by default.
     * This offset can be changed by calling {@link #setAteretTorahSunsetOffset(double)}.
     *
     * @return the <code>Date</code> representing 40 minutes (configurable via {@link #setAteretTorahSunsetOffset})
     *         after sea level sunset. If the calculation can't be computed such as in the Arctic Circle where there is
     *         at least one day a year where the sun does not rise, and one where it does not set, a null will be
     *         returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAteretTorahSunsetOffset()
     * @see #setAteretTorahSunsetOffset(double)
     */
    getTzaisAteretTorah(): DateTime | null;
    /**
     * Returns the offset in minutes after sunset used to calculate sunset for the Ateret Torah zmanim. The default
     * value is 40 minutes. This affects most zmanim, since almost all zmanim use sunset as part of their calculation.
     *
     * @return the number of minutes after sunset for <em>Tzait</em>.
     * @see #setAteretTorahSunsetOffset(double)
     */
    getAteretTorahSunsetOffset(): number;
    /**
     * Allows setting the offset in minutes after sunset for the Ateret Torah zmanim. The default if unset is 40
     * minutes. Chacham Yosef Harari-Raful of Yeshivat Ateret Torah uses 40 minutes globally with the exception of
     * Israel where a 25 minute offset is used. This 40 minute (or any other) offset can be overridden by this method.
     * This offset impacts all Ateret Torah zmanim.
     *
     * @param ateretTorahSunsetOffset
     *            the number of minutes after sunset to use as an offset for the Ateret Torah <em>tzais</em>
     * @see #getAteretTorahSunsetOffset()
     */
    setAteretTorahSunsetOffset(ateretTorahSunsetOffset: number): void;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) based on the
     * calculation of Chacham Yosef Harari-Raful of Yeshivat Ateret Torah, that the day starts
     * {@link #getAlos72Zmanis() 1/10th of the day} before sunrise and is usually calculated as ending
     * {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset via
     * {@link #setAteretTorahSunsetOffset(double)}). <em>shaos zmaniyos</em> are calculated based on this day and added
     * to {@link #getAlos72Zmanis() alos} to reach this time. This time is 3
     * <em> {@link #getShaahZmanisAteretTorah() shaos zmaniyos}</em> (temporal hours) after
     * <em>{@link #getAlos72Zmanis()
       * alos 72 zmaniyos}</em>. <b>Note: </b> Based on this calculation <em>chatzos</em> will not be at midday.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em> based on this calculation. If the
     *         calculation can't be computed such as in the Arctic Circle where there is at least one day a year where
     *         the sun does not rise, and one where it does not set, a null will be returned. See detailed explanation
     *         on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos72Zmanis()
     * @see #getTzaisAteretTorah()
     * @see #getAteretTorahSunsetOffset()
     * @see #setAteretTorahSunsetOffset(double)
     * @see #getShaahZmanisAteretTorah()
     */
    getSofZmanShmaAteretTorah(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) based on the calculation
     * of Chacham Yosef Harari-Raful of Yeshivat Ateret Torah, that the day starts {@link #getAlos72Zmanis() 1/10th of
       * the day} before sunrise and is usually calculated as ending {@link #getTzaisAteretTorah() 40 minutes after
       * sunset} (configurable to any offset via {@link #setAteretTorahSunsetOffset(double)}). <em>shaos zmaniyos</em> are
     * calculated based on this day and added to {@link #getAlos72Zmanis() alos} to reach this time. This time is 4 *
     * <em>{@link #getShaahZmanisAteretTorah() shaos zmaniyos}</em> (temporal hours) after
     * <em>{@link #getAlos72Zmanis() alos 72 zmaniyos}</em>.
     * <b>Note: </b> Based on this calculation <em>chatzos</em> will not be at midday.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em> based on this calculation. If the
     *         calculation can't be computed such as in the Arctic Circle where there is at least one day a year where
     *         the sun does not rise, and one where it does not set, a null will be returned. See detailed explanation
     *         on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos72Zmanis()
     * @see #getTzaisAteretTorah()
     * @see #getShaahZmanisAteretTorah()
     * @see #setAteretTorahSunsetOffset(double)
     */
    getSofZmanTfilahAteretTorah(): DateTime | null;
    /**
     * This method returns the time of <em>mincha gedola</em> based on the calculation of <em>Chacham Yosef
     * Harari-Raful</em> of <em>Yeshivat Ateret Torah</em>, that the day starts {@link #getAlos72Zmanis()
       * 1/10th of the day} before sunrise and is usually calculated as ending
     * {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset via
     * {@link #setAteretTorahSunsetOffset(double)}). This is the preferred earliest time to pray <em>mincha</em>
     * according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others.
     * For more information on this see the documentation on <em>{@link #getMinchaGedola() mincha gedola}</em>. This is
     * calculated as 6.5 {@link #getShaahZmanisAteretTorah()  solar hours} after alos. The calculation used is 6.5 *
     * {@link #getShaahZmanisAteretTorah()} after <em>{@link #getAlos72Zmanis() alos}</em>.
     *
     * @see #getAlos72Zmanis()
     * @see #getTzaisAteretTorah()
     * @see #getShaahZmanisAteretTorah()
     * @see #getMinchaGedola()
     * @see #getMinchaKetanaAteretTorah()
     * @see ZmanimCalendar#getMinchaGedola()
     * @see #getAteretTorahSunsetOffset()
     * @see #setAteretTorahSunsetOffset(double)
     *
     * @return the <code>Date</code> of the time of mincha gedola. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaGedolaAteretTorah(): DateTime | null;
    /**
     * This method returns the time of <em>mincha ketana</em> based on the calculation of
     * <em>Chacham Yosef Harari-Raful</em> of <em>Yeshivat Ateret Torah</em>, that the day starts
     * {@link #getAlos72Zmanis() 1/10th of the day} before sunrise and is usually calculated as ending
     * {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset via
     * {@link #setAteretTorahSunsetOffset(double)}). This is the preferred earliest time to pray <em>mincha</em>
     * according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others.
     * For more information on this see the documentation on <em>{@link #getMinchaGedola() mincha gedola}</em>. This is
     * calculated as 9.5 {@link #getShaahZmanisAteretTorah() solar hours} after {@link #getAlos72Zmanis() alos}. The
     * calculation used is 9.5 * {@link #getShaahZmanisAteretTorah()} after {@link #getAlos72Zmanis() alos}.
     *
     * @see #getAlos72Zmanis()
     * @see #getTzaisAteretTorah()
     * @see #getShaahZmanisAteretTorah()
     * @see #getAteretTorahSunsetOffset()
     * @see #setAteretTorahSunsetOffset(double)
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of mincha ketana. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaKetanaAteretTorah(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> based on the calculation of Chacham Yosef Harari-Raful of
     * Yeshivat Ateret Torah, that the day starts {@link #getAlos72Zmanis() 1/10th of the day} before sunrise and is
     * usually calculated as ending {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset
     * via {@link #setAteretTorahSunsetOffset(double)}). <em>shaos zmaniyos</em> are calculated based on this day and
     * added to {@link #getAlos72Zmanis() alos} to reach this time. This time is 10.75
     * <em>{@link #getShaahZmanisAteretTorah() shaos zmaniyos}</em> (temporal hours) after {@link #getAlos72Zmanis()
       * dawn}.
     *
     * @return the <code>Date</code> of the plag. If the calculation can't be computed such as in the Arctic Circle
     *         where there is at least one day a year where the sun does not rise, and one where it does not set, a null
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos72Zmanis()
     * @see #getTzaisAteretTorah()
     * @see #getShaahZmanisAteretTorah()
     * @see #setAteretTorahSunsetOffset(double)
     * @see #getAteretTorahSunsetOffset()
     */
    getPlagHaminchaAteretTorah(): DateTime | null;
    /**
     * This method returns the time of <em>misheyakir</em> based on the common calculation of the Syrian community in NY
     * that the <em>alos</em> is a fixed minute offset from day starting {@link #getAlos72Zmanis() 1/10th of the day}
     * before sunrise. The common offsets are 6 minutes (based on the <em>Pri Megadim</em>, but not linked to the
     * calculation of <em>Alos</em> as 1/10th of the day), 8 and 18 minutes (possibly attributed to
     * <em>Chacham Baruch Ben Haim</em>). Since there is no universal accepted offset, the user of this API will have to
     * <em><a href="https://en.wikipedia.org/wiki/Baruch_Ben_Haim">Chacham Baruch Ben Haim</a></em>). Since there is no
     * universal accepted offset, the user of this API will have to specify one. <em>Chacham Yosef Harari-Raful</em> of
     * <em>Yeshivat Ateret Torah</em> does not supply any <em>zman</em> for <em>misheyakir</em> and does not endorse any
     * specific calculation for <em>misheyakir</em>. For that reason, this method is not a public method.
     *
     * @param minutes
     *            the number of minutes after <em>alos</em> calculated as {@link #getAlos72Zmanis() 1/10th of the day}
     * @return the <code>Date</code> of <em>misheyakir</em>. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos72Zmanis()
     */
    /**
     * Method to return <em>tzais</em> (dusk) calculated as 72 minutes zmaniyos, or 1/10th of the day after
     * {@link #getSeaLevelSunset() sea level sunset}.This is the way that the <a href=
     * "https://en.wikipedia.org/wiki/Abraham_Cohen_Pimentel">Minchas Cohen</a> in Ma'amar 2:4 calculates Rebbeinu Tam's
     * time of <em>tzeis</em>. It should be noted that this calculation results in the shortest time from sunset to
     * <em>tzais</em> being during the winter solstice, the longest at the summer solstice and 72 clock minutes at the
     * equinox. This does not match reality, since there is no direct relationship between the length of the day and
     * twilight. The shortest twilight is during the equinox, the longest is during the the summer solstice, and in the
     * winter with the shortest daylight, the twilight period is longer than during the equinoxes.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos72Zmanis()
     */
    getTzais72Zmanis(): DateTime | null;
    /**
     * Method to return <em>tzais</em> (dusk) calculated using 90 minutes zmaniyos after {@link #getSeaLevelSunset() sea level sunset}.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos90Zmanis()
     */
    getTzais90Zmanis(): DateTime | null;
    /**
     * Method to return <em>tzais</em> (dusk) calculated using 96 minutes zmaniyos after {@link #getSeaLevelSunset() sea level sunset}.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos96Zmanis()
     */
    getTzais96Zmanis(): DateTime | null;
    /**
     * Method to return <em>tzais</em> (dusk) calculated as 90 minutes after sea level sunset. This method returns
     * <em>tzais</em> (nightfall) based on the opinion of the Magen Avraham that the time to walk the distance of a
     * <em>Mil</em> according to the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em>'s opinion
     * is 18 minutes for a total of 90 minutes based on the opinion of <em>Ula</em> who calculated <em>tzais</em> as 5
     * <em>Mil</em> after sea level shkiah (sunset). A similar calculation {@link #getTzais19Point8Degrees()}uses solar
     * position calculations based on this time.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getTzais19Point8Degrees()
     * @see #getAlos90()
     */
    getTzais90(): DateTime | null;
    /**
     * This method returns <em>tzais</em> (nightfall) based on the opinion of the <em>Magen Avraham</em> that the time
     * to walk the distance of a <em>Mil</em> according to the <em><a href="https://en.wikipedia.org/wiki/Maimonides"
     * >Rambam</a></em>'s opinion is 2/5 of an hour (24 minutes) for a total of 120 minutes based on the opinion of
     * <em>Ula</em> who calculated <em>tzais</em> as 5 <em>Mil</em> after sea level <em>shkiah</em> (sunset). A similar
     * calculation {@link #getTzais26Degrees()} uses temporal calculations based on this time.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getTzais26Degrees()
     * @see #getAlos120()
     */
    getTzais120(): DateTime | null;
    /**
     * Method to return <em>tzais</em> (dusk) calculated using 120 minutes zmaniyos after {@link #getSeaLevelSunset() sea level sunset}.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos120Zmanis()
     */
    getTzais120Zmanis(): DateTime | null;
    /**
     * This calculates the time of <em>tzais</em> at the point when the sun is 16.1&deg; below the horizon. This is
     * the sun's dip below the horizon 72 minutes after sunset according Rabbeinu Tam's calculation of <em>tzais</em>
     * around the equinox in Jerusalem. This is the opinion of Rabbi Meir Posen in the  <a href=
     * "https://www.worldcat.org/oclc/956316270">Ohr Meir</a> and others. See Yisrael Vehazmanim vol I, 34:1:4.
     * For information on how this is calculated see the comments on {@link #getAlos16Point1Degrees()}
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may
     *         not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getTzais72()
     * @see #getAlos16Point1Degrees() for more information on this calculation.
     */
    getTzais16Point1Degrees(): DateTime | null;
    /**
     * For information on how this is calculated see the comments on {@link #getAlos26Degrees()}
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may
     *         not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getTzais120()
     * @see #getAlos26Degrees()
     */
    getTzais26Degrees(): DateTime | null;
    /**
     * For information on how this is calculated see the comments on {@link #getAlos18Degrees()}
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may
     *         not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos18Degrees()
     */
    getTzais18Degrees(): DateTime | null;
    /**
     * For information on how this is calculated see the comments on {@link #getAlos19Point8Degrees()}
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may
     *         not reach low enough below the horizon for this calculation, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getTzais90()
     * @see #getAlos19Point8Degrees()
     */
    getTzais19Point8Degrees(): DateTime | null;
    /**
     * A method to return <em>tzais</em> (dusk) calculated as 96 minutes after sea level sunset. For information on how
     * this is calculated see the comments on {@link #getAlos96()}.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getAlos96()
     */
    getTzais96(): DateTime | null;
    /**
     * A method that returns the local time for fixed <em>chatzos</em>. This time is noon and midnight adjusted from
     * standard time to account for the local latitude. The 360&deg; of the globe divided by 24 calculates to 15&deg;
     * per hour with 4 minutes per degree, so at a longitude of 0 , 15, 30 etc... <em>Chatzos</em> in 12:00 noon.
     * Lakewood, N.J., whose longitude is -74.2094, is 0.7906 away from the closest multiple of 15 at -75&deg;. This is
     * multiplied by 4 to yield 3 minutes and 10 seconds for a <em>chatzos</em> of 11:56:50. This method is not tied to
     * the theoretical 15&deg; timezones, but will adjust to the actual timezone and <a
     * href="http://en.wikipedia.org/wiki/Daylight_saving_time">Daylight saving time</a>.
     *
     * @return the Date representing the local <em>chatzos</em>
     * @see GeoLocation#getLocalMeanTimeOffset()
     */
    getFixedLocalChatzos(): DateTime | null;
    /**
     * A method that returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) calculated as 3
     * hours before {@link #getFixedLocalChatzos()}.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em> calculated as 3 hours before
     *         {@link #getFixedLocalChatzos()}..
     * @see #getFixedLocalChatzos()
     * @see #getSofZmanTfilaFixedLocal()
     */
    getSofZmanShmaFixedLocal(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) calculated as 2 hours
     * before {@link #getFixedLocalChatzos()}.
     *
     * @return the <code>Date</code> of the latest <em>zman tfila</em>.
     * @see #getFixedLocalChatzos()
     * @see #getSofZmanShmaFixedLocal()
     */
    getSofZmanTfilaFixedLocal(): DateTime | null;
    /**
     * Returns the Date of the molad based time if it occurs on the current date.Since Kiddush Levana can only be said
     * during the day, there are parameters to limit it to between <em>alos</em> and <em>tzais</em>. If the time occurs
     * between alos and tzais, tzais will be returned
     *
     * @param moladBasedTime
     *            the molad based time such as molad, tchilas and sof zman Kiddush Levana
     * @param alos
     *            optional start of day to limit molad times to the end of the night before or beginning of the next night. Ignored if
     *            either this or tzais are null.
     * @param tzais
     *            optional end of day to limit molad times to the end of the night before or beginning of the next night. Ignored if
     *            either this or alos are null
     * @param techila
     *            is it the start of Kiddush Levana time or the end? If it is start roll it to the next <em>tzais</em>, and and if it
     *            is the end, return the end of the previous night (alos passed in). Ignored if either alos or tzais are null.
     * @return the molad based time. If the zman does not occur during the current date, null will be returned.
     */
    private getMoladBasedTime;
    /**
     * Returns the latest time of Kiddush Levana according to the <a
     * href="http://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> opinion that it is calculated as
     * halfway between molad and molad. This adds half the 29 days, 12 hours and 793 chalakim time between molad and
     * molad (14 days, 18 hours, 22 minutes and 666 milliseconds) to the month's molad. The sof zman Kiddush Levana
     * will be returned even if it occurs during the day. To limit the time to between <em>tzais</em> and <em>alos</em>,
     * see {@link #getSofZmanKidushLevanaBetweenMoldos(Date, Date)}.
     * This method is available in the current release of the API but may change or be removed in the future since it depends
     * on the still changing {@link JewishCalendar} and related classes, and adds a dependency to the hebrewcalendar package.
     *
     * @param alos
     *            the beginning of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending
     *            at tzais), the time returned will be alos. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @param tzais
     *            the end of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending at
     *            tzais), the time returned will be alos. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @return the Date representing the moment halfway between molad and molad. If the time occurs between
     *         <em>alos</em> and <em>tzais</em>, <em>alos</em> will be returned
     * @see #getSofZmanKidushLevanaBetweenMoldos()
     * @see #getSofZmanKidushLevana15Days(Date, Date)
     * @see JewishCalendar#getSofZmanKidushLevanaBetweenMoldos()
     */
    getSofZmanKidushLevanaBetweenMoldos(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
     * Returns the latest time of Kiddush Levana according to the <a
     * href="http://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> opinion that it is calculated as
     * halfway between molad and molad. This adds half the 29 days, 12 hours and 793 chalakim time between
     * <em>molad</em> and <em>molad</em> (14 days, 18 hours, 22 minutes and 666 milliseconds) to the month's molad. If
     * the time of <em>sof zman Kiddush Levana</em> occurs during the day (between
     * <em>{@link ZmanimCalendar#getAlos72() Alos}</em> and <em>{@link ZmanimCalendar#getTzais72() tzais}</em>) it
     * return the <em>alos</em> prior to the calculated <em>sof zman Kiddush Levana</em>. This method is available in
     * the 1.3 release of the API but may change or be removed in the future since it depends on the still changing
     * {@link JewishCalendar} and related classes.
     *
     * @return the Date representing the moment halfway between molad and molad. If the time occurs between
     *         <em>alos</em> and <em>tzais</em>, <em>alos</em> will be returned
     * @see #getSofZmanKidushLevanaBetweenMoldos(Date, Date)
     * @see #getSofZmanKidushLevana15Days()
     * @see JewishCalendar#getSofZmanKidushLevanaBetweenMoldos()
     */
    /**
     * Returns the latest time of <em>Kiddush Levana</em> calculated as 15 days after the <em>molad</em>. This is the
     * opinion brought down in the Shulchan Aruch (Orach Chaim 426). It should be noted that some opinions hold that the
     * <a href="http://en.wikipedia.org/wiki/Moses_Isserles">Rema</a> who brings down the opinion of the <a
     * href="http://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> of calculating
     * {@link #getSofZmanKidushLevanaBetweenMoldos(Date, Date) half way between molad and mold} is of the opinion that
     * Mechaber agrees to his opinion. Also see the Aruch Hashulchan. For additional details on the subject, See Rabbi
     * Dovid Heber's very detailed write-up in Siman Daled (chapter 4) of <a href="http://www.hebrewbooks.org/53000">Shaarei
     * Zmanim</a>. If the time of <em>sof zman Kiddush Levana</em> occurs during the day (between the <em>alos</em> and
     * <em>tzais</em> passed in as parameters), it returns the <em>alos</em> passed in. If a null alos or tzais are
     * passed to this method, the non-daytime adjusted time will be returned.
     * This method is available in the 1.3 release of the API but may change or be removed in the future since
     * it depends on the still changing {@link JewishCalendar} and related classes.
     * @todo Add hyperlinks to documentation.
     *
     * @param alos
     *            the beginning of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending
     *            at tzais), the time returned will be alos. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @param tzais
     *            the end of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending at
     *            tzais), the time returned will be alos. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @return the Date representing the moment 15 days after the molad. If the time occurs between <em>alos</em> and
     *         <em>tzais</em>, <em>alos</em> will be returned
     *
     * @see #getSofZmanKidushLevanaBetweenMoldos(Date, Date)
     * @see JewishCalendar#getSofZmanKidushLevana15Days()
     */
    getSofZmanKidushLevana15Days(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
     * Returns the latest time of Kiddush Levana calculated as 15 days after the molad. This is the opinion brought down
     * in the Shulchan Aruch (Orach Chaim 426). It should be noted that some opinions hold that the
     * <a href="http://en.wikipedia.org/wiki/Moses_Isserles">Rema</a> who brings down the opinion of the <a
     * href="http://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> of calculating
     * {@link #getSofZmanKidushLevanaBetweenMoldos(Date, Date) half way between molad and mold} is of the opinion that
     * Mechaber agrees to his opinion. Also see the Aruch Hashulchan. For additional details on the subject, See Rabbi
     * Dovid Heber's very detailed write-up in Siman Daled (chapter 4) of <a href="http://www.hebrewbooks.org/53000">Shaarei
     * Zmanim</a>. The sof zman Kiddush Levana will be returned even if it occurs during the day. To limit the time to
     * between <em>tzais</em> and <em>alos</em>, see {@link #getSofZmanKidushLevana15Days(Date, Date)}.
     * This method is available in the current release of the API but may change or be removed in the future since it depends
     * on the still changing {@link JewishCalendar} and related classes.
     *
     * @return the Date representing the moment 15 days after the <em>molad</em>. If the time occurs between
     *         <em>alos</em> and <em>tzais</em>, <em>alos</em> will be returned
     *
     * @see #getSofZmanKidushLevana15Days(Date, Date)
     * @see #getSofZmanKidushLevanaBetweenMoldos()
     * @see JewishCalendar#getSofZmanKidushLevana15Days()
     */
    /**
     * Returns the earliest time of <em>Kiddush Levana</em> according to <em>Rabbeinu Yonah</em>'s opinion that it can
     * be said 3 days after the molad.If the time of <em>tchilas zman Kiddush Levana</em> occurs during the day (between
     * <em>{@link ZmanimCalendar#getAlos72() Alos}</em> and <em>{@link ZmanimCalendar#getTzais72() tzais}</em>) it
     * return the next <em>tzais</em>. This method is available in the 1.3 release of the API but may change or be
     * removed in the future since it depends on the still changing {@link JewishCalendar} and related classes.
     *
     * @param alos
     *            the beginning of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending
     *            at tzais), the time returned will be tzais. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @param tzais
     *           the end of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending at
     *            tzais), the time returned will be tzais. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @return the Date representing the moment 3 days after the molad. If the time occurs between <em>alos</em> and
     *         <em>tzais</em>, <em>tzais</em> will be returned
     * @see #getTchilasZmanKidushLevana3Days()
     * @see #getTchilasZmanKidushLevana7Days(Date, Date)
     * @see JewishCalendar#getTchilasZmanKidushLevana3Days()
     */
    getTchilasZmanKidushLevana3Days(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
     * Returns the earliest time of <em>Kiddush Levana</em> according to <em>Rabbeinu Yonah</em>'s opinion that it can
     * be said 3 days after the molad.If the time of <em>tchilas zman Kiddush Levana</em> occurs during the day (between
     * <em>{@link ZmanimCalendar#getAlos72() Alos}</em> and <em>{@link ZmanimCalendar#getTzais72() tzais}</em>) it
     * return the next <em>tzais</em>. This method is available in the 1.3 release of the API but may change or be
     * removed in the future since it depends on the still changing {@link JewishCalendar} and related classes.
     *
     * @return the Date representing the moment 3 days after the molad. If the time occurs between <em>alos</em> and
     *         <em>tzais</em>, <em>tzais</em> will be returned
     * @see #getTchilasZmanKidushLevana3Days(Date, Date)
     * @see #getTchilasZmanKidushLevana7Days()
     * @see JewishCalendar#getTchilasZmanKidushLevana3Days()
     */
    /**
     * Returns the point in time of <em>Molad</em> as a <code>Date</code> Object. For the traditional day of week, hour,
     * minute and chalakim, {@link JewishCalendar#getMoladAsDate()} and the not yet completed
     * {@link HebrewDateFormatter} that will have formatting for this.
     *
     * @return the Date representing the moment of the molad. If the molad does not occur on this day, a null will be returned.
     *
     * @see #getTchilasZmanKidushLevana3Days()
     * see #getTchilasZmanKidushLevana7Days(Date, Date)
     * @see JewishCalendar#getMoladAsDate()
     */
    getZmanMolad(): DateTime | null;
    /**
     * Used by Molad based zmanim to determine if zmanim occur during the current day.
     * @see #getMoladBasedTime(Date, Date, Date, boolean)
     * @return previous midnight
     */
    private getMidnightLastNight;
    /**
     * Used by Molad based zmanim to determine if zmanim occur during the current day.
     * @see #getMoladBasedTime(Date, Date, Date, boolean)
     * @return following midnight
     */
    private getMidnightTonight;
    /**
     * Returns the earliest time of <em>Kiddush Levana</em> according to the opinions that it should not be said until 7
     * days after the molad. If the time of <em>tchilas zman Kiddush Levana</em> occurs during the day (between
     * <em>{@link ZmanimCalendar#getAlos72() Alos}</em> and <em>{@link ZmanimCalendar#getTzais72() tzais}</em>) it
     * return the next <em>tzais</em>. This method is available in the current release of the API but may change or be
     * removed in the future since it depends on the still changing {@link JewishCalendar} and related classes.
     *
     * @param alos
     *            the beginning of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending
     *            at tzais), the time returned will be tzais. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @param tzais
     *            the end of the Jewish day. If Kidush Levana occurs during the day (starting at alos and ending at
     *            tzais), the time returned will be tzais. If either the alos or tzais parameters are null, no daytime
     *            adjustment will be made.
     * @return the Date representing the moment 7 days after the molad. If the time occurs between <em>alos</em> and
     *         <em>tzais</em>, <em>tzais</em> will be returned
     * @see #getTchilasZmanKidushLevana3Days(Date, Date)
     * @see #getTchilasZmanKidushLevana7Days()
     * @see JewishCalendar#getTchilasZmanKidushLevana7Days()
     */
    getTchilasZmanKidushLevana7Days(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
     * Returns the earliest time of <em>Kiddush Levana</em> according to the opinions that it should not be said until 7
     * days after the molad. If the time of <em>tchilas zman Kiddush Levana</em> occurs during the day (between
     * <em>{@link ZmanimCalendar#getAlos72() Alos}</em> and <em>{@link ZmanimCalendar#getTzais72() tzais}</em>) it
     * return the next <em>tzais</em>. This method is available in the 1.3 release of the API but may change or be
     * removed in the future since it depends on the still changing {@link JewishCalendar} and related classes.
     *
     * @return the Date representing the moment 7 days after the molad. If the time occurs between <em>alos</em> and
     *         <em>tzais</em>, <em>tzais</em> will be returned
     * @see #getTchilasZmanKidushLevana7Days(Date, Date)
     * @see #getTchilasZmanKidushLevana3Days()
     * @see JewishCalendar#getTchilasZmanKidushLevana7Days()
     */
    /**
     * This method returns the latest time one is allowed eating chametz on Erev Pesach according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>. This time is identical to the {@link
      * #getSofZmanTfilaGRA() Sof zman tfilah GRA} and is provided as a convenience method for those who are unaware how
     * this zman is calculated. This time is 4 hours into the day based on the opinion of the <em><a href=
     * "https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em> that the day is calculated from sunrise to sunset. This
     * returns the time 4 * {@link #getShaahZmanisGra()} after {@link #getSeaLevelSunrise() sea level sunrise}.
     *
     * @see ZmanimCalendar#getShaahZmanisGra()
     * @see ZmanimCalendar#getSofZmanTfilaGRA()
     * @return the <code>Date</code> one is allowed eating chametz on Erev Pesach. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSofZmanAchilasChametzGRA(): DateTime | null;
    /**
     * This method returns the latest time one is allowed eating chametz on Erev Pesach according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos72() 72} minutes before {@link #getSunrise() sunrise}.
     * This time is identical to the {@link #getSofZmanTfilaMGA72Minutes() Sof zman tfilah MGA 72 minutes}. This time
     * is 4 <em>{@link #getShaahZmanisMGA() shaos zmaniyos}</em> (temporal hours) after {@link #getAlos72() dawn} based
     * on the opinion of the <em>MGA</em> that the day is calculated from a {@link #getAlos72() dawn} of 72 minutes
     * before sunrise to {@link #getTzais72() nightfall} of 72 minutes after sunset. This returns the time of 4 *
     * {@link #getShaahZmanisMGA()} after {@link #getAlos72() dawn}.
     *
     * @return the <code>Date</code> of the latest time of eating chametz. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set), a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanisMGA()
     * @see #getAlos72()
     * @see #getSofZmanTfilaMGA72Minutes()
     */
    getSofZmanAchilasChametzMGA72Minutes(): DateTime | null;
    /**
     * This method returns the latest time one is allowed eating chametz on Erev Pesach according to the opinion of the
     * of the <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos16Point1Degrees() 16.1&deg;} before
     * {@link #getSunrise() sunrise}. This time is 4 <em>{@link #getShaahZmanis16Point1Degrees() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos16Point1Degrees() dawn} based on the opinion of the <em>MGA</em> that the day
     * is calculated from dawn to nightfall with both being 16.1&deg; below sunrise or sunset. This returns the time of
     * 4 {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest time of eating chametz. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getAlos16Point1Degrees()
     * @see #getSofZmanTfilaMGA16Point1Degrees()
     */
    getSofZmanAchilasChametzMGA16Point1Degrees(): DateTime | null;
    /**
     * This method returns the latest time for burning chametz on Erev Pesach according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em> This time is 5 hours into the day based on the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em> that the day is calculated from sunrise to sunset. This returns the
     * time 5 * {@link #getShaahZmanisGra()} after {@link #getSeaLevelSunrise() sea level sunrise}.
     *
     * @see ZmanimCalendar#getShaahZmanisGra()
     * @return the <code>Date</code> of the latest time for burning chametz on Erev Pesach. If the calculation can't be
     *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
     *         and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSofZmanBiurChametzGRA(): DateTime | null;
    /**
     * This method returns the latest time for burning chametz on Erev Pesach according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos72() 72} minutes before {@link #getSunrise() sunrise}.
     * This time is 5 <em>{@link #getShaahZmanisMGA() shaos zmaniyos}</em> (temporal hours) after {@link #getAlos72()
       * dawn} based on the opinion of the <em>MGA</em> that the day is calculated from a {@link #getAlos72() dawn} of 72
     * minutes before sunrise to {@link #getTzais72() nightfall} of 72 minutes after sunset. This returns the time of 5
     * * {@link #getShaahZmanisMGA()} after {@link #getAlos72() dawn}.
     *
     * @return the <code>Date</code> of the latest time for burning chametz on Erev Pesach. If the calculation can't be
     *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
     *         and one where it does not set), a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanisMGA()
     * @see #getAlos72()
     */
    getSofZmanBiurChametzMGA72Minutes(): DateTime | null;
    /**
     * This method returns the latest time for burning <em>chametz</em> on <em>Erev Pesach</em> according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on <em>alos</em> being {@link #getAlos16Point1Degrees() 16.1&deg;} before
     * {@link #getSunrise() sunrise}. This time is 5 <em>{@link #getShaahZmanis16Point1Degrees() shaos zmaniyos}</em>
     * (solar hours) after {@link #getAlos16Point1Degrees() dawn} based on the opinion of the <em>MGA</em> that the day
     * is calculated from dawn to nightfall with both being 16.1&deg; below sunrise or sunset. This returns the time of
     * 5 {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() dawn}.
     *
     * @return the <code>Date</code> of the latest time for burning chametz on Erev Pesach. If the calculation can't be
     *         computed such as northern and southern locations even south of the Arctic Circle and north of the
     *         Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a null
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getAlos16Point1Degrees()
     */
    getSofZmanBiurChametzMGA16Point1Degrees(): DateTime | null;
    /**
     * A method that returns "solar" midnight, or the time when the sun is at its <a
     * href="http://en.wikipedia.org/wiki/Nadir">nadir</a>.
     * <b>Note:</b> this method is experimental and might be removed.
     *
     * @return the <code>Date</code> of Solar Midnight (chatzos layla). If the calculation can't be computed such as in
     *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSolarMidnight(): DateTime | null;
    /**
     * A method that returns the <em><a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a></em>'s
     * <em>netz amiti</em> (sunrise) without {@link AstronomicalCalculator#getElevationAdjustment(double)
       * elevation adjustment}. This forms the base for the <em>Baal Hatanya</em>'s dawn based calculations that are
     * calculated as a dip below the horizon before sunrise.
     *
     * According to the <em>Baal Hatanya</em>, <em>netz amiti</em>, or true (halachic) sunrise, is when the top of the sun's
     * disk is visible at an elevation similar to the mountains of Eretz Yisrael. The time is calculated as the point at which
     * the center of the sun's disk is 1.583&deg; below the horizon. This degree based calculation can be found in Rabbi Shalom
     * DovBer Levine's commentary on The <a href="http://www.chabadlibrary.org/books/pdf/Seder-Hachnosas-Shabbos.pdf">Baal
     * Hatanya's Seder Hachnasas Shabbos</a>. From an elevation of 546 meters, the top of <a href=
     * "https://en.wikipedia.org/wiki/Mount_Carmel">Har Hacarmel</a>, the sun disappears when it is 1&deg; 35' or 1.583&deg;
     * below the sea level horizon. This in turn is based on the Gemara <a href=
     * "http://www.hebrewbooks.org/shas.aspx?mesechta=2&amp;daf=35">Shabbos 35a</a>. There are other opinions brought down by
     * Rabbi Levine, including Rabbi Yosef Yitzchok
     * Feigelstock who calculates it as the degrees below the horizon 4 minutes after sunset in Yerushalaym (on the equinox). That
     * is brought down as 1.583&deg;. This is identical to the 1&deg; 35' zman and is probably a typo and should be 1.683&deg;.
     * These calculations are used by most <a href="https://en.wikipedia.org/wiki/Chabad">Chabad</a> calendars that use the
     * <em>Baal Hatanya</em>'s Zmanim. See
     * <a href="https://www.chabad.org/library/article_cdo/aid/3209349/jewish/About-Our-Zmanim-Calculations.htm">About Our Zmanim
     * Calculations @ Chabad.org</a>.
     *
     * Note: <em>netz amiti</em> is used only for calculating certain zmanim, and is intentionally unpublished. For practical purposes,
     * daytime mitzvos like shofar and lulav should not be done until after the published time for netz-sunrise.
     *
     * @return the <code>Date</code> representing the exact sea-level <em>netz amiti</em> (sunrise) time. If the calculation can't be
     *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the page.
     *
     * @see #getSunrise()
     * @see #getSeaLevelSunrise()
     * @see #getSunsetBaalHatanya()
     * @see #ZENITH_1_POINT_583
     */
    private getSunriseBaalHatanya;
    /**
     * A method that returns the <em><a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a></em>'s
     * <em>shkiah amiti</em> (sunset) without {@link AstronomicalCalculator#getElevationAdjustment(double)
       * elevation adjustment}. This forms the base for the <em>Baal Hatanya</em>'s  dusk based calculations that are calculated
     * as a dip below the horizon after sunset.
     *
     * According to the <em>Baal Hatanya</em>, <em>shkiah amiti</em>, true (halachic) sunset, is when the top of the
     * sun's disk disappears from view at an elevation similar to the mountains of Eretz Yisrael.
     * This time is calculated as the point at which the center of the sun's disk is 1.583 degrees below the horizon.
     *
     * Note: <em>shkiah amiti</em> is used only for calculating certain zmanim, and is intentionally unpublished. For practical
     * purposes, all daytime mitzvos should be completed before the published time for shkiah-sunset.
     *
     * For further explanation of the calculations used for the <em>Baal Hatanya</em>'s Zmanim in this library, see
     * <a href="https://www.chabad.org/library/article_cdo/aid/3209349/jewish/About-Our-Zmanim-Calculations.htm">About Our Zmanim
     * Calculations @ Chabad.org</a>.
     *
     * @return the <code>Date</code> representing the exact sea-level <em>shkiah amiti</em> (sunset) time. If the calculation
     *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getSunset()
     * @see #getSeaLevelSunset()
     * @see #getSunriseBaalHatanya()
     * @see #ZENITH_1_POINT_583
     */
    private getSunsetBaalHatanya;
    /**
     * A method that returns the <em><a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a></em>'s
     * a <em>shaah zmanis</em> ({@link #getTemporalHour(Date, Date) temporal hour}). This forms the base for the
     * <em>Baal Hatanya</em>'s  day  based calculations that are calculated
     * as a 1.583&deg; dip below the horizon after sunset.
     *
     * According to the <em>Baal Hatanya</em>, <em>shkiah amiti</em>, true (halachic) sunset, is when the top of the
     * sun's disk disappears from view at an elevation similar to the mountains of Eretz Yisrael.
     * This time is calculated as the point at which the center of the sun's disk is 1.583 degrees below the horizon.
     *
     * A method that returns a <em>shaah zmanis</em> ( {@link #getTemporalHour(Date, Date) temporal hour}) calculated
     * based on the <em><a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a></em>'s <em>netz
     * amiti</em> and <em>shkiah amiti</em> using a dip of 1.583&deg; below the sea level horizon. This calculation divides
     * the day based on the opinion of the <em>Baal Hatanya</em> that the day runs from {@link #getSunriseBaalHatanya()
       * netz amiti} to {@link #getSunsetBaalHatanya() shkiah amiti}. The calculations are based on a day from {@link
      * #getSunriseBaalHatanya() sea level netz amiti} to {@link #getSunsetBaalHatanya() sea level shkiah amiti}. The day
     * is split into 12 equal parts with each one being a <em>shaah zmanis</em>. This method is similar to {@link
      * #getTemporalHour}, but all calculations are based on a sea level sunrise and sunset.
     * @todo Copy sunrise and sunset comments here as applicable.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em> calculated from
     *         {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)} to {@link #getSunsetBaalHatanya() <em>shkiah amiti</em>
       *         ("real" sunset)}. If the calculation can't be computed such as in the Arctic Circle where there is at least one day a
     *         year where the sun does not rise, and one where it does not set, {@link Long#MIN_VALUE} will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getTemporalHour(Date, Date)
     * @see #getSunriseBaalHatanya()
     * @see #getSunsetBaalHatanya()
     * @see #ZENITH_1_POINT_583
     */
    getShaahZmanisBaalHatanya(): number;
    /**
     * Returns the <em><a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a></em>'s <em>alos</em> (dawn)
     * calculated as the time when the sun is 16.9&deg; below the eastern
     * {@link #GEOMETRIC_ZENITH geometric horizon} before {@link #getSunrise sunrise}. For more information the source
     * of 16.9&deg; see {@link #ZENITH_16_POINT_9}.
     *
     * @see #ZENITH_16_POINT_9
     * @return The <code>Date</code> of dawn. If the calculation can't be computed such as northern and southern
     *         locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not reach
     *         low enough below the horizon for this calculation, a null will be returned. See detailed explanation on
     *         top of the {@link AstronomicalCalendar} documentation.
     */
    getAlosBaalHatanya(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning). This time is 3
     * <em>{@link #getShaahZmanisBaalHatanya() shaos zmaniyos}</em> (solar hours) after {@link #getSunriseBaalHatanya()
   * <em>netz amiti</em> (sunrise)} based on the opinion of the <em>Baal Hatanya</em> that the day is calculated from
     * sunrise to sunset. This returns the time 3 * {@link #getShaahZmanisBaalHatanya()} after {@link #getSunriseBaalHatanya()
   * <em>netz amiti</em> (sunrise)}.
     *
     * @see ZmanimCalendar#getSofZmanShma(Date, Date)
     * @see #getShaahZmanisBaalHatanya()
     * @return the <code>Date</code> of the latest zman shema according to the Baal Hatanya. If the calculation
     *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does
     *         not rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSofZmanShmaBaalHatanya(): DateTime | null;
    /**
     * This method returns the latest <em>zman tefilah</em> (time to recite the morning prayers). This time is 4
     * hours into the day based on the opinion of the <em>Baal Hatanya</em> that the day is
     * calculated from sunrise to sunset. This returns the time 4 * {@link #getShaahZmanisBaalHatanya()} after
     * {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
     *
     * @see ZmanimCalendar#getSofZmanTfila(Date, Date)
     * @see #getShaahZmanisBaalHatanya()
     * @return the <code>Date</code> of the latest zman tefilah. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getSofZmanTfilaBaalHatanya(): DateTime | null;
    /**
     * This method returns the latest time one is allowed eating chametz on Erev Pesach according to the opinion of the
     * <em>Baal Hatanya</em>. This time is identical to the {@link #getSofZmanTfilaBaalHatanya() Sof zman
       * tefilah Baal Hatanya}. This time is 4 hours into the day based on the opinion of the <em>Baal
     * Hatanya</em> that the day is calculated from sunrise to sunset. This returns the time 4 *
     * {@link #getShaahZmanisBaalHatanya()} after {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
     *
     * @see #getShaahZmanisBaalHatanya()
     * @see #getSofZmanTfilaBaalHatanya()
     * @return the <code>Date</code> one is allowed eating chametz on Erev Pesach. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSofZmanAchilasChametzBaalHatanya(): DateTime | null;
    /**
     * This method returns the latest time for burning chametz on Erev Pesach according to the opinion of the
     * <em>Baal Hatanya</em>. This time is 5 hours into the day based on the opinion of the
     * <em>Baal Hatanya</em> that the day is calculated from sunrise to sunset. This returns the
     * time 5 * {@link #getShaahZmanisBaalHatanya()} after {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
     *
     * @see #getShaahZmanisBaalHatanya()
     * @return the <code>Date</code> of the latest time for burning chametz on Erev Pesach. If the calculation can't be
     *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
     *         and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSofZmanBiurChametzBaalHatanya(): DateTime | null;
    /**
     * This method returns the time of <em>mincha gedola</em>. <em>Mincha gedola</em> is the earliest time one can pray
     * mincha. The <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> is of the opinion that it is
     * better to delay <em>mincha</em> until <em>{@link #getMinchaKetanaBaalHatanya() mincha ketana}</em> while the
     * <em><a href="https://en.wikipedia.org/wiki/Asher_ben_Jehiel">Ra"sh</a></em>,
     * <em><a href="https://en.wikipedia.org/wiki/Jacob_ben_Asher">Tur</a></em>, <em><a href=
     * "https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em> and others are of the opinion that <em>mincha</em> can be prayed
     * <em>lechatchila</em> starting at <em>mincha gedola</em>. This is calculated as 6.5 {@link #getShaahZmanisBaalHatanya()
       * sea level solar hours} after {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}. This calculation is based
     * on the opinion of the <em>Baal Hatanya</em> that the day is calculated from sunrise to sunset. This returns the time 6.5 *
     * {@link #getShaahZmanisBaalHatanya()} after {@link #getSunriseBaalHatanya() <em>netz amiti</em> ("real" sunrise)}.
     *
     * @see #getMinchaGedola(Date, Date)
     * @see #getShaahZmanisBaalHatanya()
     * @see #getMinchaKetanaBaalHatanya()
     * @return the <code>Date</code> of the time of mincha gedola. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaGedolaBaalHatanya(): DateTime | null;
    /**
     * This is a conveniance method that returns the later of {@link #getMinchaGedolaBaalHatanya()} and
     * {@link #getMinchaGedola30Minutes()}. In the winter when 1/2 of a <em>{@link #getShaahZmanisBaalHatanya() shaah zmanis}</em> is
     * less than 30 minutes {@link #getMinchaGedola30Minutes()} will be returned, otherwise {@link #getMinchaGedolaBaalHatanya()}
     * will be returned.
     *
     * @return the <code>Date</code> of the later of {@link #getMinchaGedolaBaalHatanya()} and {@link #getMinchaGedola30Minutes()}.
     *         If the calculation can't be computed such as in the Arctic Circle where there is at least one day a year
     *         where the sun does not rise, and one where it does not set, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaGedolaBaalHatanyaGreaterThan30(): DateTime | null;
    /**
     * This method returns the time of <em>mincha ketana</em>. This is the preferred earliest time to pray
     * <em>mincha</em> in the opinion of the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others.
     * For more information on this see the documentation on <em>{@link #getMinchaGedolaBaalHatanya() mincha gedola}</em>.
     * This is calculated as 9.5 {@link #getShaahZmanisBaalHatanya()  sea level solar hours} after {@link #getSunriseBaalHatanya()
       * <em>netz amiti</em> (sunrise)}. This calculation is calculated based on the opinion of the <em>Baal Hatanya</em> that the
     * day is calculated from sunrise to sunset. This returns the time 9.5 * {@link #getShaahZmanisBaalHatanya()} after {@link
      * #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
     *
     * @see #getMinchaKetana(Date, Date)
     * @see #getShaahZmanisBaalHatanya()
     * @see #getMinchaGedolaBaalHatanya()
     * @return the <code>Date</code> of the time of mincha ketana. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaKetanaBaalHatanya(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em>. This is calculated as 10.75 hours after sunrise. This
     * calculation is based on the opinion of the <em>Baal Hatanya</em> that the day is calculated
     * from sunrise to sunset. This returns the time 10.75 * {@link #getShaahZmanisBaalHatanya()} after
     * {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
     *
     * @see #getPlagHamincha(Date, Date)
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getPlagHaminchaBaalHatanya(): DateTime | null;
    /**
     * A method that returns <em>tzais</em> (nightfall) when the sun is 6&deg; below the western geometric horizon
     * (90&deg;) after {@link #getSunset sunset}. For information on the source of this calculation see
     * {@link #ZENITH_6_DEGREES}.
     *
     * @return The <code>Date</code> of nightfall. If the calculation can't be computed such as northern and southern
     *         locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not reach
     *         low enough below the horizon for this calculation, a null will be returned. See detailed explanation on
     *         top of the {@link AstronomicalCalendar} documentation.
     * @see #ZENITH_6_DEGREES
     */
    getTzaisBaalHatanya(): DateTime | null;
    getClassName(): string;
}