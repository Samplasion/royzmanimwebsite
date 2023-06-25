import * as _Luxon from 'luxon';
import { DateTime } from 'luxon';

/**
 * A class that represents a numeric time. Times that represent a time of day are stored as {@link java.util.Date}s in
 * this API. The time class is used to represent numeric time such as the time in hours, minutes, seconds and
 * milliseconds of a {@link AstronomicalCalendar#getTemporalHour() temporal hour}.
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2011
 * @version 0.9.0
 */
declare class Time {
    /** milliseconds in a second. */
    private static readonly SECOND_MILLIS;
    /** milliseconds in a minute. */
    private static readonly MINUTE_MILLIS;
    /** milliseconds in an hour. */
    private static readonly HOUR_MILLIS;
    /**
     * @see #getHours()
     */
    private hours;
    /**
     * @see #getMinutes()
     */
    private minutes;
    /**
     * @see #getSeconds()
     */
    private seconds;
    /**
     * @see #getMilliseconds()
     */
    private milliseconds;
    /**
     * @see #isNegative()
     * @see #setIsNegative(boolean)
     */
    private negative;
    /**
     * Constructor with parameters for the hours, minutes, seconds and millisecods.
     *
     * @param hours the hours to set
     * @param minutes the minutes to set
     * @param seconds the seconds to set
     * @param milliseconds the milliseconds to set
     */
    constructor(hours: number, minutes: number, seconds: number, milliseconds: number);
    /**
     * A constructor that sets the time by milliseconds. The milliseconds are converted to hours, minutes, seconds
     * and milliseconds. If the milliseconds are negative it will call {@link #setIsNegative(boolean)}.
     * @param millis the milliseconds to set.
     */
    constructor(millis: number);
    /**
     * Does the time represent a negative time 9such as using this to subtract time from another Time.
     * @return if the time is negative.
     */
    isNegative(): boolean;
    /**
     * Set this to represent a negative time.
     * @param isNegative that the Time represents negative time
     */
    setIsNegative(isNegative: boolean): void;
    /**
     * @return Returns the hour.
     */
    getHours(): number;
    /**
     * @param hours
     *            The hours to set.
     */
    setHours(hours: number): void;
    /**
     * @return Returns the minutes.
     */
    getMinutes(): number;
    /**
     * @param minutes
     *            The minutes to set.
     */
    setMinutes(minutes: number): void;
    /**
     * @return Returns the seconds.
     */
    getSeconds(): number;
    /**
     * @param seconds
     *            The seconds to set.
     */
    setSeconds(seconds: number): void;
    /**
     * @return Returns the milliseconds.
     */
    getMilliseconds(): number;
    /**
     * @param milliseconds
     *            The milliseconds to set.
     */
    setMilliseconds(milliseconds: number): void;
    /**
     * Returns the time in milliseconds by converting hours, minutes and seconds into milliseconds.
     * @return the time in milliseconds
     */
    getTime(): number;
    /**
     * @deprecated This depends on a circular dependency. Use <pre>new ZmanimFormatter(TimeZone.getTimeZone("UTC")).format(time)</pre> instead.
     */
    toString(): string;
}

/**
 * A class that contains location information such as latitude and longitude required for astronomical calculations. The
 * elevation field may not be used by some calculation engines and would be ignored if set. Check the documentation for
 * specific implementations of the {@link AstronomicalCalculator} to see if elevation is calculated as part of the
 * algorithm.
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2016
 * @version 1.1
 */
declare class GeoLocation {
    /**
     * @see #getLatitude()
     * @see #setLatitude(double)
     * @see #setLatitude(int, int, double, String)
     */
    private latitude;
    /**
     * @see #getLongitude()
     * @see #setLongitude(double)
     * @see #setLongitude(int, int, double, String)
     */
    private longitude;
    /**
     * @see #getLocationName()
     * @see #setLocationName(String)
     */
    private locationName;
    /**
     * @see #getTimeZone()
     * @see #setTimeZone(TimeZone)
     */
    private timeZoneId;
    /**
     * @see #getElevation()
     * @see #setElevation(double)
     */
    private elevation;
    /**
     * Constant for a distance type calculation.
     * @see #getGeodesicDistance(GeoLocation)
     */
    private static readonly DISTANCE;
    /**
     * Constant for a initial bearing type calculation.
     * @see #getGeodesicInitialBearing(GeoLocation)
     */
    private static readonly INITIAL_BEARING;
    /**
     * Constant for a final bearing type calculation.
     * @see #getGeodesicFinalBearing(GeoLocation)
     */
    private static readonly FINAL_BEARING;
    /** constant for milliseconds in a minute (60,000) */
    private static readonly MINUTE_MILLIS;
    /** constant for milliseconds in an hour (3,600,000) */
    private static readonly HOUR_MILLIS;
    /**
     * Method to get the elevation in Meters.
     *
     * @return Returns the elevation in Meters.
     */
    getElevation(): number;
    /**
     * Method to set the elevation in Meters <b>above </b> sea level.
     *
     * @param elevation
     *            The elevation to set in Meters. An IllegalArgumentException will be thrown if the value is a negative.
     */
    setElevation(elevation: number): void;
    /**
     * GeoLocation constructor with parameters for all required fields.
     *
     * @param name
     *            The location name for display use such as &quot;Lakewood, NJ&quot;
     * @param latitude
     *            the latitude in a double format such as 40.095965 for Lakewood, NJ.
     *            <b>Note: </b> For latitudes south of the equator, a negative value should be used.
     * @param longitude
     *            double the longitude in a double format such as -74.222130 for Lakewood, NJ.
     *            <b>Note: </b> For longitudes east of the <a href="http://en.wikipedia.org/wiki/Prime_Meridian">Prime
     *            Meridian </a> (Greenwich), a negative value should be used.
     * @param timeZone
     *            the <code>TimeZone</code> for the location.
     */
    /**
     * GeoLocation constructor with parameters for all required fields.
     *
     * @param name
     *            The location name for display use such as &quot;Lakewood, NJ&quot;
     * @param latitude
     *            the latitude in a double format such as 40.095965 for Lakewood, NJ.
     *            <b>Note: </b> For latitudes south of the equator, a negative value should be used.
     * @param longitude
     *            double the longitude in a double format such as -74.222130 for Lakewood, NJ.
     *            <b>Note: </b> For longitudes east of the <a href="http://en.wikipedia.org/wiki/Prime_Meridian">Prime
     *            Meridian </a> (Greenwich), a negative value should be used.
     * @param elevation
     *            the elevation above sea level in Meters. Elevation is not used in most algorithms used for calculating
     *            sunrise and set.
     * @param timeZoneId
     *            the <code>TimeZone</code> for the location.
     */
    constructor(name: string | null, latitude: number, longitude: number, elevation: number, timeZoneId?: string);
    constructor(name: string | null, latitude: number, longitude: number, timeZoneId: string);
    constructor();
    /**
     * Default GeoLocation constructor will set location to the Prime Meridian at Greenwich, England and a TimeZone of
     * GMT. The longitude will be set to 0 and the latitude will be 51.4772 to match the location of the <a
     * href="http://www.rog.nmm.ac.uk">Royal Observatory, Greenwich </a>. No daylight savings time will be used.
     */
    /**
     * Method to set the latitude.
     *
     * @param latitude
     *            The degrees of latitude to set. The values should be between -90&deg; and 90&deg;. An
     *            IllegalArgumentException will be thrown if the value exceeds the limit. For example 40.095965 would be
     *            used for Lakewood, NJ. <b>Note: </b> For latitudes south of the equator, a negative value should be
     *            used.
     */
    /**
     * Method to set the latitude in degrees, minutes and seconds.
     *
     * @param degrees
     *            The degrees of latitude to set between 0&deg; and 90&deg;. For example 40 would be used for Lakewood, NJ.
     *            An IllegalArgumentException will be thrown if the value exceeds the limit.
     * @param minutes
     *            <a href="http://en.wikipedia.org/wiki/Minute_of_arc#Cartography">minutes of arc</a>
     * @param seconds
     *            <a href="http://en.wikipedia.org/wiki/Minute_of_arc#Cartography">seconds of arc</a>
     * @param direction
     *            N for north and S for south. An IllegalArgumentException will be thrown if the value is not S or N.
     */
    setLatitude(degrees: number, minutes: number, seconds: number, direction: 'N' | 'S'): void;
    setLatitude(latitude: number): void;
    /**
     * @return Returns the latitude.
     */
    getLatitude(): number;
    /**
     * Method to set the longitude in a double format.
     *
     * @param longitude
     *            The degrees of longitude to set in a double format between -180&deg; and 180&deg;. An
     *            IllegalArgumentException will be thrown if the value exceeds the limit. For example -74.2094 would be
     *            used for Lakewood, NJ. Note: for longitudes east of the <a
     *            href="http://en.wikipedia.org/wiki/Prime_Meridian">Prime Meridian</a> (Greenwich) a negative value
     *            should be used.
     */
    /**
     * Method to set the longitude in degrees, minutes and seconds.
     *
     * @param degrees
     *            The degrees of longitude to set between 0&deg; and 180&deg;. As an example 74 would be set for Lakewood, NJ.
     *            An IllegalArgumentException will be thrown if the value exceeds the limits.
     * @param minutes
     *            <a href="http://en.wikipedia.org/wiki/Minute_of_arc#Cartography">minutes of arc</a>
     * @param seconds
     *            <a href="http://en.wikipedia.org/wiki/Minute_of_arc#Cartography">seconds of arc</a>
     * @param direction
     *            E for east of the <a href="http://en.wikipedia.org/wiki/Prime_Meridian">Prime Meridian </a> or W for west of it.
     *            An IllegalArgumentException will be thrown if
     *            the value is not E or W.
     */
    setLongitude(degrees: number, minutes: number, seconds: number, direction: 'E' | 'W'): void;
    setLongitude(longitude: number): void;
    /**
     * @return Returns the longitude.
     */
    getLongitude(): number;
    /**
     * @return Returns the location name.
     */
    getLocationName(): string | null;
    /**
     * @param name
     *            The setter method for the display name.
     */
    setLocationName(name: string | null): void;
    /**
     * @return Returns the timeZone.
     */
    getTimeZone(): string;
    /**
     * Method to set the TimeZone. If this is ever set after the GeoLocation is set in the
     * {@link AstronomicalCalendar}, it is critical that
     * {@link AstronomicalCalendar#getCalendar()}.
     * {@link java.util.Calendar#setTimeZone(TimeZone) setTimeZone(TimeZone)} be called in order for the
     * AstronomicalCalendar to output times in the expected offset. This situation will arise if the
     * AstronomicalCalendar is ever {@link AstronomicalCalendar#clone() cloned}.
     *
     * @param timeZone
     *            The timeZone to set.
     */
    setTimeZone(timeZoneId: string): void;
    /**
     * A method that will return the location's local mean time offset in milliseconds from local <a
     * href="http://en.wikipedia.org/wiki/Standard_time">standard time</a>. The globe is split into 360&deg;, with
     * 15&deg; per hour of the day. For a local that is at a longitude that is evenly divisible by 15 (longitude % 15 ==
     * 0), at solar {@link AstronomicalCalendar#getSunTransit() noon} (with adjustment for the <a
     * href="http://en.wikipedia.org/wiki/Equation_of_time">equation of time</a>) the sun should be directly overhead,
     * so a user who is 1&deg; west of this will have noon at 4 minutes after standard time noon, and conversely, a user
     * who is 1&deg; east of the 15&deg; longitude will have noon at 11:56 AM. Lakewood, N.J., whose longitude is
     * -74.2094, is 0.7906 away from the closest multiple of 15 at -75&deg;. This is multiplied by 4 to yield 3 minutes
     * and 10 seconds earlier than standard time. The offset returned does not account for the <a
     * href="http://en.wikipedia.org/wiki/Daylight_saving_time">Daylight saving time</a> offset since this class is
     * unaware of dates.
     *
     * @return the offset in milliseconds not accounting for Daylight saving time. A positive value will be returned
     *         East of the 15&deg; timezone line, and a negative value West of it.
     * @since 1.1
     */
    getLocalMeanTimeOffset(): number;
    /**
     * Adjust the date for <a href="https://en.wikipedia.org/wiki/180th_meridian">antimeridian</a> crossover. This is
     * needed to deal with edge cases such as Samoa that use a different calendar date than expected based on their
     * geographic location.
     *
     * The actual Time Zone offset may deviate from the expected offset based on the longitude. Since the 'absolute time'
     * calculations are always based on longitudinal offset from UTC for a given date, the date is presumed to only
     * increase East of the Prime Meridian, and to only decrease West of it. For Time Zones that cross the antimeridian,
     * the date will be artificially adjusted before calculation to conform with this presumption.
     *
     * For example, Apia, Samoa with a longitude of -171.75 uses a local offset of +14:00.  When calculating sunrise for
     * 2018-02-03, the calculator should operate using 2018-02-02 since the expected zone is -11.  After determining the
     * UTC time, the local DST offset of <a href="https://en.wikipedia.org/wiki/UTC%2B14:00">UTC+14:00</a> should be applied
     * to bring the date back to 2018-02-03.
     *
     * @return the number of days to adjust the date This will typically be 0 unless the date crosses the antimeridian
     */
    getAntimeridianAdjustment(): -1 | 1 | 0;
    /**
     * Calculate the initial <a href="http://en.wikipedia.org/wiki/Great_circle">geodesic</a> bearing between this
     * Object and a second Object passed to this method using <a
     * href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus Vincenty's</a> inverse formula See T Vincenty, "<a
     * href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and Inverse Solutions of Geodesics on the Ellipsoid
     * with application of nested equations</a>", Survey Review, vol XXII no 176, 1975
     *
     * @param location
     *            the destination location
     * @return the initial bearing
     */
    getGeodesicInitialBearing(location: GeoLocation): number;
    /**
     * Calculate the final <a href="http://en.wikipedia.org/wiki/Great_circle">geodesic</a> bearing between this Object
     * and a second Object passed to this method using <a href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus
     * Vincenty's</a> inverse formula See T Vincenty, "<a href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and
     * Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations</a>", Survey Review, vol
     * XXII no 176, 1975
     *
     * @param location
     *            the destination location
     * @return the final bearing
     */
    getGeodesicFinalBearing(location: GeoLocation): number;
    /**
     * Calculate <a href="http://en.wikipedia.org/wiki/Great-circle_distance">geodesic distance</a> in Meters between
     * this Object and a second Object passed to this method using <a
     * href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus Vincenty's</a> inverse formula See T Vincenty, "<a
     * href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and Inverse Solutions of Geodesics on the Ellipsoid
     * with application of nested equations</a>", Survey Review, vol XXII no 176, 1975
     *
     * @see #vincentyFormula(GeoLocation, int)
     * @param location
     *            the destination location
     * @return the geodesic distance in Meters
     */
    getGeodesicDistance(location: GeoLocation): number;
    /**
     * Calculate <a href="http://en.wikipedia.org/wiki/Great-circle_distance">geodesic distance</a> in Meters between
     * this Object and a second Object passed to this method using <a
     * href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus Vincenty's</a> inverse formula See T Vincenty, "<a
     * href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and Inverse Solutions of Geodesics on the Ellipsoid
     * with application of nested equations</a>", Survey Review, vol XXII no 176, 1975
     *
     * @param location
     *            the destination location
     * @param formula
     *            This formula calculates initial bearing ({@link #INITIAL_BEARING}), final bearing (
     *            {@link #FINAL_BEARING}) and distance ({@link #DISTANCE}).
     * @return geodesic distance in Meters
     */
    private vincentyFormula;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Rhumb_line">rhumb line</a> bearing from the current location to
     * the GeoLocation passed in.
     *
     * @param location
     *            destination location
     * @return the bearing in degrees
     */
    getRhumbLineBearing(location: GeoLocation): number;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Rhumb_line">rhumb line</a> distance from the current location
     * to the GeoLocation passed in.
     *
     * @param location
     *            the destination location
     * @return the distance in Meters
     */
    getRhumbLineDistance(location: GeoLocation): number;
    /**
     * A method that returns an XML formatted <code>String</code> representing the serialized <code>Object</code>. Very
     * similar to the toString method but the return value is in an xml format. The format currently used (subject to
     * change) is:
     *
     * <pre>
     *   &lt;GeoLocation&gt;
     *        &lt;LocationName&gt;Lakewood, NJ&lt;/LocationName&gt;
     *        &lt;Latitude&gt;40.0828&amp;deg&lt;/Latitude&gt;
     *        &lt;Longitude&gt;-74.2094&amp;deg&lt;/Longitude&gt;
     *        &lt;Elevation&gt;0 Meters&lt;/Elevation&gt;
     *        &lt;TimezoneName&gt;America/New_York&lt;/TimezoneName&gt;
     *        &lt;TimeZoneDisplayName&gt;Eastern Standard Time&lt;/TimeZoneDisplayName&gt;
     *        &lt;TimezoneGMTOffset&gt;-5&lt;/TimezoneGMTOffset&gt;
     *        &lt;TimezoneDSTOffset&gt;1&lt;/TimezoneDSTOffset&gt;
     *   &lt;/GeoLocation&gt;
     * </pre>
     *
     * @return The XML formatted <code>String</code>.
     * @deprecated
     */
    toXML(): void;
    /**
     * @see java.lang.Object#equals(Object)
     */
    equals(object: object): boolean;
    /**
     * @see java.lang.Object#toString()
     */
    toString(): string;
    /**
     * An implementation of the {@link java.lang.Object#clone()} method that creates a <a
     * href="http://en.wikipedia.org/wiki/Object_copy#Deep_copy">deep copy</a> of the object.
     * <b>Note:</b> If the {@link java.util.TimeZone} in the clone will be changed from the original, it is critical
     * that {@link AstronomicalCalendar#getCalendar()}.
     * {@link java.util.Calendar#setTimeZone(TimeZone) setTimeZone(TimeZone)} is called after cloning in order for the
     * AstronomicalCalendar to output times in the expected offset.
     *
     * @see java.lang.Object#clone()
     * @since 1.1
     */
    clone(): GeoLocation;
}

/**
 * An abstract class that all sun time calculating classes extend. This allows the algorithm used to be changed at
 * runtime, easily allowing comparison the results of using different algorithms.
 * TODO: Consider methods that would allow atmospheric modeling. This can currently be adjusted by {@link
  * #setRefraction(double) setting the refraction}.
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2020
 */
declare abstract class AstronomicalCalculator {
    /**
     * The commonly used average solar refraction. Calendrical Calculations lists a more accurate global average of
     * 34.478885263888294
     *
     * @see #getRefraction()
     */
    private refraction;
    /**
     * The commonly used average solar radius in minutes of a degree.
     *
     * @see #getSolarRadius()
     */
    private solarRadius;
    /**
     * The commonly used average earth radius in KM. At this time, this only affects elevation adjustment and not the
     * sunrise and sunset calculations. The value currently defaults to 6356.9 KM.
     *
     * @see #getEarthRadius()
     * @see #setEarthRadius(double)
     */
    private earthRadius;
    /**
     * A method that returns the earth radius in KM. The value currently defaults to 6356.9 KM if not set.
     *
     * @return the earthRadius the earth radius in KM.
     */
    getEarthRadius(): number;
    /**
     * A method that allows setting the earth's radius.
     *
     * @param earthRadius
     *            the earthRadius to set in KM
     */
    setEarthRadius(earthRadius: number): void;
    /**
     * The zenith of astronomical sunrise and sunset. The sun is 90&deg; from the vertical 0&deg;
     */
    private static readonly GEOMETRIC_ZENITH;
    /**
     * Returns the default class for calculating sunrise and sunset. This is currently the {@link NOAACalculator},
     * but this may change.
     *
     * @return AstronomicalCalculator the default class for calculating sunrise and sunset. In the current
     *         implementation the default calculator returned is the {@link NOAACalculator}.
     * @deprecated This depends on a circular dependency. Use <pre>new NOAACalculator()</pre> instead
     */
    static getDefault(): void;
    /**
     * Returns the name of the algorithm.
     *
     * @return the descriptive name of the algorithm.
     */
    abstract getCalculatorName(): string;
    /**
     * Setter method for the descriptive name of the calculator. This will typically not have to be set
     *
     * @param calculatorName
     *            descriptive name of the algorithm.
     */
    /**
     * A method that calculates UTC sunrise as well as any time based on an angle above or below sunrise. This abstract
     * method is implemented by the classes that extend this class.
     *
     * @param calendar
     *            Used to calculate day of year.
     * @param geoLocation
     *            The location information used for astronomical calculating sun times.
     * @param zenith
     *            the azimuth below the vertical zenith of 90 degrees. for sunrise typically the {@link #adjustZenith
       *            zenith} used for the calculation uses geometric zenith of 90&deg; and {@link #adjustZenith adjusts}
     *            this slightly to account for solar refraction and the sun's radius. Another example would be
     *            {@link AstronomicalCalendar#getBeginNauticalTwilight()} that passes
     *            {@link AstronomicalCalendar#NAUTICAL_ZENITH} to this method.
     * @param adjustForElevation
     *            Should the time be adjusted for elevation
     * @return The UTC time of sunrise in 24 hour format. 5:45:00 AM will return 5.75.0. If an error was encountered in
     *         the calculation (expected behavior for some locations such as near the poles,
     *         {@link java.lang.Double#NaN} will be returned.
     * @see #getElevationAdjustment(double)
     */
    abstract getUTCSunrise(date: DateTime, geoLocation: GeoLocation, zenith: number, adjustForElevation: boolean): number;
    /**
     * A method that calculates UTC sunset as well as any time based on an angle above or below sunset. This abstract
     * method is implemented by the classes that extend this class.
     *
     * @param calendar
     *            Used to calculate day of year.
     * @param geoLocation
     *            The location information used for astronomical calculating sun times.
     * @param zenith
     *            the azimuth below the vertical zenith of 90&deg;. For sunset typically the {@link #adjustZenith
       *            zenith} used for the calculation uses geometric zenith of 90&deg; and {@link #adjustZenith adjusts}
     *            this slightly to account for solar refraction and the sun's radius. Another example would be
     *            {@link AstronomicalCalendar#getEndNauticalTwilight()} that passes
     *            {@link AstronomicalCalendar#NAUTICAL_ZENITH} to this method.
     * @param adjustForElevation
     *            Should the time be adjusted for elevation
     * @return The UTC time of sunset in 24 hour format. 5:45:00 AM will return 5.75.0. If an error was encountered in
     *         the calculation (expected behavior for some locations such as near the poles,
     *         {@link java.lang.Double#NaN} will be returned.
     * @see #getElevationAdjustment(double)
     */
    abstract getUTCSunset(date: DateTime, geoLocation: GeoLocation, zenith: number, adjustForElevation: boolean): number;
    /**
     * Method to return the adjustment to the zenith required to account for the elevation. Since a person at a higher
     * elevation can see farther below the horizon, the calculation for sunrise / sunset is calculated below the horizon
     * used at sea level. This is only used for sunrise and sunset and not times before or after it such as
     * {@link AstronomicalCalendar#getBeginNauticalTwilight() nautical twilight} since those
     * calculations are based on the level of available light at the given dip below the horizon, something that is not
     * affected by elevation, the adjustment should only made if the zenith == 90&deg; {@link #adjustZenith adjusted}
     * for refraction and solar radius. The algorithm used is
     *
     * <pre>
     * elevationAdjustment = Math.toDegrees(Math.acos(earthRadiusInMeters / (earthRadiusInMeters + elevationMeters)));
     * </pre>
     *
     * The source of this algorithm is <a href="http://www.calendarists.com">Calendrical Calculations</a> by Edward M.
     * Reingold and Nachum Dershowitz. An alternate algorithm that produces an almost identical (but not accurate)
     * result found in Ma'aglay Tzedek by Moishe Kosower and other sources is:
     *
     * <pre>
     * elevationAdjustment = 0.0347 * Math.sqrt(elevationMeters);
     * </pre>
     *
     * @param elevation
     *            elevation in Meters.
     * @return the adjusted zenith
     */
    getElevationAdjustment(elevation: number): number;
    /**
     * Adjusts the zenith of astronomical sunrise and sunset to account for solar refraction, solar radius and
     * elevation. The value for Sun's zenith and true rise/set Zenith (used in this class and subclasses) is the angle
     * that the center of the Sun makes to a line perpendicular to the Earth's surface. If the Sun were a point and the
     * Earth were without an atmosphere, true sunset and sunrise would correspond to a 90&deg; zenith. Because the Sun
     * is not a point, and because the atmosphere refracts light, this 90&deg; zenith does not, in fact, correspond to
     * true sunset or sunrise, instead the centre of the Sun's disk must lie just below the horizon for the upper edge
     * to be obscured. This means that a zenith of just above 90&deg; must be used. The Sun subtends an angle of 16
     * minutes of arc (this can be changed via the {@link #setSolarRadius(double)} method , and atmospheric refraction
     * accounts for 34 minutes or so (this can be changed via the {@link #setRefraction(double)} method), giving a total
     * of 50 arcminutes. The total value for ZENITH is 90+(5/6) or 90.8333333&deg; for true sunrise/sunset. Since a
     * person at an elevation can see blow the horizon of a person at sea level, this will also adjust the zenith to
     * account for elevation if available. Note that this will only adjust the value if the zenith is exactly 90 degrees.
     * For values below and above this no correction is done. As an example, astronomical twilight is when the sun is
     * 18&deg; below the horizon or {@link AstronomicalCalendar#ASTRONOMICAL_ZENITH 108&deg;
     * below the zenith}. This is traditionally calculated with none of the above mentioned adjustments. The same goes
     * for various <em>tzais</em> and <em>alos</em> times such as the
     * {@link ZmanimCalendar#ZENITH_16_POINT_1 16.1&deg;} dip used in
     * {@link ComplexZmanimCalendar#getAlos16Point1Degrees()}.
     *
     * @param zenith
     *            the azimuth below the vertical zenith of 90&deg;. For sunset typically the {@link #adjustZenith
     *            zenith} used for the calculation uses geometric zenith of 90&deg; and {@link #adjustZenith adjusts}
     *            this slightly to account for solar refraction and the sun's radius. Another example would be
     *            {@link AstronomicalCalendar#getEndNauticalTwilight()} that passes
     *            {@link AstronomicalCalendar#NAUTICAL_ZENITH} to this method.
     * @param elevation
     *            elevation in Meters.
     * @return The zenith adjusted to include the {@link #getSolarRadius sun's radius}, {@link #getRefraction
       *         refraction} and {@link #getElevationAdjustment elevation} adjustment. This will only be adjusted for
     *         sunrise and sunset (if the zenith == 90&deg;)
     * @see #getElevationAdjustment(double)
     */
    adjustZenith(zenith: number, elevation: number): number;
    /**
     * Method to get the refraction value to be used when calculating sunrise and sunset. The default value is 34 arc
     * minutes. The <a href="http://emr.cs.iit.edu/home/reingold/calendar-book/second-edition/errata.pdf">Errata and
     * Notes for Calendrical Calculations: The Millennium Edition</a> by Edward M. Reingold and Nachum Dershowitz lists
     * the actual average refraction value as 34.478885263888294 or approximately 34' 29". The refraction value as well
     * as the solarRadius and elevation adjustment are added to the zenith used to calculate sunrise and sunset.
     *
     * @return The refraction in arc minutes.
     */
    getRefraction(): number;
    /**
     * A method to allow overriding the default refraction of the calculator.
     * @todo At some point in the future, an AtmosphericModel or Refraction object that models the atmosphere of different
     * locations might be used for increased accuracy.
     *
     * @param refraction
     *            The refraction in arc minutes.
     * @see #getRefraction()
     */
    setRefraction(refraction: number): void;
    /**
     * Method to get the sun's radius. The default value is 16 arc minutes. The sun's radius as it appears from earth is
     * almost universally given as 16 arc minutes but in fact it differs by the time of the year. At the <a
     * href="http://en.wikipedia.org/wiki/Perihelion">perihelion</a> it has an apparent radius of 16.293, while at the
     * <a href="http://en.wikipedia.org/wiki/Aphelion">aphelion</a> it has an apparent radius of 15.755. There is little
     * affect for most location, but at high and low latitudes the difference becomes more apparent. My Calculations for
     * the difference at the location of the <a href="http://www.rog.nmm.ac.uk">Royal Observatory, Greenwich </a> show
     * only a 4.494 second difference between the perihelion and aphelion radii, but moving into the arctic circle the
     * difference becomes more noticeable. Tests for Tromso, Norway (latitude 69.672312, longitude 19.049787) show that
     * on May 17, the rise of the midnight sun, a 2 minute 23 second difference is observed between the perihelion and
     * aphelion radii using the USNO algorithm, but only 1 minute and 6 seconds difference using the NOAA algorithm.
     * Areas farther north show an even greater difference. Note that these test are not real valid test cases because
     * they show the extreme difference on days that are not the perihelion or aphelion, but are shown for illustrative
     * purposes only.
     *
     * @return The sun's radius in arc minutes.
     */
    getSolarRadius(): number;
    /**
     * Method to set the sun's radius.
     *
     * @param solarRadius
     *            The sun's radius in arc minutes.
     * @see #getSolarRadius()
     */
    setSolarRadius(solarRadius: number): void;
    /**
     * @see java.lang.Object#clone()
     * @since 1.1
     */
    clone(): AstronomicalCalculator;
    equals(object: object): boolean;
}

/**
 * A Java calendar that calculates astronomical times such as {@link #getSunrise() sunrise} and {@link #getSunset()
 * sunset} times. This class contains a {@link #getCalendar() Calendar} and can therefore use the standard Calendar
 * functionality to change dates etc... The calculation engine used to calculate the astronomical times can be changed
 * to a different implementation by implementing the abstract {@link AstronomicalCalculator} and setting it with the
 * {@link #setAstronomicalCalculator(AstronomicalCalculator)}. A number of different calculation engine implementations
 * are included in the util package.
 * <b>Note:</b> There are times when the algorithms can't calculate proper values for sunrise, sunset and twilight. This
 * is usually caused by trying to calculate times for areas either very far North or South, where sunrise / sunset never
 * happen on that date. This is common when calculating twilight with a deep dip below the horizon for locations as far
 * south of the North Pole as London, in the northern hemisphere. The sun never reaches this dip at certain times of the
 * year. When the calculations encounter this condition a null will be returned when a
 * <code>{@link java.util.Date}</code> is expected and {@link Long#MIN_VALUE} when a <code>long</code> is expected. The
 * reason that <code>Exception</code>s are not thrown in these cases is because the lack of a rise/set or twilight is
 * not an exception, but an expected condition in many parts of the world.
 *
 * Here is a simple example of how to use the API to calculate sunrise.
 * First create the Calendar for the location you would like to calculate sunrise or sunset times for:
 *
 * <pre>
 * String locationName = &quot;Lakewood, NJ&quot;;
 * double latitude = 40.0828; // Lakewood, NJ
 * double longitude = -74.2094; // Lakewood, NJ
 * double elevation = 20; // optional elevation correction in Meters
 * // the String parameter in getTimeZone() has to be a valid timezone listed in
 * // {@link java.util.TimeZone#getAvailableIDs()}
 * TimeZone timeZone = TimeZone.getTimeZone(&quot;America/New_York&quot;);
 * GeoLocation location = new GeoLocation(locationName, latitude, longitude, elevation, timeZone);
 * AstronomicalCalendar ac = new AstronomicalCalendar(location);
 * </pre>
 *
 * To get the time of sunrise, first set the date you want (if not set, the date will default to today):
 *
 * <pre>
 * ac.getCalendar().set(Calendar.MONTH, Calendar.FEBRUARY);
 * ac.getCalendar().set(Calendar.DAY_OF_MONTH, 8);
 * Date sunrise = ac.getSunrise();
 * </pre>
 *
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2016
 */
declare class AstronomicalCalendar {
    /**
     * 90&deg; below the vertical. Used as a basis for most calculations since the location of the sun is 90&deg; below
     * the horizon at sunrise and sunset.
     * <b>Note </b>: it is important to note that for sunrise and sunset the {@link AstronomicalCalculator#adjustZenith
       * adjusted zenith} is required to account for the radius of the sun and refraction. The adjusted zenith should not
     * be used for calculations above or below 90&deg; since they are usually calculated as an offset to 90&deg;.
     */
    static readonly GEOMETRIC_ZENITH: number;
    /**
     * Default value for Sun's zenith and true rise/set Zenith (used in this class and subclasses) is the angle that the
     * center of the Sun makes to a line perpendicular to the Earth's surface. If the Sun were a point and the Earth
     * were without an atmosphere, true sunset and sunrise would correspond to a 90&deg; zenith. Because the Sun is not
     * a point, and because the atmosphere refracts light, this 90&deg; zenith does not, in fact, correspond to true
     * sunset or sunrise, instead the center of the Sun's disk must lie just below the horizon for the upper edge to be
     * obscured. This means that a zenith of just above 90&deg; must be used. The Sun subtends an angle of 16 minutes of
     * arc (this can be changed via the {@link #setSunRadius(double)} method , and atmospheric refraction accounts for
     * 34 minutes or so (this can be changed via the {@link #setRefraction(double)} method), giving a total of 50
     * arcminutes. The total value for ZENITH is 90+(5/6) or 90.8333333&deg; for true sunrise/sunset.
     */
    /** Sun's zenith at civil twilight (96&deg;). */
    static readonly CIVIL_ZENITH: number;
    /** Sun's zenith at nautical twilight (102&deg;). */
    static readonly NAUTICAL_ZENITH: number;
    /** Sun's zenith at astronomical twilight (108&deg;). */
    static readonly ASTRONOMICAL_ZENITH: number;
    /** constant for milliseconds in a minute (60,000) */
    protected static readonly MINUTE_MILLIS: number;
    /** constant for milliseconds in an hour (3,600,000) */
    protected static readonly HOUR_MILLIS: number;
    /**
     * The Java Calendar encapsulated by this class to track the current date used by the class
     */
    private date;
    /**
     * the {@link GeoLocation} used for calculations.
     */
    private geoLocation;
    /**
     * the internal {@link AstronomicalCalculator} used for calculating solar based times.
     */
    private astronomicalCalculator;
    /**
     * The getSunrise method Returns a <code>Date</code> representing the
     * {@link AstronomicalCalculator#getElevationAdjustment(double) elevation adjusted} sunrise time. The zenith used
     * for the calculation uses {@link #GEOMETRIC_ZENITH geometric zenith} of 90&deg; plus
     * {@link AstronomicalCalculator#getElevationAdjustment(double)}. This is adjusted by the
     * {@link AstronomicalCalculator} to add approximately 50/60 of a degree to account for 34 archminutes of refraction
     * and 16 archminutes for the sun's radius for a total of {@link AstronomicalCalculator#adjustZenith 90.83333&deg;}.
     * See documentation for the specific implementation of the {@link AstronomicalCalculator} that you are using.
     *
     * @return the <code>Date</code> representing the exact sunrise time. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalculator#adjustZenith
     * @see #getSeaLevelSunrise()
     * @see AstronomicalCalendar#getUTCSunrise
     */
    getSunrise(): DateTime | null;
    /**
     * A method that returns the sunrise without {@link AstronomicalCalculator#getElevationAdjustment(double) elevation
       * adjustment}. Non-sunrise and sunset calculations such as dawn and dusk, depend on the amount of visible light,
     * something that is not affected by elevation. This method returns sunrise calculated at sea level. This forms the
     * base for dawn calculations that are calculated as a dip below the horizon before sunrise.
     *
     * @return the <code>Date</code> representing the exact sea-level sunrise time. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalendar#getSunrise
     * @see AstronomicalCalendar#getUTCSeaLevelSunrise
     * @see #getSeaLevelSunset()
     */
    getSeaLevelSunrise(): DateTime | null;
    /**
     * A method that returns the beginning of civil twilight (dawn) using a zenith of {@link #CIVIL_ZENITH 96&deg;}.
     *
     * @return The <code>Date</code> of the beginning of civil twilight using a zenith of 96&deg;. If the calculation
     *         can't be computed, null will be returned. See detailed explanation on top of the page.
     * @see #CIVIL_ZENITH
     */
    getBeginCivilTwilight(): DateTime | null;
    /**
     * A method that returns the beginning of nautical twilight using a zenith of {@link #NAUTICAL_ZENITH 102&deg;}.
     *
     * @return The <code>Date</code> of the beginning of nautical twilight using a zenith of 102&deg;. If the
     *         calculation can't be computed null will be returned. See detailed explanation on top of the page.
     * @see #NAUTICAL_ZENITH
     */
    getBeginNauticalTwilight(): DateTime | null;
    /**
     * A method that returns the beginning of astronomical twilight using a zenith of {@link #ASTRONOMICAL_ZENITH
       * 108&deg;}.
     *
     * @return The <code>Date</code> of the beginning of astronomical twilight using a zenith of 108&deg;. If the
     *         calculation can't be computed, null will be returned. See detailed explanation on top of the page.
     * @see #ASTRONOMICAL_ZENITH
     */
    getBeginAstronomicalTwilight(): DateTime | null;
    /**
     * The getSunset method Returns a <code>Date</code> representing the
     * {@link AstronomicalCalculator#getElevationAdjustment(double) elevation adjusted} sunset time. The zenith used for
     * the calculation uses {@link #GEOMETRIC_ZENITH geometric zenith} of 90&deg; plus
     * {@link AstronomicalCalculator#getElevationAdjustment(double)}. This is adjusted by the
     * {@link AstronomicalCalculator} to add approximately 50/60 of a degree to account for 34 archminutes of refraction
     * and 16 archminutes for the sun's radius for a total of {@link AstronomicalCalculator#adjustZenith 90.83333&deg;}.
     * See documentation for the specific implementation of the {@link AstronomicalCalculator} that you are using. Note:
     * In certain cases the calculates sunset will occur before sunrise. This will typically happen when a timezone
     * other than the local timezone is used (calculating Los Angeles sunset using a GMT timezone for example). In this
     * case the sunset date will be incremented to the following date.
     *
     * @return the <code>Date</code> representing the exact sunset time. If the calculation can't be computed such as in
     *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalculator#adjustZenith
     * @see #getSeaLevelSunset()
     * @see AstronomicalCalendar#getUTCSunset
     */
    getSunset(): DateTime | null;
    /**
     * A method that returns the sunset without {@link AstronomicalCalculator#getElevationAdjustment(double) elevation
       * adjustment}. Non-sunrise and sunset calculations such as dawn and dusk, depend on the amount of visible light,
     * something that is not affected by elevation. This method returns sunset calculated at sea level. This forms the
     * base for dusk calculations that are calculated as a dip below the horizon after sunset.
     *
     * @return the <code>Date</code> representing the exact sea-level sunset time. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalendar#getSunset
     * @see AstronomicalCalendar#getUTCSeaLevelSunset 2see {@link #getSunset()}
     */
    getSeaLevelSunset(): DateTime | null;
    /**
     * A method that returns the end of civil twilight using a zenith of {@link #CIVIL_ZENITH 96&deg;}.
     *
     * @return The <code>Date</code> of the end of civil twilight using a zenith of {@link #CIVIL_ZENITH 96&deg;}. If
     *         the calculation can't be computed, null will be returned. See detailed explanation on top of the page.
     * @see #CIVIL_ZENITH
     */
    getEndCivilTwilight(): DateTime | null;
    /**
     * A method that returns the end of nautical twilight using a zenith of {@link #NAUTICAL_ZENITH 102&deg;}.
     *
     * @return The <code>Date</code> of the end of nautical twilight using a zenith of {@link #NAUTICAL_ZENITH 102&deg;}
     *         . If the calculation can't be computed, null will be returned. See detailed explanation on top of the
     *         page.
     * @see #NAUTICAL_ZENITH
     */
    getEndNauticalTwilight(): DateTime | null;
    /**
     * A method that returns the end of astronomical twilight using a zenith of {@link #ASTRONOMICAL_ZENITH 108&deg;}.
     *
     * @return the <code>Date</code> of the end of astronomical twilight using a zenith of {@link #ASTRONOMICAL_ZENITH
       *         108&deg;}. If the calculation can't be computed, null will be returned. See detailed explanation on top
     *         of the page.
     * @see #ASTRONOMICAL_ZENITH
     */
    getEndAstronomicalTwilight(): DateTime | null;
    /**
     * A utility method that returns a date offset by the offset time passed in. Please note that the level of light
     * during twilight is not affected by elevation, so if this is being used to calculate an offset before sunrise or
     * after sunset with the intent of getting a rough "level of light" calculation, the sunrise or sunset time passed
     * to this method should be sea level sunrise and sunset.
     *
     * @param time
     *            the start time
     * @param offset
     *            the offset in milliseconds to add to the time.
     * @return the {@link java.util.Date} with the offset in milliseconds added to it
     */
    static getTimeOffset(time: DateTime | null, offset: number): DateTime | null;
    /**
     * A utility method that returns the time of an offset by degrees below or above the horizon of
     * {@link #getSunrise() sunrise}. Note that the degree offset is from the vertical, so for a calculation of 14&deg;
     * before sunrise, an offset of 14 + {@link #GEOMETRIC_ZENITH} = 104 would have to be passed as a parameter.
     *
     * @param offsetZenith
     *            the degrees before {@link #getSunrise()} to use in the calculation. For time after sunrise use
     *            negative numbers. Note that the degree offset is from the vertical, so for a calculation of 14&deg;
     *            before sunrise, an offset of 14 + {@link #GEOMETRIC_ZENITH} = 104 would have to be passed as a
     *            parameter.
     * @return The {@link java.util.Date} of the offset after (or before) {@link #getSunrise()}. If the calculation
     *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does
     *         not rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         page.
     */
    getSunriseOffsetByDegrees(offsetZenith: number): DateTime | null;
    /**
     * A utility method that returns the time of an offset by degrees below or above the horizon of {@link #getSunset()
       * sunset}. Note that the degree offset is from the vertical, so for a calculation of 14&deg; after sunset, an
     * offset of 14 + {@link #GEOMETRIC_ZENITH} = 104 would have to be passed as a parameter.
     *
     * @param offsetZenith
     *            the degrees after {@link #getSunset()} to use in the calculation. For time before sunset use negative
     *            numbers. Note that the degree offset is from the vertical, so for a calculation of 14&deg; after
     *            sunset, an offset of 14 + {@link #GEOMETRIC_ZENITH} = 104 would have to be passed as a parameter.
     * @return The {@link java.util.Date}of the offset after (or before) {@link #getSunset()}. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         page.
     */
    getSunsetOffsetByDegrees(offsetZenith: number): DateTime | null;
    /**
     * Default constructor will set a default {@link GeoLocation#GeoLocation()}, a default
     * {@link AstronomicalCalculator#getDefault() AstronomicalCalculator} and default the calendar to the current date.
     */
    /**
     * A constructor that takes in <a href="http://en.wikipedia.org/wiki/Geolocation">geolocation</a> information as a
     * parameter. The default {@link AstronomicalCalculator#getDefault() AstronomicalCalculator} used for solar
     * calculations is the the {@link NOAACalculator}.
     *
     * @param geoLocation
     *            The location information used for calculating astronomical sun times.
     *
     * @see #setAstronomicalCalculator(AstronomicalCalculator) for changing the calculator class.
     */
    constructor(geoLocation?: GeoLocation);
    /**
     * A method that returns the sunrise in UTC time without correction for time zone offset from GMT and without using
     * daylight savings time.
     *
     * @param zenith
     *            the degrees below the horizon. For time after sunrise use negative numbers.
     * @return The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, {@link Double#NaN} will be returned. See detailed explanation on top of the page.
     */
    getUTCSunrise(zenith: number): number;
    /**
     * A method that returns the sunrise in UTC time without correction for time zone offset from GMT and without using
     * daylight savings time. Non-sunrise and sunset calculations such as dawn and dusk, depend on the amount of visible
     * light, something that is not affected by elevation. This method returns UTC sunrise calculated at sea level. This
     * forms the base for dawn calculations that are calculated as a dip below the horizon before sunrise.
     *
     * @param zenith
     *            the degrees below the horizon. For time after sunrise use negative numbers.
     * @return The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, {@link Double#NaN} will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalendar#getUTCSunrise
     * @see AstronomicalCalendar#getUTCSeaLevelSunset
     */
    getUTCSeaLevelSunrise(zenith: number): number;
    /**
     * A method that returns the sunset in UTC time without correction for time zone offset from GMT and without using
     * daylight savings time.
     *
     * @param zenith
     *            the degrees below the horizon. For time after sunset use negative numbers.
     * @return The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, {@link Double#NaN} will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalendar#getUTCSeaLevelSunset
     */
    getUTCSunset(zenith: number): number;
    /**
     * A method that returns the sunset in UTC time without correction for elevation, time zone offset from GMT and
     * without using daylight savings time. Non-sunrise and sunset calculations such as dawn and dusk, depend on the
     * amount of visible light, something that is not affected by elevation. This method returns UTC sunset calculated
     * at sea level. This forms the base for dusk calculations that are calculated as a dip below the horizon after
     * sunset.
     *
     * @param zenith
     *            the degrees below the horizon. For time before sunset use negative numbers.
     * @return The time in the format: 18.75 for 18:45:00 UTC/GMT. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, {@link Double#NaN} will be returned. See detailed explanation on top of the page.
     * @see AstronomicalCalendar#getUTCSunset
     * @see AstronomicalCalendar#getUTCSeaLevelSunrise
     */
    getUTCSeaLevelSunset(zenith: number): number;
    /**
     * A method that returns an {@link AstronomicalCalculator#getElevationAdjustment(double) elevation adjusted}
     * temporal (solar) hour. The day from {@link #getSunrise() sunrise} to {@link #getSunset() sunset} is split into 12
     * equal parts with each one being a temporal hour.
     *
     * @see #getSunrise()
     * @see #getSunset()
     * @see #getTemporalHour(Date, Date)
     *
     * @return the <code>long</code> millisecond length of a temporal hour. If the calculation can't be computed,
     *         {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the page.
     *
     * @see #getTemporalHour(Date, Date)
     */
    /**
     * A utility method that will allow the calculation of a temporal (solar) hour based on the sunrise and sunset
     * passed as parameters to this method. An example of the use of this method would be the calculation of a
     * non-elevation adjusted temporal hour by passing in {@link #getSeaLevelSunrise() sea level sunrise} and
     * {@link #getSeaLevelSunset() sea level sunset} as parameters.
     *
     * @param startOfday
     *            The start of the day.
     * @param endOfDay
     *            The end of the day.
     *
     * @return the <code>long</code> millisecond length of the temporal hour. If the calculation can't be computed a
     *         {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the page.
     *
     * @see #getTemporalHour()
     */
    getTemporalHour(startOfday?: DateTime | null, endOfDay?: DateTime | null): number;
    /**
     * A method that returns sundial or solar noon. It occurs when the Sun is <a href
     * ="http://en.wikipedia.org/wiki/Transit_%28astronomy%29">transiting</a> the <a
     * href="http://en.wikipedia.org/wiki/Meridian_%28astronomy%29">celestial meridian</a>. In this class it is
     * calculated as halfway between sea level sunrise and sea level sunset, which can be slightly off the real transit
     * time due to changes in declination (the lengthening or shortening day).
     *
     * @return the <code>Date</code> representing Sun's transit. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, null will be returned. See detailed explanation on top of the page.
     * @see #getSunTransit(Date, Date)
     * @see #getTemporalHour()
     */
    /**
     * A method that returns sundial or solar noon. It occurs when the Sun is <a href
     * ="http://en.wikipedia.org/wiki/Transit_%28astronomy%29">transiting</a> the <a
     * href="http://en.wikipedia.org/wiki/Meridian_%28astronomy%29">celestial meridian</a>. In this class it is
     * calculated as halfway between the sunrise and sunset passed to this method. This time can be slightly off the
     * real transit time due to changes in declination (the lengthening or shortening day).
     *
     * @param startOfDay
     *            the start of day for calculating the sun's transit. This can be sea level sunrise, visual sunrise (or
     *            any arbitrary start of day) passed to this method.
     * @param endOfDay
     *            the end of day for calculating the sun's transit. This can be sea level sunset, visual sunset (or any
     *            arbitrary end of day) passed to this method.
     *
     * @return the <code>Date</code> representing Sun's transit. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, null will be returned. See detailed explanation on top of the page.
     */
    getSunTransit(startOfDay?: DateTime | null, endOfDay?: DateTime | null): DateTime | null;
    /**
     * A method that returns a <code>Date</code> from the time passed in as a parameter.
     *
     * @param time
     *            The time to be set as the time for the <code>Date</code>. The time expected is in the format: 18.75
     *            for 6:45:00 PM.
     * @param isSunrise true if the time is sunrise, and false if it is sunset
     * @return The Date.
     */
    protected getDateFromTime(time: number, isSunrise: boolean): DateTime | null;
    /**
     * Returns the dip below the horizon before sunrise that matches the offset minutes on passed in as a parameter. For
     * example passing in 72 minutes for a calendar set to the equinox in Jerusalem returns a value close to 16.1&deg;
     * Please note that this method is very slow and inefficient and should NEVER be used in a loop. TODO: Improve
     * efficiency.
     *
     * @param minutes
     *            offset
     * @return the degrees below the horizon before sunrise that match the offset in minutes passed it as a parameter.
     * @see #getSunsetSolarDipFromOffset(double)
     */
    getSunriseSolarDipFromOffset(minutes: number): number | null;
    /**
     * Returns the dip below the horizon after sunset that matches the offset minutes on passed in as a parameter. For
     * example passing in 72 minutes for a calendar set to the equinox in Jerusalem returns a value close to 16.1&deg;
     * Please note that this method is very slow and inefficient and should NEVER be used in a loop. TODO: Improve
     * efficiency.
     *
     * @param minutes
     *            offset
     * @return the degrees below the horizon after sunset that match the offset in minutes passed it as a parameter.
     * @see #getSunriseSolarDipFromOffset(double)
     */
    getSunsetSolarDipFromOffset(minutes: number): number | null;
    /**
     * FIXME broken for czc.getRiseSetSolarDipFromOffset(-72, czc.getSunrise());
     * and broken in other was as well
     * @param minutes
     * @param riseSet
     * @return
     */
    /**
     * Adjusts the <code>Calendar</code> to deal with edge cases where the location crosses the antimeridian.
     *
     * @see GeoLocation#getAntimeridianAdjustment()
     * @return the adjusted Calendar
     */
    private getAdjustedDate;
    /**
     * @return an XML formatted representation of the class. It returns the default output of the
     *         {@link ZmanimFormatter#toXML(AstronomicalCalendar) toXML} method.
     * @see ZmanimFormatter#toXML(AstronomicalCalendar)
     * @see java.lang.Object#toString()
     * @deprecated (This depends on a circular dependency).
     */
    toString(): void;
    /**
     * @return a JSON formatted representation of the class. It returns the default output of the
     *         {@link ZmanimFormatter#toJSON(AstronomicalCalendar) toJSON} method.
     * @see ZmanimFormatter#toJSON(AstronomicalCalendar)
     * @see java.lang.Object#toString()
     * @deprecated  This depends on a circular dependency. Use <pre>ZmanimFormatter.toJSON(astronomicalCalendar)</pre> instead.
     */
    toJSON(): void;
    /**
     * @see java.lang.Object#equals(Object)
     */
    equals(object: object): boolean;
    /**
     * A method that returns the currently set {@link GeoLocation} which contains location information used for the
     * astronomical calculations.
     *
     * @return Returns the geoLocation.
     */
    getGeoLocation(): GeoLocation;
    /**
     * Sets the {@link GeoLocation} <code>Object</code> to be used for astronomical calculations.
     *
     * @param geoLocation
     *            The geoLocation to set.
     */
    setGeoLocation(geoLocation: GeoLocation): void;
    /**
     * A method that returns the currently set AstronomicalCalculator.
     *
     * @return Returns the astronomicalCalculator.
     * @see #setAstronomicalCalculator(AstronomicalCalculator)
     */
    getAstronomicalCalculator(): AstronomicalCalculator;
    /**
     * A method to set the {@link AstronomicalCalculator} used for astronomical calculations. The Zmanim package ships
     * with a number of different implementations of the <code>abstract</code> {@link AstronomicalCalculator} based on
     * different algorithms, including {@link SunTimesCalculator one implementation} based
     * on the <a href = "http://aa.usno.navy.mil/">US Naval Observatory's</a> algorithm, and
     * {@link NOAACalculator another} based on <a href="http://noaa.gov">NOAA's</a>
     * algorithm. This allows easy runtime switching and comparison of different algorithms.
     *
     * @param astronomicalCalculator
     *            The astronomicalCalculator to set.
     */
    setAstronomicalCalculator(astronomicalCalculator: AstronomicalCalculator): void;
    /**
     * returns the Calendar object encapsulated in this class.
     *
     * @return Returns the calendar.
     */
    getDate(): DateTime;
    /**
     * @param calendar
     *            The calendar to set.
     */
    setDate(date: DateTime | Date | string | number): void;
    /**
     * A method that creates a <a href="http://en.wikipedia.org/wiki/Object_copy#Deep_copy">deep copy</a> of the object.
     * <b>Note:</b> If the {@link java.util.TimeZone} in the cloned {@link GeoLocation} will
     * be changed from the original, it is critical that
     * {@link AstronomicalCalendar#getCalendar()}.
     * {@link java.util.Calendar#setTimeZone(TimeZone) setTimeZone(TimeZone)} be called in order for the
     * AstronomicalCalendar to output times in the expected offset after being cloned.
     *
     * @see java.lang.Object#clone()
     * @since 1.1
     */
    clone(): AstronomicalCalendar;
    getClassName(): string;
}

/**
 * A class used to format both non {@link java.util.Date} times generated by the Zmanim package as well as Dates. For
 * example the {@link AstronomicalCalendar#getTemporalHour()} returns the length of the hour in
 * milliseconds. This class can format this time.
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2019
 * @version 1.2
 */
declare class ZmanimFormatter {
    /**
     * Setting to prepent a zero to single digit hours.
     * @see #setSettings(boolean, boolean, boolean)
     */
    private prependZeroHours;
    /**
     * @see #setSettings(boolean, boolean, boolean)
     */
    private useSeconds;
    /**
     * @see #setSettings(boolean, boolean, boolean)
     */
    private useMillis;
    /**
     * the formatter for minutes as seconds.
     */
    private static readonly minuteSecondNF;
    /**
     * the formatter for hours.
     */
    private hourNF;
    /**
     * the formatter for minutes as milliseconds.
     */
    private static readonly milliNF;
    /**
     * @see #setDateFormat(SimpleDateFormat)
     */
    private dateFormat;
    /**
     * @see #setTimeZone(TimeZone)
     */
    private timeZoneId;
    /**
     * @return the timeZone
     */
    getTimeZone(): string;
    /**
     * @param timeZoneId
     *            the timeZone to set
     */
    setTimeZone(timeZoneId: string): void;
    /**
     * Format using hours, minutes, seconds and milliseconds using the xsd:time format. This format will return
     * 00.00.00.0 when formatting 0.
     */
    static readonly SEXAGESIMAL_XSD_FORMAT: number;
    /**
     * Defaults to {@link #SEXAGESIMAL_XSD_FORMAT}.
     * @see #setTimeFormat(int)
     */
    private timeFormat;
    /**
     * Format using standard decimal format with 5 positions after the decimal.
     */
    static readonly DECIMAL_FORMAT: number;
    /** Format using hours and minutes. */
    static readonly SEXAGESIMAL_FORMAT: number;
    /** Format using hours, minutes and seconds. */
    static readonly SEXAGESIMAL_SECONDS_FORMAT: number;
    /** Format using hours, minutes, seconds and milliseconds. */
    static readonly SEXAGESIMAL_MILLIS_FORMAT: number;
    /** constant for milliseconds in a minute (60,000) */
    static readonly MINUTE_MILLIS: number;
    /** constant for milliseconds in an hour (3,600,000) */
    static readonly HOUR_MILLIS: number;
    /**
     * Format using the XSD Duration format. This is in the format of PT1H6M7.869S (P for period (duration), T for time,
     * H, M and S indicate hours, minutes and seconds.
     */
    static readonly XSD_DURATION_FORMAT: number;
    static readonly XSD_DATE_FORMAT = "yyyy-LL-dd'T'HH:mm:ss";
    /**
     * constructor that defaults to this will use the format "h:mm:ss" for dates and 00.00.00.0 for {@link Time}.
     * @param timeZone the TimeZone Object
     */
    /**
     * ZmanimFormatter constructor using a formatter
     *
     * @param format
     *            int The formatting style to use. Using ZmanimFormatter.SEXAGESIMAL_SECONDS_FORMAT will format the time
     *            time of 90*60*1000 + 1 as 1:30:00
     * @param dateFormat the SimpleDateFormat Object
     * @param timeZone the TimeZone Object
     */
    constructor(timeZoneId: string);
    constructor(format: number, dateFormat: string, timeZoneId: string);
    /**
     * Sets the format to use for formatting.
     *
     * @param format
     *            int the format constant to use.
     */
    setTimeFormat(format: number): void;
    /**
     * Sets the SimpleDateFormat Object
     * @param dateFormat the SimpleDateFormat Object to set
     */
    setDateFormat(dateFormat: string): void;
    /**
     * returns the SimpleDateFormat Object
     * @return the SimpleDateFormat Object
     */
    getDateFormat(): string;
    /**
     * Sets various format settings.
     * @param prependZeroHours  if to prepend a zero for single digit hours (so that 1 'oclock is displayed as 01)
     * @param useSeconds should seconds be used in the time format
     * @param useMillis should milliseconds be used informatting time.
     */
    private setSettings;
    /**
     * A method that formats milliseconds into a time format.
     *
     * @param milliseconds
     *            The time in milliseconds.
     * @return String The formatted <code>String</code>
     */
    /**
     * A method that formats milliseconds into a time format.
     *
     * @param millis
     *            The time in milliseconds.
     * @return String The formatted <code>String</code>
     */
    /**
     * A method that formats {@link Time}objects.
     *
     * @param time
     *            The time <code>Object</code> to be formatted.
     * @return String The formatted <code>String</code>
     */
    format(timeOrMillis: Time | number): string;
    /**
     * Formats a date using this class's {@link #getDateFormat() date format}.
     *
     * @param dateTime - the date to format
     * @return the formatted String
     */
    formatDateTime(dateTime: DateTime): string;
    /**
     * The date:date-time function returns the current date and time as a date/time string. The date/time string that's
     * returned must be a string in the format defined as the lexical representation of xs:dateTime in <a
     * href="http://www.w3.org/TR/xmlschema11-2/#dateTime">[3.3.8 dateTime]</a> of <a
     * href="http://www.w3.org/TR/xmlschema11-2/">[XML Schema 1.1 Part 2: Datatypes]</a>. The date/time format is
     * basically CCYY-MM-DDThh:mm:ss, although implementers should consult <a
     * href="http://www.w3.org/TR/xmlschema11-2/">[XML Schema 1.1 Part 2: Datatypes]</a> and <a
     * href="http://www.iso.ch/markete/8601.pdf">[ISO 8601]</a> for details. The date/time string format must include a
     * time zone, either a Z to indicate Coordinated Universal Time or a + or - followed by the difference between the
     * difference from UTC represented as hh:mm.
     * @param dateTime - the UTC Date Object
     * @return the XSD dateTime
     */
    getXSDateTime(dateTime: DateTime): string;
    /**
     * Represent the hours and minutes with two-digit strings.
     *
     * @param digits
     *            hours or minutes.
     * @return two-digit String representation of hrs or minutes.
     */
    private static formatDigits;
    /**
     * This returns the xml representation of an xsd:duration object.
     *
     * @param millis
     *            the duration in milliseconds
     * @return the xsd:duration formatted String
     */
    /**
     * This returns the xml representation of an xsd:duration object.
     *
     * @param time
     *            the duration as a Time object
     * @return the xsd:duration formatted String
     */
    static formatXSDDurationTime(timeOrMillis: Time | number): string;
    static formatDecimal(num: number): string;
    /**
     * A method that returns an XML formatted <code>String</code> representing the serialized <code>Object</code>. The
     * format used is:
     *
     * <pre>
     *  &lt;AstronomicalTimes date=&quot;1969-02-08&quot; type=&quot;AstronomicalCalendar algorithm=&quot;US Naval Almanac Algorithm&quot; location=&quot;Lakewood, NJ&quot; latitude=&quot;40.095965&quot; longitude=&quot;-74.22213&quot; elevation=&quot;31.0&quot; timeZoneName=&quot;Eastern Standard Time&quot; timeZoneID=&quot;America/New_York&quot; timeZoneOffset=&quot;-5&quot;&gt;
     *     &lt;Sunrise&gt;2007-02-18T06:45:27-05:00&lt;/Sunrise&gt;
     *     &lt;TemporalHour&gt;PT54M17.529S&lt;/TemporalHour&gt;
     *     ...
     *   &lt;/AstronomicalTimes&gt;
     * </pre>
     *
     * Note that the output uses the <a href="http://www.w3.org/TR/xmlschema11-2/#dateTime">xsd:dateTime</a> format for
     * times such as sunrise, and <a href="http://www.w3.org/TR/xmlschema11-2/#duration">xsd:duration</a> format for
     * times that are a duration such as the length of a
     * {@link AstronomicalCalendar#getTemporalHour() temporal hour}. The output of this method is
     * returned by the {@link #toString() toString}.
     *
     * @param astronomicalCalendar the AstronomicalCalendar Object
     *
     * @return The XML formatted <code>String</code>. The format will be:
     *
     *         <pre>
     *  &lt;AstronomicalTimes date=&quot;1969-02-08&quot; type=&quot;AstronomicalCalendar algorithm=&quot;US Naval Almanac Algorithm&quot; location=&quot;Lakewood, NJ&quot; latitude=&quot;40.095965&quot; longitude=&quot;-74.22213&quot; elevation=&quot;31.0&quot; timeZoneName=&quot;Eastern Standard Time&quot; timeZoneID=&quot;America/New_York&quot; timeZoneOffset=&quot;-5&quot;&gt;
     *     &lt;Sunrise&gt;2007-02-18T06:45:27-05:00&lt;/Sunrise&gt;
     *     &lt;TemporalHour&gt;PT54M17.529S&lt;/TemporalHour&gt;
     *     ...
     *  &lt;/AstronomicalTimes&gt;
     * </pre>
     *
     *         TODO: add proper schema, and support for nulls. XSD duration (for solar hours), should probably return
     *         nil and not P
     * @deprecated
     */
    static toXML(): void;
    /**
     * A method that returns a JSON formatted <code>String</code> representing the serialized <code>Object</code>. The
     * format used is:
     * <pre>
     * {
     *    &quot;metadata&quot;:{
     *      &quot;date&quot;:&quot;1969-02-08&quot;,
     *      &quot;type&quot;:&quot;AstronomicalCalendar&quot;,
     *      &quot;algorithm&quot;:&quot;US Naval Almanac Algorithm&quot;,
     *      &quot;location&quot;:&quot;Lakewood, NJ&quot;,
     *      &quot;latitude&quot;:&quot;40.095965&quot;,
     *      &quot;longitude&quot;:&quot;-74.22213&quot;,
     *      &quot;elevation:&quot;31.0&quot;,
     *      &quot;timeZoneName&quot;:&quot;Eastern Standard Time&quot;,
     *      &quot;timeZoneID&quot;:&quot;America/New_York&quot;,
     *      &quot;timeZoneOffset&quot;:&quot;-5&quot;},
     *    &quot;AstronomicalTimes&quot;:{
     *     &quot;Sunrise&quot;:&quot;2007-02-18T06:45:27-05:00&quot;,
     *     &quot;TemporalHour&quot;:&quot;PT54M17.529S&quot;
     *     ...
     *     }
     * }
     * </pre>
     *
     * Note that the output uses the <a href="http://www.w3.org/TR/xmlschema11-2/#dateTime">xsd:dateTime</a> format for
     * times such as sunrise, and <a href="http://www.w3.org/TR/xmlschema11-2/#duration">xsd:duration</a> format for
     * times that are a duration such as the length of a
     * {@link AstronomicalCalendar#getTemporalHour() temporal hour}.
     *
     * @param astronomicalCalendar the AstronomicalCalendar Object
     *
     * @return The JSON formatted <code>String</code>. The format will be:
     * <pre>
     * {
     *    &quot;metadata&quot;:{
     *      &quot;date&quot;:&quot;1969-02-08&quot;,
     *      &quot;type&quot;:&quot;AstronomicalCalendar&quot;,
     *      &quot;algorithm&quot;:&quot;US Naval Almanac Algorithm&quot;,
     *      &quot;location&quot;:&quot;Lakewood, NJ&quot;,
     *      &quot;latitude&quot;:&quot;40.095965&quot;,
     *      &quot;longitude&quot;:&quot;-74.22213&quot;,
     *      &quot;elevation:&quot;31.0&quot;,
     *      &quot;timeZoneName&quot;:&quot;Eastern Standard Time&quot;,
     *      &quot;timeZoneID&quot;:&quot;America/New_York&quot;,
     *      &quot;timeZoneOffset&quot;:&quot;-5&quot;},
     *    &quot;AstronomicalTimes&quot;:{
     *     &quot;Sunrise&quot;:&quot;2007-02-18T06:45:27-05:00&quot;,
     *     &quot;TemporalHour&quot;:&quot;PT54M17.529S&quot;
     *     ...
     *     }
     * }
     * </pre>
     */
    static toJSON(astronomicalCalendar: AstronomicalCalendar): JsonOutput;
    private static getOutputKey;
    private static getOutputMetadata;
    private static getZmanimOutput;
}
interface JsonOutput {
    metadata: OutputMetadata;
    [key: string]: object;
}
interface OutputMetadata {
    date: string;
    type: string;
    algorithm: string;
    location: string | null;
    latitude: string;
    longitude: string;
    elevation: string;
    timeZoneName: string;
    timeZoneID: string;
    timeZoneOffset: string;
}

/**
 * A class for various location calculations
 * Most of the code in this class is ported from <a href="http://www.movable-type.co.uk/">Chris Veness'</a>
 * <a href="http://www.fsf.org/licensing/licenses/lgpl.html">LGPL</a> Javascript Implementation
 *
 * @author &copy; Eliyahu Hershfeld 2009 - 2020
 * @deprecated All methods in this class are available in the {@link GeoLocation} class, and this class that duplicates that
 * code will be removed in a future release.
 */
declare class GeoLocationUtils {
    /**
     * Constant for a distance type calculation.
     * @see #getGeodesicDistance(GeoLocation, GeoLocation)
     */
    private static readonly DISTANCE;
    /**
     * Constant for a initial bearing type calculation.
     * @see #getGeodesicInitialBearing(GeoLocation, GeoLocation)
     */
    private static readonly INITIAL_BEARING;
    /**
     * Constant for a final bearing type calculation.
     * @see #getGeodesicFinalBearing(GeoLocation, GeoLocation)
     */
    private static readonly FINAL_BEARING;
    /**
     * Calculate the <a href="http://en.wikipedia.org/wiki/Great_circle">geodesic</a> initial bearing between this Object and
     * a second Object passed to this method using <a href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus
     * Vincenty's</a> inverse formula See T Vincenty, "<a href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and
     * Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations</a>", Survey Review, vol XXII
     * no 176, 1975.
     *
     * @param location
     *            the initial location
     * @param destination
     *            the destination location
     * @return the geodesic bearing
     */
    static getGeodesicInitialBearing(location: GeoLocation, destination: GeoLocation): number;
    /**
     * Calculate the <a href="http://en.wikipedia.org/wiki/Great_circle">geodesic</a> final bearing between this Object
     * and a second Object passed to this method using <a href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus Vincenty's</a>
     * inverse formula See T Vincenty, "<a href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and Inverse Solutions of Geodesics
     * on the Ellipsoid with application of nested equations</a>", Survey Review, vol XXII no 176, 1975.
     *
     * @param location
     *            the initial location
     * @param destination
     *            the destination location
     * @return the geodesic bearing
     */
    static getGeodesicFinalBearing(location: GeoLocation, destination: GeoLocation): number;
    /**
     * Calculate <a href="http://en.wikipedia.org/wiki/Great-circle_distance">geodesic distance</a> in Meters
     * between this Object and a second Object passed to this method using <a
     * href="http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus Vincenty's</a> inverse formula See T Vincenty,
     * "<a href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and Inverse Solutions of Geodesics on the
     * Ellipsoid with application of nested equations</a>", Survey Review, vol XXII no 176, 1975. This uses the
     * WGS-84 geodetic model.
     * @param location
     *            the initial location
     * @param destination
     *            the destination location
     * @return the geodesic distance in Meters
     */
    static getGeodesicDistance(location: GeoLocation, destination: GeoLocation): number;
    /**
     * Calculates the initial <a href="http://en.wikipedia.org/wiki/Great_circle">geodesic</a> bearing, final bearing or
     * <a href="http://en.wikipedia.org/wiki/Great-circle_distance">geodesic distance</a> using <a href=
     * "http://en.wikipedia.org/wiki/Thaddeus_Vincenty">Thaddeus Vincenty's</a> inverse formula See T Vincenty, "<a
     * href="http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf">Direct and Inverse Solutions of Geodesics on the Ellipsoid
     * with application of nested equations</a>", Survey Review, vol XXII no 176, 1975.
     *
     * @param location
     *            the initial location
     * @param destination
     *            the destination location
     * @param formula
     *            This formula calculates initial bearing ({@link #INITIAL_BEARING}),
     *            final bearing ({@link #FINAL_BEARING}) and distance ({@link #DISTANCE}).
     * @return
     *            the geodesic distance, initial or final bearing (based on the formula passed in) between the location
     *            and destination in Meters
     * @see #getGeodesicDistance(GeoLocation, GeoLocation)
     * @see #getGeodesicInitialBearing(GeoLocation, GeoLocation)
     * @see #getGeodesicFinalBearing(GeoLocation, GeoLocation)
     */
    private static vincentyFormula;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Rhumb_line">rhumb line</a>
     * bearing from the current location to the GeoLocation passed in.
     *
     * @param location
     *            the initial location
     * @param destination
     *            the destination location
     * @return the bearing in degrees
     */
    static getRhumbLineBearing(location: GeoLocation, destination: GeoLocation): number;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Rhumb_line">rhumb line</a> distance from the current
     * location to the GeoLocation passed in. Ported from <a href="http://www.movable-type.co.uk/">Chris Veness'</a>
     * Javascript Implementation.
     *
     * @param location
     *            the initial location
     * @param destination
     *            the destination location
     * @return the distance in Meters
     */
    static getRhumbLineDistance(location: GeoLocation, destination: GeoLocation): number;
}

/**
 * A wrapper class for a astronomical times / <em>zmanim</em> that is mostly intended to allow sorting collections of astronomical times.
 * It has fields for both date/time and duration based <em>zmanim</em>, name / labels as well as a longer description or explanation of a
 * <em>zman</em>.
 *
 * Here is an example of various ways of sorting <em>zmanim</em>.
 * <p>First create the Calendar for the location you would like to calculate:
 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 * String locationName = &quot;Lakewood, NJ&quot;;
 * double latitude = 40.0828; // Lakewood, NJ
 * double longitude = -74.2094; // Lakewood, NJ
 * double elevation = 20; // optional elevation correction in Meters
 * // the String parameter in getTimeZone() has to be a valid timezone listed in {@link java.util.TimeZone#getAvailableIDs()}
 * TimeZone timeZone = TimeZone.getTimeZone(&quot;America/New_York&quot;);
 * GeoLocation location = new GeoLocation(locationName, latitude, longitude, elevation, timeZone);
 * ComplexZmanimCalendar czc = new ComplexZmanimCalendar(location);
 * Zman sunset = new Zman(czc.getSunset(), "Sunset");
 * Zman shaah16 = new Zman(czc.getShaahZmanis16Point1Degrees(), "Shaah zmanis 16.1");
 * Zman sunrise = new Zman(czc.getSunrise(), "Sunrise");
 * Zman shaah = new Zman(czc.getShaahZmanisGra(), "Shaah zmanis GRA");
 * ArrayList&lt;Zman&gt; zl = new ArrayList&lt;Zman&gt;();
 * zl.add(sunset);
 * zl.add(shaah16);
 * zl.add(sunrise);
 * zl.add(shaah);
 * //will sort sunset, shaah 1.6, sunrise, shaah GRA
 * System.out.println(zl);
 * Collections.sort(zl, Zman.DATE_ORDER);
 * // will sort sunrise, sunset, shaah, shaah 1.6 (the last 2 are not in any specific order)
 * Collections.sort(zl, Zman.DURATION_ORDER);
 * // will sort sunrise, sunset (the first 2 are not in any specific order), shaah GRA, shaah 1.6
 * Collections.sort(zl, Zman.NAME_ORDER);
 * // will sort shaah 1.6, shaah GRA, sunrise, sunset
 * </pre>
 *
 * @author &copy; Eliyahu Hershfeld 2007-2020
 * @todo Add secondary sorting. As of now the {@code Comparator}s in this class do not sort by secondary order. This means that when sorting a
 * {@link java.util.Collection} of <em>zmanim</em> and using the {@link #DATE_ORDER} {@code Comparator} will have the duration based <em>zmanim</em>
 * at the end, but they will not be sorted by duration. This should be N/A for label based sorting.
 */
declare class Zman {
    /**
     * The name / label of the <em>zman</em>.
     */
    label: string | null;
    /**
     * The {@link Date} of the <em>zman</em>
     */
    zman?: DateTime;
    /**
     * The duration if the <em>zman</em> is  a {@link AstronomicalCalendar#getTemporalHour() temporal hour} (or the various
     * <em>shaah zmanis</em> base times such as {@link ZmanimCalendar#getShaahZmanisGra()  <em>shaah Zmanis GRA</em>} or
     * {@link ComplexZmanimCalendar#getShaahZmanis16Point1Degrees() <em>shaah Zmanis 16.1&deg;</em>}).
     */
    duration?: number;
    /**
     * A longer description or explanation of a <em>zman</em>.
     */
    description?: string;
    /**
     * The constructor setting a {@link Date} based <em>zman</em> and a label.
     * @param date the Date of the <em>zman</em>.
     * @param label the label of the  <em>zman</em> such as "<em>Sof Zman Krias Shema GRA</em>".
     * @see #Zman(long, String)
     */
    constructor(date: DateTime, label: string | null);
    /**
     * The constructor setting a duration based <em>zman</em> such as
     * {@link AstronomicalCalendar#getTemporalHour() temporal hour} (or the various <em>shaah zmanis</em> times such as
     * {@link ZmanimCalendar#getShaahZmanisGra() <em>shaah zmanis GRA</em>} or
     * {@link ComplexZmanimCalendar#getShaahZmanis16Point1Degrees() <em>shaah Zmanis 16.1&deg;</em>}) and label.
     * @param duration a duration based <em>zman</em> such as ({@link AstronomicalCalendar#getTemporalHour()}
     * @param label the label of the  <em>zman</em> such as "<em>Shaah Zmanis GRA</em>".
     * @see #Zman(Date, String)
     */
    constructor(duration: number, label: string | null);
    /**
     * A {@link Comparator} that will compare and sort <em>zmanim</em> by date/time order. Compares its two arguments by the zman's date/time
     * order. Returns a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater
     * than the second.
     * Please note that this class will handle cases where either the {@code Zman} is a null or {@link #getZman()} returns a null.
     */
    static compareDateOrder(zman1: Zman, zman2: Zman): number;
    /**
     * A {@link Comparator} that will compare and sort zmanim by zmanim label order. Compares its two arguments by the zmanim label
     * name order. Returns a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater
     * than the second.
     * Please note that this class will will sort cases where either the {@code Zman} is a null or {@link #label} returns a null
     * as empty {@code String}s.
     */
    static compareNameOrder(zman1: Zman, zman2: Zman): number;
    /**
     * A {@link Comparator} that will compare and sort duration based <em>zmanim</em>  such as
     * {@link AstronomicalCalendar#getTemporalHour() temporal hour} (or the various <em>shaah zmanis</em> times
     * such as <em>{@link ZmanimCalendar#getShaahZmanisGra() shaah zmanis GRA}</em> or
     * {@link ComplexZmanimCalendar#getShaahZmanis16Point1Degrees() <em>shaah zmanis 16.1&deg;</em>}). Returns a negative
     * integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.
     * Please note that this class will will sort cases where {@code Zman} is a null.
     */
    static compareDurationOrder(zman1: Zman, zman2: Zman): number;
    toString(): string;
}
type ZmanWithZmanDate = Zman & {
    zman: DateTime;
};
type ZmanWithDuration = Zman & {
    duration: number;
};

declare namespace Utils {
    function getAllMethodNames(obj: object, excludeContructors?: boolean): Array<string>;
}
declare namespace TimeZone {
    /**
     * Returns the amount of time in milliseconds to add to UTC to get
     * standard time in this time zone. Because this value is not
     * affected by daylight saving time, it is called <I>raw
     * offset</I>.
     *
     * Since JS doesn't have a native function for this, use the lesser offset of January and July.
     *
     * @return the amount of raw offset time in milliseconds to add to UTC.
     */
    function getRawOffset(timeZoneId: string): number;
    /**
     * Returns a name in the specified style of this TimeZone suitable for presentation to the user in the default locale.
     * @param {string} timeZoneId
     * @param {DateTime} [date]
     * @param {boolean} [short]
     */
    function getDisplayName(timeZoneId: string, date?: DateTime, short?: boolean): string | null;
    /**
     * Returns the amount of time to be added to local standard time to get local wall clock time.
     * The default implementation returns 3600000 milliseconds (i.e., one hour) if a call to useDaylightTime() returns true.
     * Otherwise, 0 (zero) is returned.
     * @param {string} timeZoneId
     * @return {number}
     */
    function getDSTSavings(timeZoneId: string): number;
    /**
     * Returns the offset of this time zone from UTC at the specified date. If Daylight Saving Time is in effect at the
     * specified date, the offset value is adjusted with the amount of daylight saving.
     *
     * This method returns a historically correct offset value if an underlying TimeZone implementation subclass
     * supports historical Daylight Saving Time schedule and GMT offset changes.
     * @param {string} timeZoneId
     * @param {number} millisSinceEpoch
     */
    function getOffset(timeZoneId: string, millisSinceEpoch: number): number;
}
/**
 * java.util.Calendar
 */
declare namespace Calendar {
    const JANUARY: number;
    const FEBRUARY: number;
    const MARCH: number;
    const APRIL: number;
    const MAY: number;
    const JUNE: number;
    const JULY: number;
    const AUGUST: number;
    const SEPTEMBER: number;
    const OCTOBER: number;
    const NOVEMBER: number;
    const DECEMBER: number;
    const SUNDAY: number;
    const MONDAY: number;
    const TUESDAY: number;
    const WEDNESDAY: number;
    const THURSDAY: number;
    const FRIDAY: number;
    const SATURDAY: number;
    const DATE = 5;
    const MONTH = 2;
    const YEAR = 1;
}
/**
 * java.lang.Math
 */
declare namespace MathUtils {
    /**
     * java.lang.Math.toRadians
     * @param degrees
     */
    function degreesToRadians(degrees: number): number;
    /**
     * java.lang.Math.toDegrees
     * @param radians
     */
    function radiansToDegrees(radians: number): number;
}
/**
 * java.lang.String
 */
declare namespace StringUtils {
    /**
     * Compares two strings lexicographically.
     * The comparison is based on the Unicode value of each character in
     * the strings. The character sequence represented by this
     * {@code String} object is compared lexicographically to the
     * character sequence represented by the argument string. The result is
     * a negative integer if this {@code String} object
     * lexicographically precedes the argument string. The result is a
     * positive integer if this {@code String} object lexicographically
     * follows the argument string. The result is zero if the strings
     * are equal; {@code compareTo} returns {@code 0} exactly when
     * the {@link #equals(Object)} method would return {@code true}.
     * <p>
     * This is the definition of lexicographic ordering. If two strings are
     * different, then either they have different characters at some index
     * that is a valid index for both strings, or their lengths are different,
     * or both. If they have different characters at one or more index
     * positions, let <i>k</i> be the smallest such index; then the string
     * whose character at position <i>k</i> has the smaller value, as
     * determined by using the &lt; operator, lexicographically precedes the
     * other string. In this case, {@code compareTo} returns the
     * difference of the two character values at position {@code k} in
     * the two string -- that is, the value:
     * <blockquote><pre>
     * this.charAt(k)-anotherString.charAt(k)
     * </pre></blockquote>
     * If there is no index position at which they differ, then the shorter
     * string lexicographically precedes the longer string. In this case,
     * {@code compareTo} returns the difference of the lengths of the
     * strings -- that is, the value:
     * <blockquote><pre>
     * this.length()-anotherString.length()
     * </pre></blockquote>
     *
     * @param string1
     * @param   string2   the {@code String} to be compared.
     * @return  the value {@code 0} if the argument string is equal to
     *          this string; a value less than {@code 0} if this string
     *          is lexicographically less than the string argument; and a
     *          value greater than {@code 0} if this string is
     *          lexicographically greater than the string argument.
     */
    function compareTo(string1: string, string2: string): number;
}
declare namespace IntegerUtils {
    /**
     * Compares 2 numbers
     * @param x
     * @param y
     */
    function compare(x: number, y: number): number;
}
declare const Long_MIN_VALUE: number;
/**
 * @param {number} num
 * @param {number} places - The number of places to pad with zeros
 * @returns {string} - The formatted integer
 */
declare function padZeros(num: number, places: number): string;

/**
 * Implementation of sunrise and sunset methods to calculate astronomical times based on the <a
 * href="http://noaa.gov">NOAA</a> algorithm. This calculator uses the Java algorithm based on the implementation by <a
 * href="http://noaa.gov">NOAA - National Oceanic and Atmospheric Administration</a>'s <a href =
 * "http://www.srrb.noaa.gov/highlights/sunrise/sunrise.html">Surface Radiation Research Branch</a>. NOAA's <a
 * href="http://www.srrb.noaa.gov/highlights/sunrise/solareqns.PDF">implementation</a> is based on equations from <a
 * href="http://www.willbell.com/math/mc1.htm">Astronomical Algorithms</a> by <a
 * href="http://en.wikipedia.org/wiki/Jean_Meeus">Jean Meeus</a>. Added to the algorithm is an adjustment of the zenith
 * to account for elevation. The algorithm can be found in the <a
 * href="http://en.wikipedia.org/wiki/Sunrise_equation">Wikipedia Sunrise Equation</a> article.
 *
 * @author &copy; Eliyahu Hershfeld 2011 - 2019
 */
declare class NOAACalculator extends AstronomicalCalculator {
    /**
     * The <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> of January 1, 2000
     */
    private static readonly JULIAN_DAY_JAN_1_2000;
    /**
     * Julian days per century
     */
    private static readonly JULIAN_DAYS_PER_CENTURY;
    /**
     * @see AstronomicalCalculator#getCalculatorName()
     */
    getCalculatorName(): string;
    /**
     * @see AstronomicalCalculator#getUTCSunrise(Calendar, GeoLocation, double, boolean)
     */
    getUTCSunrise(date: DateTime, geoLocation: GeoLocation, zenith: number, adjustForElevation: boolean): number;
    /**
     * @see AstronomicalCalculator#getUTCSunset(Calendar, GeoLocation, double, boolean)
     */
    getUTCSunset(date: DateTime, geoLocation: GeoLocation, zenith: number, adjustForElevation: boolean): number;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> from a Java Calendar
     *
     * @param calendar
     *            The Java Calendar
     * @return the Julian day corresponding to the date Note: Number is returned for start of day. Fractional days
     *         should be added later.
     */
    private static getJulianDay;
    /**
     * Convert <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> to centuries since J2000.0.
     *
     * @param julianDay
     *            the Julian Day to convert
     * @return the centuries since 2000 Julian corresponding to the Julian Day
     */
    private static getJulianCenturiesFromJulianDay;
    /**
     * Convert centuries since J2000.0 to <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a>.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Julian Day corresponding to the Julian centuries passed in
     */
    private static getJulianDayFromJulianCenturies;
    /**
     * Returns the Geometric <a href="http://en.wikipedia.org/wiki/Mean_longitude">Mean Longitude</a> of the Sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Geometric Mean Longitude of the Sun in degrees
     */
    private static getSunGeometricMeanLongitude;
    /**
     * Returns the Geometric <a href="http://en.wikipedia.org/wiki/Mean_anomaly">Mean Anomaly</a> of the Sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Geometric Mean Anomaly of the Sun in degrees
     */
    private static getSunGeometricMeanAnomaly;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Eccentricity_%28orbit%29">eccentricity of earth's orbit</a>.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the unitless eccentricity
     */
    private static getEarthOrbitEccentricity;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Equation_of_the_center">equation of center</a> for the sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the equation of center for the sun in degrees
     */
    private static getSunEquationOfCenter;
    /**
     * Return the true longitude of the sun
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the sun's true longitude in degrees
     */
    private static getSunTrueLongitude;
    /**
     * Return the apparent longitude of the sun
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return sun's apparent longitude in degrees
     */
    private static getSunApparentLongitude;
    /**
     * Returns the mean <a href="http://en.wikipedia.org/wiki/Axial_tilt">obliquity of the ecliptic</a> (Axial tilt).
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the mean obliquity in degrees
     */
    private static getMeanObliquityOfEcliptic;
    /**
     * Returns the corrected <a href="http://en.wikipedia.org/wiki/Axial_tilt">obliquity of the ecliptic</a> (Axial
     * tilt).
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the corrected obliquity in degrees
     */
    private static getObliquityCorrection;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Declination">declination</a> of the sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return
     *            the sun's declination in degrees
     */
    private static getSunDeclination;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Equation_of_time">Equation of Time</a> - the difference between
     * true solar time and mean solar time
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return equation of time in minutes of time
     */
    private static getEquationOfTime;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Hour_angle">hour angle</a> of the sun at sunrise for the
     * latitude.
     *
     * @param lat
     *            , the latitude of observer in degrees
     * @param solarDec
     *            the declination angle of sun in degrees
     * @param zenith
     *            the zenith
     * @return hour angle of sunrise in radians
     */
    private static getSunHourAngleAtSunrise;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Hour_angle">hour angle</a> of the sun at sunset for the
     * latitude. TODO: use - {@link #getSunHourAngleAtSunrise(double, double, double)} implementation to avoid
     * duplication of code.
     *
     * @param lat
     *            the latitude of observer in degrees
     * @param solarDec
     *            the declination angle of sun in degrees
     * @param zenith
     *            the zenith
     * @return the hour angle of sunset in radians
     */
    private static getSunHourAngleAtSunset;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Celestial_coordinate_system">Solar Elevation</a> for the
     * horizontal coordinate system at the given location at the given time. Can be negative if the sun is below the
     * horizon. Not corrected for altitude.
     *
     * @param cal
     *            time of calculation
     * @param lat
     *            latitude of location for calculation
     * @param lon
     *            longitude of location for calculation
     * @return solar elevation in degrees - horizon is 0 degrees, civil twilight is -6 degrees
     */
    static getSolarElevation(date: DateTime, lat: number, lon: number): number;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Celestial_coordinate_system">Solar Azimuth</a> for the
     * horizontal coordinate system at the given location at the given time. Not corrected for altitude. True south is 0
     * degrees.
     *
     * @param cal
     *            time of calculation
     * @param latitude
     *            latitude of location for calculation
     * @param lon
     *            longitude of location for calculation
     * @return FIXME
     */
    static getSolarAzimuth(date: DateTime, latitude: number, lon: number): number;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Universal_Coordinated_Time">Universal Coordinated Time</a> (UTC)
     * of sunrise for the given day at the given location on earth
     *
     * @param julianDay
     *            the Julian day
     * @param latitude
     *            the latitude of observer in degrees
     * @param longitude
     *            the longitude of observer in degrees
     * @param zenith
     *            the zenith
     * @return the time in minutes from zero UTC
     */
    private static getSunriseUTC;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Universal_Coordinated_Time">Universal Coordinated Time</a> (UTC)
     * of <a href="http://en.wikipedia.org/wiki/Noon#Solar_noon">solar noon</a> for the given day at the given location
     * on earth.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @param longitude
     *            the longitude of observer in degrees
     * @return the time in minutes from zero UTC
     */
    private static getSolarNoonUTC;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Universal_Coordinated_Time">Universal Coordinated Time</a> (UTC)
     * of sunset for the given day at the given location on earth
     *
     * @param julianDay
     *            the Julian day
     * @param latitude
     *            the latitude of observer in degrees
     * @param longitude
     *            : longitude of observer in degrees
     * @param zenith
     *            the zenith
     * @return the time in minutes from zero Universal Coordinated Time (UTC)
     */
    private static getSunsetUTC;
}

/**
 * Implementation of sunrise and sunset methods to calculate astronomical times. This calculator uses the Java algorithm
 * written by <a href="http://web.archive.org/web/20090531215353/http://www.kevinboone.com/suntimes.html">Kevin
 * Boone</a> that is based on the <a href = "http://aa.usno.navy.mil/">US Naval Observatory's</a><a
 * href="http://aa.usno.navy.mil/publications/docs/asa.php">Almanac</a> for Computer algorithm ( <a
 * href="http://www.amazon.com/exec/obidos/tg/detail/-/0160515106/">Amazon</a>, <a
 * href="http://search.barnesandnoble.com/booksearch/isbnInquiry.asp?isbn=0160515106">Barnes &amp; Noble</a>) and is
 * used with his permission. Added to Kevin's code is adjustment of the zenith to account for elevation.
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2019
 * @author &copy; Kevin Boone 2000
 * @version 1.1
 */
declare class SunTimesCalculator extends AstronomicalCalculator {
    /**
     * @see AstronomicalCalculator#getCalculatorName()
     */
    getCalculatorName(): string;
    /**
     * @see AstronomicalCalculator#getUTCSunrise(Calendar, GeoLocation, double, boolean)
     */
    getUTCSunrise(date: DateTime, geoLocation: GeoLocation, zenith: number, adjustForElevation: boolean): number;
    /**
     * @see AstronomicalCalculator#getUTCSunset(Calendar, GeoLocation, double, boolean)
     */
    getUTCSunset(date: DateTime, geoLocation: GeoLocation, zenith: number, adjustForElevation: boolean): number;
    /**
     * The number of degrees of longitude that corresponds to one hour time difference.
     */
    private static readonly DEG_PER_HOUR;
    /**
     * sin of an angle in degrees
     */
    private static sinDeg;
    /**
     * acos of an angle, result in degrees
     */
    private static acosDeg;
    /**
     * asin of an angle, result in degrees
     */
    private static asinDeg;
    /**
     * tan of an angle in degrees
     */
    private static tanDeg;
    /**
     * Calculate cosine of the angle in degrees
     *
     * @param deg degrees
     * @return cosine of the angle in degrees
     */
    private static cosDeg;
    /**
     * Get time difference between location's longitude and the Meridian, in hours. West of Meridian has a negative time
     * difference
     */
    private static getHoursFromMeridian;
    /**
     * Calculate the approximate time of sunset or sunrise in days since midnight Jan 1st, assuming 6am and 6pm events. We
     * need this figure to derive the Sun's mean anomaly.
     *
     * @param dayOfYear the day of year
     * @param hoursFromMeridian hours from the meridian
     * @param isSunrise true for sunrise and false for sunset
     *
     * @return the approximate time of sunset or sunrise in days since midnight Jan 1st, assuming 6am and 6pm events. We
     * need this figure to derive the Sun's mean anomaly.
     */
    private static getApproxTimeDays;
    /**
     * Calculate the Sun's mean anomaly in degrees, at sunrise or sunset, given the longitude in degrees
     *
     * @param dayOfYear the day of the year
     * @param longitude longitude
     * @param isSunrise true for sunrise and false for sunset
     * @return the Sun's mean anomaly in degrees
     */
    private static getMeanAnomaly;
    /**
     * Calculates the Sun's true longitude in degrees. The result is an angle gte 0 and lt 360. Requires the Sun's mean
     * anomaly, also in degrees
     */
    private static getSunTrueLongitude;
    /**
     * Calculates the Sun's right ascension in hours, given the Sun's true longitude in degrees. Input and output are
     * angles gte 0 and lt 360.
     */
    private static getSunRightAscensionHours;
    /**
     * Calculate the cosine of the Sun's local hour angle
     *
     * @param sunTrueLongitude the sun's true longitude
     * @param latitude the latitude
     * @param zenith the zenith
     * @return the cosine of the Sun's local hour angle
     */
    private static getCosLocalHourAngle;
    /**
     * Calculate local mean time of rising or setting. By `local' is meant the exact time at the location, assuming that
     * there were no time zone. That is, the time difference between the location and the Meridian depended entirely on
     * the longitude. We can't do anything with this time directly; we must convert it to UTC and then to a local time.
     * The result is expressed as a fractional number of hours since midnight
     *
     * @param localHour the local hour
     * @param sunRightAscensionHours the sun's right ascention in hours
     * @param approxTimeDays approximate time days
     *
     * @return the fractional number of hours since midnight as a double
     */
    private static getLocalMeanTime;
    /**
     * Get sunrise or sunset time in UTC, according to flag.
     *
     * @param year
     *            4-digit year
     * @param month
     *            month, 1-12 (not the zero based Java month
     * @param day
     *            day of month, 1-31
     * @param longitude
     *            in degrees, longitudes west of Meridian are negative
     * @param latitude
     *            in degrees, latitudes south of equator are negative
     * @param zenith
     *            Sun's zenith, in degrees
     * @param type
     *            type of calculation to carry out {@link #TYPE_SUNRISE} or {@link #TYPE_SUNRISE}.
     *
     * @return the time as a double. If an error was encountered in the calculation (expected behavior for some
     *         locations such as near the poles, {@link Double.NaN} will be returned.
     */
    private static getTimeUTC;
}

/**
 * The ZmanimCalendar is a specialized calendar that can calculate sunrise, sunset and Jewish <em>zmanim</em>
 * (religious times) for prayers and other Jewish religious duties. This class contains the main functionality of the
 * <em>Zmanim</em> library. For a much more extensive list of <em>zmanim</em>, use the {@link ComplexZmanimCalendar} that
 * extends this class. See documentation for the {@link ComplexZmanimCalendar} and {@link AstronomicalCalendar} for
 * simple examples on using the API.
 * <strong>Elevation based <em>zmanim</em> (even sunrise and sunset) should not be used <em>lekula</em> without the guidance
 * of a <em>posek</em></strong>. According to Rabbi Dovid Yehudah Bursztyn in his
 * <a href="https://www.worldcat.org/oclc/1158574217">Zmanim Kehilchasam, 7th edition</a> chapter 2, section 7 (pages 181-182)
 * and section 9 (pages 186-187), no <em>zmanim</em> besides sunrise and sunset should use elevation. However, Rabbi Yechiel
 * Avrahom Zilber in the <a href="https://hebrewbooks.org/51654">Birur Halacha Vol. 6</a> Ch. 58 Pages
 * <a href="https://hebrewbooks.org/pdfpager.aspx?req=51654&amp;pgnum=42">34</a> and
 * <a href="https://hebrewbooks.org/pdfpager.aspx?req=51654&amp;pgnum=50">42</a> is of the opinion that elevation should be
 * accounted for in <em>zmanim</em> calculations. Related to this, Rabbi Yaakov Karp in <a href=
 * "https://www.worldcat.org/oclc/919472094">Shimush Zekeinim</a>, Ch. 1, page 17 states that obstructing horizons should
 * be factored into <em>zmanim</em> calculations. The setting defaults to false (elevation will not be used for
 * <em>zmanim</em> calculations besides sunrise and sunset), unless the setting is changed to true in {@link
 * #setUseElevation(boolean)}. This will impact sunrise and sunset-based <em>zmanim</em> such as {@link #getSunrise()},
 * {@link #getSunset()}, {@link #getSofZmanShmaGRA()}, <em>alos</em>-based <em>zmanim</em> such as {@link #getSofZmanShmaMGA()}
 * that are based on a fixed offset of sunrise or sunset and <em>zmanim</em> based on a percentage of the day such as
 * {@link ComplexZmanimCalendar#getSofZmanShmaMGA90MinutesZmanis()} that are based on sunrise and sunset. Even when set to
 * true it will not impact <em>zmanim</em> that are a degree-based offset of sunrise and sunset, such as {@link
 * ComplexZmanimCalendar#getSofZmanShmaMGA16Point1Degrees()} or {@link ComplexZmanimCalendar#getSofZmanShmaBaalHatanya()} since
 * these <em>zmanim</em> are not linked to sunrise or sunset times (the calculations are based on the astronomical definition of
 * sunrise and sunset calculated in a vacuum with the solar radius above the horizon), and are therefore not impacted by the use
 * of elevation.
 * For additional information on the <em>halachic</em> impact of elevation on <em>zmanim</em> see:
 * <ul>
 * <li><a href="https://www.nli.org.il/en/books/NNL_ALEPH002542826/NLI">Zmanei Halacha Lema'aseh</a> 4th edition by <a href=
 * "http://beinenu.com/rabbis/%D7%94%D7%A8%D7%91-%D7%99%D7%93%D7%99%D7%93%D7%99%D7%94-%D7%9E%D7%A0%D7%AA">Rabbi Yedidya Manat</a>.
 * See section 1, pages 11-12 for a very concise write-up, with details in section 2, pages 37 - 63 and 133 - 151.</li>
 * <li><a href="https://www.worldcat.org/oclc/1158574217">Zmanim Kehilchasam</a> 7th edition, by Rabbi Dovid Yehuda Burstein,  vol 1,
 * chapter 2, pages 95 - 188.</li>
 * <li><a href="https://www.worldcat.org/oclc/36089452">Hazmanim Bahalacha</a> by Rabbi Chaim Banish , perek 7, pages 53 - 63.</li>
 * </ul>
 *
 * <p><b>Note:</b> It is important to read the technical notes on top of the {@link AstronomicalCalculator} documentation
 * before using this code.
 * <p>I would like to thank <a href="https://www.worldcat.org/search?q=au%3AShakow%2C+Yaakov">Rabbi Yaakov Shakow</a>, the
 * author of Luach Ikvei Hayom who spent a considerable amount of time reviewing, correcting and making suggestions on the
 * documentation in this library.
 * <h2>Disclaimer:</h2> I did my best to get accurate results, but please double-check before relying on these
 * <em>zmanim</em> for <em>halacha lema'aseh</em>.
 *
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2022
 */
declare class ZmanimCalendar extends AstronomicalCalendar {
    /**
       * Is elevation factored in for some zmanim (see {@link #isUseElevation()} for additional information).
       * @see #isUseElevation()
       * @see #setUseElevation(boolean)
       */
    private useElevation;
    /**
       * Is elevation above sea level calculated for times besides sunrise and sunset. According to Rabbi Dovid Yehuda
       * Bursztyn in his <a href="https://www.worldcat.org/oclc/659793988">Zmanim Kehilchasam (second edition published
       * in 2007)</a> chapter 2 (pages 186-187) no <em>zmanim</em> besides sunrise and sunset should use elevation. However
       * Rabbi Yechiel Avrahom Zilber in the <a href="https://hebrewbooks.org/51654">Birur Halacha Vol. 6</a> Ch. 58 Pages
       * <a href="https://hebrewbooks.org/pdfpager.aspx?req=51654&amp;pgnum=42">34</a> and <a href=
       * "https://hebrewbooks.org/pdfpager.aspx?req=51654&amp;pgnum=50">42</a> is of the opinion that elevation should be
       * accounted for in <em>zmanim</em> calculations. Related to this, Rabbi Yaakov Karp in <a href=
       * "https://www.worldcat.org/oclc/919472094">Shimush Zekeinim</a>, Ch. 1, page 17 states that obstructing horizons
       * should be factored into <em>zmanim</em> calculations.The setting defaults to false (elevation will not be used for
       * <em>zmanim</em> calculations), unless the setting is changed to true in {@link #setUseElevation(boolean)}. This will
       * impact sunrise and sunset based <em>zmanim</em> such as {@link #getSunrise()}, {@link #getSunset()},
       * {@link #getSofZmanShmaGRA()}, alos based <em>zmanim</em> such as {@link #getSofZmanShmaMGA()} that are based on a
       * fixed offset of sunrise or sunset and <em>zmanim</em> based on a percentage of the day such as {@link
    * ComplexZmanimCalendar#getSofZmanShmaMGA90MinutesZmanis()} that are based on sunrise and sunset. It will not impact
    * <em>zmanim</em> that are a degree based offset of sunrise and sunset, such as
    * {@link ComplexZmanimCalendar#getSofZmanShmaMGA16Point1Degrees()} or {@link ComplexZmanimCalendar#getSofZmanShmaBaalHatanya()}.
    *
    * @return if the use of elevation is active
    *
    * @see #setUseElevation(boolean)
    */
    isUseElevation(): boolean;
    /**
       * Sets whether elevation above sea level is factored into <em>zmanim</em> calculations for times besides sunrise and sunset.
       * See {@link #isUseElevation()} for more details.
       * @see #isUseElevation()
       *
       * @param useElevation set to true to use elevation in <em>zmanim</em> calculations
       */
    setUseElevation(useElevation: boolean): void;
    /**
       * The zenith of 16.1&deg; below geometric zenith (90&deg;). This calculation is used for determining <em>alos</em>
       * (dawn) and <em>tzais</em> (nightfall) in some opinions. It is based on the calculation that the time between dawn
       * and sunrise (and sunset to nightfall) is 72 minutes, the time that is takes to walk 4 <em>mil</em> at 18 minutes
       * a mil (<em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others). The sun's position at
       * 72 minutes before {@link #getSunrise sunrise} in Jerusalem <a href=
       * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> is
       * 16.1&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
       *
       * @see #getAlosHashachar()
       * @see ComplexZmanimCalendar#getAlos16Point1Degrees()
       * @see ComplexZmanimCalendar#getTzais16Point1Degrees()
       * @see ComplexZmanimCalendar#getSofZmanShmaMGA16Point1Degrees()
       * @see ComplexZmanimCalendar#getSofZmanTfilaMGA16Point1Degrees()
       * @see ComplexZmanimCalendar#getMinchaGedola16Point1Degrees()
       * @see ComplexZmanimCalendar#getMinchaKetana16Point1Degrees()
       * @see ComplexZmanimCalendar#getPlagHamincha16Point1Degrees()
       * @see ComplexZmanimCalendar#getPlagAlos16Point1ToTzaisGeonim7Point083Degrees()
       * @see ComplexZmanimCalendar#getSofZmanShmaAlos16Point1ToSunset()
       */
    protected static readonly ZENITH_16_POINT_1: number;
    /**
       * The zenith of 8.5&deg; below geometric zenith (90&deg;). This calculation is used for calculating <em>alos</em>
       * (dawn) and <em>tzais</em> (nightfall) in some opinions. This calculation is based on the position of the sun 36
       * minutes after {@link #getSunset sunset} in Jerusalem <a href=
       * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, which
       * is 8.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}. The <em><a href=
       * "https://www.worldcat.org/oclc/29283612">Ohr Meir</a></em> considers this the time that 3 small stars are visible,
       * which is later than the required 3 medium stars.
       *
       * @see #getTzais()
       * @see ComplexZmanimCalendar#getTzaisGeonim8Point5Degrees()
       */
    protected static readonly ZENITH_8_POINT_5: number;
    /**
       * The default <em>Shabbos</em> candle lighting offset is 18 minutes. This can be changed via the
       * {@link #setCandleLightingOffset(double)} and retrieved by the {@link #getCandleLightingOffset()}.
       */
    private candleLightingOffset;
    /**
       * This method will return {@link #getSeaLevelSunrise() sea level sunrise} if {@link #isUseElevation()} is false (the
       * default), or elevation adjusted {@link AstronomicalCalendar#getSunrise()} if it is true. This allows relevant <em>zmanim</em>
       * in this and extending classes (such as the {@link ComplexZmanimCalendar}) to automatically adjust to the elevation setting.
       *
       * @return {@link #getSeaLevelSunrise()} if {@link #isUseElevation()} is false (the default), or elevation adjusted
       *         {@link AstronomicalCalendar#getSunrise()} if it is true.
       * @see AstronomicalCalendar#getSunrise()
       */
    protected getElevationAdjustedSunrise(): DateTime | null;
    /**
       * This method will return {@link #getSeaLevelSunrise() sea level sunrise} if {@link #isUseElevation()} is false (the default),
       * or elevation adjusted {@link AstronomicalCalendar#getSunrise()} if it is true. This allows relevant <em>zmanim</em>
       * in this and extending classes (such as the {@link ComplexZmanimCalendar}) to automatically adjust to the elevation setting.
       *
       * @return {@link #getSeaLevelSunset()} if {@link #isUseElevation()} is false (the default), or elevation adjusted
       *         {@link AstronomicalCalendar#getSunset()} if it is true.
       * @see AstronomicalCalendar#getSunset()
       */
    protected getElevationAdjustedSunset(): DateTime | null;
    /**
       * A method that returns <em>tzais</em> (nightfall) when the sun is {@link #ZENITH_8_POINT_5 8.5&deg;} below the
       * {@link #GEOMETRIC_ZENITH geometric horizon} (90&deg;) after {@link #getSunset sunset}, a time that Rabbi Meir
       * Posen in his the <em><a href="https://www.worldcat.org/oclc/29283612">Ohr Meir</a></em> calculated that 3 small
       * stars are visible, which is later than the required 3 medium stars. See the {@link #ZENITH_8_POINT_5} constant.
       *
       * @see #ZENITH_8_POINT_5
       *
       * @return The <code>Date</code> of nightfall. If the calculation can't be computed such as northern and southern
       *         locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not reach
       *         low enough below the horizon for this calculation, a null will be returned. See detailed explanation on
       *         top of the {@link AstronomicalCalendar} documentation.
       * @see #ZENITH_8_POINT_5
       * ComplexZmanimCalendar#getTzaisGeonim8Point5Degrees() that returns an identical time to this generic <em>tzais</em>
       */
    getTzais(): DateTime | null;
    /**
       * Returns <em>alos</em> (dawn) based on the time when the sun is {@link #ZENITH_16_POINT_1 16.1&deg;} below the
       * eastern {@link #GEOMETRIC_ZENITH geometric horizon} before {@link #getSunrise sunrise}. This is based on the
       * calculation that the time between dawn and sunrise (and sunset to nightfall) is 72 minutes, the time that is
       * takes to walk 4 <em>mil</em> at 18 minutes a mil (<em><a href="https://en.wikipedia.org/wiki/Maimonides"
       * >Rambam</a></em> and others). The sun's position at 72 minutes before {@link #getSunrise sunrise} in Jerusalem
       * on the <a href="https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox /
       * equilux</a> is 16.1&deg; below {@link #GEOMETRIC_ZENITH}.
       *
       * @see #ZENITH_16_POINT_1
       * @see ComplexZmanimCalendar#getAlos16Point1Degrees()
       *
       * @return The <code>Date</code> of dawn. If the calculation can't be computed such as northern and southern
       *         locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not reach
       *         low enough below the horizon for this calculation, a null will be returned. See detailed explanation on
       *         top of the {@link AstronomicalCalendar} documentation.
       */
    getAlosHashachar(): DateTime | null;
    /**
       * Method to return <em>alos</em> (dawn) calculated using 72 minutes before {@link #getSunrise() sunrise} or
       * {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link #isUseElevation()} setting). This time
       * is based on the time to walk the distance of 4 <em>Mil</em> at 18 minutes a <em>Mil</em>. The 72 minute time (but
       * not the concept of fixed minutes) is based on the opinion that the time of the <em>Neshef</em> (twilight between
       * dawn and sunrise) does not vary by the time of year or location but depends on the time it takes to walk the
       * distance of 4 <em>Mil</em>.
       *
       * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
       *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
       *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getAlos72(): DateTime | null;
    /**
       * This method returns <em>chatzos</em> (midday) following most opinions that <em>chatzos</em> is the midpoint
       * between {@link #getSeaLevelSunrise sea level sunrise} and {@link #getSeaLevelSunset sea level sunset}. A day
       * starting at <em>alos</em> and ending at <em>tzais</em> using the same time or degree offset will also return
       * the same time. The returned value is identical to {@link #getSunTransit()}. In reality due to lengthening or
       * shortening of day, this is not necessarily the exact midpoint of the day, but it is very close.
       *
       * @see AstronomicalCalendar#getSunTransit()
       * @return the <code>Date</code> of chatzos. If the calculation can't be computed such as in the Arctic Circle
       *         where there is at least one day where the sun does not rise, and one where it does not set, a null will
       *         be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       */
    getChatzos(): DateTime | null;
    /**
       * A generic method for calculating the latest <em>zman krias shema</em> (time to recite shema in the morning)
       * that is 3 * <em>shaos zmaniyos</em> (temporal hours) after the start of the day, calculated using the start and
       * end of the day passed to this method.
       * The time from the start of day to the end of day are divided into 12 <em>shaos zmaniyos</em> (temporal hours),
       * and the latest <em>zman krias shema</em> is calculated as 3 of those <em>shaos zmaniyos</em> after the beginning of
       * the day. As an example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link #getSeaLevelSunrise()
       * sea level sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()}
       * elevation setting) to this method will return <em>sof zman krias shema</em> according to the opinion of the
       * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>.
       *
       * @param startOfDay
       *            the start of day for calculating <em>zman krias shema</em>. This can be sunrise or any <em>alos</em> passed
       *            to this method.
       * @param endOfDay
       *            the end of day for calculating <em>zman krias shema</em>. This can be sunset or any <em>tzais</em> passed to
       *            this method.
       * @return the <code>Date</code> of the latest <em>zman shema</em> based on the start and end of day times passed to this
       *         method. If the calculation can't be computed such as in the Arctic Circle where there is at least one day
       *         a year where the sun does not rise, and one where it does not set, a null will be returned. See detailed
       *         explanation on top of the {@link AstronomicalCalendar} documentation.
       */
    getSofZmanShma(startOfDay: DateTime | null, endOfDay: DateTime | null): DateTime | null;
    /**
       * This method returns the latest <em>zman krias shema</em> (time to recite shema in the morning) that is 3 *
       * {@link #getShaahZmanisGra() <em>shaos zmaniyos</em>} (solar hours) after {@link #getSunrise() sunrise} or
       * {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link #isUseElevation()} setting), according
       * to the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>.
       *  The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
       *  sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}
       *  setting).
       *
       * @see #getSofZmanShma(Date, Date)
       * @see #getShaahZmanisGra()
       * @see #isUseElevation()
       * @see ComplexZmanimCalendar#getSofZmanShmaBaalHatanya()
       * @return the <code>Date</code> of the latest <em>zman shema</em> according to the GRA. If the calculation can't be
       *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
       *         and one where it does not set, a null will be returned. See the detailed explanation on top of the {@link
       *         AstronomicalCalendar} documentation.
       */
    getSofZmanShmaGRA(): DateTime | null;
    /**
       * This method returns the latest <em>zman krias shema</em> (time to recite shema in the morning) that is 3 *
       * {@link #getShaahZmanisMGA() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos72()}, according to the
       * <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a>. The day is calculated
       * from 72 minutes before {@link #getSeaLevelSunrise() sea level sunrise} to 72 minutes after {@link
       * #getSeaLevelSunrise sea level sunset} or from 72 minutes before {@link #getSunrise() sunrise} to {@link #getSunset()
       * sunset} (depending on the {@link #isUseElevation()} setting).
       *
       * @return the <code>Date</code> of the latest <em>zman shema</em>. If the calculation can't be computed such as in
       *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       * @see #getSofZmanShma(Date, Date)
       * @see ComplexZmanimCalendar#getShaahZmanis72Minutes()
       * @see ComplexZmanimCalendar#getAlos72()
       * @see ComplexZmanimCalendar#getSofZmanShmaMGA72Minutes() that
       */
    getSofZmanShmaMGA(): DateTime | null;
    /**
       * This method returns the <em>tzais</em> (nightfall) based on the opinion of <em>Rabbeinu Tam</em> that
       * <em>tzais hakochavim</em> is calculated as 72 minutes, the time it takes to walk 4 <em>Mil</em> at 18 minutes
       * a <em>Mil</em>. According to the <a href="https://en.wikipedia.org/wiki/Samuel_Loew">Machtzis Hashekel</a> in
       * Orach Chaim 235:3, the <a href="https://en.wikipedia.org/wiki/Joseph_ben_Meir_Teomim">Pri Megadim</a> in Orach
       * Chaim 261:2 (see the Biur Halacha) and others (see Hazmanim Bahalacha 17:3 and 17:5) the 72 minutes are standard
       * clock minutes any time of the year in any location. Depending on the {@link #isUseElevation()} setting) a 72
       * minute offset from  either {@link #getSunset() sunset} or {@link #getSeaLevelSunset() sea level sunset} is used.
       *
       * @see ComplexZmanimCalendar#getTzais16Point1Degrees()
       * @return the <code>Date</code> representing 72 minutes after sunset. If the calculation can't be
       *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
       *         and one where it does not set, a null will be returned See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       */
    getTzais72(): DateTime | null;
    /**
       * A method to return candle lighting time, calculated as {@link #getCandleLightingOffset()} minutes before
       * {@link #getSeaLevelSunset() sea level sunset}. This will return the time for any day of the week, since it can be
       * used to calculate candle lighting time for <em>Yom Tov</em> (mid-week holidays) as well. Elevation adjustments
       * are intentionally not performed by this method, but you can calculate it by passing the elevation adjusted sunset
       * to {@link #getTimeOffset(Date, long)}.
       *
       * @return candle lighting time. If the calculation can't be computed such as in the Arctic Circle where there is at
       *         least one day a year where the sun does not rise, and one where it does not set, a null will be returned.
       *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       *
       * @see #getSeaLevelSunset()
       * @see #getCandleLightingOffset()
       * @see #setCandleLightingOffset(double)
       */
    getCandleLighting(): DateTime | null;
    /**
       * A generic method for calculating the latest <em>zman tfilah</em> (time to recite the morning prayers)
       * that is 4 * <em>shaos zmaniyos</em> (temporal hours) after the start of the day, calculated using the start and
       * end of the day passed to this method.
       * The time from the start of day to the end of day are divided into 12 <em>shaos zmaniyos</em> (temporal hours),
       * and <em>sof zman tfila</em> is calculated as 4 of those <em>shaos zmaniyos</em> after the beginning of the day.
       * As an example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link #getSeaLevelSunrise()
       * sea level sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()}
       * elevation setting) to this method will return <em>zman tfilah</em> according to the opinion of the <em><a href=
       * "https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>.
       *
       * @param startOfDay
       *            the start of day for calculating <em>zman tfilah</em>. This can be sunrise or any <em>alos</em> passed
       *            to this method.
       * @param endOfDay
       *            the end of day for calculating <em>zman tfilah</em>. This can be sunset or any <em>tzais</em> passed
       *            to this method.
       * @return the <code>Date</code> of the latest <em>zman tfilah</em> based on the start and end of day times passed
       *         to this method. If the calculation can't be computed such as in the Arctic Circle where there is at least
       *         one day a year where the sun does not rise, and one where it does not set, a null will be returned. See
       *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       */
    getSofZmanTfila(startOfDay: DateTime | null, endOfDay: DateTime | null): DateTime | null;
    /**
       * This method returns the latest <em>zman tfila</em> (time to recite shema in the morning) that is 4 *
       * {@link #getShaahZmanisGra() <em>shaos zmaniyos</em> }(solar hours) after {@link #getSunrise() sunrise} or
       * {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link #isUseElevation()} setting), according
       * to the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>.
       * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
       * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}
       * setting).
       *
       * @see #getSofZmanTfila(Date, Date)
       * @see #getShaahZmanisGra()
       * @see ComplexZmanimCalendar#getSofZmanTfilaBaalHatanya()
       * @return the <code>Date</code> of the latest <em>zman tfilah</em>. If the calculation can't be computed such as in
       *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getSofZmanTfilaGRA(): DateTime | null;
    /**
       * This method returns the latest <em>zman tfila</em> (time to recite shema in the morning) that is 4 *
       * {@link #getShaahZmanisMGA() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos72()}, according to the
       * <em><a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em>. The day is calculated
       * from 72 minutes before {@link #getSeaLevelSunrise() sea level sunrise} to 72 minutes after {@link
       * #getSeaLevelSunrise sea level sunset} or from 72 minutes before {@link #getSunrise() sunrise} to {@link #getSunset()
       * sunset} (depending on the {@link #isUseElevation()} setting).
       *
       * @return the <code>Date</code> of the latest <em>zman tfila</em>. If the calculation can't be computed such as in
       *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set), a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       * @see #getSofZmanTfila(Date, Date)
       * @see #getShaahZmanisMGA()
       * @see #getAlos72()
       */
    getSofZmanTfilaMGA(): DateTime | null;
    /**
       * A generic method for calculating the latest <em>mincha gedola</em> (the earliest time to recite the mincha  prayers)
       * that is 6.5 * <em>shaos zmaniyos</em> (temporal hours) after the start of the day, calculated using the start and end
       * of the day passed to this method.
       * The time from the start of day to the end of day are divided into 12 <em>shaos zmaniyos</em> (temporal hours), and
       * <em>mincha gedola</em> is calculated as 6.5 of those <em>shaos zmaniyos</em> after the beginning of the day. As an
       * example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link #getSeaLevelSunrise() sea level
    * sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()} elevation
    * setting) to this method will return <em>mincha gedola</em> according to the opinion of the
    * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>.
    *
    * @param startOfDay
    *            the start of day for calculating <em>Mincha gedola</em>. This can be sunrise or any <em>alos</em> passed
    *            to this method.
    * @param endOfDay
    *            the end of day for calculating <em>Mincha gedola</em>. This can be sunset or any <em>tzais</em> passed
    *            to this method.
    * @return the <code>Date</code> of the time of <em>Mincha gedola</em> based on the start and end of day times
    *         passed to this method. If the calculation can't be computed such as in the Arctic Circle where there is
    *         at least one day a year where the sun does not rise, and one where it does not set, a null will be
    *         returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
    */
    getMinchaGedola(startOfDay?: DateTime | null, endOfDay?: DateTime | null): DateTime | null;
    /**
       * A generic method for calculating <em>samuch lemincha ketana</em>, / near <em>mincha ketana</em> time that is half
       * an hour before {@link #getMinchaKetana(Date, Date)}  or 9 * <em>shaos zmaniyos</em> (temporal hours) after the
       * start of the day, calculated using the start and end of the day passed to this method.
       * The time from the start of day to the end of day are divided into 12 <em>shaos zmaniyos</em> (temporal hours), and
       * <em>samuch lemincha ketana</em> is calculated as 9 of those <em>shaos zmaniyos</em> after the beginning of the day.
       * For example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link #getSeaLevelSunrise() sea
       * level sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()} elevation
       * setting) to this method will return <em>samuch lemincha ketana</em> according to the opinion of the
       * <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>.
       *
       * @param startOfDay
       *            the start of day for calculating <em>samuch lemincha ketana</em>. This can be sunrise or any <em>alos</em>
       *            passed to to this method.
       * @param endOfDay
       *            the end of day for calculating <em>samuch lemincha ketana</em>. This can be sunset or any <em>tzais</em>
       *            passed to this method.
       * @return the <code>Date</code> of the time of <em>Mincha ketana</em> based on the start and end of day times
       *         passed to this method. If the calculation can't be computed such as in the Arctic Circle where there is
       *         at least one day a year where the sun does not rise, and one where it does not set, a null will be
       *         returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       *
       * @see ComplexZmanimCalendar#getSamuchLeMinchaKetanaGRA()
       * @see ComplexZmanimCalendar#getSamuchLeMinchaKetana16Point1Degrees()
       * @see ComplexZmanimCalendar#getSamuchLeMinchaKetana72Minutes()
       */
    getSamuchLeMinchaKetana(startOfDay: DateTime, endOfDay: DateTime): DateTime | null;
    /**
     * A generic method for calculating <em>mincha ketana</em>, (the preferred time to recite the mincha prayers in
     * the opinion of the <em><a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a></em> and others) that is
     * 9.5 * <em>shaos zmaniyos</em> (temporal hours) after the start of the day, calculated using the start and end
     * of the day passed to this method.
     * The time from the start of day to the end of day are divided into 12 <em>shaos zmaniyos</em> (temporal hours), and
     * <em>mincha ketana</em> is calculated as 9.5 of those <em>shaos zmaniyos</em> after the beginning of the day. As an
     * example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link #getSeaLevelSunrise() sea level
       * sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()} elevation
     * setting) to this method will return <em>mincha ketana</em> according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>.
     *
     * @param startOfDay
     *            the start of day for calculating <em>Mincha ketana</em>. This can be sunrise or any alos passed to
     *            this method.
     * @param endOfDay
     *            the end of day for calculating <em>Mincha ketana</em>. This can be sunrise or any alos passed to
     *            this method.
     * @return the <code>Date</code> of the time of <em>Mincha ketana</em> based on the start and end of day times
     *         passed to this method. If the calculation can't be computed such as in the Arctic Circle where there is
     *         at least one day a year where the sun does not rise, and one where it does not set, a null will be
     *         returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaKetana(startOfDay?: DateTime | null, endOfDay?: DateTime | null): DateTime | null;
    /**
     * A generic method for calculating <em>plag hamincha</em> (the earliest time that Shabbos can be started) that is
     * 10.75 hours after the start of the day, (or 1.25 hours before the end of the day) based on the start and end of
     * the day passed to the method.
     * The time from the start of day to the end of day are divided into 12 <em>shaos zmaniyos</em> (temporal hours), and
     * <em>plag hamincha</em> is calculated as 10.75 of those <em>shaos zmaniyos</em> after the beginning of the day. As an
     * example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link #getSeaLevelSunrise() sea level
       * sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()} elevation
     * setting) to this method will return <em>plag mincha</em> according to the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>.
     *
     * @param startOfDay
     *            the start of day for calculating plag. This can be sunrise or any alos passed to this method.
     * @param endOfDay
     *            the end of day for calculating plag. This can be sunrise or any alos passed to this method.
     * @return the <code>Date</code> of the time of <em>plag hamincha</em> based on the start and end of day times
     *         passed to this method. If the calculation can't be computed such as in the Arctic Circle where there is
     *         at least one day a year where the sun does not rise, and one where it does not set, a null will be
     *         returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getPlagHamincha(startOfDay?: DateTime | null, endOfDay?: DateTime | null): DateTime | null;
    /**
     * This method returns <em>plag hamincha</em>, that is 10.75 * <em>{@link #getShaahZmanisGra() shaos zmaniyos}</em>
     * (solar hours) after {@link #getSunrise() sunrise} or {@link #getSeaLevelSunrise() sea level sunrise} (depending on
     * the {@link #isUseElevation()} setting), according to the <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon"
     * >GRA</a></em>. Plag hamincha is the earliest time that <em>Shabbos</em> can be started.
     * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
       * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}
     *
     * @see #getPlagHamincha(Date, Date)
     * @see ComplexZmanimCalendar#getPlagHaminchaBaalHatanya()
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    /**
     * A method that returns a <em>shaah zmanis</em> ({@link #getTemporalHour(Date, Date) temporal hour}) according to
     * the opinion of the <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>. This calculation divides
     * the day based on the opinion of the <em>GRA</em> that the day runs from from {@link #getSeaLevelSunrise() sea
       * level sunrise} to {@link #getSeaLevelSunrise sea level sunset} or {@link #getSunrise() sunrise} to
     * {@link #getSunset() sunset} (depending on the {@link #isUseElevation()} setting). The day is split into 12 equal
     * parts with each one being a <em>shaah zmanis</em>. This method is similar to {@link #getTemporalHour}, but can
     * account for elevation.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em> calculated from sunrise to sunset.
     *         If the calculation can't be computed such as in the Arctic Circle where there is at least one day a year
     *         where the sun does not rise, and one where it does not set, {@link Long#MIN_VALUE} will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getTemporalHour(Date, Date)
     * @see #getSeaLevelSunrise()
     * @see #getSeaLevelSunset()
     * @see ComplexZmanimCalendar#getShaahZmanisBaalHatanya()
     */
    getShaahZmanisGra(): number;
    /**
     * A method that returns a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <em><a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a></em> based on a 72 minutes <em>alos</em>
     * and <em>tzais</em>. This calculation divides the day that runs from dawn to dusk (for sof zman krias shema and tfila).
     * Dawn for this calculation is 72 minutes before {@link #getSunrise() sunrise} or {@link #getSeaLevelSunrise() sea level
       * sunrise} (depending on the {@link #isUseElevation()} elevation setting) and dusk is 72 minutes after {@link #getSunset
       * sunset} or {@link #getSeaLevelSunset() sea level sunset} (depending on the {@link #isUseElevation()} elevation setting).
     * This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>. Alternate methods of calculating a
     * <em>shaah zmanis</em> according to the Magen Avraham (MGA) are available in the subclass {@link ComplexZmanimCalendar}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanisMGA(): number;
    /**
     * Default constructor will set a default {@link GeoLocation#GeoLocation()}, a default
     * {@link AstronomicalCalculator#getDefault() AstronomicalCalculator} and default the calendar to the current date.
     *
     * @see AstronomicalCalendar#AstronomicalCalendar()
     */
    /**
     * A constructor that takes a {@link GeoLocation} as a parameter.
     *
     * @param location
     *            the location
     */
    /**
     * A method to get the offset in minutes before {@link AstronomicalCalendar#getSeaLevelSunset() sea level sunset} which
     * is used in calculating candle lighting time. The default time used is 18 minutes before sea level sunset. Some
     * calendars use 15 minutes, while the custom in Jerusalem is to use a 40 minute offset. Please check the local custom
     * for candle lighting time.
     *
     * @return Returns the currently set candle lighting offset in minutes.
     * @see #getCandleLighting()
     * @see #setCandleLightingOffset(double)
     */
    getCandleLightingOffset(): number;
    /**
     * A method to set the offset in minutes before {@link AstronomicalCalendar#getSeaLevelSunset() sea level sunset} that is
     * used in calculating candle lighting time. The default time used is 18 minutes before sunset. Some calendars use 15
     * minutes, while the custom in Jerusalem is to use a 40 minute offset.
     *
     * @param candleLightingOffset
     *            The candle lighting offset to set in minutes.
     * @see #getCandleLighting()
     * @see #getCandleLightingOffset()
     */
    setCandleLightingOffset(candleLightingOffset: number): void;
    getClassName(): string;
    /**
     * This is a utility method to determine if the current Date (date-time) passed in has a <em>melacha</em> (work) prohibition.
     * Since there are many opinions on the time of <em>tzais</em>, the <em>tzais</em> for the current day has to be passed to this
     * class. Sunset is the classes current day's {@link #getElevationAdjustedSunset() elevation adjusted sunset} that observes the
     * {@link #isUseElevation()} settings. The {@link JewishCalendar#getInIsrael()} will be set by the inIsrael parameter.
     *
     * @param currentTime the current time
     * @param tzais the time of tzais
     * @param inIsrael whether to use Israel holiday scheme or not
     *
     * @return true if <em>melacha</em> is prohibited or false if it is not.
     *
     * @see JewishCalendar#isAssurBemelacha()
     * @see JewishCalendar#hasCandleLighting()
     * @see JewishCalendar#setInIsrael(boolean)
     */
    isAssurBemlacha(currentTime: DateTime, tzais: DateTime, inIsrael: boolean): boolean;
    /**
     * A generic utility method for calculating any <em>shaah zmanis</em> (temporal hour) based <em>zman</em> with the
     * day defined as the start and end of day (or night) and the number of <em>shaahos zmaniyos</em> passed to the
     * method. This simplifies the code in other methods such as {@link #getPlagHamincha(Date, Date)} and cuts down on
     * code replication. As an example, passing {@link #getSunrise() sunrise} and {@link #getSunset sunset} or {@link
      * #getSeaLevelSunrise() sea level sunrise} and {@link #getSeaLevelSunset() sea level sunset} (depending on the
     * {@link #isUseElevation()} elevation setting) and 10.75 hours to this method will return <em>plag mincha</em>
     * according to the opinion of the <em><a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a></em>.
     *
     * @param startOfDay
     *            the start of day for calculating the <em>zman</em>. This can be sunrise or any <em>alos</em> passed
     *            to this method.
     * @param endOfDay
     *            the end of day for calculating the <em>zman</em>. This can be sunrise or any <em>alos</em> passed to
     *            this method.
     * @param hours
     *            the number of <em>shaahos zmaniyos</em> (temporal hours) to offset from the start of day
     * @return the <code>Date</code> of the time of <em>zman</em> with the <em>shaahos zmaniyos</em> (temporal hours)
     *         in the day offset from the start of day passed to this method. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a null will be  returned. See detailed explanation on top of the {@link
      *         AstronomicalCalendar} documentation.
     */
    getShaahZmanisBasedZman(startOfDay: DateTime | null, endOfDay: DateTime | null, hours: number): DateTime | null;
}

/**
 * <p>This class extends ZmanimCalendar and provides many more <em>zmanim</em> than available in the ZmanimCalendar. The basis
 * for most <em>zmanim</em> in this class are from the <em>sefer</em> <b><a href="https://hebrewbooks.org/9765">Yisroel
 * Vehazmanim</a></b> by <b><a href="https://en.wikipedia.org/wiki/Yisroel_Dovid_Harfenes">Rabbi Yisrael Dovid Harfenes</a></b>.
 * As an example of the number of different <em>zmanim</em> made available by this class, there are methods to return 18
 * different calculations for <em>alos</em> (dawn), 18 for <em>plag hamincha</em> and 29 for <em>tzais</em> available in this
 * API. The real power of this API is the ease in calculating <em>zmanim</em> that are not part of the library. The methods for
 * <em>zmanim</em> calculations not present in this class or it's superclass  {@link ZmanimCalendar} are contained in the
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
 * <p>
 * <b>Note:</b> For locations such as Israel where the beginning and end of daylight savings time can fluctuate from
 * year to year, if your version of Java does not have an <a href=
 * "https://www.oracle.com/java/technologies/tzdata-versions.html">up to date timezone database</a>, create a
 * {@link java.util.SimpleTimeZone} with the known start and end of DST.
 * To get <em>alos</em> calculated as 14&deg; below the horizon (as calculated in the calendars published in Montreal),
 * add {@link AstronomicalCalendar#GEOMETRIC_ZENITH} (90) to the 14&deg; offset to get the desired time:
 * <br><br>
 * <pre style="background: #FEF0C9; display: inline-block;">
 *  Date alos14 = czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 14);</pre>
 * <p>
 * To get <em>mincha gedola</em> calculated based on the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern"
 * >Magen Avraham (MGA)</a> using a <em>shaah zmanis</em> based on the day starting
 * 16.1&deg; below the horizon (and ending 16.1&deg; after sunset) the following calculation can be used:
 *
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date minchaGedola = czc.getTimeOffset(czc.getAlos16point1Degrees(), czc.getShaahZmanis16Point1Degrees() * 6.5);</pre>
 * <p>
 * or even simpler using the included convenience methods
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date minchaGedola = czc.getMinchaGedola(czc.getAlos16point1Degrees(), czc.getShaahZmanis16Point1Degrees());</pre>
 * <p>
 * A little more complex example would be calculating <em>zmanim</em> that rely on a <em>shaah zmanis</em> that is
 * not present in this library. While a drop more complex, it is still rather easy. An example would be to calculate
 * the <a href="https://en.wikipedia.org/wiki/Israel_Isserlein">Trumas Hadeshen</a>'s <em>alos</em> to
 * <em>tzais</em> based <em>plag hamincha</em> as calculated in the Machzikei Hadass calendar in Manchester, England.
 * A number of this calendar's <em>zmanim</em> are calculated based on a day starting at <em>alos</em> of 12&deg; before
 * sunrise and ending at <em>tzais</em> of 7.083&deg; after sunset. Be aware that since the <em>alos</em> and <em>tzais</em>
 * do not use identical degree-based offsets, this leads to <em>chatzos</em> being at a time other than the
 * {@link #getSunTransit() solar transit} (solar midday). To calculate this <em>zman</em>, use the following steps. Note
 * that <em>plag hamincha</em> is 10.75 hours after the start of the day, and the following steps are all that it takes.
 * <br>
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date plag = czc.getPlagHamincha(czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 12),
 * 				czc.getSunsetOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + ZENITH_7_POINT_083));</pre>
 * <p>
 * Something a drop more challenging, but still simple, would be calculating a <em>zman</em> using the same "complex"
 * offset day used in the above mentioned Manchester calendar, but for a <em>shaos zmaniyos</em> based <em>zman</em> not
 * supported by this library, such as calculating the point that one should be <em>makpid</em>
 * not to eat on <em>erev Shabbos</em> or <em>erev Yom Tov</em>. This is 9 <em>shaos zmaniyos</em> into the day.
 * <ol>
 * 	<li>Calculate the <em>shaah zmanis</em> in milliseconds for this day</li>
 * 	<li>Add 9 of these <em>shaos zmaniyos</em> to <em>alos</em> starting at 12&deg;</li>
 * </ol>
 * <br>
 * <pre style="background: #FEF0C9; display: inline-block;">
 * long shaahZmanis = czc.getTemporalHour(czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 12),
 * 						czc.getSunsetOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + ZENITH_7_POINT_083));
 * Date sofZmanAchila = getTimeOffset(czc.getSunriseOffsetByDegrees({@link AstronomicalCalendar#GEOMETRIC_ZENITH} + 12),
 * 					shaahZmanis * 9);</pre>
 * <p>
 * Calculating this <em>sof zman achila</em> according to the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>
 * is simplicity itself.
 * <pre style="background: #FEF0C9; display: inline-block;">
 * Date sofZamnAchila = czc.getTimeOffset(czc.getSunrise(), czc.getShaahZmanisGra() * 9);</pre>
 *
 * <h2>Documentation from the {@link ZmanimCalendar} parent class</h2>
 * {@inheritDoc}
 *
 * @author &copy; Eliyahu Hershfeld 2004 - 2023
 */
declare class ComplexZmanimCalendar extends ZmanimCalendar {
    /**
     * The zenith of 3.7&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> that <em>tzais</em> is the
     * time it takes to walk 3/4 of a <em>Mil</em> at 18 minutes a <em>Mil</em>, or 13.5 minutes after sunset. The sun
     * is 3.7&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} at this time in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>.
     *
     * @see #getTzaisGeonim3Point7Degrees()
     */
    protected static readonly ZENITH_3_POINT_7: number;
    /**
     * The zenith of 3.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> that <em>tzais</em> is the
     * time it takes to walk 3/4 of a <em>Mil</em> at 18 minutes a <em>Mil</em>, or 13.5 minutes after sunset. The sun
     * is 3.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} at this time in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>.
     *
     * @see #getTzaisGeonim3Point8Degrees()
     */
    protected static readonly ZENITH_3_POINT_8: number;
    /**
     * The zenith of 5.95&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun 24 minutes after sunset in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
     * which calculates to 5.95&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getTzaisGeonim5Point95Degrees()
     */
    protected static readonly ZENITH_5_POINT_95: number;
    /**
     * The zenith of 7.083&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This is often referred to as
     * 7&deg;5' or 7&deg; and 5 minutes. This calculation is used for calculating <em>alos</em> (dawn) and
     * <em>tzais</em> (nightfall) according to some opinions. This calculation is based on observation of 3 medium sized
     * stars by Dr. Baruch Cohen in his calendar published in in 1899 in Strasbourg, France. This calculates to
     * 7.0833333&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}. The <a href="https://hebrewbooks.org/1053">Sh"Ut
     * Melamed Leho'il</a> in Orach Chaim 30 agreed to this <em>zman</em>, as did the Sh"Ut Bnei Tziyon, Tenuvas Sadeh and
     * it is very close to the time of the <a href="https://hebrewbooks.org/22044">Mekor Chesed</a> of the Sefer chasidim.
     * It is close to the position of the sun 30 minutes after sunset in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, but not
     * Exactly. The actual position of the sun 30 minutes after sunset in Jerusalem at the equilux is 7.205&deg; and
     * 7.199&deg; at the equinox. See Hazmanim Bahalacha vol 2, pages 520-521 for details.
     * @todo Hyperlink the proper sources.
     *
     * @see #getTzaisGeonim7Point083Degrees()
     * @see #getBainHashmashosRT13Point5MinutesBefore7Point083Degrees()
     */
    protected static readonly ZENITH_7_POINT_083: number;
    /**
     * The zenith of 10.2&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun
     * 45 minutes before {@link #getSunrise sunrise} in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> which
     * calculates to 10.2&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getMisheyakir10Point2Degrees()
     */
    protected static readonly ZENITH_10_POINT_2: number;
    /**
     * The zenith of 11&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun
     * 48 minutes before {@link #getSunrise sunrise} in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, which
     * calculates to 11&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getMisheyakir11Degrees()
     */
    protected static readonly ZENITH_11_DEGREES: number;
    /**
     * The zenith of 11.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>misheyakir</em> according to some opinions. This calculation is based on the position of the sun
     * 52 minutes before {@link #getSunrise sunrise} in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, which
     * calculates to 11.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getMisheyakir11Point5Degrees()
     */
    protected static readonly ZENITH_11_POINT_5: number;
    /**
     * The zenith of 13.24&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating Rabbeinu Tam's <em>bain hashmashos</em> according to some opinions.
     * NOTE: See comments on {@link #getBainHashmashosRT13Point24Degrees} for additional details about the degrees.
     *
     * @see #getBainHashmashosRT13Point24Degrees
     *
     */
    protected static readonly ZENITH_13_POINT_24: number;
    /**
     * The zenith of 19&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> according to some opinions.
     *
     * @see #getAlos19Degrees()
     * @see #ZENITH_19_POINT_8
     */
    protected static readonly ZENITH_19_DEGREES: number;
    /**
     * The zenith of 19.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> (dawn) and <em>tzais</em> (nightfall) according to some opinions. This calculation is
     * based on the position of the sun 90 minutes after sunset in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> which
     * calculates to 19.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getTzais19Point8Degrees()
     * @see #getAlos19Point8Degrees()
     * @see #getAlos90()
     * @see #getTzais90()
     * @see #ZENITH_19_DEGREES
     */
    protected static readonly ZENITH_19_POINT_8: number;
    /**
     * The zenith of 26&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>alos</em> (dawn) and <em>tzais</em> (nightfall) according to some opinions. This calculation is
     * based on the position of the sun {@link #getAlos120() 120 minutes} after sunset in Jerusalem o<a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> which
     * calculates to 26&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}. Since the level of darkness when the sun is
     * 26&deg; and at a point when the level of darkness is long past the 18&deg; point where the darkest point is reached,
     * it should only be used <em>lechumra</em> such as delaying the start of nighttime <em>mitzvos</em> or avoiding eating
     * this early on a fast day.
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
     * the sun {@link #getTzaisGeonim4Point37Degrees() 16 7/8 minutes} after sunset (3/4 of a 22.5-minute <em>Mil</em>)
     * in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
     * which calculates to 4.37&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getTzaisGeonim4Point37Degrees()
     */
    protected static readonly ZENITH_4_POINT_37: number;
    /**
     * The zenith of 4.61&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun {@link #getTzaisGeonim4Point37Degrees() 18 minutes} after sunset (3/4 of a 24-minute <em>Mil</em>) in
     * Jerusalem <a href="https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox
     * / equilux</a>, which calculates to 4.61&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     * @todo add documentation links
     *
     * @see #getTzaisGeonim4Point61Degrees()
     */
    protected static readonly ZENITH_4_POINT_61: number;
    /**
     * The zenith of 4.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;).
     * @todo Add more documentation.
     * @see #getTzaisGeonim4Point8Degrees()
     */
    protected static readonly ZENITH_4_POINT_8: number;
    /**
     * The zenith of 3.65&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This calculation is based on the position of
     * the sun {@link #getTzaisGeonim3Point65Degrees() 13.5 minutes} after sunset (3/4 of an 18-minute <em>Mil</em>)
     * in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> which
     * calculates to 3.65&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getTzaisGeonim3Point65Degrees()
     */
    protected static readonly ZENITH_3_POINT_65: number;
    /**
     * The zenith of 3.676&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;).
     * @todo Add more documentation.
     */
    protected static readonly ZENITH_3_POINT_676: number;
    /**
     * The zenith of 5.88&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;).
     * @todo Add more documentation.
     */
    protected static readonly ZENITH_5_POINT_88: number;
    /**
     * The zenith of 1.583&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>netz amiti</em> (sunrise) and <em>shkiah amiti</em> (sunset) based on the opinion of the
     * <a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a>.
     *
     * @see #getSunriseBaalHatanya()
     * @see #getSunsetBaalHatanya()
     */
    protected static readonly ZENITH_1_POINT_583: number;
    /**
     * The zenith of 16.9&deg; below geometric zenith (90&deg;). This calculation is used for determining <em>alos</em>
     * (dawn) based on the opinion of the Baal Hatanya. It is based on the calculation that the time between dawn
     * and <em>netz amiti</em> (sunrise) is 72 minutes, the time that is takes to walk 4 <em>mil</em> at 18 minutes
     * a <em>mil</em> (<a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others). The sun's position at 72
     * minutes before {@link #getSunriseBaalHatanya <em>netz amiti</em> (sunrise)} in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> is
     * 16.9&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getAlosBaalHatanya()
     */
    protected static readonly ZENITH_16_POINT_9: number;
    /**
     * The zenith of 16.9&deg; below geometric zenith (90&deg;). This calculation is used for determining <em>alos</em>
     * (dawn) based on the opinion of the Baal Hatanya. It is based on the calculation that the time between dawn
     * and <em>netz amiti</em> (sunrise) is 72 minutes, the time that is takes to walk 4 <em>mil</em> at 18 minutes
     * a <em>mil</em> (<a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others). The sun's position at 72
     * minutes before {@link #getSunriseBaalHatanya <em>netz amiti</em> (sunrise)} in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> is
     * 16.9&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     *
     * @see #getAlosBaalHatanya()
     */
    protected static readonly ZENITH_6_DEGREES: number;
    /**
     * The zenith of 6.45&deg; below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating <em>tzais</em> (nightfall) according to some opinions. This is based on the calculations of <a href=
     * "https://en.wikipedia.org/wiki/Yechiel_Michel_Tucazinsky">Rabbi Yechiel Michel Tucazinsky</a> of the position of
     * the sun no later than {@link #getTzaisGeonim6Point45Degrees() 31 minutes} after sunset in Jerusalem, and at the
     * height of the summer solstice, this <em>zman</em> is 28 minutes after <em>shkiah</em>. This computes to 6.45&deg;
     * below {@link #GEOMETRIC_ZENITH geometric zenith}. This calculation is found in the <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=50536&st=&pgnum=51">Birur Halacha Yoreh Deah 262</a> it the commonly
     * used <em>zman</em> in Israel. It should be noted that this differs from the 6.1&deg;/6.2&deg; calculation for
     * Rabbi Tucazinsky's time as calculated by the Hazmanim Bahalacha Vol II chapter 50:7 (page 515).
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
     * @see #getTzaisGeonim7Point67Degrees()
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
     * The zenith of 2.1&deg; above {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating the start of <em>bain hashmashos</em> (twilight) of 13.5 minutes before sunset converted to degrees
     * according to the Yereim. As is traditional with degrees below the horizon, this is calculated without refraction
     * and from the center of the sun. It would be 0.833&deg; less without this.
     *
     * @see #getBainHashmashosYereim2Point1Degrees()
     */
    protected static readonly ZENITH_MINUS_2_POINT_1: number;
    /**
     * The zenith of 2.8&deg; above {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating the start of <em>bain hashmashos</em> (twilight) of 16.875 minutes before sunset converted to degrees
     * according to the Yereim. As is traditional with degrees below the horizon, this is calculated without refraction
     * and from the center of the sun. It would be 0.833&deg; less without this.
     *
     * @see #getBainHashmashosYereim2Point8Degrees()
     */
    protected static readonly ZENITH_MINUS_2_POINT_8: number;
    /**
     * The zenith of 3.05&deg; above {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). This calculation is used for
     * calculating the start of <em>bain hashmashos</em> (twilight) of 18 minutes before sunset converted to degrees
     * according to the Yereim. As is traditional with degrees below the horizon, this is calculated without refraction
     * and from the center of the sun. It would be 0.833&deg; less without this.
     *
     * @see #getBainHashmashosYereim3Point05Degrees()
     */
    protected static readonly ZENITH_MINUS_3_POINT_05: number;
    /**
     * The offset in minutes (defaults to 40) after sunset used for <em>tzeit</em> based on calculations of
     * <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah.
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
     * divides the day based on the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen
     * Avraham (MGA)</a> that the day runs from dawn to dusk. Dawn for this calculation is when the sun is 19.8&deg;
     * below the eastern geometric horizon before sunrise. Dusk for this is when the sun is 19.8&deg; below the western
     * geometric horizon after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis19Point8Degrees(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a 18&deg; dip. This calculation divides
     * the day based on the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham
     * (MGA)</a> that the day runs from dawn to dusk. Dawn for this calculation is when the sun is 18&deg; below the
     * eastern geometric horizon before sunrise. Dusk for this is when the sun is 18&deg; below the western geometric
     * horizon after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis18Degrees(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 26&deg;. This calculation
     * divides the day based on the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen
     * Avraham (MGA)</a> that the day runs from dawn to dusk. Dawn for this calculation is when the sun is
     * {@link #getAlos26Degrees() 26&deg;} below the eastern geometric horizon before sunrise. Dusk for this is when
     * the sun is {@link #getTzais26Degrees() 26&deg;} below the western geometric horizon after sunset. This day is
     * split into 12 equal parts with each part being a <em>shaah zmanis</em>. Since <em>zmanim</em> that use this
     * method are extremely late or early and at a point when the sky is a long time past the 18&deg; point where the
     * darkest point is reached, <em>zmanim</em> that use this should only be used <em>lechumra</em>, such as
     * delaying the start of nighttime <em>mitzvos</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a {@link Long#MIN_VALUE}
     *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis120Minutes()
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
     * Method to return a <em>shaah zmanis</em> (solar hour) according to the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a>. This calculation
     * divides the day based on the opinion of the MGA that the day runs from dawn to dusk. Dawn for this calculation is
     * 60 minutes before sunrise and dusk is 60 minutes after sunset. This day is split into 12 equal parts with each
     * part being a <em>shaah zmanis</em>. Alternate methods of calculating a <em>shaah zmanis</em> are available in the
     * subclass {@link ComplexZmanimCalendar}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getAlos60()
     * @see #getTzais60()
     * @see #getPlagHamincha60Minutes()
     */
    getShaahZmanis60Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (solar hour) according to the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a>. This calculation divides the day
     * based on the opinion of the MGA that the day runs from dawn to dusk. Dawn for this calculation is 72 minutes
     * before sunrise and dusk is 72 minutes after sunset. This day is split into 12 equal parts with each part
     * being a <em>shaah zmanis</em>. Alternate methods of calculating a <em>shaah zmanis</em> are available in the
     * subclass {@link ComplexZmanimCalendar}.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis72Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em> being
     * {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This calculation
     * divides the day based on the opinion of the MGA that the day runs from dawn to dusk. Dawn for this calculation
     * is 72 minutes <em>zmaniyos</em> before sunrise and dusk is 72 minutes <em>zmaniyos</em> after sunset. This day
     * is split into 12 equal parts with each part being a <em>shaah zmanis</em>. This is identical to 1/10th of the day
     * from {@link #getSunrise() sunrise} to {@link #getSunset() sunset}.
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
     * divides the day based on the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen
     * Avraham (MGA)</a> that the day runs from dawn to dusk. Dawn for this calculation is 90 minutes before sunrise
     * and dusk is 90 minutes after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis90Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em> being
     * {@link #getAlos90Zmanis() 90} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This calculation divides
     * the day based on the opinion of the MGA that the day runs from dawn to dusk. Dawn for this calculation is 90 minutes
     * <em>zmaniyos</em> before sunrise and dusk is 90 minutes <em>zmaniyos</em> after sunset. This day is split into 12 equal
     * parts with each part being a <em>shaah zmanis</em>. This is 1/8th of the day from {@link #getSunrise() sunrise} to
     * {@link #getSunset() sunset}.
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
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em> being {@link
   * #getAlos96Zmanis() 96} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This calculation divides the
   * day based on the opinion of the MGA that the day runs from dawn to dusk. Dawn for this calculation is 96 minutes
   * <em>zmaniyos</em> before sunrise and dusk is 96 minutes <em>zmaniyos</em> after sunset. This day is split into 12
   * equal parts with each part being a <em>shaah zmanis</em>. This is identical to 1/7.5th of the day from
   * {@link #getSunrise() sunrise} to {@link #getSunset() sunset}.
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
     * <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah calculated with <em>alos</em> being 1/10th
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
       * Method to return a <em>shaah zmanis</em> (temporal hour) used by some <em>zmanim</em> according to the opinion of
       * <a href="https://en.wikipedia.org/wiki/Yaakov_Moshe_Hillel">Rabbi Yaakov Moshe Hillel</a> as published in the
       * <em>luach</em> of the Bais Horaah of Yeshivat Chevrat Ahavat Shalom that is based on a day starting 72 minutes before
       * sunrise in degrees {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ending 14 minutes after sunset in
       * degrees {@link #getTzaisGeonim3Point8Degrees() <em>tzais</em> 3.8&deg;}. This day is split into 12 equal parts with
       * each part being a <em>shaah zmanis</em>. Note that with this system, <em>chatzos</em> (mid-day) will not be the point
       * that the sun is {@link #getSunTransit() halfway across the sky}. These <em>shaos zmaniyos</em> are used for <em>Mincha
       * Ketana</em> and <em>Plag Hamincha</em>. The 14 minutes are based on 3/4 of an 18 minute <em>mil</em>, with half a minute
       * added for Rav Yosi.
       *
       * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
       *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
       *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       *
       * @see #getMinchaKetanaAhavatShalom()
       * @see #getPlagAhavatShalom()
       */
    getShaahZmanisAlos16Point1ToTzais3Point8(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) used by some <em>zmanim</em> according to the opinion of
     * <a href="https://en.wikipedia.org/wiki/Yaakov_Moshe_Hillel">Rabbi Yaakov Moshe Hillel</a> as published in the
     * <em>luach</em> of the Bais Horaah of Yeshivat Chevrat Ahavat Shalom that is based on a day starting 72 minutes before
     * sunrise in degrees {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ending 13.5 minutes after sunset in
     * degrees {@link #getTzaisGeonim3Point7Degrees() <em>tzais</em> 3.7&deg;}. This day is split into 12 equal parts with
     * each part being a <em>shaah zmanis</em>. Note that with this system, <em>chatzos</em> (mid-day) will not be the point
     * that the sun is {@link #getSunTransit() halfway across the sky}. These <em>shaos zmaniyos</em> are used for <em>Mincha
     * Gedola</em> calculation.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getMinchaGedolaAhavatShalom()
     */
    getShaahZmanisAlos16Point1ToTzais3Point7(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 96 minutes. This calculation
     * divides the day based on the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen
     * Avraham (MGA)</a> that the day runs from dawn to dusk. Dawn for this calculation is 96 minutes before sunrise
     * and dusk is 96 minutes after sunset. This day is split into 12 equal parts with each part being a <em>shaah
     * zmanis</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getShaahZmanis96Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) calculated using a dip of 120 minutes. This calculation
     * divides the day based on the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen
     * Avraham (MGA)</a> that the day runs from dawn to dusk. Dawn for this calculation is 120 minutes before sunrise and
     * dusk is 120 minutes after sunset. This day is split into 12 equal parts with each part being a <em>shaah zmanis</em>.
     * Since <em>zmanim</em> that use this method are extremely late or early and at a point when the sky is a long time
     * past the 18&deg; point where the darkest point is reached, <em>zmanim</em> that use this should only be used
     * <em>lechumra</em> only, such as delaying the start of nighttime <em>mitzvos</em>.
     *
     * @return the <code>long</code> millisecond length of a <em>shaah zmanis</em>. If the calculation can't be computed
     *         such as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one
     *         where it does not set, a {@link Long#MIN_VALUE} will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis26Degrees()
     */
    getShaahZmanis120Minutes(): number;
    /**
     * Method to return a <em>shaah zmanis</em> (temporal hour) according to the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em> being {@link
  * #getAlos120Zmanis() 120} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This calculation divides
  * the day based on the opinion of the MGA that the day runs from dawn to dusk. Dawn for this calculation is
  * 120 minutes <em>zmaniyos</em> before sunrise and dusk is 120 minutes <em>zmaniyos</em> after sunset. This day is
  * split into 12 equal parts with each part being a <em>shaah zmanis</em>. This is identical to 1/6th of the day from
  * {@link #getSunrise() sunrise} to {@link #getSunset() sunset}. Since <em>zmanim</em> that use this method are
  * extremely late or early and at a point when the sky is a long time past the 18&deg; point where the darkest point
  * is reached, <em>zmanim</em> that use this should only be used <em>lechumra</em> such as delaying the start of
  * nighttime <em>mitzvos</em>.
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
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> based on sunrise
     * being 120 minutes <em>zmaniyos</em> or 1/6th of the day before sunrise. This is calculated as 10.75 hours after
     * {@link #getAlos120Zmanis() dawn}. The formula used is 10.75 * {@link #getShaahZmanis120MinutesZmanis()} after
     * {@link #getAlos120Zmanis() dawn}. Since the <em>zman</em> based on an extremely early <em>alos</em> and a very
     * late <em>tzais</em>, it should only be used <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis120MinutesZmanis()
     * @see #getAlos120()
     * @see #getTzais120()
     * @see #getPlagHamincha26Degrees()
     * @see #getPlagHamincha120Minutes()
     */
    getPlagHamincha120MinutesZmanis(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> according to the
     * Magen Avraham with the day starting 120 minutes before sunrise and ending 120 minutes after sunset. This is
     * calculated as 10.75 hours after {@link #getAlos120() dawn 120 minutes}. The formula used is 10.75 {@link
   * #getShaahZmanis120Minutes()} after {@link #getAlos120()}. Since the <em>zman</em> based on an extremely early
   * <em>alos</em> and a very late <em>tzais</em>, it should only be used <em>lechumra</em>.
   *
   * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
   *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
   *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
   *
   * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
   *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
   *         does not set, a null will be returned. See detailed explanation on top of the
   *         {@link AstronomicalCalendar} documentation.
   *
   * @see #getShaahZmanis120Minutes()
   * @see #getPlagHamincha26Degrees()
   */
    getPlagHamincha120Minutes(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated as 60 minutes before sunrise. This is the time to walk the
     * distance of 4 <em>Mil</em> at 15 minutes a <em>Mil</em>. This seems to be the opinion of the <a href=
     * "https://en.wikipedia.org/wiki/Yair_Bacharach">Chavas Yair</a> in the Mekor Chaim, Orach Chaim Ch.
     * 90, though  the Mekor Chaim in Ch. 58 and in the <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=45193&pgnum=214">Chut Hashani Cha 97</a> states that
     * a a person walks 3 and a 1/3 <em>mil</em> in an hour, or an 18-minute <em>mil</em>. Also see the <a href=
     * "https://he.wikipedia.org/wiki/%D7%9E%D7%9C%D7%9B%D7%99%D7%90%D7%9C_%D7%A6%D7%91%D7%99_%D7%98%D7%A0%D7%A0%D7%91%D7%95%D7%99%D7%9D"
     * >Divrei Malkiel</a> <a href="https://hebrewbooks.org/pdfpager.aspx?req=803&pgnum=33">Vol. 4, Ch. 20, page 34</a>) who
     * mentions the 15 minute <em>mil</em> lechumra by baking matzos. Also see the <a href=
     * "https://en.wikipedia.org/wiki/Joseph_Colon_Trabotto">Maharik</a> <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=1142&pgnum=216">Ch. 173</a> where the questioner quoting the
     * <a href="https://en.wikipedia.org/wiki/Eliezer_ben_Nathan">Ra'avan</a> is of the opinion that the time to walk a
     * <em>mil</em> is 15 minutes (5 <em>mil</em> in a little over an hour). There are many who believe that there is a
     * <em>ta'us sofer</em> (scribe's error) in the Ra'avan, and it should 4 <em>mil</em> in a little over an hour, or an
     * 18-minute <em>mil</em>. Time based offset calculations are based on the opinion of the
     * <em><a href="https://en.wikipedia.org/wiki/Rishonim">Rishonim</a></em> who stated that the time of the <em>neshef</em>
     * (time between dawn and sunrise) does not vary by the time of year or location but purely depends on the time it takes to
     * walk the distance of 4* <em>mil</em>. {@link #getTzaisGeonim9Point75Degrees()} is a related <em>zman</em> that is a
     * degree-based calculation based on 60 minutes.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}.
     *         documentation.
     *
     * @see #getTzais60()
     * @see #getPlagHamincha60Minutes()
     * @see #getShaahZmanis60Minutes()
     */
    getAlos60(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated using 72 minutes <em>zmaniyos</em> or 1/10th of the day before
     * sunrise. This is based on an 18-minute <em>Mil</em> so the time for 4 <em>Mil</em> is 72 minutes which is 1/10th
     * of a day (12 * 60 = 720) based on the a day being from {@link #getSeaLevelSunrise() sea level sunrise} to
     * {@link #getSeaLevelSunrise sea level sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset}
     * (depending on the {@link #isUseElevation()} setting).
     * The actual calculation is {@link #getSeaLevelSunrise()} - ({@link #getShaahZmanisGra()} * 1.2). This calculation
     * is used in the calendars published by the <a href=
     * "https://en.wikipedia.org/wiki/Central_Rabbinical_Congress">Hisachdus Harabanim D'Artzos Habris Ve'Canada</a>.
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
   * #isUseElevation()} setting). This is based on a 22.5-minute <em>Mil</em> so the time for 4 <em>Mil</em> is 90
   * minutes which is 1/8th of a day (12 * 60) / 8 = 90
   * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
   * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}.
   * The actual calculation used is {@link #getSunrise()} - ({@link #getShaahZmanisGra()} * 1.5).
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
   * #isUseElevation()} setting). This is based on a 24-minute <em>Mil</em> so the time for 4 <em>Mil</em> is 96
   * minutes which is 1/7.5th of a day (12 * 60 / 7.5 = 96).
   * The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link #getSeaLevelSunrise sea level
   * sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending on the {@link #isUseElevation()}.
   * The actual calculation used is {@link #getSunrise()} - ({@link #getShaahZmanisGra()} * 1.6).
   *
   * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
   *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
   *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
   *         documentation.
   * @see #getShaahZmanisGra()
   */
    getAlos96Zmanis(): DateTime | null;
    /**
     * Method to return <em>alos</em> (dawn) calculated using 90 minutes before {@link #getSeaLevelSunrise() sea level
   * sunrise} based on the time to walk the distance of 4 <em>Mil</em> at 22.5 minutes a <em>Mil</em>. Time based
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
     * This method should be used <em>lechumra</em> only and returns <em>alos</em> (dawn) calculated using 120 minutes
     * before {@link #getSeaLevelSunrise() sea level sunrise} (no adjustment for elevation is made) based on the time
     * to walk the distance of 5 <em>Mil</em>(<em>Ula</em>) at 24 minutes a <em>Mil</em>. Time based offset calculations
     * for <em>alos</em> are based on the* opinion of the <em><a href="https://en.wikipedia.org/wiki/Rishonim">Rishonim</a>
     * </em> who stated that the time of the <em>neshef</em> (time between dawn and sunrise) does not vary by the time of
     * year or location but purely depends on the time it takes to walk the distance of 5 <em>Mil</em>(<em>Ula</em>). Since
     * this time is extremely early, it should only be used <em>lechumra</em>, such as not eating after this time on a fast
     * day, and not as the start time for <em>mitzvos</em> that can only be performed during the day.
     *
     * @deprecated This method should be used <em>lechumra</em> only (such as stopping to eat at this time on a fast day),
     *         since it returns a very early time, and if used <em>lekula</em> can result in doing <em>mitzvos hayom</em>
     *         too early according to most opinions. There is no current plan to remove this method from the API, and this
     *         deprecation is intended to alert developers of the danger of using it.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getTzais120()
     * @see #getAlos26Degrees()
     */
    getAlos120(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and  method returns <em>alos</em> (dawn) calculated using
     * 120 minutes <em>zmaniyos</em> or 1/6th of the day before {@link #getSunrise() sunrise} or {@link
   * #getSeaLevelSunrise() sea level sunrise} (depending on the {@link #isUseElevation()} setting). This is based
   * on a 24-minute <em>Mil</em> so the time for 5 <em>Mil</em> is 120 minutes which is 1/6th of a day (12 * 60 /
   * 6 = 120). The day is calculated from {@link #getSeaLevelSunrise() sea level sunrise} to {@link
   * #getSeaLevelSunrise sea level sunset} or {@link #getSunrise() sunrise} to {@link #getSunset() sunset} (depending
   * on the {@link #isUseElevation()}. The actual calculation used is {@link #getSunrise()} - ({@link
   * #getShaahZmanisGra()} * 2). Since this time is extremely early, it should only be used <em>lechumra</em>, such
   * as not eating after this time on a fast day, and not as the start time for <em>mitzvos</em> that can only be
   * performed during the day.
   *
   * @deprecated This method should be used <em>lechumra</em> only (such as stopping to eat at this time on a fast day),
   *         since it returns a very early time, and if used <em>lekula</em> can result in doing <em>mitzvos hayom</em>
   *         too early according to most opinions. There is no current plan to remove this method from the API, and this
   *         deprecation is intended to alert developers of the danger of using it.
   *
   * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
   *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
   *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
   *         documentation.
   * @see #getAlos120()
   * @see #getAlos26Degrees()
   */
    getAlos120Zmanis(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns <em>alos</em> (dawn) calculated when the sun is {@link
   * #ZENITH_26_DEGREES 26&deg;} below the eastern geometric horizon before sunrise. This calculation is based on the same
   * calculation of {@link #getAlos120() 120 minutes} but uses a degree-based calculation instead of 120 exact minutes. This
   * calculation is based on the position of the sun 120 minutes before sunrise in Jerusalem <a href=
   * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, which
   * calculates to 26&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}. Since this time is extremely early, it should
   * only be used <em>lechumra</em> only, such as not eating after this time on a fast day, and not as the start time for
   * <em>mitzvos</em> that can only be performed during the day.
   *
   * @deprecated This method should be used <em>lechumra</em> only (such as stopping to eat at this time on a fast day),
   *         since it returns a very early time, and if used <em>lekula</em> can result in doing <em>mitzvos hayom</em>
   *         too early according to most opinions. There is no current plan to remove this  method from the API, and this
   *         deprecation is intended to alert developers of the danger of using it.
   *
   * @return the <code>Date</code> representing <em>alos</em>. If the calculation can't be computed such as northern
   *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun
   *         may not reach low enough below the horizon for this calculation, a null will be returned. See detailed
   *         explanation on top of the {@link AstronomicalCalendar} documentation.
   * @see #ZENITH_26_DEGREES
   * @see #getAlos120()
   * @see #getTzais120()
   * @see #getTzais26Degrees()
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
     * eastern geometric horizon before sunrise. This is the <a href="https://en.wikipedia.org/wiki/Maimonides"
     * >Rambam</a>'s <em>alos</em> according to Rabbi Moshe Kosower's <a href=
     * "https://www.worldcat.org/oclc/145454098">Maaglei Tzedek</a>, page 88, <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=33464&pgnum=13">Ayeles Hashachar Vol. I, page 12</a>, <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=55960&pgnum=258">Yom Valayla Shel Torah, Ch. 34, p. 222</a> and
     * Rabbi Yaakov Shakow's <a href="https://www.worldcat.org/oclc/1043573513">Luach Ikvei Hayom</a>.
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
     * {@link #getAlos90() 90 minutes} but uses a degree-based calculation instead of 90 exact minutes. This calculation
     * is based on the position of the sun 90 minutes before sunrise in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, which
     * calculates to 19.8&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
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
     * {@link #getAlos72() 72 minutes} but uses a degree-based calculation instead of 72 exact minutes. This calculation
     * is based on the position of the sun 72 minutes before sunrise in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, which
     * calculates to 16.1&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
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
   * before {@link #getSunrise sunrise} in Jerusalem <a href=
   * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
   * which calculates to 11.5&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
   * @todo recalculate.
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
   * before {@link #getSunrise sunrise} in Jerusalem d<a href=
   * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
   * which calculates to 11&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
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
     * before {@link #getSunrise sunrise} in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox</a> which calculates
     * to 10.2&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
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
     * 7.65&deg;} below {@link #GEOMETRIC_ZENITH geometric zenith} (90&deg;). The degrees are based on a 35/36 minute
     * <em>zman</em> <a href="https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the
     * equinox / equilux</a>, when the <em>neshef</em> (twilight) is the shortest. This time is based on <a href=
     * "https://en.wikipedia.org/wiki/Moshe_Feinstein">Rabbi Moshe Feinstein</a> who writes in <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=14677&pgnum=7">Ohr Hachaim Vol. 4, Ch. 6</a>)
     * that <em>misheyakir</em> in New York is 35-40 minutes before sunset, something that is a drop less than 8&deg;.
     * <a href="https://en.wikipedia.org/wiki/Yisroel_Taplin">Rabbi Yisroel Taplin</a> in <a href=
     * "https://www.worldcat.org/oclc/889556744">Zmanei Yisrael</a> (page 117) notes that <a href=
     * "https://en.wikipedia.org/wiki/Yaakov_Kamenetsky">Rabbi Yaakov Kamenetsky</a> stated that it is not less than 36
     * minutes before sunrise (maybe it is 40 minutes). Sefer Yisrael Vehazmanim (p. 7) quotes the Tamar Yifrach
     * in the name of the <a href="https://en.wikipedia.org/wiki/Joel_Teitelbaum">Satmar Rov</a> that one should be stringent
     * not consider <em>misheyakir</em> before 36 minutes. This is also the accepted <a href=
     * "https://en.wikipedia.org/wiki/Minhag">minhag</a> in <a href=
     * "https://en.wikipedia.org/wiki/Lakewood_Township,_New_Jersey">Lakewood</a> that is used in the <a href=
     * "https://en.wikipedia.org/wiki/Beth_Medrash_Govoha">Yeshiva</a>. This follows the opinion of <a href=
     * "https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a> who provided the time of 35/36 minutes,
     * but did not provide a degree-based time. Since this <em>zman</em> depends on the level of light, Rabbi Yaakov Shakow
     * presented this degree-based calculations to Rabbi Kamenetsky who agreed to them.
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
     * "https://hebrewbooks.org/pdfpager.aspx?req=20287&pgnum=29">Divrei Chachamim No. 24</a> brought down by the <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=50535&pgnum=87">Birur Halacha, Tinyana, Ch. 18</a>. This calculates to
     * 9.5&deg;. Also see <a href="https://en.wikipedia.org/wiki/Jacob_Isaac_Neiman">Rabbi Yaakov Yitzchok Neiman</a> in Kovetz
     * Eitz Chaim Vol. 9, p. 202 that the Vya'an Yosef did not want to rely on times earlier than 45 minutes in New York. This
     * <em>zman</em> is also used in the calendars published by Rabbi Hershel Edelstein. As mentioned in Yisroel Vehazmanim,
     * Rabbi Edelstein who was given the 45 minute <em>zman</em> by Rabbi Bick. The calendars published by the <em><a href=
     * "https://en.wikipedia.org/wiki/Mizrahi_Jews">Edot Hamizrach</a></em> communities also use this <em>zman</em>. This also
     * follows the opinion of <a href="https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a> who provided
     * the time of 36 and 45 minutes, but did not provide a degree-based time. Since this <em>zman</em> depends on the level of
     * light, Rabbi Yaakov Shakow presented these degree-based times to Rabbi Shmuel Kamenetsky who agreed to them.
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
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos19Point8Degrees() 19.8&deg;} before {@link #getSunrise() sunrise}. This
     * time is 3 {@link #getShaahZmanis19Point8Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link
     * #getAlos19Point8Degrees() dawn} based on the opinion of the MGA that the day is calculated from dawn to nightfall
     * with both being 19.8&deg; below sunrise or sunset. This returns the time of 3 *
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
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos16Point1Degrees() 16.1&deg;} before {@link #getSunrise() sunrise}. This time
     * is 3 {@link #getShaahZmanis16Point1Degrees() <em>shaos zmaniyos</em>} (solar hours) after
     * {@link #getAlos16Point1Degrees() dawn} based on the opinion of the MGA that the day is calculated from
     * dawn to nightfall with both being 16.1&deg; below sunrise or sunset. This returns the time of
     * 3 * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() dawn}.
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
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos18Degrees() 18&deg;} before {@link #getSunrise() sunrise}. This time is 3
     * {@link #getShaahZmanis18Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos18Degrees() dawn}
     * based on the opinion of the MGA that the day is calculated from dawn to nightfall with both being 18&deg;
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
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos72() 72} minutes before {@link #getSunrise() sunrise}. This time is 3 {@link
     * #getShaahZmanis72Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos72() dawn} based on the opinion
     * of the MGA that the day is calculated from a {@link #getAlos72() dawn} of 72 minutes before sunrise to
     * {@link #getTzais72() nightfall} of 72 minutes after sunset. This returns the time of 3 * {@link
     * #getShaahZmanis72Minutes()} after {@link #getAlos72() dawn}. This class returns an identical time to {@link
     * #getSofZmanShmaMGA()} and is repeated here for clarity.
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
     * This method returns the latest <em>zman krias shema</em> (time to recite <em>Shema</em> in the morning) according
     * to the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em>, or 1/10th of the day before
     * {@link #getSunrise() sunrise}. This time is 3 {@link #getShaahZmanis90MinutesZmanis() <em>shaos zmaniyos</em>}
     * (solar hours) after {@link #getAlos72Zmanis() dawn} based on the opinion of the MGA that the day is calculated
     * from a {@link #getAlos72Zmanis() dawn} of 72 minutes <em>zmaniyos</em>, or 1/10th of the day before
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
     * This method returns the latest <em>zman krias shema</em> (time to recite <em>Shema</em> in the morning) according
     * to the opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos90() 90} minutes before {@link #getSunrise() sunrise}. This time is 3
     * {@link #getShaahZmanis90Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos90() dawn} based on
     * the opinion of the MGA that the day is calculated from a {@link #getAlos90() dawn} of 90 minutes before sunrise to
     * {@link #getTzais90() nightfall} of 90 minutes after sunset. This returns the time of 3 *
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
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos90Zmanis() 90} minutes <em>zmaniyos</em> before {@link #getSunrise()
     * sunrise}. This time is 3 {@link #getShaahZmanis90MinutesZmanis() <em>shaos zmaniyos</em>} (solar hours) after
     * {@link #getAlos90Zmanis() dawn} based on the opinion of the MGA that the day is calculated from a {@link
     * #getAlos90Zmanis() dawn} of 90 minutes <em>zmaniyos</em> before sunrise to {@link #getTzais90Zmanis() nightfall}
     * of 90 minutes <em>zmaniyos</em> after sunset. This returns the time of 3 * {@link #getShaahZmanis90MinutesZmanis()}
     * after {@link #getAlos90Zmanis() dawn}.
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
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos96() 96} minutes before {@link #getSunrise() sunrise}. This time is 3
     * {@link #getShaahZmanis96Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos96() dawn} based on
     * the opinion of the MGA that the day is calculated from a {@link #getAlos96() dawn} of 96 minutes before
     * sunrise to {@link #getTzais96() nightfall} of 96 minutes after sunset. This returns the time of 3 * {@link
     * #getShaahZmanis96Minutes()} after {@link #getAlos96() dawn}.
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
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos90Zmanis() 96} minutes <em>zmaniyos</em> before {@link #getSunrise()
     * sunrise}. This time is 3 {@link #getShaahZmanis96MinutesZmanis() <em>shaos zmaniyos</em>} (solar hours) after
     * {@link #getAlos96Zmanis() dawn} based on the opinion of the MGA that the day is calculated from a {@link
     * #getAlos96Zmanis() dawn} of 96 minutes <em>zmaniyos</em> before sunrise to {@link #getTzais90Zmanis() nightfall}
     * of 96 minutes <em>zmaniyos</em> after sunset. This returns the time of 3 * {@link #getShaahZmanis96MinutesZmanis()}
     * after {@link #getAlos96Zmanis() dawn}.
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
     * This method returns the latest <em>zman krias shema</em> (time to recite <em>Shema</em> in the morning) calculated
     * as 3 hours (regular clock hours and not <em>sha'os zmaniyos</em>) before {@link ZmanimCalendar#getChatzos()}.
     * Generally known as part of the "Komarno" <em>zmanim</em> after <a href=
     * "https://en.wikipedia.org/wiki/Komarno_(Hasidic_dynasty)#Rabbi_Yitzchak_Eisik_Safrin">Rav Yitzchak Eizik of
     * Komarno</a>, a proponent of this calculation, it actually predates him a lot. It is the opinion of the
     * <em>Shach</em> in the Nekudas Hakesef (Yoreh Deah 184), <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=21638&st=&pgnum=30">Rav Moshe Lifshitz</a> in his commentary
     * <a href="https://hebrewbooks.org/pdfpager.aspx?req=21638&st=&pgnum=50">Lechem Mishneh on Brachos 1:2</a>. It is
     * next brought down about 100 years later by the <a href="https://en.wikipedia.org/wiki/Jacob_Emden">Yaavetz</a>
     * (in his <em>siddur</em>, <a href="https://hebrewbooks.org/pdfpager.aspx?req=7920&st=&pgnum=6">Mor Uktziah Orach
     * Chaim 1</a>, <a href="https://hebrewbooks.org/pdfpager.aspx?req=22309&st=&pgnum=30">Lechem Shamayim, Brachos 1:2</a>
     * and <a href="https://hebrewbooks.org/pdfpager.aspx?req=1408&st=&pgnum=69">She'elos Yaavetz vol. 1 no. 40</a>),
     * Rav Yitzchak Eizik of Komarno in the Ma'aseh Oreg on Mishnayos Brachos 11:2, Shevus Yaakov, Chasan Sofer and others.
     * See Yisrael Vehazmanim <a href="https://hebrewbooks.org/pdfpager.aspx?req=9765&st=&pgnum=83">vol. 1 7:3, page 55 -
     * 62</a>. A variant of this calculation {@link #getSofZmanShmaFixedLocal()} uses {@link #getFixedLocalChatzos() fixed
     * local <em>chatzos</em>} for calculating this type of <em>zman</em>.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where
     *         it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see ZmanimCalendar#getChatzos()
     * @see #getSofZmanShmaFixedLocal()
     * @see #getSofZmanTfila2HoursBeforeChatzos()
     */
    getSofZmanShma3HoursBeforeChatzos(): DateTime | null;
    /**
     * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based
     * on <em>alos</em> being {@link #getAlos120() 120} minutes or 1/6th of the day before {@link #getSunrise() sunrise}.
     * This time is 3 {@link #getShaahZmanis120Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos120()
     * dawn} based on the opinion of the MGA that the day is calculated from a {@link #getAlos120() dawn} of 120 minutes
     * before sunrise to {@link #getTzais120() nightfall} of 120 minutes after sunset. This returns the time of 3
     * {@link #getShaahZmanis120Minutes()} after {@link #getAlos120() dawn}. This is an extremely early <em>zman</em> that
     * is very much a <em>chumra</em>.
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
     * This method returns the latest <em>zman krias shema</em> (time to recite <em>Shema</em> in the morning) based
     * on the opinion that the day starts at {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ends at
     * {@link #getSeaLevelSunset() sea level sunset}. This is the opinion of the <a href=
     * "https://hebrewbooks.org/40357">\u05D7\u05D9\u05D3\u05D5\u05E9\u05D9
     * \u05D5\u05DB\u05DC\u05DC\u05D5\u05EA \u05D4\u05E8\u05D6\u05F4\u05D4</a> and the <a href=
     * "https://hebrewbooks.org/14799">\u05DE\u05E0\u05D5\u05E8\u05D4 \u05D4\u05D8\u05D4\u05D5\u05E8\u05D4</a> as
     * mentioned by Yisrael Vehazmanim <a href="https://hebrewbooks.org/pdfpager.aspx?req=9765&pgnum=81">vol 1, sec. 7,
     * ch. 3 no. 16</a>. Three <em>shaos zmaniyos</em> are calculated based on this day and added to {@link
     * #getAlos16Point1Degrees() <em>alos</em>} to reach this time. This time is 3 <em>shaos zmaniyos</em> (solar hours)
     * after {@link #getAlos16Point1Degrees() dawn} based on the opinion that the day is calculated from a {@link
     * #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} to {@link #getSeaLevelSunset() sea level sunset}.
     * <b>Note:</b> Based on this calculation <em>chatzos</em> will not be at midday.
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
     * opinion that the day starts at {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ends at
     * {@link #getTzaisGeonim7Point083Degrees() <em>tzais</em> 7.083&deg;}. 3 <em>shaos zmaniyos</em> are calculated
     * based on this day and added to {@link #getAlos16Point1Degrees() <em>alos</em>} to reach this time. This time is 3
     * <em>shaos zmaniyos</em> (temporal hours) after {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} based on
     * the opinion that the day is calculated from a {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} to
     * {@link #getTzaisGeonim7Point083Degrees() <em>tzais</em> 7.083&deg;}.
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
     *
     * @deprecated As per a conversation Rabbi Yisroel Twerski had with Rabbi Harfenes, this <em>zman</em> published in
     *         the Yisrael Vehazmanim was based on a misunderstanding and should not be used. This deprecated method
     *         will be removed (likely in KosherJava v3.0) pending confirmation from Rabbi Harfenes.
     */
    getSofZmanShmaKolEliyahu(): DateTime | null;
    /**
     * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) according to the opinion
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos19Point8Degrees() 19.8&deg;} before {@link #getSunrise() sunrise}. This time
     * is 4 {@link #getShaahZmanis19Point8Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link
     * #getAlos19Point8Degrees() dawn} based on the opinion of the MGA that the day is calculated from dawn to
     * nightfall with both being 19.8&deg; below sunrise or sunset. This returns the time of 4 * {@link
     * #getShaahZmanis19Point8Degrees()} after {@link #getAlos19Point8Degrees() dawn}.
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
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos16Point1Degrees() 16.1&deg;} before {@link #getSunrise() sunrise}. This time
     * is 4 {@link #getShaahZmanis16Point1Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link
     * #getAlos16Point1Degrees() dawn} based on the opinion of the MGA that the day is calculated from dawn to
     * nightfall with both being 16.1&deg; below sunrise or sunset. This returns the time of 4 * {@link
     * #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() dawn}.
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
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos18Degrees() 18&deg;} before {@link #getSunrise() sunrise}. This time is 4
     * {@link #getShaahZmanis18Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos18Degrees() dawn}
     * based on the opinion of the MGA that the day is calculated from dawn to nightfall with both being 18&deg;
     * below sunrise or sunset. This returns the time of 4 * {@link #getShaahZmanis18Degrees()} after
     * {@link #getAlos18Degrees() dawn}.
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
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos72() 72} minutes before {@link #getSunrise() sunrise}. This time is 4
     * {@link #getShaahZmanis72Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos72() dawn} based on
     * the opinion of the MGA that the day is calculated from a {@link #getAlos72() dawn} of 72 minutes before
     * sunrise to {@link #getTzais72() nightfall} of 72 minutes after sunset. This returns the time of 4 *
     * {@link #getShaahZmanis72Minutes()} after {@link #getAlos72() dawn}. This class returns an identical time to
     * {@link #getSofZmanTfilaMGA()} and is repeated here for clarity.
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
     * <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
     * being {@link #getAlos72Zmanis() 72} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This time is 4
     * {@link #getShaahZmanis72MinutesZmanis() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos72Zmanis() dawn}
     * based on the opinion of the MGA that the day is calculated from a {@link #getAlos72Zmanis() dawn} of 72
     * minutes <em>zmaniyos</em> before sunrise to {@link #getTzais72Zmanis() nightfall} of 72 minutes <em>zmaniyos</em>
     * after sunset. This returns the time of 4 * {@link #getShaahZmanis72MinutesZmanis()} after {@link #getAlos72Zmanis() dawn}.
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
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos90() 90} minutes before {@link #getSunrise() sunrise}. This time is 4
     * {@link #getShaahZmanis90Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos90() dawn} based on
     * the opinion of the MGA that the day is calculated from a {@link #getAlos90() dawn} of 90 minutes before sunrise to
     * {@link #getTzais90() nightfall} of 90 minutes after sunset. This returns the time of 4 *
     * {@link #getShaahZmanis90Minutes()} after {@link #getAlos90() dawn}.
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
     * <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
     * being {@link #getAlos90Zmanis() 90} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This time is
     * 4 {@link #getShaahZmanis90MinutesZmanis() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos90Zmanis()
     * dawn} based on the opinion of the MGA that the day is calculated from a {@link #getAlos90Zmanis() dawn}
     * of 90 minutes <em>zmaniyos</em> before sunrise to {@link #getTzais90Zmanis() nightfall} of 90 minutes
     * <em>zmaniyos</em> after sunset. This returns the time of 4 * {@link #getShaahZmanis90MinutesZmanis()} after
     * {@link #getAlos90Zmanis() dawn}.
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
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos96() 96} minutes before {@link #getSunrise() sunrise}. This time is 4
     * {@link #getShaahZmanis96Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos96() dawn} based on
     * the opinion of the MGA that the day is calculated from a {@link #getAlos96() dawn} of 96 minutes before
     * sunrise to {@link #getTzais96() nightfall} of 96 minutes after sunset. This returns the time of 4 *
     * {@link #getShaahZmanis96Minutes()} after {@link #getAlos96() dawn}.
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
     * <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
     * being {@link #getAlos96Zmanis() 96} minutes <em>zmaniyos</em> before {@link #getSunrise() sunrise}. This time is
     * 4 {@link #getShaahZmanis96MinutesZmanis() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos96Zmanis()
  * dawn} based on the opinion of the MGA that the day is calculated from a {@link #getAlos96Zmanis() dawn}
  * of 96 minutes <em>zmaniyos</em> before sunrise to {@link #getTzais96Zmanis() nightfall} of 96 minutes
  * <em>zmaniyos</em> after sunset. This returns the time of 4 * {@link #getShaahZmanis96MinutesZmanis()} after
  * {@link #getAlos96Zmanis() dawn}.
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
     * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on
     * <em>alos</em> being {@link #getAlos120() 120} minutes before {@link #getSunrise() sunrise} . This time is 4
     * {@link #getShaahZmanis120Minutes() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos120() dawn}
     * based on the opinion of the MGA that the day is calculated from a {@link #getAlos120() dawn} of 120
     * minutes before sunrise to {@link #getTzais120() nightfall} of 120 minutes after sunset. This returns the time of
     * 4 * {@link #getShaahZmanis120Minutes()} after {@link #getAlos120() dawn}. This is an extremely early <em>zman</em>
     * that is very much a <em>chumra</em>.
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
     * This method returns <em>mincha gedola</em> calculated as 30 minutes after {@link #getChatzos() <em>chatzos</em>}
     * and not 1/2 of a {@link #getShaahZmanisGra() <em>shaah zmanis</em>} after {@link #getChatzos() <em>chatzos</em>} as
     * calculated by {@link #getMinchaGedola}. Some use this time to delay the start of <em>mincha</em> in the winter when
     * 1/2 of a {@link #getShaahZmanisGra() <em>shaah zmanis</em>} is less than 30 minutes. See
     * {@link #getMinchaGedolaGreaterThan30()} for a convenience method that returns the later of the 2 calculations. One
     * should not use this time to start <em>mincha</em> before the standard {@link #getMinchaGedola() <em>mincha gedola</em>}.
     * See Shulchan Aruch <a href="https://hebrewbooks.org/pdfpager.aspx?req=49624&st=&pgnum=291">Orach Chayim 234:1</a> and
     * the Shaar Hatziyon <em>seif katan ches</em>.
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
     * more information on this see the documentation on {@link #getMinchaGedola() <em>mincha gedola</em>}. This is
     * calculated as 6.5 {@link #getTemporalHour() solar hours} after <em>alos</em>. The calculation used is 6.5 *
     * {@link #getShaahZmanis72Minutes()} after {@link #getAlos72() <em>alos</em>}.
     *
     * @see #getAlos72()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @see ZmanimCalendar#getMinchaGedola()
     * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaGedola72Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>mincha gedola</em> according to the Magen Avraham with the day starting and
     * ending 16.1&deg; below the horizon. This is the earliest time to pray <em>mincha</em>. For more information on
     * this see the documentation on {@link #getMinchaGedola() <em>mincha gedola</em>}. This is calculated as 6.5
     * {@link #getTemporalHour() solar hours} after <em>alos</em>. The calculation used is 6.5 *
     * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() <em>alos</em>}.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
     *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
     *         the sun  may not reach low enough below the horizon for this calculation, a null will be returned. See
     *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaGedola16Point1Degrees(): DateTime | null;
    /**
       * This method returns the time of <em>mincha gedola</em> based on the opinion of <a href=
       * "https://en.wikipedia.org/wiki/Yaakov_Moshe_Hillel">Rabbi Yaakov Moshe Hillel</a> as published in the <em>luach</em>
       * of the Bais Horaah of Yeshivat Chevrat Ahavat Shalom that <em>mincha gedola</em> is calculated as half a <em>shaah
       * zmanis</em> after <em>chatzos</em> with <em>shaos zmaniyos</em> calculated based on a day starting 72 minutes befoe sunrise
       * {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ending 13.5 minutes after sunset {@link
     * #getTzaisGeonim3Point7Degrees() <em>tzais</em> 3.7&deg;}. <em>Mincha gedola</em> is the earliest time to pray <em>mincha</em>.
     * The later of this time or 30 clock minutes after <em>chatzos</em> is returned. See {@link #getMinchaGedolaGreaterThan30()}
     * (though that calculation is based on <em>mincha gedola</em> GRA).
     * For more information about <em>mincha gedola</em> see the documentation on {@link #getMinchaGedola() <em>mincha gedola</em>}.
     *
     * @return the <code>Date</code> of the <em>mincha gedola</em>. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not
     *         reach low enough below the horizon for this calculation, a null will be returned. See detailed explanation
     *         on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getAlos16Point1Degrees()
     * @see #getTzaisGeonim3Point7Degrees()
     * @see #getShaahZmanisAlos16Point1ToTzais3Point7()
     * @see #getMinchaGedolaGreaterThan30()
     */
    getMinchaGedolaAhavatShalom(): DateTime | null;
    /**
     * This is a convenience method that returns the later of {@link #getMinchaGedola()} and
     * {@link #getMinchaGedola30Minutes()}. In the winter when 1/2 of a {@link #getShaahZmanisGra() <em>shaah zmanis</em>} is
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
     * This method returns the time of <em>mincha ketana</em> according to the Magen Avraham with the day starting and
     * ending 16.1&deg; below the horizon. This is the preferred earliest time to pray <em>mincha</em> according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others. For more information on
     * this see the documentation on {@link #getMinchaGedola() <em>mincha gedola</em>}. This is calculated as 9.5
     * {@link #getTemporalHour() solar hours} after <em>alos</em>. The calculation used is 9.5 *
     * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() <em>alos</em>}.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of <em>mincha ketana</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getMinchaKetana16Point1Degrees(): DateTime | null;
    /**
       * This method returns the time of <em>mincha ketana</em> based on the opinion of <a href=
       * "https://en.wikipedia.org/wiki/Yaakov_Moshe_Hillel">Rabbi Yaakov Moshe Hillel</a> as published in the <em>luach</em>
       * of the Bais Horaah of Yeshivat Chevrat Ahavat Shalom that <em>mincha ketana</em> is calculated as 2.5 <em>shaos
       * zmaniyos</em> before {@link #getTzaisGeonim3Point8Degrees() <em>tzais</em> 3.8&deg;} with <em>shaos zmaniyos</em>
       * calculated based on a day starting at {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ending at
       * <em>tzais</em> 3.8&deg;. <em>Mincha ketana</em> is the preferred earliest time to pray <em>mincha</em> according to
       * the opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others. For more information
       * on this see the documentation on {@link #getMinchaKetana() <em>mincha ketana</em>}.
       *
       * @return the the <code>Date</code> of the time of <em>mincha ketana</em>. If the calculation can't be computed such as northern
       *         and southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not
       *         reach low enough below the horizon for this calculation, a null will be returned. See detailed explanation
       *         on top of the {@link AstronomicalCalendar} documentation.
       *
       * @see #getShaahZmanisAlos16Point1ToTzais3Point8()
       * @see #getMinchaGedolaAhavatShalom()
       * @see #getPlagAhavatShalom()
       */
    getMinchaKetanaAhavatShalom(): DateTime | null;
    /**
     * This method returns the time of <em>mincha ketana</em> according to the Magen Avraham with the day
     * starting 72 minutes before sunrise and ending 72 minutes after sunset. This is the preferred earliest time to pray
     * <em>mincha</em> according to the opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a>
     * and others. For more information on this see the documentation on {@link #getMinchaGedola() <em>mincha gedola</em>}.
     * This is calculated as 9.5 {@link #getShaahZmanis72Minutes()} after <em>alos</em>. The calculation used is 9.5 *
     * {@link #getShaahZmanis72Minutes()} after {@link #getAlos72() <em>alos</em>}.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @see #getMinchaGedola()
     * @see #getMinchaKetana()
     * @return the <code>Date</code> of the time of <em>mincha ketana</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getMinchaKetana72Minutes(): DateTime | null;
    /**
     * This method returns the time of <em>plag hamincha</em> according to the Magen Avraham with the day starting 60
     * minutes before sunrise and ending 60 minutes after sunset. This is calculated as 10.75 hours after
     * {@link #getAlos60() dawn}. The formula used is 10.75 {@link #getShaahZmanis60Minutes()} after {@link #getAlos60()}.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #getShaahZmanis60Minutes()
     * @see #getAlos60()
     * @see #getTzais60()
     */
    getPlagHamincha60Minutes(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> according to the
     * Magen Avraham with the day starting 72 minutes before sunrise and ending 72 minutes after sunset. This is calculated
     * as 10.75 hours after {@link #getAlos72() dawn}. The formula used is 10.75 {@link #getShaahZmanis72Minutes()} after
     * {@link #getAlos72()}. Since <em>plag</em> by this calculation can occur after sunset, it should only be used
     * <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
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
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> according to the
     * Magen Avraham with the day starting 90 minutes before sunrise and ending 90 minutes after sunset. This is calculated
     * as 10.75 hours after {@link #getAlos90() dawn}. The formula used is 10.75 {@link #getShaahZmanis90Minutes()} after
     * {@link #getAlos90()}. Since <em>plag</em> by this calculation can occur after sunset, it should only be used
     * <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
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
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> according to the Magen
     * Avraham with the day starting 96 minutes before sunrise and ending 96 minutes after sunset. This is calculated as 10.75
     * hours after {@link #getAlos96() dawn}. The formula used is 10.75 {@link #getShaahZmanis96Minutes()} after
     * {@link #getAlos96()}. Since <em>plag</em> by this calculation can occur after sunset, it should only be used
     * <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     * @see #getShaahZmanis96Minutes()
     */
    getPlagHamincha96Minutes(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em>. This is calculated
     * as 10.75 hours after {@link #getAlos96Zmanis() dawn}. The formula used is 10.75 * {@link
  * #getShaahZmanis96MinutesZmanis()} after {@link #getAlos96Zmanis() dawn}. Since <em>plag</em> by this calculation can
  * occur after sunset, it should only be used <em>lechumra</em>.
  *
  * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
  *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
  *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
  *
  * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
  *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
  *         does not set, a null will be returned. See detailed explanation on top of the
  *         {@link AstronomicalCalendar} documentation.
  */
    getPlagHamincha96MinutesZmanis(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em>. This is calculated
     * as 10.75 hours after {@link #getAlos90Zmanis() dawn}. The formula used is 10.75 * {@link
  * #getShaahZmanis90MinutesZmanis()} after {@link #getAlos90Zmanis() dawn}. Since <em>plag</em> by this calculation can
  * occur after sunset, it should only be used <em>lechumra</em>.
  *
  * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
  *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
  *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
  *
  * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
  *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
  *         does not set, a null will be returned. See detailed explanation on top of the
  *         {@link AstronomicalCalendar} documentation.
  */
    getPlagHamincha90MinutesZmanis(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em>. This is calculated as
     * 10.75 hours after {@link #getAlos72Zmanis()}. The formula used is 10.75 * {@link #getShaahZmanis72MinutesZmanis()} after
     * {@link #getAlos72Zmanis() dawn}. Since <em>plag</em> by this calculation can occur after sunset, it should only be used
     * <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
     *
     * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getPlagHamincha72MinutesZmanis(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> based on the
     * opinion that the day starts at {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ends at {@link
   * #getTzais16Point1Degrees() <em>tzais</em> 16.1&deg;}. This is calculated as 10.75 hours <em>zmaniyos</em>
   * after {@link #getAlos16Point1Degrees() dawn}. The formula used is 10.75 * {@link #getShaahZmanis16Point1Degrees()}
   * after {@link #getAlos16Point1Degrees()}. Since <em>plag</em> by this calculation can occur after sunset, it
   * should only be used <em>lechumra</em>.
   *
   * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
   *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
   *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
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
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> based on the
     * opinion that the day starts at {@link #getAlos19Point8Degrees() <em>alos</em> 19.8&deg;} and ends at {@link
   * #getTzais19Point8Degrees() <em>tzais</em> 19.8&deg;}. This is calculated as 10.75 hours <em>zmaniyos</em>
   * after {@link #getAlos19Point8Degrees() dawn}. The formula used is 10.75 * {@link
   * #getShaahZmanis19Point8Degrees()} after {@link #getAlos19Point8Degrees()}. Since <em>plag</em> by this
   * calculation can occur after sunset, it should only be used <em>lechumra</em>.
   *
   * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
   *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
   *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
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
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> based on the
     * opinion that the day starts at {@link #getAlos26Degrees() <em>alos</em> 26&deg;} and ends at {@link
   * #getTzais26Degrees() <em>tzais</em> 26&deg;}. This is calculated as 10.75 hours <em>zmaniyos</em> after {@link
   * #getAlos26Degrees() dawn}. The formula used is 10.75 * {@link #getShaahZmanis26Degrees()} after {@link
   * #getAlos26Degrees()}. Since the <em>zman</em> based on an extremely early <em>alos</em> and a very late
   * <em>tzais</em>, it should only be used <em>lechumra</em>.
   *
   * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
   *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
   *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
   *
   * @return the <code>Date</code> of the time of <em>plag hamincha</em>. If the calculation can't be computed such as
   *         northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
   *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
   *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
   *
   * @see #getShaahZmanis26Degrees()
   * @see #getPlagHamincha120Minutes()
   */
    getPlagHamincha26Degrees(): DateTime | null;
    /**
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> based on the
     * opinion that the day starts at {@link #getAlos18Degrees() <em>alos</em> 18&deg;} and ends at {@link
     * #getTzais18Degrees() <em>tzais</em> 18&deg;}. This is calculated as 10.75 hours <em>zmaniyos</em> after {@link
     * #getAlos18Degrees() dawn}. The formula used is 10.75 * {@link #getShaahZmanis18Degrees()} after {@link
     * #getAlos18Degrees()}. Since <em>plag</em> by this calculation can occur after sunset, it should only be used
     * <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
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
     * This method should be used <em>lechumra</em> only and returns the time of <em>plag hamincha</em> based on the opinion
     * that the day starts at {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ends at {@link #getSunset() sunset}.
     * 10.75 <em>shaos zmaniyos</em> are calculated based on this day and added to {@link #getAlos16Point1Degrees()
     * <em>alos</em>} to reach this time. This time is 10.75 <em>shaos zmaniyos</em> (temporal hours) after {@link
     * #getAlos16Point1Degrees() dawn} based on the opinion that the day is calculated from a {@link #getAlos16Point1Degrees()
     * dawn} of 16.1 degrees before sunrise to {@link #getSeaLevelSunset() sea level sunset}. This returns the time of 10.75 *
     * the calculated <em>shaah zmanis</em> after {@link #getAlos16Point1Degrees() dawn}. Since <em>plag</em> by this
     * calculation can occur after sunset, it should only be used <em>lechumra</em>.
     *
     * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
     *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
     *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
     *
     * @return the <code>Date</code> of the <em>plag</em>. If the calculation can't be computed such as northern and southern
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
     * {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and ends at {@link #getTzaisGeonim7Point083Degrees()
     * <em>tzais</em>}. 10.75 <em>shaos zmaniyos</em> are calculated based on this day and added to {@link
     * #getAlos16Point1Degrees() <em>alos</em>} to reach this time. This time is 10.75 <em>shaos zmaniyos</em> (temporal
     * hours) after {@link #getAlos16Point1Degrees() dawn} based on the opinion that the day is calculated from a
     * {@link #getAlos16Point1Degrees() dawn} of 16.1 degrees before sunrise to
     * {@link #getTzaisGeonim7Point083Degrees() <em>tzais</em>} . This returns the time of 10.75 * the calculated
     * <em>shaah zmanis</em> after {@link #getAlos16Point1Degrees() dawn}.
     *
     * @return the <code>Date</code> of the <em>plag</em>. If the calculation can't be computed such as northern and
     *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not
     *         reach low enough below the horizon for this calculation, a null will be returned. See detailed explanation
     *         on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getAlos16Point1Degrees()
     * @see #getTzaisGeonim7Point083Degrees()
     */
    getPlagAlos16Point1ToTzaisGeonim7Point083Degrees(): DateTime | null;
    /**
       * This method returns the time of <em>plag hamincha</em> (the earliest time that Shabbos can be started) based on the
       * opinion of <a href="https://en.wikipedia.org/wiki/Yaakov_Moshe_Hillel">Rabbi Yaakov Moshe Hillel</a> as published in
       * the <em>luach</em> of the Bais Horaah of Yeshivat Chevrat Ahavat Shalom that that <em>plag hamincha</em> is calculated
       * as 1.25 <em>shaos zmaniyos</em> before {@link #getTzaisGeonim3Point8Degrees() <em>tzais</em> 3.8&deg;} with <em>shaos
       * zmaniyos</em> calculated based on a day starting at {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;} and
       * ending at <em>tzais</em> 3.8&deg;.
       *
       * @return the <code>Date</code> of the <em>plag</em>. If the calculation can't be computed such as northern and
       *         southern locations even south of the Arctic Circle and north of the Antarctic Circle where the sun may not
       *         reach low enough below the horizon for this calculation, a null will be returned. See detailed explanation
       *         on top of the {@link AstronomicalCalendar} documentation.
       *
       * @see #getShaahZmanisAlos16Point1ToTzais3Point8()
       * @see #getMinchaGedolaAhavatShalom()
       * @see #getMinchaKetanaAhavatShalom()
       */
    getPlagAhavatShalom(): DateTime | null;
    /**
     * Method to return the beginning of <em>bain hashmashos</em> of Rabbeinu Tam calculated when the sun is
     * {@link #ZENITH_13_POINT_24 13.24&deg;} below the western {@link #GEOMETRIC_ZENITH geometric horizon} (90&deg;)
     * after sunset. This calculation is based on the same calculation of {@link #getBainHashmashosRT58Point5Minutes()
     * <em>bain hashmashos</em> Rabbeinu Tam 58.5 minutes} but uses a degree-based calculation instead of 58.5 exact
     * minutes. This calculation is based on the position of the sun 58.5 minutes after sunset in Jerusalem <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
     * which calculates to 13.24&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}.
     * NOTE: As per Yisrael Vehazmanim Vol. III page 1028, No. 50, a dip of slightly less than 13&deg; should be used.
     * Calculations show that the proper dip to be 13.2456&deg; (truncated to 13.24 that provides about 1.5 second
     * earlier (<em>lechumra</em>) time) below the horizon at that time. This makes a difference of 1 minute and 10
     * seconds in Jerusalem during the Equinox, and 1 minute 29 seconds during the solstice as compared to the proper
     * 13.24&deg; versus 13&deg;. For NY during the solstice, the difference is 1 minute 56 seconds.
     * @todo recalculate the above based on equilux/equinox calculations.
     *
     * @return the <code>Date</code> of the sun being 13.24&deg; below {@link #GEOMETRIC_ZENITH geometric zenith}
     *         (90&deg;). If the calculation can't be computed such as northern and southern locations even south of the
     *         Arctic Circle and north of the Antarctic Circle where the sun may not reach low enough below the horizon
     *         for this calculation, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_13_POINT_24
     * @see #getBainHashmashosRT58Point5Minutes()
     */
    getBainHashmashosRT13Point24Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>Bain hashmashos</em> of Rabbeinu Tam calculated as a 58.5
     * minute offset after sunset. <em>bain hashmashos</em> is 3/4 of a <em>Mil</em> before <em>tzais</em> or 3 1/4
     * <em>Mil</em> after sunset. With a <em>Mil</em> calculated as 18 minutes, 3.25 * 18 = 58.5 minutes.
     *
     * @return the <code>Date</code> of 58.5 minutes after sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     */
    getBainHashmashosRT58Point5Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> based on the calculation of 13.5 minutes (3/4 of an
     * 18-minute <em>Mil</em>) before <em>shkiah</em> calculated as {@link #getTzaisGeonim7Point083Degrees() 7.083&deg;}.
     *
     * @return the <code>Date</code> of the <em>bain hashmashos</em> of Rabbeinu Tam in this calculation. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getTzaisGeonim7Point083Degrees()
     */
    getBainHashmashosRT13Point5MinutesBefore7Point083Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> of Rabbeinu Tam calculated according to the
     * opinion of the <em>Divrei Yosef</em> (see Yisrael Vehazmanim) calculated 5/18th (27.77%) of the time between
     * <em>alos</em> (calculated as 19.8&deg; before sunrise) and sunrise. This is added to sunset to arrive at the time
     * for <em>bain hashmashos</em> of Rabbeinu Tam.
     *
     * @return the <code>Date</code> of <em>bain hashmashos</em> of Rabbeinu Tam for this calculation. If the
     *         calculation can't be computed such as northern and southern locations even south of the Arctic Circle and
     *         north of the Antarctic Circle where the sun may not reach low enough below the horizon for this
     *         calculation, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getBainHashmashosRT2Stars(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as 18 minutes
     * or 3/4 of a 24-minute <em>Mil</em> before sunset. According to the Yereim, <em>bain hashmashos</em> starts 3/4
     * of a <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of 18 minutes before sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     * @see #getBainHashmashosYereim3Point05Degrees()
     */
    getBainHashmashosYereim18Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as the sun's
     * position 3.05&deg; above the horizon <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
     * its position 18 minutes or 3/4 of an 24-minute <em>mil</em> before sunset. According to the Yereim, <em>bain
     * hashmashos</em> starts 3/4 of a <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     * Note that <em>lechumra</em> (of about 14 seconds) a refraction value of 0.5166&deg; as opposed to the traditional
     * 0.566&deg; is used. This is more inline with the actual refraction in <em>Eretz Yisrael</em> and is brought down
     * by <a href=
     * "http://beinenu.com/rabbis/%D7%94%D7%A8%D7%91-%D7%99%D7%93%D7%99%D7%93%D7%99%D7%94-%D7%9E%D7%A0%D7%AA">Rabbi
     * Yedidya Manet</a> in his <a href="https://www.nli.org.il/en/books/NNL_ALEPH002542826/NLI">Zmanei Halacha
     * Lema’aseh</a> (p. 11). That is the first source that I am aware of that calculates degree-based Yereim
     * <em>zmanim</em>. The 0.5166&deg; refraction is also used by the <a href="https://zmanim.online/">Luach Itim
     * Lebinah</a>. Calculating the Yereim's <em>bain hashmashos</em> using 18-minute based degrees is also suggested
     * in the upcoming 8th edition of the zmanim Kehilchasam. For more details, see the article <a href=
     * "https://kosherjava.com/2020/12/07/the-yereims-bein-hashmashos/">The Yereim’s <em>Bein Hashmashos</em></a>.
     *
     * @todo recalculate based on equinox/equilux
     * @return the <code>Date</code> of the sun's position 3.05&deg; minutes before sunset. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_MINUS_3_POINT_05
     * @see #getBainHashmashosYereim18Minutes()
     * @see #getBainHashmashosYereim2Point8Degrees()
     * @see #getBainHashmashosYereim2Point1Degrees()
     */
    getBainHashmashosYereim3Point05Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as 16.875
     * minutes or 3/4 of a 22.5-minute <em>Mil</em> before sunset. According to the Yereim, <em>bain hashmashos</em>
     * starts 3/4 of a <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of 16.875 minutes before sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getBainHashmashosYereim2Point8Degrees()
     */
    getBainHashmashosYereim16Point875Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as the sun's
     * position 2.8&deg; above the horizon <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>,
     * its position 16.875 minutes or 3/4 of an 18-minute <em>Mil</em> before sunset. According to the Yereim, <em>bain
     * hashmashos</em> starts 3/4 of a <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     * Details, including how the degrees were calculated can be seen in the documentation of
     * {@link #getBainHashmashosYereim3Point05Degrees()}.
     *
     * @return the <code>Date</code> of the sun's position 2.8&deg; minutes before sunset. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_MINUS_2_POINT_8
     * @see #getBainHashmashosYereim16Point875Minutes()
     * @see #getBainHashmashosYereim3Point05Degrees()
     * @see #getBainHashmashosYereim2Point1Degrees()
     */
    getBainHashmashosYereim2Point8Degrees(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> (twilight) according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as 13.5 minutes
     * or 3/4 of an 18-minute <em>Mil</em> before sunset. According to the Yereim, <em>bain hashmashos</em> starts 3/4 of
     * a <em>Mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     *
     * @return the <code>Date</code> of 13.5 minutes before sunset. If the calculation can't be computed such as in the
     *         Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
     *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getBainHashmashosYereim2Point1Degrees()
     */
    getBainHashmashosYereim13Point5Minutes(): DateTime | null;
    /**
     * This method returns the beginning of <em>bain hashmashos</em> according to the <a href=
     * "https://en.wikipedia.org/wiki/Eliezer_ben_Samuel">Yereim (Rabbi Eliezer of Metz)</a> calculated as the sun's
     * position 2.1&deg; above the horizon <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> in
     * Yerushalayim, its position 13.5 minutes or 3/4 of an 18-minute <em>Mil</em> before sunset. According to the Yereim,
     * <em>bain hashmashos</em> starts 3/4 of a <em>mil</em> before sunset and <em>tzais</em> or nightfall starts at sunset.
     * Details, including how the degrees were calculated can be seen in the documentation of
     * {@link #getBainHashmashosYereim3Point05Degrees()}.
     *
     * @return the <code>Date</code> of the sun's position 2.1&deg; minutes before sunset. If the calculation can't
     *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not
     *         rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     *
     * @see #ZENITH_MINUS_2_POINT_1
     * @see #getBainHashmashosYereim13Point5Minutes()
     * @see #getBainHashmashosYereim2Point8Degrees()
     * @see #getBainHashmashosYereim3Point05Degrees()
     */
    getBainHashmashosYereim2Point1Degrees(): DateTime | null;
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
     * of a <a href= "https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on an 18
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
     * of a <a href= "https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on an 18
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
     * of a <em><a href= "https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >mil</a></em> based
     * on a 24-minute Mil, or 18 minutes. It is the sun's position at {@link #ZENITH_4_POINT_61 4.61&deg;} below the
     * western horizon. This is a very early <em>zman</em> and should not be relied on without Rabbinical guidance.
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
       * of a <a href= "https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a>, based on a 22.5
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
       * of a 24-minute <em><a href= "https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a></em>,
       * based on a <em>Mil</em> being 24 minutes, and is calculated as 18 + 2 + 4 for a total of 24 minutes. It is the
       * sun's position at {@link #ZENITH_5_POINT_88 5.88&deg;} below the western horizon. This is a very early
       * <em>zman</em> and should not be relied on without Rabbinical guidance.
       *
       * @todo Additional detailed documentation needed.
       * @return the <code>Date</code> representing the time when the sun is 5.88&deg; below sea level. If the calculation
       *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
       *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
       *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       * @see #ZENITH_5_POINT_88
       */
    getTzaisGeonim5Point88Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 3/4
     * of a <a href= "https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement" >Mil</a> based on the
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
     * in Jerusalem the height of the summer solstice and is 28 minutes after <em>shkiah</em> <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>. This
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
       * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated when the
       * sun's position {@link #ZENITH_7_POINT_083 7.083&deg; (or 7&deg; 5\u2032}) below the western horizon. This is often
       * referred to as 7&deg;5' or 7&deg; and 5 minutes. This calculation is based on the observation of 3 medium sized
       * stars by Dr. Baruch (Berthold) Cohn in his <em>luach</em> <a href=
       * "https://sammlungen.ub.uni-frankfurt.de/freimann/content/titleinfo/983088">Tabellen enthaltend die Zeitangaben für
       * den Beginn der Nacht und des Tages für die Breitengrade + 66 bis -38</a> published in Strasbourg, France in 1899.
       * This calendar was very popular in Europe, and many other calendars based their time on it. <a href=
       * "https://en.wikipedia.org/wiki/David_Zvi_Hoffmann">Rav Dovid Tzvi Hoffman</a> in his
       * <a href="https://hebrewbooks.org/1053">Sh"Ut Melamed Leho'il</a> in an exchange of letters with Baruch Cohn in <a href=
       * "https://hebrewbooks.org/pdfpager.aspx?req=1053&st=&pgnum=37">Orach Chaim 30</a> agreed to this <em>zman</em> (page 36),
       * as did the Sh"Ut Bnei Tziyon and the Tenuvas Sadeh. It is very close to the time of the <a href=
       * "https://hebrewbooks.org/22044">Mekor Chesed</a> of the Sefer chasidim. It is close to the position of the sun 30 minutes
       * after sunset in Jerusalem <a href=
       * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, but not
       * Exactly. The actual position of the sun 30 minutes after sunset in Jerusalem at the equilux is 7.205&deg; and 7.199&deg;
       * at the equinox. See Hazmanim Bahalacha vol 2, pages 520-521 for more details.
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
       * "https://hebrewbooks.org/pdfpager.aspx?req=921&pgnum=149">Igros Moshe Even Haezer 4, Ch. 4</a> (regarding
       * <em>tzais</em> for <em>krias Shema</em>). It is also mentioned in Rabbi Heber's <a href=
       * "https://hebrewbooks.org/53000">Shaarei Zmanim</a> on in
       * <a href="https://hebrewbooks.org/pdfpager.aspx?req=53055&pgnum=101">chapter 10 (page 87)</a> and
       * <a href="https://hebrewbooks.org/pdfpager.aspx?req=53055&pgnum=122">chapter 12 (page 108)</a>. Also see the
       * time of 45 minutes in <a href="https://en.wikipedia.org/wiki/Simcha_Bunim_Cohen">Rabbi Simcha Bunim Cohen's</a> <a
       * href="https://www.worldcat.org/oclc/179728985">The radiance of Shabbos</a> as the earliest <em>zman</em> for New York.
       * This <em>zman</em> is also listed in the <a href="https://hebrewbooks.org/pdfpager.aspx?req=1927&pgnum=90">Divrei
       * Shalom Vol. III, chapter 75</a>, and <a href="https://hebrewbooks.org/pdfpager.aspx?req=892&pgnum=431">Bais Av"i
       * Vol. III, chapter 117</a>. This <em>zman</em> is also listed in the Divrei Shalom etc. chapter 177 (FIXME - could not
       * be located). Since this <em>zman</em> depends on the level of light, Rabbi Yaakov Shakow presented this degree-based
       * calculation to Rabbi <a href="https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a> who agreed
       * to it.
       * @todo add hyperlinks to source of Divrei Shalom.
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
     * "https://www.worldcat.org/oclc/243303103">Luach Itim Lebinah</a> as the stringent time for <em>tzais</em>.  It is
     * calculated at the sun's position at {@link #ZENITH_9_POINT_3 9.3&deg;} below the western horizon.
     *
     * @return the <code>Date</code> representing the time when the sun is 9.3&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getTzaisGeonim9Point3Degrees(): DateTime | null;
    /**
     * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <em>Geonim</em> calculated as 60
     * minutes after sunset <a href=
     * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a>, the
     * day that a solar hour is 60 minutes in New York. The sun's position at this time computes to
     * {@link #ZENITH_9_POINT_75 9.75&deg;} below the western horizon. This is the opinion of <a href=
     * "https://en.wikipedia.org/wiki/Yosef_Eliyahu_Henkin">Rabbi Eliyahu Henkin</a>.  This also follows the opinion of
     * <a href="https://en.wikipedia.org/wiki/Shmuel_Kamenetsky">Rabbi Shmuel Kamenetsky</a>. Rabbi Yaakov Shakow presented
     * these degree-based times to Rabbi Shmuel Kamenetsky who agreed to them.
     *
     * @todo recalculate based on equinox / equilux.
     * @return the <code>Date</code> representing the time when the sun is 9.75&deg; below sea level. If the calculation
     *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of
     *         the Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a
     *         null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see #getTzais60()
     */
    getTzaisGeonim9Point75Degrees(): DateTime | null;
    /**
       * This method returns the <em>tzais</em> (nightfall) based on the opinion of the <a href=
       * "https://en.wikipedia.org/wiki/Yair_Bacharach">Chavas Yair</a> and <a href=
       * "https://he.wikipedia.org/wiki/%D7%9E%D7%9C%D7%9B%D7%99%D7%90%D7%9C_%D7%A6%D7%91%D7%99_%D7%98%D7%A0%D7%A0%D7%91%D7%95%D7%99%D7%9D"
       * >Divrei Malkiel</a> that the time to walk the distance of a <em>Mil</em> is 15 minutes for a total of 60 minutes
       * for 4 <em>Mil</em> after {@link #getSeaLevelSunset() sea level sunset}. See detailed documentation explaining the
       * 60 minute concept at {@link #getAlos60()}.
       *
       * @return the <code>Date</code> representing 60 minutes after sea level sunset. If the calculation can't be
       *         computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
       *         and one where it does not set, a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       *
       * @see #getAlos60()
       * @see #getPlagHamincha60Minutes()
       * @see #getShaahZmanis60Minutes()
       */
    getTzais60(): DateTime | null;
    /**
       * This method returns <em>tzais</em> usually calculated as 40 minutes (configurable to any offset via
       * {@link #setAteretTorahSunsetOffset(double)}) after sunset. Please note that <em>Chacham</em> Yosef Harari-Raful
       * of Yeshivat Ateret Torah who uses this time, does so only for calculating various other <em>zmanai hayom</em>
       * such as <em>Sof Zman Krias Shema</em> and <em>Plag Hamincha</em>. His calendars do not publish a <em>zman</em>
       * for <em>Tzais</em>. It should also be noted that <em>Chacham</em> Harari-Raful provided a 25 minute <em>zman</em>
       * for Israel. This API uses 40 minutes year round in any place on the globe by default. This offset can be change
       *  by calling {@link #setAteretTorahSunsetOffset(double)}.
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
       * Returns the offset in minutes after sunset used to calculate <em>tzais</em> based on the calculations of
       * <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah calculations. The default value is 40 minutes.
       * This affects most <em>zmanim</em>, since almost all zmanim use subset as part of their calculation.
       *
       * @return the number of minutes after sunset for <em>Tzait</em>.
       * @see #setAteretTorahSunsetOffset(double)
       */
    getAteretTorahSunsetOffset(): number;
    /**
       * Allows setting the offset in minutes after sunset for the Ateret Torah <em>zmanim</em>. The default if unset is
       * 40 minutes. <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah uses 40 minutes globally with the exception
       * of Israel where a 25 minute offset is used. This 40 minute (or any other) offset can be overridden by this method.
       * This offset impacts all Ateret Torah <em>zmanim</em>.
       *
       * @param ateretTorahSunsetOffset
       *            the number of minutes after sunset to use as an offset for the Ateret Torah <em>tzais</em>
       * @see #getAteretTorahSunsetOffset()
       */
    setAteretTorahSunsetOffset(ateretTorahSunsetOffset: number): void;
    /**
       * This method returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) based on the
       * calculation of <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah, that the day starts
       * {@link #getAlos72Zmanis() 1/10th of the day} before sunrise and is usually calculated as ending
       * {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset via
       * {@link #setAteretTorahSunsetOffset(double)}). <em>shaos zmaniyos</em> are calculated based on this day and added
       * to {@link #getAlos72Zmanis() <em>alos</em>} to reach this time. This time is 3
       * {@link #getShaahZmanisAteretTorah() <em>shaos zmaniyos</em>} (temporal hours) after
       * {@link #getAlos72Zmanis() <em>alos</em> 72 <em>zmaniyos</em>}. <b>Note: </b> Based on this calculation <em>chatzos</em>
       * will not be at midday.
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
       * of <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah, that the day starts {@link #getAlos72Zmanis()
       * 1/10th of the day} before sunrise and is usually calculated as ending {@link #getTzaisAteretTorah() 40 minutes
       * after sunset} (configurable to any offset via {@link #setAteretTorahSunsetOffset(double)}). <em>shaos zmaniyos</em>
       * are calculated based on this day and added to {@link #getAlos72Zmanis() <em>alos</em>} to reach this time. This time
       * is 4 * {@link #getShaahZmanisAteretTorah() <em>shaos zmaniyos</em>} (temporal hours) after
       * {@link #getAlos72Zmanis() <em>alos</em> 72 zmaniyos}.
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
       * This method returns the time of <em>mincha gedola</em> based on the calculation of <em>Chacham</em> Yosef
       * Harari-Raful of Yeshivat Ateret Torah, that the day starts {@link #getAlos72Zmanis() 1/10th of the day}
       * before sunrise and is usually calculated as ending {@link #getTzaisAteretTorah() 40 minutes after sunset}
       * (configurable to any offset via {@link #setAteretTorahSunsetOffset(double)}). This is the preferred earliest
       * time to pray <em>mincha</em> according to the opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides"
       * >Rambam</a> and others. For more information on this see the documentation on {@link #getMinchaGedola() <em>mincha
       * gedola</em>}. This is calculated as 6.5 {@link #getShaahZmanisAteretTorah()  solar hours} after <em>alos</em>. The
       * calculation used is 6.5 * {@link #getShaahZmanisAteretTorah()} after {@link #getAlos72Zmanis() <em>alos</em>}.
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
       * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
       *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getMinchaGedolaAteretTorah(): DateTime | null;
    /**
       * This method returns the time of <em>mincha ketana</em> based on the calculation of
       * <em>Chacham</em> Yosef Harari-Raful of Yeshivat Ateret Torah, that the day starts
       * {@link #getAlos72Zmanis() 1/10th of the day} before sunrise and is usually calculated as ending
       * {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset via
       * {@link #setAteretTorahSunsetOffset(double)}). This is the preferred earliest time to pray <em>mincha</em>
       * according to the opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others.
       * For more information on this see the documentation on {@link #getMinchaGedola() <em>mincha gedola</em>}. This is
       * calculated as 9.5 {@link #getShaahZmanisAteretTorah() solar hours} after {@link #getAlos72Zmanis() <em>alos</em>}.
       * The calculation used is 9.5 * {@link #getShaahZmanisAteretTorah()} after {@link #getAlos72Zmanis() <em>alos</em>}.
       *
       * @see #getAlos72Zmanis()
       * @see #getTzaisAteretTorah()
       * @see #getShaahZmanisAteretTorah()
       * @see #getAteretTorahSunsetOffset()
       * @see #setAteretTorahSunsetOffset(double)
       * @see #getMinchaGedola()
       * @see #getMinchaKetana()
       * @return the <code>Date</code> of the time of <em>mincha ketana</em>. If the calculation can't be computed such as
       *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getMinchaKetanaAteretTorah(): DateTime | null;
    /**
       * This method returns the time of <em>plag hamincha</em> based on the calculation of <em>Chacham</em> Yosef Harari-Raful
       * of Yeshivat Ateret Torah, that the day starts {@link #getAlos72Zmanis() 1/10th of the day} before sunrise and is
       * usually calculated as ending {@link #getTzaisAteretTorah() 40 minutes after sunset} (configurable to any offset
       * via {@link #setAteretTorahSunsetOffset(double)}). <em>shaos zmaniyos</em> are calculated based on this day and
       * added to {@link #getAlos72Zmanis() <em>alos</em>} to reach this time. This time is 10.75
       * {@link #getShaahZmanisAteretTorah() <em>shaos zmaniyos</em>} (temporal hours) after {@link #getAlos72Zmanis()
    * dawn}.
    *
    * @return the <code>Date</code> of the <em>plag</em>. If the calculation can't be computed such as in the Arctic Circle
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
       * {@link #getSeaLevelSunset() sea level sunset}. This is the way that the <a href=
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
       * A utility method to return <em>alos</em> (dawn) or <em>tzais</em> (dusk) based on a fractional day offset.
       * @param hours the number of <em>shaaos zmaniyos</em> (temporal hours) before sunrise or after sunset that defines dawn
       *        or dusk. If a negative number is passed in, it will return the time of <em>alos</em> (dawn) (subtracting the
       *        time from sunrise) and if a positive number is passed in, it will return the time of <em>tzais</em> (dusk)
       *        (adding the time to sunset). If 0 is passed in, a null will be returned (since we can't tell if it is sunrise
       *        or sunset based).
       * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
       *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
       *         a null will be returned. A null will also be returned if 0 is passed in, since we can't tell if it is sunrise
       *         or sunset based. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       */
    private getZmanisBasedOffset;
    /**
       * Method to return <em>tzais</em> (dusk) calculated using 90 minutes zmaniyos or 1/8th of the day after {@link
       * #getSeaLevelSunset() sea level sunset}. This time is known in Yiddish as the <em>achtel</em> (an eighth)
       * <em>zman</em>.
       *
       * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
       *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
       *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       * @see #getAlos90Zmanis()
       */
    getTzais90Zmanis(): DateTime | null;
    /**
       * Method to return <em>tzais</em> (dusk) calculated using 96 minutes <em>zmaniyos</em> or 1/7.5 of the day after
       * {@link #getSeaLevelSunset() sea level sunset}.
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
       * <em>Mil</em> according to the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a>'s opinion
       * is 18 minutes for a total of 90 minutes based on the opinion of Ula who calculated <em>tzais</em> as 5
       * <em>Mil</em> after sea level <em>shkiah</em> (sunset). A similar calculation {@link #getTzais19Point8Degrees()}
       * uses solar position calculations based on this time.
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
       * This method should be used <em>lechumra</em> only and returns <em>tzais</em> (nightfall) based on the calculations
       * of <a href="https://en.wikipedia.org/wiki/Avraham_Chaim_Naeh">Rav Chaim Naeh</a> that the time to walk the
       * distance of a <em>Mil</em> according to the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a>'s opinion
       * is 2/5 of an hour (24 minutes) for a total of 120 minutes based on the opinion of <em>Ula</em> who calculated
       * <em>tzais</em> as 5 <em>Mil</em> after sea level <em>shkiah</em> (sunset). A similar calculation {@link
    * #getTzais26Degrees()} uses degree-based calculations based on this 120 minute calculation. Since the <em>zman</em>
    * is extremely late and at a point that is long past the 18&deg; point where the darkest point is
    * reached, it should only be used <em>lechumra</em>, such as delaying the start of nighttime <em>mitzvos</em>.
    *
    * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
    *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
    *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
    *
    * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
    *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
    *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}.
    *         documentation.
    * @see #getTzais26Degrees()
    * @see #getAlos120()
    */
    getTzais120(): DateTime | null;
    /**
       * This method should be used <em>lechumra</em> only and returns <em>tzais</em> (dusk) calculated using 120 minutes
       * <em>zmaniyos</em> after {@link #getSeaLevelSunset() sea level sunset}. Since the <em>zman</em>
       * is extremely late and at a point when the it is long past the 18&deg; point where the darkest point is
       * reached, it should only be used <em>lechumra</em>, such as delaying the start of nighttime <em>mitzvos</em>.
       *
       * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
       *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
       *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
       *
       * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
       *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
       *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       * @see #getAlos120Zmanis()
       * @see #getTzais120()
       * @see #getTzais26Degrees()
       */
    getTzais120Zmanis(): DateTime | null;
    /**
       * This calculates the time of <em>tzais</em> at the point when the sun is 16.1&deg; below the horizon. This is
       * the sun's dip below the horizon 72 minutes after sunset according Rabbeinu Tam's calculation of <em>tzais</em>
       * <a href=
       * "https://kosherjava.com/2022/01/12/equinox-vs-equilux-zmanim-calculations/">around the equinox / equilux</a> in
       * Jerusalem. The question of equinox VS equilux is complex, with Rabbi Meir Posen in the <a href=
       * "https://www.worldcat.org/oclc/956316270">Ohr Meir</a> of the opinion that the equilux should be used. See
       * Yisrael Vehazmanim vol I, 34:1:4. Rabbi Yedidya Manet in his <a href=
       * "https://www.nli.org.il/en/books/NNL_ALEPH002542826/NLI">Zmanei Halacha Lema'aseh</a> (4th edition part 2, pages
       * and 22 and 24) and Rabbi Yonah Metzbuch (in a letter published by Rabbi Manet) are of the opinion that the
       * astronomical equinox should be used. The difference adds up to about 9 seconds, too trivial to make much of a
       * difference. For information on how this is calculated see the comments on {@link #getAlos16Point1Degrees()}.
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
       * This method should be used <em>lechumra</em> only and returns <em>tzais</em> based on when the sun is 26&deg;
       * below the horizon.For information on how this is calculated see the comments on {@link #getAlos26Degrees()}.
       * Since the <em>zman</em> is extremely late and at a point when it is long past the 18&deg; point where the
       * darkest point is reached, it should only be used <em>lechumra</em> such as delaying the start of nighttime
       * <em>mitzvos</em>.
       *
       * @deprecated This method should be used <em>lechumra</em> only since it returns a very late time, and if used
       *         <em>lekula</em> can result in <em>chillul Shabbos</em> etc. There is no current plan to remove this
       *         method from the API, and this deprecation is intended to alert developers of the danger of using it.
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
       * per hour with 4 minutes per degree, so at a longitude of 0 , 15, 30 etc... <em>Chatzos</em> is at exactly 12:00
       * noon. This is the time of <em>chatzos</em> according to the <a href=
       * "https://en.wikipedia.org/wiki/Aruch_HaShulchan">Aruch Hashulchan</a> in <a href=
       * "https://hebrewbooks.org/pdfpager.aspx?req=7705&pgnum=426">Orach Chaim 233:14</a> and <a href=
       * "https://en.wikipedia.org/wiki/Moshe_Feinstein">Rabbi Moshe Feinstein</a> in Igros Moshe <a href=
       * "https://hebrewbooks.org/pdfpager.aspx?req=916&st=&pgnum=67">Orach Chaim 1:24</a> and <a href=
       * "https://hebrewbooks.org/pdfpager.aspx?req=14675&pgnum=191">2:20</a>.
       * Lakewood, N.J., with a longitude of -74.2094, is 0.7906 away from the closest multiple of 15 at -75&deg;. This
       * is multiplied by 4 to yield 3 minutes and 10 seconds for a <em>chatzos</em> of 11:56:50. This method is not tied
       * to the theoretical 15&deg; timezones, but will adjust to the actual timezone and <a
       * href="https://en.wikipedia.org/wiki/Daylight_saving_time">Daylight saving time</a>.
       *
       * @return the Date representing the local <em>chatzos</em>
       * @see GeoLocation#getLocalMeanTimeOffset()
       */
    getFixedLocalChatzos(): DateTime | null;
    /**
       * A method that returns the latest <em>zman krias shema</em> (time to recite Shema in the morning) calculated as 3
       * clock hours before {@link #getFixedLocalChatzos()}. Note that there are opinions brought down in Yisrael Vehazmanim
       * <a href="https://hebrewbooks.org/pdfpager.aspx?req=9765&st=&pgnum=85">page 57</a> and Rav Yitzchak Silber's <a href=
       * "https://www.worldcat.org/oclc/811253716">Sha'aos Shavos Balalacha</a> that this calculation is a mistake and regular
       * <em>chatzos</em> shoud be used for clock-hour calculations as opposed to fixed local <em>chatzos</em>. According to
       * these opinions it should be 3 clock hours before regular <em>chatzos</em> as calculated in {@link
    * #getSofZmanShma3HoursBeforeChatzos()}.
    *
    * @return the <code>Date</code> of the latest <em>zman krias shema</em> calculated as 3 clock hours before
    *         {@link #getFixedLocalChatzos()}.
    * @see #getFixedLocalChatzos()
    * @see #getSofZmanShma3HoursBeforeChatzos()
    * @see #getSofZmanTfilaFixedLocal()
    *
    * @deprecated This method of calculating <em>sof zman Shma</em> is considered a mistaken understanding of the proper
    *         calculation of this <em>zman</em> in the opinion of Rav Yitzchak Silber's <a href=
    *         "https://www.worldcat.org/oclc/811253716">Sha'aos Shavos Balalacha</a>. On pages 316-318 he discusses Rav Yisrael
    *         Harfenes's calculations and points to his seeming agreement that using fixed local <em>chatzos</em> as the focal
    *         point is problematic. See Yisrael Vehazmanim <a href=
    *         "https://hebrewbooks.org/pdfpager.aspx?req=9765&st=&pgnum=85">page 57</a>. While the Yisrael Vehazmanim mentions
    *         this issue in vol. 1, it was not corrected in the calculations in vol. 3 and other parts of the <em>sefer</em>.
    *         A competent rabbinical authority should be consulted before using this <em>zman</em>. Instead, the use of {@link
    *         #getSofZmanShma3HoursBeforeChatzos()} should be used to calculate <em>sof zman Tfila</em> using 3 fixed clock hours.
    *         This will likely be removed in v3.0.
    */
    getSofZmanShmaFixedLocal(): DateTime | null;
    /**
       * This method returns the latest <em>zman tfila</em> (time to recite the morning prayers) calculated as 2 hours
       * before {@link #getFixedLocalChatzos()}. See the documentation on {@link #getSofZmanShmaFixedLocal()} showing
       * differing opinions on how the <em>zman</em> is calculated. According to many opinions {@link
    * #getSofZmanTfila2HoursBeforeChatzos()} should be used as opposed to this <em>zman</em>.
    *
    * @return the <code>Date</code> of the latest <em>zman tfila</em>.
    * @see #getFixedLocalChatzos()
    * @see #getSofZmanShmaFixedLocal()
    * @see #getSofZmanTfila2HoursBeforeChatzos()
    *
    * @deprecated This method of calculating <em>sof zman Tfila</em> is considered a mistaken understanding of the proper
    *         calculation of this <em>zman</em> in the opinion of Rav Yitzchak Silber's <a href=
    *         "https://www.worldcat.org/oclc/811253716">Sha'aos Shavos Balalacha</a>. On pages 316-318 he discusses Rav Yisrael
    *         Harfenes's calculations and points to his seeming agreement that using fixed local <em>chatzos</em> as the focal
    *         point is problematic. See Yisrael Vehazmanim <a href=
    *         "https://hebrewbooks.org/pdfpager.aspx?req=9765&st=&pgnum=85">page 57</a>. While the Yisrael Vehazmanim mentions
    *         this issue in vol. 1, it was not corrected in the calculations in vol. 3 and other parts of the <em>sefer</em>.
    *         A competent rabbinical authority should be consulted before using this <em>zman</em>. Instead, the use of {@link
    *         #getSofZmanTfila2HoursBeforeChatzos()} should be used to calculate <em>sof zman Tfila</em> using 2 fixed
    *         clock hours. This will likely be removed in v3.0.
    */
    getSofZmanTfilaFixedLocal(): DateTime | null;
    /**
       * Returns the latest time of <em>Kidush Levana</em> according to the <a
       * href="https://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> opinion that it is calculated as
       * halfway between <em>molad</em> and <em>molad</em>. This adds half the 29 days, 12 hours and 793 chalakim time
       * between <em>molad</em> and <em>molad</em> (14 days, 18 hours, 22 minutes and 666 milliseconds) to the month's <em>molad</em>.
       * If the time of <em>sof zman Kiddush Levana</em> occurs during the day (between the <em>alos</em> and <em>tzais</em> passed in
       * as parameters), it returns the <em>alos</em> passed in. If a null <em>alos</em> or <em>tzais</em> are passed to this method,
       * the non-daytime adjusted time will be returned.
       *
       * @param alos
       *            the beginning of the Jewish day. If <em>Kidush Levana</em> occurs during the day (starting at <em>alos</em> and
       *            ending at <em>tzais</em>), the time returned will be <em>alos</em>. If either the <em>alos</em> or <em>tzais</em>
       *            parameters are null, no daytime adjustment will be made.
       * @param tzais
       *            the end of the Jewish day. If Kidush Levana occurs during the day (starting at <em>alos</em> and ending at
       *            <em>tzais</em>), the time returned will be <em>alos</em>. If either the <em>alos</em> or <em>tzais</em> parameter
       *            are null, no daytime adjustment will be made.
       * @return the Date representing the moment halfway between molad and molad. If the time occurs between
       *         <em>alos</em> and <em>tzais</em>, <em>alos</em> will be returned
       * @see #getSofZmanKidushLevanaBetweenMoldos()
       * @see #getSofZmanKidushLevana15Days(Date, Date)
       * @see JewishCalendar#getSofZmanKidushLevanaBetweenMoldos()
       */
    getSofZmanKidushLevanaBetweenMoldos(alos: DateTime, tzais: DateTime): DateTime | null;
    /**
       * Returns the Date of the <em>molad</em> based time if it occurs on the current date. Since <em>Kiddush Levana</em>
       * can only be said during the day, there are parameters to limit it to between <em>alos</em> and <em>tzais</em>. If
       * the time occurs between <em>alos</em> and <em>tzais</em>, <em>tzais</em> will be returned.
       *
       * @param moladBasedTime
       *            the <em>molad</em> based time such as <em>molad</em>, <em>tchilas</em> and <em>sof zman Kiddush Levana</em>
       * @param alos
       *            optional start of day to limit <em>molad</em> times to the end of the night before or beginning of the next night.
       *            Ignored if either <em>alos</em> or <em>tzais</em> are null.
       * @param tzais
       *            optional end of day to limit <em>molad</em> times to the end of the night before or beginning of the next night.
       *            Ignored if either <em>tzais</em> or <em>alos</em> are null
       * @param techila
       *            is it the start of <em>Kiddush Levana</em> time or the end? If it is start roll it to the next <em>tzais</em>, and
       *            and if it is the end, return the end of the previous night (<em>alos</em> passed in). Ignored if either
       *            <em>alos</em> or <em>tzais</em> are null.
       * @return the <em>molad</em> based time. If the <em>zman</em> does not occur during the current date, null will be returned.
       */
    private getMoladBasedTime;
    /**
       * Returns the latest time of <em>Kiddush Levana</em> calculated as 15 days after the <em>molad</em>. This is the
       * opinion brought down in the Shulchan Aruch (Orach Chaim 426). It should be noted that some opinions hold that the
       * <a href="https://en.wikipedia.org/wiki/Moses_Isserles">Rema</a> who brings down the opinion of the <a
       * href="https://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> of calculating
       * {@link #getSofZmanKidushLevanaBetweenMoldos(Date, Date) half way between <em>molad</em> and <em>molad</em>} is of
       * the opinion that the Mechaber agrees to his opinion. Also see the Aruch Hashulchan. For additional details on the subject,
       * see Rabbi Dovid Heber's very detailed write-up in <em>Siman Daled</em> (chapter 4) of <a href=
       * "https://hebrewbooks.org/53000">Shaarei Zmanim</a>. If the time of <em>sof zman Kiddush Levana</em> occurs during
       * the day (between the <em>alos</em> and <em>tzais</em> passed in as parameters), it returns the <em>alos</em> passed in. If a
       * null <em>alos</em> or <em>tzais</em> are passed to this method, the non-daytime adjusted time will be returned.
       *
       * @param alos
       *            the beginning of the Jewish day. If <em>Kidush Levana</em> occurs during the day (starting at <em>alos</em> and
       *            ending at <em>tzais</em>), the time returned will be <em>alos</em>. If either the <em>alos</em> or <em>tzais</em>
       *            parameters are null, no daytime adjustment will be made.
       * @param tzais
       *            the end of the Jewish day. If <em>Kidush Levana</em> occurs during the day (starting at <em>alos</em> and ending at
       *            <em>tzais</em>), the time returned will be <em>alos</em>. If either the <em>alos</em> or <em>tzais</em> parameters
       *            are null, no daytime adjustment will be made.
       *
       * @return the Date representing the moment 15 days after the molad. If the time occurs between <em>alos</em> and
       *         <em>tzais</em>, <em>alos</em> will be returned
       *
       * @see #getSofZmanKidushLevanaBetweenMoldos(Date, Date)
       * @see JewishCalendar#getSofZmanKidushLevana15Days()
       */
    getSofZmanKidushLevana15Days(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
       * Returns the earliest time of <em>Kiddush Levana</em> according to <a href=
       * "https://en.wikipedia.org/wiki/Yonah_Gerondi">Rabbeinu Yonah</a>'s opinion that it can be said 3 days after the <em>molad</em>.
       * If the time of <em>tchilas zman Kiddush Levana</em> occurs during the day (between <em>alos</em> and <em>tzais</em> passed to
       * this method) it will return the following <em>tzais</em>. If null is passed for either <em>alos</em> or <em>tzais</em>, the actual
       * <em>tchilas zman Kiddush Levana</em> will be returned, regardless of if it is during the day or not.
       *
       * @param alos
       *            the beginning of the Jewish day. If Kidush Levana occurs during the day (starting at <em>alos</em> and ending
       *            at <em>tzais</em>), the time returned will be <em>tzais</em>. If either the <em>alos</em> or <em>tzais</em> parameters
       *            are null, no daytime adjustment will be made.
       * @param tzais
       *            the end of the Jewish day. If <em>Kidush Levana</em> occurs during the day (starting at <em>alos</em> and ending at
       *            <em>tzais</em>), the time returned will be <em>tzais</em>. If either the <em>alos</em> or <em>tzais</em> parameters
       *            are null, no daytime adjustment will be made.
       *
       * @return the Date representing the moment 3 days after the molad. If the time occurs between <em>alos</em> and
       *         <em>tzais</em>, <em>tzais</em> will be returned
       * @see #getTchilasZmanKidushLevana3Days()
       * @see #getTchilasZmanKidushLevana7Days(Date, Date)
       * @see JewishCalendar#getTchilasZmanKidushLevana3Days()
       */
    getTchilasZmanKidushLevana3Days(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
       * Returns the point in time of <em>Molad</em> as a <code>Date</code> Object. For the traditional day of week, hour,
       * minute and chalakim, {@link JewishCalendar#getMoladAsDate()} and the not yet completed
       * {@link HebrewDateFormatter} that will have formatting for this.
       *
       * @return the Date representing the moment of the molad. If the molad does not occur on this day, a null will be returned.
       *
       * @see #getTchilasZmanKidushLevana3Days()
       * @see #getTchilasZmanKidushLevana7Days(Date, Date)
       * @see JewishCalendar#getMoladAsDate()
       */
    getZmanMolad(): DateTime | null;
    /**
       * Used by Molad based <em>zmanim</em> to determine if <em>zmanim</em> occur during the current day.
       * @see #getMoladBasedTime(Date, Date, Date, boolean)
       * @return previous midnight
       */
    private getMidnightLastNight;
    /**
       * Used by Molad based <em>zmanim</em> to determine if <em>zmanim</em> occur during the current day.
       * @see #getMoladBasedTime(Date, Date, Date, boolean)
       * @return following midnight
       */
    private getMidnightTonight;
    /**
       * Returns the earliest time of <em>Kiddush Levana</em> according to the opinions that it should not be said until 7
       * days after the <em>molad</em>. If the time of <em>tchilas zman Kiddush Levana</em> occurs during the day (between
       * {@link ZmanimCalendar#getAlos72() <em>alos</em>} and {@link ZmanimCalendar#getTzais72() <em>tzais</em>}) it
       * return the next <em>tzais</em>.
       *
       * @param alos
       *            the beginning of the Jewish day. If <em>Kidush Levana</em> occurs during the day (starting at <em>alos</em>
       *            and ending at <em>tzais</em>), the time returned will be <em>tzais</em>. If either the <em>alos</em> or
       *            <em>tzais</em> parameters are null, no daytime adjustment will be made.
       * @param tzais
       *            the end of the Jewish day. If <em>Kidush Levana</em> occurs during the day (starting at <em>alos</em> and
       *            ending at <em>tzais</em>), the time returned will be <em>tzais</em>. If either the <em>alos</em> or
       *            <em>tzais</em> parameters are null, no daytime adjustment will be made.
       *
       * @return the Date representing the moment 7 days after the molad. If the time occurs between <em>alos</em> and
       *         <em>tzais</em>, <em>tzais</em> will be returned
       * @see #getTchilasZmanKidushLevana3Days(Date, Date)
       * @see #getTchilasZmanKidushLevana7Days()
       * @see JewishCalendar#getTchilasZmanKidushLevana7Days()
       */
    getTchilasZmanKidushLevana7Days(alos?: DateTime | null, tzais?: DateTime | null): DateTime | null;
    /**
     * This method returns the latest time one is allowed eating <em>chametz</em> on <em>Erev Pesach</em> according to
     * the opinion of the<a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>. This time is identical to the {@link
     * #getSofZmanTfilaGRA() <em>Sof zman tfilah</em> GRA} and is provided as a convenience method for those who are
     * unaware how this <em>zman</em> is calculated. This time is 4 hours into the day based on the opinion of the
     * <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> that the day is calculated from sunrise to sunset.
     * This returns the time 4 * {@link #getShaahZmanisGra()} after {@link #getSeaLevelSunrise() sea level sunrise}.
     *
     * @see ZmanimCalendar#getShaahZmanisGra()
     * @see ZmanimCalendar#getSofZmanTfilaGRA()
     * @return the <code>Date</code> one is allowed eating <em>chametz</em> on <em>Erev Pesach</em>. If the calculation
     *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does
     *         not rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
     *         {@link AstronomicalCalendar} documentation.
     */
    getSofZmanAchilasChametzGRA(): DateTime | null;
    /**
       * This method returns the latest time one is allowed eating <em>chametz</em> on <em>Erev Pesach</em> according to the
       * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
       * being {@link #getAlos72() 72} minutes before {@link #getSunrise() sunrise}. This time is identical to the
       * {@link #getSofZmanTfilaMGA72Minutes() <em>Sof zman tfilah</em> MGA 72 minutes}. This time is 4 {@link #getShaahZmanisMGA()
       * <em>shaos zmaniyos</em>} (temporal hours) after {@link #getAlos72() dawn} based on the opinion of the MGA that the day is
       * calculated from a {@link #getAlos72() dawn} of 72 minutes before sunrise to {@link #getTzais72() nightfall} of 72 minutes
       * after sunset. This returns the time of 4 * {@link #getShaahZmanisMGA()} after {@link #getAlos72() dawn}.
       *
       * @return the <code>Date</code> of the latest time of eating <em>chametz</em>. If the calculation can't be computed such as
       *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set), a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       * @see #getShaahZmanisMGA()
       * @see #getAlos72()
       * @see #getSofZmanTfilaMGA72Minutes()
       */
    getSofZmanAchilasChametzMGA72Minutes(): DateTime | null;
    /**
       * This method returns the latest time one is allowed eating <em>chametz</em> on <em>Erev Pesach</em> according to the
       * opinion of the<a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
       * being {@link #getAlos16Point1Degrees() 16.1&deg;} before {@link #getSunrise() sunrise}. This time is 4 {@link
       * #getShaahZmanis16Point1Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos16Point1Degrees() dawn}
       * based on the opinion of the MGA that the day is calculated from dawn to nightfall with both being 16.1&deg;
       * below sunrise or sunset. This returns the time of 4 {@link #getShaahZmanis16Point1Degrees()} after
       * {@link #getAlos16Point1Degrees() dawn}.
       *
       * @return the <code>Date</code> of the latest time of eating <em>chametz</em>. If the calculation can't be computed such
       *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle where
       *         the sun may not reach low enough below the horizon for this calculation, a null will be returned. See
       *         detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       *
       * @see #getShaahZmanis16Point1Degrees()
       * @see #getAlos16Point1Degrees()
       * @see #getSofZmanTfilaMGA16Point1Degrees()
       */
    getSofZmanAchilasChametzMGA16Point1Degrees(): DateTime | null;
    /**
       * This method returns the latest time for burning <em>chametz</em> on <em>Erev Pesach</em> according to the opinion
       * of the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>. This time is 5 hours into the day based on the
       * opinion of the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> that the day is calculated from
       * sunrise to sunset. This returns the time 5 * {@link #getShaahZmanisGra()} after {@link #getSeaLevelSunrise() sea
       * level sunrise}.
       *
       * @see ZmanimCalendar#getShaahZmanisGra()
       * @return the <code>Date</code> of the latest time for burning <em>chametz</em> on <em>Erev Pesach</em>. If the
       *         calculation can't be computed such as in the Arctic Circle where there is at least one day a year where
       *         the sun does not rise, and one where it does not set, a null will be returned. See detailed explanation on
       *         top of the {@link AstronomicalCalendar} documentation.
       */
    getSofZmanBiurChametzGRA(): DateTime | null;
    /**
       * This method returns the latest time for burning <em>chametz</em> on <em>Erev Pesach</em> according to the opinion of
       * the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
       * being {@link #getAlos72() 72} minutes before {@link #getSunrise() sunrise}. This time is 5 {@link
       * #getShaahZmanisMGA() <em>shaos zmaniyos</em>} (temporal hours) after {@link #getAlos72() dawn} based on the opinion of
       * the MGA that the day is calculated from a {@link #getAlos72() dawn} of 72 minutes before sunrise to {@link
       * #getTzais72() nightfall} of 72 minutes after sunset. This returns the time of 5 * {@link #getShaahZmanisMGA()} after
       * {@link #getAlos72() dawn}.
       *
       * @return the <code>Date</code> of the latest time for burning <em>chametz</em> on <em>Erev Pesach</em>. If the calculation
       *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
       *         and one where it does not set), a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       * @see #getShaahZmanisMGA()
       * @see #getAlos72()
       */
    getSofZmanBiurChametzMGA72Minutes(): DateTime | null;
    /**
       * This method returns the latest time for burning <em>chametz</em> on <em>Erev Pesach</em> according to the opinion
       * of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> based on <em>alos</em>
       * being {@link #getAlos16Point1Degrees() 16.1&deg;} before {@link #getSunrise() sunrise}. This time is 5
       * {@link #getShaahZmanis16Point1Degrees() <em>shaos zmaniyos</em>} (solar hours) after {@link #getAlos16Point1Degrees()
       * dawn} based on the opinion of the MGA that the day is calculated from dawn to nightfall with both being 16.1&deg;
       * below sunrise or sunset. This returns the time of 5 {@link #getShaahZmanis16Point1Degrees()} after
       * {@link #getAlos16Point1Degrees() dawn}.
       *
       * @return the <code>Date</code> of the latest time for burning <em>chametz</em> on <em>Erev Pesach</em>. If the calculation
       *         can't be computed such as northern and southern locations even south of the Arctic Circle and north of the
       *         Antarctic Circle where the sun may not reach low enough below the horizon for this calculation, a null
       *         will be returned. See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
       *
       * @see #getShaahZmanis16Point1Degrees()
       * @see #getAlos16Point1Degrees()
       */
    getSofZmanBiurChametzMGA16Point1Degrees(): DateTime | null;
    /**
       * A method that returns "solar" midnight, or the time when the sun is at its <a
       * href="https://en.wikipedia.org/wiki/Nadir">nadir</a>.
       * <b>Note:</b> this method is experimental and might be removed.
       *
       * @return the <code>Date</code> of Solar Midnight (chatzos layla). If the calculation can't be computed such as in
       *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       */
    getSolarMidnight(): DateTime | null;
    /**
       * A method that returns the <a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a>'s
       * <em>netz amiti</em> (sunrise) without {@link AstronomicalCalculator#getElevationAdjustment(double)
       * elevation adjustment}. This forms the base for the Baal Hatanya's dawn-based calculations that are
       * calculated as a dip below the horizon before sunrise.
       *
       * According to the Baal Hatanya, <em>netz amiti</em>, or true (halachic) sunrise, is when the top of the sun's
       * disk is visible at an elevation similar to the mountains of Eretz Yisrael. The time is calculated as the point at which
       * the center of the sun's disk is 1.583&deg; below the horizon. This degree-based calculation can be found in Rabbi Shalom
       * DovBer Levine's commentary on The <a href="https://www.chabadlibrary.org/books/pdf/Seder-Hachnosas-Shabbos.pdf">Baal
       * Hatanya's Seder Hachnasas Shabbos</a>. From an elevation of 546 meters, the top of <a href=
       * "https://en.wikipedia.org/wiki/Mount_Carmel">Har Hacarmel</a>, the sun disappears when it is 1&deg; 35' or 1.583&deg;
       * below the sea level horizon. This in turn is based on the Gemara <a href=
       * "https://hebrewbooks.org/shas.aspx?mesechta=2&daf=35">Shabbos 35a</a>. There are other opinions brought down by
       * Rabbi Levine, including Rabbi Yosef Yitzchok Feigelstock who calculates it as the degrees below the horizon 4 minutes after
       * sunset in Yerushalayim (on the equinox). That is brought down as 1.583&deg;. This is identical to the 1&deg; 35' <em>zman</em>
       * and is probably a typo and should be 1.683&deg;. These calculations are used by most <a href=
       * "https://en.wikipedia.org/wiki/Chabad">Chabad</a> calendars that use the Baal Hatanya's <em>zmanim</em>. See
       * <a href="https://www.chabad.org/library/article_cdo/aid/3209349/jewish/About-Our-Zmanim-Calculations.htm">About Our
       * <em>Zmanim</em> Calculations @ Chabad.org</a>.
       *
       * Note: <em>netz amiti</em> is used only for calculating certain <em>zmanim</em>, and is intentionally unpublished. For
       * practical purposes, daytime <em>mitzvos</em> like <em>shofar</em> and <em>lulav</em> should not be done until after the
       * published time for <em>netz</em> / sunrise.
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
       * A method that returns the <a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a>'s
       * <em>shkiah amiti</em> (sunset) without {@link AstronomicalCalculator#getElevationAdjustment(double)
       * elevation adjustment}. This forms the base for the Baal Hatanya's dusk-based calculations that are calculated
       * as a dip below the horizon after sunset.
       *
       * According to the Baal Hatanya, <em>shkiah amiti</em>, true (<em>halachic</em>) sunset, is when the top of the
       * sun's disk disappears from view at an elevation similar to the mountains of <em>Eretz Yisrael</em>.
       * This time is calculated as the point at which the center of the sun's disk is 1.583 degrees below the horizon.
       *
       * Note: <em>shkiah amiti</em> is used only for calculating certain <em>zmanim</em>, and is intentionally unpublished. For
       * practical purposes, all daytime mitzvos should be completed before the published time for <em>shkiah</em> / sunset.
       *
       * For further explanation of the calculations used for the Baal Hatanya's <em>zmanim</em> in this library, see
       * <a href="https://www.chabad.org/library/article_cdo/aid/3209349/jewish/About-Our-Zmanim-Calculations.htm">About Our
       * <em>Zmanim</em> Calculations @ Chabad.org</a>.
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
       * A method that returns the <a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a>'s
       * a <em>shaah zmanis</em> ({@link #getTemporalHour(Date, Date) temporal hour}). This forms the base for the
       * Baal Hatanya's  day  based calculations that are calculated as a 1.583&deg; dip below the horizon after sunset.
       * According to the Baal Hatanya, <em>shkiah amiti</em>, true (halachic) sunset, is when the top of the
       * sun's disk disappears from view at an elevation similar to the mountains of Eretz Yisrael.
       * This time is calculated as the point at which the center of the sun's disk is 1.583 degrees below the horizon.
       * A method that returns a <em>shaah zmanis</em> ({@link #getTemporalHour(Date, Date) temporal hour}) calculated
       * based on the <a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a>'s <em>netz
       * amiti</em> and <em>shkiah amiti</em> using a dip of 1.583&deg; below the sea level horizon. This calculation divides
       * the day based on the opinion of the Baal Hatanya that the day runs from {@link #getSunriseBaalHatanya() netz amiti}
       * to {@link #getSunsetBaalHatanya() <em>shkiah amiti</em>}. The calculations are based on a day from {@link
       * #getSunriseBaalHatanya() sea level <em>netz amiti</em>} to {@link #getSunsetBaalHatanya() sea level <em>shkiah amiti</em>}.
       * The day is split into 12 equal parts with each one being a <em>shaah zmanis</em>. This method is similar to {@link
       * #getTemporalHour}, but all calculations are based on a sea level sunrise and sunset.
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
       * Returns the <a href="https://en.wikipedia.org/wiki/Shneur_Zalman_of_Liadi">Baal Hatanya</a>'s <em>alos</em>
       * (dawn) calculated as the time when the sun is 16.9&deg; below the eastern {@link #GEOMETRIC_ZENITH geometric horizon}
       * before {@link #getSunrise sunrise}. For more information the source of 16.9&deg; see {@link #ZENITH_16_POINT_9}.
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
       * {@link #getShaahZmanisBaalHatanya() <em>shaos zmaniyos</em>} (solar hours) after {@link #getSunriseBaalHatanya()
       * <em>netz amiti</em> (sunrise)} based on the opinion of the Baal Hatanya that the day is calculated from
       * sunrise to sunset. This returns the time 3 * {@link #getShaahZmanisBaalHatanya()} after {@link #getSunriseBaalHatanya()
       * <em>netz amiti</em> (sunrise)}.
       *
       * @see ZmanimCalendar#getSofZmanShma(Date, Date)
       * @see #getShaahZmanisBaalHatanya()
       * @return the <code>Date</code> of the latest <em>zman shema</em> according to the Baal Hatanya. If the calculation
       *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does
       *         not rise, and one where it does not set, a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       */
    getSofZmanShmaBaalHatanya(): DateTime | null;
    /**
       * This method returns the latest <em>zman tfilah</em> (time to recite the morning prayers). This time is 4
       * hours into the day based on the opinion of the Baal Hatanya that the day is
       * calculated from sunrise to sunset. This returns the time 4 * {@link #getShaahZmanisBaalHatanya()} after
       * {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
       *
       * @see ZmanimCalendar#getSofZmanTfila(Date, Date)
       * @see #getShaahZmanisBaalHatanya()
       * @return the <code>Date</code> of the latest <em>zman tfilah</em>. If the calculation can't be computed such as in
       *         the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it does
       *         not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getSofZmanTfilaBaalHatanya(): DateTime | null;
    /**
       * This method returns the latest time one is allowed eating <em>chametz</em> on <em>Erev Pesach</em> according to the
       * opinion of the Baal Hatanya. This time is identical to the {@link #getSofZmanTfilaBaalHatanya() <em>Sof zman tfilah</em>
       * Baal Hatanya}. This time is 4 hours into the day based on the opinion of the Baal Hatanya that the day is calculated
       * from sunrise to sunset. This returns the time 4 {@link #getShaahZmanisBaalHatanya()} after
       * {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
       *
       * @see #getShaahZmanisBaalHatanya()
       * @see #getSofZmanTfilaBaalHatanya()
       * @return the <code>Date</code> one is allowed eating <em>chametz</em> on <em>Erev Pesach</em>. If the calculation can't
       *         be computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
       *         and one where it does not set, a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       */
    getSofZmanAchilasChametzBaalHatanya(): DateTime | null;
    /**
       * This method returns the latest time for burning <em>chametz</em> on <em>Erev Pesach</em> according to the opinion of
       * the Baal Hatanya. This time is 5 hours into the day based on the opinion of the Baal Hatanya that the day is calculated
       * from sunrise to sunset. This returns the time 5 * {@link #getShaahZmanisBaalHatanya()} after
       * {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
       *
       * @see #getShaahZmanisBaalHatanya()
       * @return the <code>Date</code> of the latest time for burning <em>chametz</em> on <em>Erev Pesach</em>. If the calculation
       *         can't be computed such as in the Arctic Circle where there is at least one day a year where the sun does not rise,
       *         and one where it does not set, a null will be returned. See detailed explanation on top of the
       *         {@link AstronomicalCalendar} documentation.
       */
    getSofZmanBiurChametzBaalHatanya(): DateTime | null;
    /**
       * This method returns the time of <em>mincha gedola</em>. <em>Mincha gedola</em> is the earliest time one can pray
       * <em>mincha</em>. The <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> is of the opinion that it is
       * better to delay <em>mincha</em> until {@link #getMinchaKetanaBaalHatanya() <em>mincha ketana</em>} while the
       * <a href="https://en.wikipedia.org/wiki/Asher_ben_Jehiel">Ra"sh</a>,
       * <a href="https://en.wikipedia.org/wiki/Jacob_ben_Asher">Tur</a>, <a href=
       * "https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> and others are of the opinion that <em>mincha</em> can be prayed
       * <em>lechatchila</em> starting at <em>mincha gedola</em>. This is calculated as 6.5 {@link #getShaahZmanisBaalHatanya()
       * sea level solar hours} after {@link #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}. This calculation is based
       * on the opinion of the Baal Hatanya that the day is calculated from sunrise to sunset. This returns the time 6.5
       * * {@link #getShaahZmanisBaalHatanya()} after {@link #getSunriseBaalHatanya() <em>netz amiti</em> ("real" sunrise)}.
       *
       * @see #getMinchaGedola(Date, Date)
       * @see #getShaahZmanisBaalHatanya()
       * @see #getMinchaKetanaBaalHatanya()
       * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
       *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getMinchaGedolaBaalHatanya(): DateTime | null;
    /**
       * This is a convenience method that returns the later of {@link #getMinchaGedolaBaalHatanya()} and
       * {@link #getMinchaGedola30Minutes()}. In the winter when 1/2 of a {@link #getShaahZmanisBaalHatanya()
       * <em>shaah zmanis</em>} is less than 30 minutes {@link #getMinchaGedola30Minutes()} will be returned, otherwise
       * {@link #getMinchaGedolaBaalHatanya()} will be returned.
       *
       * @return the <code>Date</code> of the later of {@link #getMinchaGedolaBaalHatanya()} and {@link #getMinchaGedola30Minutes()}.
       *         If the calculation can't be computed such as in the Arctic Circle where there is at least one day a year
       *         where the sun does not rise, and one where it does not set, a null will be returned. See detailed
       *         explanation on top of the {@link AstronomicalCalendar} documentation.
       */
    getMinchaGedolaBaalHatanyaGreaterThan30(): DateTime | null;
    /**
       * This method returns the time of <em>mincha ketana</em>. This is the preferred earliest time to pray
       * <em>mincha</em> in the opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others.
       * For more information on this see the documentation on {@link #getMinchaGedolaBaalHatanya() <em>mincha gedola</em>}.
       * This is calculated as 9.5 {@link #getShaahZmanisBaalHatanya()  sea level solar hours} after {@link #getSunriseBaalHatanya()
       * <em>netz amiti</em> (sunrise)}. This calculation is calculated based on the opinion of the Baal Hatanya that the
       * day is calculated from sunrise to sunset. This returns the time 9.5 * {@link #getShaahZmanisBaalHatanya()} after {@link
       * #getSunriseBaalHatanya() <em>netz amiti</em> (sunrise)}.
       *
       * @see #getMinchaKetana(Date, Date)
       * @see #getShaahZmanisBaalHatanya()
       * @see #getMinchaGedolaBaalHatanya()
       * @return the <code>Date</code> of the time of <em>mincha ketana</em>. If the calculation can't be computed such as
       *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
       *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
       *         documentation.
       */
    getMinchaKetanaBaalHatanya(): DateTime | null;
    /**
       * This method returns the time of <em>plag hamincha</em>. This is calculated as 10.75 hours after sunrise. This
       * calculation is based on the opinion of the Baal Hatanya that the day is calculated
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
    /**
     * A utility methos to calculate zmanim based on <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe
     * Feinstein</a> as calculated in <a href="https://en.wikipedia.org/wiki/Mesivtha_Tifereth_Jerusalem">MTJ</a>, <a href=
     * "https://en.wikipedia.org/wiki/Mesivtha_Tifereth_Jerusalem">Yeshiva of Staten Island</a>, and Camp Yeshiva
     * of Staten Island. The day is split in two, from <em>alos</em> / sunrise to fixed local <em>chatzos</em>, and the
     * second half of the day, from fixed local <em>chatzos</em> to sunset / <em>tzais</em>. Morning based times are calculated
     * based on the first 6 hours, and afternoon times based on the second half of the day.
     *
     * @param startOfHalfDay
     *            The start of the half day. This would be <em>alos</em> or sunrise for morning based times and fixed
     *            local <em>chatzos</em> for the second half of the day.
     * @param endOfHalfDay
     *            The end of the half day. This would be fixed local <em>chatzos</em> for morning based times and sunset
     *            or <em>tzais</em> for afternoon based times.
     * @param hours
     *            the number of hours to offset the beginning of the first or second half of the day
     *
     * @return the <code>Date</code> of the later of {@link #getMinchaGedolaBaalHatanya()} and {@link #getMinchaGedola30Minutes()}.
     *         If the calculation can't be computed such as in the Arctic Circle where there is at least one day a year
     *         where the sun does not rise, and one where it does not set, a null will be returned. See detailed
     *         explanation on top of the {@link AstronomicalCalendar} documentation.
     *
     * @see ComplexZmanimCalendar#getFixedLocalChatzos()
     */
    getFixedLocalChatzosBasedZmanim(startOfHalfDay: DateTime, endOfHalfDay: DateTime, hours: number): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of the
     * calculation of <em>sof zman krias shema</em> (latest time to recite <em>Shema</em> in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> that the
     * day is calculated from dawn to nightfall, but calculated using the first half of the day only. The half a day starts
     * at <em>alos</em> defined as {@link #getAlos18Degrees() 18&deg;} and ends at {@link #getFixedLocalChatzos() fixed local
     * chatzos}. <em>Sof Zman Shema</em> is 3 <em>shaos zmaniyos</em> (solar hours) after <em>alos</em> or half of this half-day.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos18Degrees()
     * @see #getFixedLocalChatzos()
     * @see #getFixedLocalChatzosBasedZmanim(Date, Date, double)
     */
    getSofZmanShmaMGA18DegreesToFixedLocalChatzos(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of the
     * calculation of <em>sof zman krias shema</em> (latest time to recite <em>Shema</em> in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> that the
     * day is calculated from dawn to nightfall, but calculated using the first half of the day only. The half a day starts
     * at <em>alos</em> defined as {@link #getAlos16Point1Degrees() 16.1&deg;} and ends at {@link #getFixedLocalChatzos() fixed local
     * chatzos}. <em>Sof Zman Shema</em> is 3 <em>shaos zmaniyos</em> (solar hours) after this <em>alos</em> or half of this half-day.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos16Point1Degrees()
     * @see #getFixedLocalChatzos()
     * @see #getFixedLocalChatzosBasedZmanim(Date, Date, double)
     */
    getSofZmanShmaMGA16Point1DegreesToFixedLocalChatzos(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of the
     * calculation of <em>sof zman krias shema</em> (latest time to recite <em>Shema</em> in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> that the
     * day is calculated from dawn to nightfall, but calculated using the first half of the day only. The half a day starts
     * at <em>alos</em> defined as {@link #getAlos90() 90 minutes before sunrise} and ends at {@link #getFixedLocalChatzos()
     * fixed local chatzos}. <em>Sof Zman Shema</em> is 3 <em>shaos zmaniyos</em> (solar hours) after this <em>alos</em> or
     * half of this half-day.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos90()
     * @see #getFixedLocalChatzos()
     * @see #getFixedLocalChatzosBasedZmanim(Date, Date, double)
     */
    getSofZmanShmaMGA90MinutesToFixedLocalChatzos(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of the
     * calculation of <em>sof zman krias shema</em> (latest time to recite <em>Shema</em> in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Avraham_Gombinern">Magen Avraham (MGA)</a> that the
     * day is calculated from dawn to nightfall, but calculated using the first half of the day only. The half a day starts
     * at <em>alos</em> defined as {@link #getAlos72() 72 minutes before sunrise} and ends at {@link #getFixedLocalChatzos()
     * fixed local chatzos}. <em>Sof Zman Shema</em> is 3 <em>shaos zmaniyos</em> (solar hours) after this <em>alos</em> or
     * half of this half-day.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getAlos72()
     * @see #getFixedLocalChatzos()
     * @see #getFixedLocalChatzosBasedZmanim(Date, Date, double)
     */
    getSofZmanShmaMGA72MinutesToFixedLocalChatzos(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of the
     * calculation of <em>sof zman krias shema</em> (latest time to recite <em>Shema</em> in the morning) according to the
     * opinion of the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> that the day is calculated from
     * sunrise to sunset, but calculated using the first half of the day only. The half a day starts at {@link #getSunrise()
     * sunrise} and ends at {@link #getFixedLocalChatzos() fixed local chatzos}. <em>Sof zman Shema</em> is 3 <em>shaos
     * zmaniyos</em> (solar hours) after sunrise or half of this half-day.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getSunrise()
     * @see #getFixedLocalChatzos()
     * @see #getFixedLocalChatzosBasedZmanim(Date, Date, double)
     */
    getSofZmanShmaGRASunriseToFixedLocalChatzos(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of the
     * calculation of <em>sof zman tfila</em> (<em>zman tfilah</em> (the latest time to recite the morning prayers))
     * according to the opinion of the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> that the day is
     * calculated from sunrise to sunset, but calculated using the first half of the day only. The half a day starts at
     * {@link #getSunrise() sunrise} and ends at {@link #getFixedLocalChatzos() fixed local chatzos}. <em>Sof zman tefila</em>
     * is 4 <em>shaos zmaniyos</em> (solar hours) after sunrise or 2/3 of this half-day.
     *
     * @return the <code>Date</code> of the latest <em>zman krias shema</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     * @see #getSunrise()
     * @see #getFixedLocalChatzos()
     * @see #getFixedLocalChatzosBasedZmanim(Date, Date, double)
     */
    getSofZmanTfilaGRASunriseToFixedLocalChatzos(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion of
     * the calculation of <em>mincha gedola</em>, the earliest time one can pray <em>mincha</em> <a href=
     * "https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a>that is 30 minutes after {@link #getFixedLocalChatzos() fixed
     * local chatzos}.
     *
     * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getMinchaGedola()
     * @see #getFixedLocalChatzos()
     * @see #getMinchaKetanaGRAFixedLocalChatzosToSunset
     */
    getMinchaGedolaGRAFixedLocalChatzos30Minutes(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion
     * of the calculation of <em>mincha ketana</em> (the preferred time to recite the <em>mincha prayers</em> according to
     * the opinion of the <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a> and others) calculated according
     * to the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> that is 3.5 <em>shaos zmaniyos</em> (solar
     * hours) after {@link #getFixedLocalChatzos() fixed local chatzos}.
     *
     * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getMinchaGedola()
     * @see #getFixedLocalChatzos()
     * @see #getMinchaGedolaGRAFixedLocalChatzos30Minutes
     */
    getMinchaKetanaGRAFixedLocalChatzosToSunset(): DateTime | null;
    /**
     * This method returns <a href="https://en.wikipedia.org/wiki/Moshe_Feinstein">Rav Moshe Feinstein's</a> opinion
     * of the calculation of <em>plag hamincha</em>. This method returns <em>plag hamincha</em> calculated according to the
     * <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> that the day ends at sunset and is 4.75 <em>shaos
     * zmaniyos</em> (solar hours) after {@link #getFixedLocalChatzos() fixed local chatzos}.
     *
     * @return the <code>Date</code> of the time of <em>mincha gedola</em>. If the calculation can't be computed such as
     *         in the Arctic Circle where there is at least one day a year where the sun does not rise, and one where it
     *         does not set, a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     *
     * @see #getPlagHamincha()
     * @see #getFixedLocalChatzos()
     * @see #getMinchaKetanaGRAFixedLocalChatzosToSunset
     * @see #getMinchaGedolaGRAFixedLocalChatzos30Minutes
     */
    getPlagHaminchaGRAFixedLocalChatzosToSunset(): DateTime | null;
    /**
     * Method to return <em>tzais</em> (dusk) calculated as 50 minutes after sea level sunset. This method returns
     * <em>tzais</em> (nightfall) based on the opinion of Rabbi Moshe Feinstein for the New York area. This time should
     * not be used for latitudes different than the NY area.
     *
     * @return the <code>Date</code> representing the time. If the calculation can't be computed such as in the Arctic
     *         Circle where there is at least one day a year where the sun does not rise, and one where it does not set,
     *         a null will be returned. See detailed explanation on top of the {@link AstronomicalCalendar}
     *         documentation.
     */
    getTzais50(): DateTime | null;
    /**
     * A method for calculating <em>samuch lemincha ketana</em>, / near <em>mincha ketana</em> time that is half an hour before
     * {@link #getMinchaKetana()} or is 9 * {@link #getShaahZmanisGra() <em>shaos zmaniyos</em>} (solar hours) after {@link
     * #getSunrise() sunrise} or {@link #getSeaLevelSunrise() sea level sunrise} (depending on the {@link #isUseElevation()}
     * setting), calculated according to the <a href="https://en.wikipedia.org/wiki/Vilna_Gaon">GRA</a> using a day starting at
     * sunrise and ending at sunset. This is the time that eating or other activity can't begin prior to praying <em>mincha</em>.
     * The calculation used is 9 * {@link #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() <em>alos</em>
     * 16.1&deg;}. See the <a href="https://hebrewbooks.org/pdfpager.aspx?req=60387&st=&pgnum=294">Mechaber and Mishna Berurah
     * 232</a> for details.
     *
     * @see #getShaahZmanisGra()
     * @see #getSamuchLeMinchaKetana16Point1Degrees()
     * @return the <code>Date</code> of the time of <em>samuch lemincha ketana</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getSamuchLeMinchaKetanaGRA(): DateTime | null;
    /**
     * A method for calculating <em>samuch lemincha ketana</em>, / near <em>mincha ketana</em> time that is half an hour before
     * {@link #getMinchaGedola16Point1Degrees()}  or 9 * <em>shaos zmaniyos</em> (temporal hours) after the start of the day,
     * calculated using a day starting and ending 16.1&deg; below the horizon. This is the time that eating or other activity
     * can't begin prior to praying <em>mincha</em>. The calculation used is 9 * {@link #getShaahZmanis16Point1Degrees()} after
     * {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;}. See the <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=60387&st=&pgnum=294">Mechaber and Mishna Berurah 232</a>.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @return the <code>Date</code> of the time of <em>samuch lemincha ketana</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getSamuchLeMinchaKetana16Point1Degrees(): DateTime | null;
    /**
     * A method for calculating <em>samuch lemincha ketana</em>, / near <em>mincha ketana</em> time that is half an hour before
     * {@link #getMinchaKetana72Minutes()}  or 9 * <em>shaos zmaniyos</em> (temporal hours) after the start of the day,
     * calculated using a day starting 72 minutes before sunrise and ending 72 minutes after sunset. This is the time that eating
     * or other activity can't begin prior to praying <em>mincha</em>. The calculation used is 9 * {@link
     * #getShaahZmanis16Point1Degrees()} after {@link #getAlos16Point1Degrees() <em>alos</em> 16.1&deg;}. See the <a href=
     * "https://hebrewbooks.org/pdfpager.aspx?req=60387&st=&pgnum=294">Mechaber and Mishna Berurah 232</a>.
     *
     * @see #getShaahZmanis16Point1Degrees()
     * @return the <code>Date</code> of the time of <em>samuch lemincha ketana</em>. If the calculation can't be computed such
     *         as northern and southern locations even south of the Arctic Circle and north of the Antarctic Circle
     *         where the sun may not reach low enough below the horizon for this calculation, a null will be returned.
     *         See detailed explanation on top of the {@link AstronomicalCalendar} documentation.
     */
    getSamuchLeMinchaKetana72Minutes(): DateTime | null;
}

/**
 * The JewishDate is the base calendar class, that supports maintenance of a {@link java.util.GregorianCalendar}
 * instance along with the corresponding Jewish date. This class can use the standard Java Date and Calendar
 * classes for setting and maintaining the dates, but it does not subclass these classes or use them internally
 * in any calculations. This class also does not have a concept of a time (which the Date class does). Please
 * note that the calendar does not currently support dates prior to 1/1/1 Gregorian. Also keep in mind that the
 * Gregorian calendar started on October 15, 1582, so any calculations prior to that are suspect (at least from
 * a Gregorian perspective). While 1/1/1 Gregorian and forward are technically supported, any calculations prior to <a
 * href="http://en.wikipedia.org/wiki/Hillel_II">Hillel II's (Hakatan's</a>) calendar (4119 in the Jewish Calendar / 359
 * CE Julian as recorded by <a href="http://en.wikipedia.org/wiki/Hai_Gaon">Rav Hai Gaon</a>) would be just an
 * approximation.
 *
 * This open source Java code was written by <a href="http://www.facebook.com/avromf">Avrom Finkelstien</a> from his C++
 * code. It was refactored to fit the KosherJava Zmanim API with simplification of the code, enhancements and some bug
 * fixing.
 *
 * Some of Avrom's original C++ code was translated from <a href="https://web.archive.org/web/20120124134148/http://emr.cs.uiuc.edu/~reingold/calendar.C">C/C++
 * code</a> in <a href="http://www.calendarists.com">Calendrical Calculations</a> by Nachum Dershowitz and Edward M.
 * Reingold, Software-- Practice &amp; Experience, vol. 20, no. 9 (September, 1990), pp. 899- 928. Any method with the mark
 * "ND+ER" indicates that the method was taken from this source with minor modifications.
 *
 * If you are looking for a class that implements a Jewish calendar version of the Calendar class, one is available from
 * the <a href="http://site.icu-project.org/" >ICU (International Components for Unicode)</a> project, formerly part of
 * IBM's DeveloperWorks.
 *
 * @see JewishCalendar
 * @see HebrewDateFormatter
 * @see java.util.Date
 * @see java.util.Calendar
 * @author &copy; Avrom Finkelstien 2002
 * @author &copy; Eliyahu Hershfeld 2011 - 2015
 */
declare class JewishDate {
    /**
     * Value of the month field indicating Nissan, the first numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 7th (or 8th in a {@link #isJewishLeapYear() leap
       * year}) month of the year.
     */
    static readonly NISSAN: number;
    /**
     * Value of the month field indicating Iyar, the second numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 8th (or 9th in a {@link #isJewishLeapYear() leap
       * year}) month of the year.
     */
    static readonly IYAR: number;
    /**
     * Value of the month field indicating Sivan, the third numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 9th (or 10th in a {@link #isJewishLeapYear() leap
       * year}) month of the year.
     */
    static readonly SIVAN: number;
    /**
     * Value of the month field indicating Tammuz, the fourth numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 10th (or 11th in a {@link #isJewishLeapYear() leap
       * year}) month of the year.
     */
    static readonly TAMMUZ: number;
    /**
     * Value of the month field indicating Av, the fifth numeric month of the year in the Jewish calendar. With the year
     * starting at {@link #TISHREI}, it would actually be the 11th (or 12th in a {@link #isJewishLeapYear() leap year})
     * month of the year.
     */
    static readonly AV: number;
    /**
     * Value of the month field indicating Elul, the sixth numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 12th (or 13th in a {@link #isJewishLeapYear() leap
       * year}) month of the year.
     */
    static readonly ELUL: number;
    /**
     * Value of the month field indicating Tishrei, the seventh numeric month of the year in the Jewish calendar. With
     * the year starting at this month, it would actually be the 1st month of the year.
     */
    static readonly TISHREI: number;
    /**
     * Value of the month field indicating Cheshvan/marcheshvan, the eighth numeric month of the year in the Jewish
     * calendar. With the year starting at {@link #TISHREI}, it would actually be the 2nd month of the year.
     */
    static readonly CHESHVAN: number;
    /**
     * Value of the month field indicating Kislev, the ninth numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 3rd month of the year.
     */
    static readonly KISLEV: number;
    /**
     * Value of the month field indicating Teves, the tenth numeric month of the year in the Jewish calendar. With the
     * year starting at {@link #TISHREI}, it would actually be the 4th month of the year.
     */
    static readonly TEVES: number;
    /**
     * Value of the month field indicating Shevat, the eleventh numeric month of the year in the Jewish calendar. With
     * the year starting at {@link #TISHREI}, it would actually be the 5th month of the year.
     */
    static readonly SHEVAT: number;
    /**
     * Value of the month field indicating Adar (or Adar I in a {@link #isJewishLeapYear() leap year}), the twelfth
     * numeric month of the year in the Jewish calendar. With the year starting at {@link #TISHREI}, it would actually
     * be the 6th month of the year.
     */
    static readonly ADAR: number;
    /**
     * Value of the month field indicating Adar II, the leap (intercalary or embolismic) thirteenth (Undecimber) numeric
     * month of the year added in Jewish {@link #isJewishLeapYear() leap year}). The leap years are years 3, 6, 8, 11,
     * 14, 17 and 19 of a 19 year cycle. With the year starting at {@link #TISHREI}, it would actually be the 7th month
     * of the year.
     */
    static readonly ADAR_II: number;
    /**
     * the Jewish epoch using the RD (Rata Die/Fixed Date or Reingold Dershowitz) day used in Calendrical Calculations.
     * Day 1 is January 1, 0001 Gregorian
     */
    private static readonly JEWISH_EPOCH;
    /** The number  of <em>chalakim</em> (18) in a minute. */
    private static readonly CHALAKIM_PER_MINUTE;
    /** The number  of <em>chalakim</em> (1080) in an hour. */
    private static readonly CHALAKIM_PER_HOUR;
    /** The number of <em>chalakim</em> (25,920) in a 24 hour day. */
    private static readonly CHALAKIM_PER_DAY;
    /** The number  of <em>chalakim</em> in an average Jewish month. A month has 29 days, 12 hours and 793
     * <em>chalakim</em> (44 minutes and 3.3 seconds) for a total of 765,433 <em>chalakim</em> */
    private static readonly CHALAKIM_PER_MONTH;
    /**
     * Days from the beginning of Sunday till molad BaHaRaD. Calculated as 1 day, 5 hours and 204 chalakim = (24 + 5) *
     * 1080 + 204 = 31524
     */
    private static readonly CHALAKIM_MOLAD_TOHU;
    /**
     * A short year where both {@link #CHESHVAN} and {@link #KISLEV} are 29 days.
     *
     * @see #getCheshvanKislevKviah()
     * @see HebrewDateFormatter#getFormattedKviah(int)
     */
    static readonly CHASERIM: number;
    /**
     * An ordered year where {@link #CHESHVAN} is 29 days and {@link #KISLEV} is 30 days.
     *
     * @see #getCheshvanKislevKviah()
     * @see HebrewDateFormatter#getFormattedKviah(int)
     */
    static readonly KESIDRAN: number;
    /**
     * A long year where both {@link #CHESHVAN} and {@link #KISLEV} are 30 days.
     *
     * @see #getCheshvanKislevKviah()
     * @see HebrewDateFormatter#getFormattedKviah(int)
     */
    static readonly SHELAIMIM: number;
    /** the internal Jewish month. */
    private jewishMonth;
    /** the internal Jewish day. */
    private jewishDay;
    /** the internal Jewish year. */
    private jewishYear;
    /** the internal count of <em>molad</em> hours. */
    private moladHours;
    /** the internal count of <em>molad</em> minutes. */
    private moladMinutes;
    /** the internal count of <em>molad</em> <em>chalakim</em>. */
    private moladChalakim;
    /**
     * Returns the molad hours. Only a JewishDate object populated with {@link #getMolad()},
     * {@link #setJewishDate(int, int, int, int, int, int)} or {@link #setMoladHours(int)} will have this field
     * populated. A regular JewishDate object will have this field set to 0.
     *
     * @return the molad hours
     * @see #setMoladHours(int)
     * @see #getMolad()
     * @see #setJewishDate(int, int, int, int, int, int)
     */
    getMoladHours(): number;
    /**
     * Sets the molad hours.
     *
     * @param moladHours
     *            the molad hours to set
     * @see #getMoladHours()
     * @see #getMolad()
     * @see #setJewishDate(int, int, int, int, int, int)
     *
     */
    setMoladHours(moladHours: number): void;
    /**
     * Returns the molad minutes. Only an object populated with {@link #getMolad()},
     * {@link #setJewishDate(int, int, int, int, int, int)} or or {@link #setMoladMinutes(int)} will have these fields
     * populated. A regular JewishDate object will have this field set to 0.
     *
     * @return the molad minutes
     * @see #setMoladMinutes(int)
     * @see #getMolad()
     * @see #setJewishDate(int, int, int, int, int, int)
     */
    getMoladMinutes(): number;
    /**
     * Sets the molad minutes. The expectation is that the traditional minute-less chalakim will be broken out to
     * minutes and {@link #setMoladChalakim(int) chalakim/parts} , so 793 (TaShTZaG) parts would have the minutes set to
     * 44 and chalakim to 1.
     *
     * @param moladMinutes
     *            the molad minutes to set
     * @see #getMoladMinutes()
     * @see #setMoladChalakim(int)
     * @see #getMolad()
     * @see #setJewishDate(int, int, int, int, int, int)
     *
     */
    setMoladMinutes(moladMinutes: number): void;
    /**
     * Sets the molad chalakim/parts. The expectation is that the traditional minute-less chalakim will be broken out to
     * {@link #setMoladMinutes(int) minutes} and chalakim, so 793 (TaShTZaG) parts would have the minutes set to 44 and
     * chalakim to 1.
     *
     * @param moladChalakim
     *            the molad chalakim/parts to set
     * @see #getMoladChalakim()
     * @see #setMoladMinutes(int)
     * @see #getMolad()
     * @see #setJewishDate(int, int, int, int, int, int)
     *
     */
    setMoladChalakim(moladChalakim: number): void;
    /**
     * Returns the molad chalakim/parts. Only an object populated with {@link #getMolad()},
     * {@link #setJewishDate(int, int, int, int, int, int)} or or {@link #setMoladChalakim(int)} will have these fields
     * populated. A regular JewishDate object will have this field set to 0.
     *
     * @return the molad chalakim/parts
     * @see #setMoladChalakim(int)
     * @see #getMolad()
     * @see #setJewishDate(int, int, int, int, int, int)
     */
    getMoladChalakim(): number;
    /**
     * Returns the last day in a gregorian month
     *
     * @param month
     *            the Gregorian month
     * @return the last day of the Gregorian month
     */
    getLastDayOfGregorianMonth(month: number): number;
    /**
     * The month, where 1 == January, 2 == February, etc... Note that this is different than the Java's Calendar class
     * where January ==0
     */
    private gregorianMonth;
    /** The day of the Gregorian month */
    private gregorianDayOfMonth;
    /** The Gregorian year */
    private gregorianYear;
    /** 1 == Sunday, 2 == Monday, etc... */
    private dayOfWeek;
    /** Returns the absolute date (days since January 1, 0001 on the Gregorian calendar).
     * @see #getAbsDate()
     * @see #absDateToJewishDate()
     */
    private gregorianAbsDate;
    /**
     * Returns the number of days in a given month in a given month and year.
     *
     * @param month
     *            the month. As with other cases in this class, this is 1-based, not zero-based.
     * @param year
     *            the year (only impacts February)
     * @return the number of days in the month in the given year
     */
    private static getLastDayOfGregorianMonth;
    /**
     * Computes the Gregorian date from the absolute date. ND+ER
     * @param absDate - the absolute date
     */
    private absDateToDate;
    /**
     * Returns the absolute date (days since January 1, 0001 on the Gregorian calendar).
     *
     * @return the number of days since January 1, 1
     */
    getAbsDate(): number;
    /**
     * Computes the absolute date from a Gregorian date. ND+ER
     *
     * @param year
     *            the Gregorian year
     * @param month
     *            the Gregorian month. Unlike the Java Calendar where January has the value of 0,This expects a 1 for
     *            January
     * @param dayOfMonth
     *            the day of the month (1st, 2nd, etc...)
     * @return the absolute Gregorian day
     */
    private static gregorianDateToAbsDate;
    /**
     * Returns if the year is a Jewish leap year. Years 3, 6, 8, 11, 14, 17 and 19 in the 19 year cycle are leap years.
     *
     * @param year
     *            the Jewish year.
     * @return true if it is a leap year
     * @see #isJewishLeapYear()
     */
    private static isJewishLeapYear;
    /**
     * Returns if the year the calendar is set to is a Jewish leap year. Years 3, 6, 8, 11, 14, 17 and 19 in the 19 year
     * cycle are leap years.
     *
     * @return true if it is a leap year
     * @see #isJewishLeapYear(int)
     */
    isJewishLeapYear(): boolean;
    /**
     * Returns the last month of a given Jewish year. This will be 12 on a non {@link #isJewishLeapYear(int) leap year}
     * or 13 on a leap year.
     *
     * @param year
     *            the Jewish year.
     * @return 12 on a non leap year or 13 on a leap year
     * @see #isJewishLeapYear(int)
     */
    private static getLastMonthOfJewishYear;
    /**
     * Returns the number of days elapsed from the Sunday prior to the start of the Jewish calendar to the mean
     * conjunction of Tishri of the Jewish year.
     *
     * @param year
     *            the Jewish year
     * @return the number of days elapsed from prior to the molad Tohu BaHaRaD (Be = Monday, Ha= 5 hours and Rad =204
     *         chalakim/parts) prior to the start of the Jewish calendar, to the mean conjunction of Tishri of the
     *         Jewish year. BeHaRaD is 23:11:20 on Sunday night(5 hours 204/1080 chalakim after sunset on Sunday
     *         evening).
     */
    static getJewishCalendarElapsedDays(year: number): number;
    /**
     * Adds the 4 dechiyos for molad Tishrei. These are:
     * <ol>
     * <li>Lo ADU Rosh - Rosh Hashana can't fall on a Sunday, Wednesday or Friday. If the molad fell on one of these
     * days, Rosh Hashana is delayed to the following day.</li>
     * <li>Molad Zaken - If the molad of Tishrei falls after 12 noon, Rosh Hashana is delayed to the following day. If
     * the following day is ADU, it will be delayed an additional day.</li>
     * <li>GaTRaD - If on a non leap year the molad of Tishrei falls on a Tuesday (Ga) on or after 9 hours (T) and 204
     * chalakim (TRaD) it is delayed till Thursday (one day delay, plus one day for Lo ADU Rosh)</li>
     * <li>BeTuTaKFoT - if the year following a leap year falls on a Monday (Be) on or after 15 hours (Tu) and 589
     * chalakim (TaKFoT) it is delayed till Tuesday</li>
     * </ol>
     *
     * @param year - the year
     * @param moladDay - the molad day
     * @param moladParts - the molad parts
     * @return the number of elapsed days in the JewishCalendar adjusted for the 4 dechiyos.
     */
    private static addDechiyos;
    /**
     * Returns the number of chalakim (parts - 1080 to the hour) from the original hypothetical Molad Tohu to the year
     * and month passed in.
     *
     * @param year
     *            the Jewish year
     * @param month
     *            the Jewish month the Jewish month, with the month numbers starting from Nisan. Use the JewishDate
     *            constants such as {@link JewishDate#TISHREI}.
     * @return the number of chalakim (parts - 1080 to the hour) from the original hypothetical Molad Tohu
     */
    private static getChalakimSinceMoladTohu;
    /**
     * Returns the number of chalakim (parts - 1080 to the hour) from the original hypothetical Molad Tohu to the Jewish
     * year and month that this Object is set to.
     *
     * @return the number of chalakim (parts - 1080 to the hour) from the original hypothetical Molad Tohu
     */
    getChalakimSinceMoladTohu(): number;
    /**
     * Converts the {@link JewishDate#NISSAN} based constants used by this class to numeric month starting from
     * {@link JewishDate#TISHREI}. This is required for Molad claculations.
     *
     * @param year
     *            The Jewish year
     * @param month
     *            The Jewish Month
     * @return the Jewish month of the year starting with Tishrei
     */
    private static getJewishMonthOfYear;
    /**
     * Validates the components of a Jewish date for validity. It will throw an {@link IllegalArgumentException} if the
     * Jewish date is earlier than 18 Teves, 3761 (1/1/1 Gregorian), a month < 1 or > 12 (or 13 on a
     * {@link #isJewishLeapYear(int) leap year}), the day of month is < 1 or > 30, an hour < 0 or > 23, a minute < 0 >
     * 59 or chalakim < 0 > 17. For larger a larger number of chalakim such as 793 (TaShTzaG) break the chalakim into
     * minutes (18 chalakim per minutes, so it would be 44 minutes and 1 chelek in the case of 793/TaShTzaG).
     *
     * @param year
     *            the Jewish year to validate. It will reject any year <= 3761 (lower than the year 1 Gregorian).
     * @param month
     *            the Jewish month to validate. It will reject a month < 1 or > 12 (or 13 on a leap year) .
     * @param dayOfMonth
     *            the day of the Jewish month to validate. It will reject any value < 1 or > 30 TODO: check calling
     *            methods to see if there is any reason that the class can validate that 30 is invalid for some months.
     * @param hours
     *            the hours (for molad calculations). It will reject an hour < 0 or > 23
     * @param minutes
     *            the minutes (for molad calculations). It will reject a minute < 0 or > 59
     * @param chalakim
     *            the chalakim/parts (for molad calculations). It will reject a chalakim < 0 or > 17. For larger numbers
     *            such as 793 (TaShTzaG) break the chalakim into minutes (18 chalakim per minutes, so it would be 44
     *            minutes and 1 chelek in the case of 793/TaShTzaG)
     *
     * @throws IllegalArgumentException
     *             if a A Jewish date earlier than 18 Teves, 3761 (1/1/1 Gregorian), a month < 1 or > 12 (or 13 on a
     *             leap year), the day of month is < 1 or > 30, an hour < 0 or > 23, a minute < 0 > 59 or chalakim < 0 >
     *             17. For larger a larger number of chalakim such as 793 (TaShTzaG) break the chalakim into minutes (18
     *             chalakim per minutes, so it would be 44 minutes and 1 chelek in the case of 793 (TaShTzaG).
     */
    private static validateJewishDate;
    /**
     * Validates the components of a Gregorian date for validity. It will throw an {@link IllegalArgumentException} if a
     * year of < 1, a month < 0 or > 11 or a day of month < 1 is passed in.
     *
     * @param year
     *            the Gregorian year to validate. It will reject any year < 1.
     * @param month
     *            the Gregorian month number to validate. It will enforce that the month is between 0 - 11 like a
     *            {@link GregorianCalendar}, where {@link Calendar#JANUARY} has a value of 0.
     * @param dayOfMonth
     *            the day of the Gregorian month to validate. It will reject any value < 1, but will allow values > 31
     *            since calling methods will simply set it to the maximum for that month. TODO: check calling methods to
     *            see if there is any reason that the class needs days > the maximum.
     * @throws IllegalArgumentException
     *             if a year of < 1, a month < 0 or > 11 or a day of month < 1 is passed in
     * @see #validateGregorianYear(int)
     * @see #validateGregorianMonth(int)
     * @see #validateGregorianDayOfMonth(int)
     */
    private static validateGregorianDate;
    /**
     * Validates a Gregorian month for validity.
     *
     * @param month
     *            the Gregorian month number to validate. It will enforce that the month is between 0 - 11 like a
     *            {@link GregorianCalendar}, where {@link Calendar#JANUARY} has a value of 0.
     */
    private static validateGregorianMonth;
    /**
     * Validates a Gregorian day of month for validity.
     *
     * @param dayOfMonth
     *            the day of the Gregorian month to validate. It will reject any value < 1, but will allow values > 31
     *            since calling methods will simply set it to the maximum for that month. TODO: check calling methods to
     *            see if there is any reason that the class needs days > the maximum.
     */
    private static validateGregorianDayOfMonth;
    /**
     * Validates a Gregorian year for validity.
     *
     * @param year
     *            the Gregorian year to validate. It will reject any year < 1.
     */
    private static validateGregorianYear;
    /**
     * Returns the number of days for a given Jewish year. ND+ER
     *
     * @param year
     *            the Jewish year
     * @return the number of days for a given Jewish year.
     * @see #isCheshvanLong()
     * @see #isKislevShort()
     */
    static getDaysInJewishYear(year: number): number;
    /**
     * Returns the number of days for the current year that the calendar is set to.
     *
     * @return the number of days for the Object's current Jewish year.
     * @see #isCheshvanLong()
     * @see #isKislevShort()
     * @see #isJewishLeapYear()
     */
    getDaysInJewishYear(): number;
    /**
     * Returns if Cheshvan is long in a given Jewish year. The method name isLong is done since in a Kesidran (ordered)
     * year Cheshvan is short. ND+ER
     *
     * @param year
     *            the year
     * @return true if Cheshvan is long in Jewish year.
     * @see #isCheshvanLong()
     * @see #getCheshvanKislevKviah()
     */
    private static isCheshvanLong;
    /**
     * Returns if Cheshvan is long (30 days VS 29 days) for the current year that the calendar is set to. The method
     * name isLong is done since in a Kesidran (ordered) year Cheshvan is short.
     *
     * @return true if Cheshvan is long for the current year that the calendar is set to
     * @see #isCheshvanLong()
     */
    isCheshvanLong(): boolean;
    /**
     * Returns if Kislev is short (29 days VS 30 days) in a given Jewish year. The method name isShort is done since in
     * a Kesidran (ordered) year Kislev is long. ND+ER
     *
     * @param year
     *            the Jewish year
     * @return true if Kislev is short for the given Jewish year.
     * @see #isKislevShort()
     * @see #getCheshvanKislevKviah()
     */
    private static isKislevShort;
    /**
     * Returns if the Kislev is short for the year that this class is set to. The method name isShort is done since in a
     * Kesidran (ordered) year Kislev is long.
     *
     * @return true if Kislev is short for the year that this class is set to
     */
    isKislevShort(): boolean;
    /**
     * Returns the Cheshvan and Kislev kviah (whether a Jewish year is short, regular or long). It will return
     * {@link #SHELAIMIM} if both cheshvan and kislev are 30 days, {@link #KESIDRAN} if Cheshvan is 29 days and Kislev
     * is 30 days and {@link #CHASERIM} if both are 29 days.
     *
     * @return {@link #SHELAIMIM} if both cheshvan and kislev are 30 days, {@link #KESIDRAN} if Cheshvan is 29 days and
     *         Kislev is 30 days and {@link #CHASERIM} if both are 29 days.
     * @see #isCheshvanLong()
     * @see #isKislevShort()
     */
    getCheshvanKislevKviah(): number;
    /**
     * Returns the number of days of a Jewish month for a given month and year.
     *
     * @param month
     *            the Jewish month
     * @param year
     *            the Jewish Year
     * @return the number of days for a given Jewish month
     */
    private static getDaysInJewishMonth;
    /**
     * Returns the number of days of the Jewish month that the calendar is currently set to.
     *
     * @return the number of days for the Jewish month that the calendar is currently set to.
     */
    getDaysInJewishMonth(): number;
    /**
     * Computes the Jewish date from the absolute date.
     */
    private absDateToJewishDate;
    /**
     * Returns the absolute date of Jewish date. ND+ER
     *
     * @param year
     *            the Jewish year. The year can't be negative
     * @param month
     *            the Jewish month starting with Nisan. Nisan expects a value of 1 etc till Adar with a value of 12. For
     *            a leap year, 13 will be the expected value for Adar II. Use the constants {@link JewishDate#NISSAN}
     *            etc.
     * @param dayOfMonth
     *            the Jewish day of month. valid values are 1-30. If the day of month is set to 30 for a month that only
     *            has 29 days, the day will be set as 29.
     * @return the absolute date of the Jewish date.
     */
    private static jewishDateToAbsDate;
    /**
     * Returns the molad for a given year and month. Returns a JewishDate {@link Object} set to the date of the molad
     * with the {@link #getMoladHours() hours}, {@link #getMoladMinutes() minutes} and {@link #getMoladChalakim()
       * chalakim} set. In the current implementation, it sets the molad time based on a midnight date rollover. This
     * means that Rosh Chodesh Adar II, 5771 with a molad of 7 chalakim past midnight on Shabbos 29 Adar I / March 5,
     * 2011 12:00 AM and 7 chalakim, will have the following values: hours: 0, minutes: 0, Chalakim: 7.
     *
     * @return a JewishDate {@link Object} set to the date of the molad with the {@link #getMoladHours() hours},
     *         {@link #getMoladMinutes() minutes} and {@link #getMoladChalakim() chalakim} set.
     */
    getMolad(): JewishDate;
    /**
     * Returns the number of days from the Jewish epoch from the number of chalakim from the epoch passed in.
     *
     * @param chalakim
     *            the number of chalakim since the beginning of Sunday prior to BaHaRaD
     * @return the number of days from the Jewish epoch
     */
    private static moladToAbsDate;
    /**
     * Constructor that creates a JewishDate based on a molad passed in. The molad would be the number of chalakim/parts
     * starting at the beginning of Sunday prior to the molad Tohu BeHaRaD (Be = Monday, Ha= 5 hours and Rad =204
     * chalakim/parts) - prior to the start of the Jewish calendar. BeHaRaD is 23:11:20 on Sunday night(5 hours 204/1080
     * chalakim after sunset on Sunday evening).
     *
     * @param molad the number of chalakim since the beginning of Sunday prior to BaHaRaD
     */
    /**
     * Sets the molad time (hours minutes and chalakim) based on the number of chalakim since the start of the day.
     *
     * @param chalakim
     *            the number of chalakim since the start of the day.
     */
    private setMoladTime;
    /**
     * returns the number of days from Rosh Hashana of the date passed in, to the full date passed in.
     *
     * @return the number of days
     */
    getDaysSinceStartOfJewishYear(): number;
    /**
     * returns the number of days from Rosh Hashana of the date passed in, to the full date passed in.
     *
     * @param year
     *            the Jewish year
     * @param month
     *            the Jewish month
     * @param dayOfMonth
     *            the day in the Jewish month
     * @return the number of days
     */
    private static getDaysSinceStartOfJewishYear;
    constructor(jewishYear: number, jewishMonth: number, jewishDayOfMonth: number);
    constructor(molad: number);
    constructor(date: Date);
    constructor(date: DateTime);
    constructor();
    /**
     * Creates a Jewish date based on a Jewish year, month and day of month.
     *
     * @param jewishYear
     *            the Jewish year
     * @param jewishMonth
     *            the Jewish month. The method expects a 1 for Nissan ... 12 for Adar and 13 for Adar II. Use the
     *            constants {@link #NISSAN} ... {@link #ADAR} (or {@link #ADAR_II} for a leap year Adar II) to avoid any
     *            confusion.
     * @param jewishDayOfMonth
     *            the Jewish day of month. If 30 is passed in for a month with only 29 days (for example {@link #IYAR},
     *            or {@link #KISLEV} in a year that {@link #isKislevShort()}), the 29th (last valid date of the month)
     *            will be set
     * @throws IllegalArgumentException
     *             if the day of month is &lt; 1 or &gt; 30, or a year of &lt; 0 is passed in.
     */
    /**
     * Default constructor will set a default date to the current system date.
     */
    /**
     * A constructor that initializes the date to the {@link java.util.Date Date} paremeter.
     *
     * @param date
     *            the <code>Date</code> to set the calendar to
     * @throws IllegalArgumentException
     *             if the date would fall prior to the January 1, 1 AD
     */
    /**
     * A constructor that initializes the date to the {@link java.util.Calendar Calendar} paremeter.
     *
     * @param calendar
     *            the <code>Calendar</code> to set the calendar to
     * @throws IllegalArgumentException
     *             if the {@link Calendar#ERA} is {@link GregorianCalendar#BC}
     */
    /**
     * Sets the date based on a {@link java.util.Calendar Calendar} object. Modifies the Jewish date as well.
     *
     * @param date
     *            the <code>Calendar</code> to set the calendar to
     * @throws IllegalArgumentException
     *             if the {@link Calendar#ERA} is {@link GregorianCalendar#BC}
     */
    setDate(date: DateTime): void;
    /**
     * Sets the date based on a {@link java.util.Date Date} object. Modifies the Jewish date as well.
     *
     * @param date
     *            the <code>Date</code> to set the calendar to
     * @throws IllegalArgumentException
     *             if the date would fall prior to the year 1 AD
     */
    /**
     * Sets the Gregorian Date, and updates the Jewish date accordingly. Like the Java Calendar A value of 0 is expected
     * for January.
     *
     * @param year
     *            the Gregorian year
     * @param month
     *            the Gregorian month. Like the Java Calendar, this class expects 0 for January
     * @param dayOfMonth
     *            the Gregorian day of month. If this is &gt; the number of days in the month/year, the last valid date of
     *            the month will be set
     * @throws IllegalArgumentException
     *             if a year of &lt; 1, a month &lt; 0 or &gt; 11 or a day of month &lt; 1 is passed in
     */
    setGregorianDate(year: number, month: number, dayOfMonth: number): void;
    /**
     * Sets the hidden internal representation of the Gregorian date , and updates the Jewish date accordingly. While
     * public getters and setters have 0 based months matching the Java Calendar classes, This class internally
     * represents the Gregorian month starting at 1. When this is called it will not adjust the month to match the Java
     * Calendar classes.
     *
     * @param year - the year
     * @param month - the month
     * @param dayOfMonth - the day of month
     */
    private setInternalGregorianDate;
    /**
     * Sets the Jewish Date and updates the Gregorian date accordingly.
     *
     * @param year
     *            the Jewish year. The year can't be negative
     * @param month
     *            the Jewish month starting with Nisan. A value of 1 is expected for Nissan ... 12 for Adar and 13 for
     *            Adar II. Use the constants {@link #NISSAN} ... {@link #ADAR} (or {@link #ADAR_II} for a leap year Adar
     *            II) to avoid any confusion.
     * @param dayOfMonth
     *            the Jewish day of month. valid values are 1-30. If the day of month is set to 30 for a month that only
     *            has 29 days, the day will be set as 29.
     * @throws IllegalArgumentException
     *             if a A Jewish date earlier than 18 Teves, 3761 (1/1/1 Gregorian), a month &lt; 1 or &gt; 12 (or 13 on a
     *             leap year) or the day of month is &lt; 1 or &gt; 30 is passed in
     */
    /**
     * Sets the Jewish Date and updates the Gregorian date accordingly.
     *
     * @param year
     *            the Jewish year. The year can't be negative
     * @param month
     *            the Jewish month starting with Nisan. A value of 1 is expected for Nissan ... 12 for Adar and 13 for
     *            Adar II. Use the constants {@link #NISSAN} ... {@link #ADAR} (or {@link #ADAR_II} for a leap year Adar
     *            II) to avoid any confusion.
     * @param dayOfMonth
     *            the Jewish day of month. valid values are 1-30. If the day of month is set to 30 for a month that only
     *            has 29 days, the day will be set as 29.
     *
     * @param hours
     *            the hour of the day. Used for Molad calculations
     * @param minutes
     *            the minutes. Used for Molad calculations
     * @param chalakim
     *            the chalakim/parts. Used for Molad calculations. The chalakim should not exceed 17. Minutes should be
     *            used for larger numbers.
     *
     * @throws IllegalArgumentException
     *             if a A Jewish date earlier than 18 Teves, 3761 (1/1/1 Gregorian), a month &lt; 1 or &gt; 12 (or 13 on a
     *             leap year), the day of month is &lt; 1 or &gt; 30, an hour &lt; 0 or &gt; 23, a minute &lt; 0 &gt; 59 or chalakim &lt; 0 &gt;
     *             17. For larger a larger number of chalakim such as 793 (TaShTzaG) break the chalakim into minutes (18
     *             chalakim per minutes, so it would be 44 minutes and 1 chelek in the case of 793 (TaShTzaG).
     */
    setJewishDate(year: number, month: number, dayOfMonth: number, hours: number, minutes: number, chalakim: number): void;
    setJewishDate(year: number, month: number, dayOfMonth: number): void;
    /**
     * Returns this object's date as a {@link java.util.Calendar} object.
     *
     * @return The {@link java.util.Calendar}
     */
    getDate(): DateTime;
    /**
     * Resets this date to the current system date.
     */
    resetDate(): void;
    /**
     * Returns a string containing the Jewish date in the form, "day Month, year" e.g. "21 Shevat, 5729". For more
     * complex formatting, use the formatter classes.
     *
     * This functionality is duplicated from {@link HebrewDateFormatter} to avoid circular dependencies.
     *
     * @return the Jewish date in the form "day Month, year" e.g. "21 Shevat, 5729"
     * @see HebrewDateFormatter#format(JewishDate)
     */
    toString(): string;
    /**
     * Rolls the date, month or year forward by the amount passed in. It modifies both the Gregorian and Jewish dates
     * accordingly. If manipulation beyond the fields supported here is required, use the {@link Calendar} class
     * {@link Calendar#add(int, int)} or {@link Calendar#roll(int, int)} methods in the following manner.
     *
     * <pre>
     * <code>
     *     Calendar cal = jewishDate.getTime(); // get a java.util.Calendar representation of the JewishDate
     *     cal.add(Calendar.MONTH, 3); // add 3 Gregorian months
     *     jewishDate.setDate(cal); // set the updated calendar back to this class
     * </code>
     * </pre>
     *
     * @param field the calendar field to be forwarded. The must be {@link Calendar#DATE}, {@link Calendar#MONTH} or {@link Calendar#YEAR}
     * @param amount the positive amount to move forward
     * @throws IllegalArgumentException if the field is anything besides {@link Calendar#DATE}, {@link Calendar#MONTH}
     * or {@link Calendar#YEAR} or if the amount is less than 1
     *
     * @see #back()
     * @see Calendar#add(int, int)
     * @see Calendar#roll(int, int)
     */
    forward(field: number, amount: number): void;
    /**
     * Forward the Jewish date by the number of months passed in.
     * FIXME: Deal with forwarding a date such as 30 Nisan by a month. 30 Iyar does not exist. This should be dealt with similar to
     * the way that the Java Calendar behaves (not that simple since there is a difference between add() or roll().
     *
     * @throws IllegalArgumentException if the amount is less than 1
     * @param amount the number of months to roll the month forward
     */
    private forwardJewishMonth;
    /**
     * Rolls the date back by 1 day. It modifies both the Gregorian and Jewish dates accordingly. The API does not
     * currently offer the ability to forward more than one day t a time, or to forward by month or year. If such
     * manipulation is required use the {@link Calendar} class {@link Calendar#add(int, int)} or
     * {@link Calendar#roll(int, int)} methods in the following manner.
     *
     * <pre>
     * <code>
     *     Calendar cal = jewishDate.getTime(); // get a java.util.Calendar representation of the JewishDate
     *     cal.add(Calendar.MONTH, -3); // subtract 3 Gregorian months
     *     jewishDate.setDate(cal); // set the updated calendar back to this class
     * </code>
     * </pre>
     *
     * @see #back()
     * @see Calendar#add(int, int)
     * @see Calendar#roll(int, int)
     */
    back(): void;
    /**
     * Indicates whether some other object is "equal to" this one.
     * @see Object#equals(Object)
     */
    equals(object: object): boolean;
    /**
     * Compares two dates as per the compareTo() method in the Comparable interface. Returns a value less than 0 if this
     * date is "less than" (before) the date, greater than 0 if this date is "greater than" (after) the date, or 0 if
     * they are equal.
     */
    compareTo(jewishDate: JewishDate): number;
    /**
     * Returns the Gregorian month (between 0-11).
     *
     * @return the Gregorian month (between 0-11). Like the java.util.Calendar, months are 0 based.
     */
    getGregorianMonth(): number;
    /**
     * Returns the Gregorian day of the month.
     *
     * @return the Gregorian day of the mont
     */
    getGregorianDayOfMonth(): number;
    /**
     * Returns the Gregotian year.
     *
     * @return the Gregorian year
     */
    getGregorianYear(): number;
    /**
     * Returns the Jewish month 1-12 (or 13 years in a leap year). The month count starts with 1 for Nisan and goes to
     * 13 for Adar II
     *
     * @return the Jewish month from 1 to 12 (or 13 years in a leap year). The month count starts with 1 for Nisan and
     *         goes to 13 for Adar II
     */
    getJewishMonth(): number;
    /**
     * Returns the Jewish day of month.
     *
     * @return the Jewish day of the month
     */
    getJewishDayOfMonth(): number;
    /**
     * Returns the Jewish year.
     *
     * @return the Jewish year
     */
    getJewishYear(): number;
    /**
     * Returns the day of the week as a number between 1-7.
     *
     * @return the day of the week as a number between 1-7.
     */
    getDayOfWeek(): number;
    /**
     * Sets the Gregorian month.
     *
     * @param month
     *            the Gregorian month
     *
     * @throws IllegalArgumentException
     *             if a month &lt; 0 or &gt; 11 is passed in
     */
    setGregorianMonth(month: number): void;
    /**
     * sets the Gregorian year.
     *
     * @param year
     *            the Gregorian year.
     * @throws IllegalArgumentException
     *             if a year of &lt; 1 is passed in
     */
    setGregorianYear(year: number): void;
    /**
     * sets the Gregorian Day of month.
     *
     * @param dayOfMonth
     *            the Gregorian Day of month.
     * @throws IllegalArgumentException
     *             if the day of month of &lt; 1 is passed in
     */
    setGregorianDayOfMonth(dayOfMonth: number): void;
    /**
     * sets the Jewish month.
     *
     * @param month
     *            the Jewish month from 1 to 12 (or 13 years in a leap year). The month count starts with 1 for Nisan
     *            and goes to 13 for Adar II
     * @throws IllegalArgumentException
     *             if a month &lt; 1 or &gt; 12 (or 13 on a leap year) is passed in
     */
    setJewishMonth(month: number): void;
    /**
     * sets the Jewish year.
     *
     * @param year
     *            the Jewish year
     * @throws IllegalArgumentException
     *             if a year of &lt; 3761 is passed in. The same will happen if the year is 3761 and the month and day
     *             previously set are &lt; 18 Teves (preior to Jan 1, 1 AD)
     */
    setJewishYear(year: number): void;
    /**
     * sets the Jewish day of month.
     *
     * @param dayOfMonth
     *            the Jewish day of month
     * @throws IllegalArgumentException
     *             if the day of month is &lt; 1 or &gt; 30 is passed in
     */
    setJewishDayOfMonth(dayOfMonth: number): void;
    /**
     * A method that creates a <a href="http://en.wikipedia.org/wiki/Object_copy#Deep_copy">deep copy</a> of the object.
     *
     * @see Object#clone()
     */
    clone(): JewishDate;
}

/**
 * An Object representing a Daf in the Daf Yomi cycle.
 *
 * @author &copy; Eliyahu Hershfeld 2011 - 2019
 */
declare class Daf {
    /**
     * {@link #getMasechtaNumber()} and {@link #setMasechtaNumber(int)}.
     */
    private masechtaNumber;
    /**
     * See {@link #getDaf()} and {@link #setDaf(int)}.
     */
    private daf;
    /**
     * See {@link #getMasechtaTransliterated()} and {@link #setMasechtaTransliterated(String[])}.
     */
    private static masechtosBavliTransliterated;
    /**
     * See {@link #getMasechta()}.
     */
    private static readonly masechtosBavli;
    /**
     * See {@link #getYerushlmiMasechtaTransliterated()}.
     */
    private static masechtosYerushalmiTransliterated;
    /**
     * See {@link #getYerushalmiMasechta()}.
     */
    private static readonly masechtosYerushlmi;
    /**
     * gets the masechta number of the currently set Daf. The sequence is: Berachos, Shabbos, Eruvin, Pesachim,
     * Shekalim, Yoma, Sukkah, Beitzah, Rosh Hashana, Taanis, Megillah, Moed Katan, Chagigah, Yevamos, Kesubos, Nedarim,
     * Nazir, Sotah, Gitin, Kiddushin, Bava Kamma, Bava Metzia, Bava Basra, Sanhedrin, Makkos, Shevuos, Avodah Zarah,
     * Horiyos, Zevachim, Menachos, Chullin, Bechoros, Arachin, Temurah, Kerisos, Meilah, Kinnim, Tamid, Midos and
     * Niddah.
     * @return the masechtaNumber
     * @see #setMasechtaNumber(int)
     */
    getMasechtaNumber(): number;
    /**
     * Set the masechta number in the order of the Daf Yomi. The sequence is: Berachos, Shabbos, Eruvin, Pesachim,
     * Shekalim, Yoma, Sukkah, Beitzah, Rosh Hashana, Taanis, Megillah, Moed Katan, Chagigah, Yevamos, Kesubos, Nedarim,
     * Nazir, Sotah, Gitin, Kiddushin, Bava Kamma, Bava Metzia, Bava Basra, Sanhedrin, Makkos, Shevuos, Avodah Zarah,
     * Horiyos, Zevachim, Menachos, Chullin, Bechoros, Arachin, Temurah, Kerisos, Meilah, Kinnim, Tamid, Midos and
     * Niddah.
     *
     * @param masechtaNumber
     *            the masechtaNumber in the order of the Daf Yomi to set
     */
    setMasechtaNumber(masechtaNumber: number): void;
    /**
     * Constructor that creates a Daf setting the {@link #setMasechtaNumber(int) masechta Number} and
     * {@link #setDaf(int) daf Number}
     *
     * @param masechtaNumber the masechtaNumber in the order of the Daf Yomi to set
     * @param daf the daf (page) number to set
     */
    constructor(masechtaNumber: number, daf: number);
    /**
     * Returns the daf (page number) of the Daf Yomi
     * @return the daf (page number) of the Daf Yomi
     */
    getDaf(): number;
    /**
     * Sets the daf (page number) of the Daf Yomi
     * @param daf the daf (page) number
     */
    setDaf(daf: number): void;
    /**
     * Returns the transliterated name of the masechta (tractate) of the Daf Yomi. The list of mashechtos is: Berachos,
     * Shabbos, Eruvin, Pesachim, Shekalim, Yoma, Sukkah, Beitzah, Rosh Hashana, Taanis, Megillah, Moed Katan, Chagigah,
     * Yevamos, Kesubos, Nedarim, Nazir, Sotah, Gitin, Kiddushin, Bava Kamma, Bava Metzia, Bava Basra, Sanhedrin,
     * Makkos, Shevuos, Avodah Zarah, Horiyos, Zevachim, Menachos, Chullin, Bechoros, Arachin, Temurah, Kerisos, Meilah,
     * Kinnim, Tamid, Midos and Niddah.
     *
     * @return the transliterated name of the masechta (tractate) of the Daf Yomi such as Berachos.
     * @see #setMasechtaTransliterated(String[])
     */
    getMasechtaTransliterated(): string;
    /**
     * Setter method to allow overriding of the default list of masechtos transliterated into into Latin chars. The default
     * uses Ashkenazi American English transliteration.
     *
     * @param masechtosBavliTransliterated the list of transliterated Bavli masechtos to set.
     * @see #getMasechtaTransliterated()
     */
    static setMasechtaTransliterated(masechtosBavliTransliterated: string[]): void;
    /**
     * Returns the masechta (tractate) of the Daf Yomi in Hebrew. The list is in the following format<br>
     * <code>["&#x05D1;&#x05E8;&#x05DB;&#x05D5;&#x05EA;",
     * "&#x05E9;&#x05D1;&#x05EA;", "&#x05E2;&#x05D9;&#x05E8;&#x05D5;&#x05D1;&#x05D9;&#x05DF;",
     * "&#x05E4;&#x05E1;&#x05D7;&#x05D9;&#x05DD;", "&#x05E9;&#x05E7;&#x05DC;&#x05D9;&#x05DD;", "&#x05D9;&#x05D5;&#x05DE;&#x05D0;",
     * "&#x05E1;&#x05D5;&#x05DB;&#x05D4;", "&#x05D1;&#x05D9;&#x05E6;&#x05D4;", "&#x05E8;&#x05D0;&#x05E9; &#x05D4;&#x05E9;&#x05E0;&#x05D4;",
     * "&#x05EA;&#x05E2;&#x05E0;&#x05D9;&#x05EA;", "&#x05DE;&#x05D2;&#x05D9;&#x05DC;&#x05D4;", "&#x05DE;&#x05D5;&#x05E2;&#x05D3;
     * &#x05E7;&#x05D8;&#x05DF;", "&#x05D7;&#x05D2;&#x05D9;&#x05D2;&#x05D4;", "&#x05D9;&#x05D1;&#x05DE;&#x05D5;&#x05EA;",
     * "&#x05DB;&#x05EA;&#x05D5;&#x05D1;&#x05D5;&#x05EA;", "&#x05E0;&#x05D3;&#x05E8;&#x05D9;&#x05DD;","&#x05E0;&#x05D6;&#x05D9;&#x05E8;",
     * "&#x05E1;&#x05D5;&#x05D8;&#x05D4;", "&#x05D2;&#x05D9;&#x05D8;&#x05D9;&#x05DF;", "&#x05E7;&#x05D9;&#x05D3;&#x05D5;&#x05E9;&#x05D9;&#x05DF;",
     * "&#x05D1;&#x05D1;&#x05D0; &#x05E7;&#x05DE;&#x05D0;", "&#x05D1;&#x05D1;&#x05D0; &#x05DE;&#x05E6;&#x05D9;&#x05E2;&#x05D0;",
     * "&#x05D1;&#x05D1;&#x05D0; &#x05D1;&#x05EA;&#x05E8;&#x05D0;", "&#x05E1;&#x05E0;&#x05D4;&#x05D3;&#x05E8;&#x05D9;&#x05DF;",
     * "&#x05DE;&#x05DB;&#x05D5;&#x05EA;", "&#x05E9;&#x05D1;&#x05D5;&#x05E2;&#x05D5;&#x05EA;", "&#x05E2;&#x05D1;&#x05D5;&#x05D3;&#x05D4;
     * &#x05D6;&#x05E8;&#x05D4;", "&#x05D4;&#x05D5;&#x05E8;&#x05D9;&#x05D5;&#x05EA;", "&#x05D6;&#x05D1;&#x05D7;&#x05D9;&#x05DD;",
     * "&#x05DE;&#x05E0;&#x05D7;&#x05D5;&#x05EA;", "&#x05D7;&#x05D5;&#x05DC;&#x05D9;&#x05DF;", "&#x05D1;&#x05DB;&#x05D5;&#x05E8;&#x05D5;&#x05EA;",
     * "&#x05E2;&#x05E8;&#x05DB;&#x05D9;&#x05DF;", "&#x05EA;&#x05DE;&#x05D5;&#x05E8;&#x05D4;", "&#x05DB;&#x05E8;&#x05D9;&#x05EA;&#x05D5;&#x05EA;",
     * "&#x05DE;&#x05E2;&#x05D9;&#x05DC;&#x05D4;", "&#x05E7;&#x05D9;&#x05E0;&#x05D9;&#x05DD;", "&#x05EA;&#x05DE;&#x05D9;&#x05D3;",
     * "&#x05DE;&#x05D9;&#x05D3;&#x05D5;&#x05EA;", "&#x05E0;&#x05D3;&#x05D4;"]</code>.
     *
     * @return the masechta (tractate) of the Daf Yomi in Hebrew, It will return
     *         &#x05D1;&#x05E8;&#x05DB;&#x05D5;&#x05EA; for Berachos.
     */
    getMasechta(): string;
    /**
     * Returns the transliterated name of the masechta (tractate) of the Daf Yomi in Yerushalmi. The list of mashechtos
     * is: Berachos, Pe'ah, Demai, Kilayim, Shevi'is, Terumos, Ma'asros, Ma'aser Sheni, Chalah, Orlah, Bikurim, Shabbos,
     * Eruvin, Pesachim, Beitzah, Rosh Hashanah, Yoma, Sukah, Ta'anis, Shekalim, Megilah, Chagigah, Moed Katan, Yevamos,
     * Kesuvos, Sotah, Nedarim, Nazir, Gitin, Kidushin, Bava Kama, Bava Metzia, Bava Basra, Sanhedrin, Makos, Shevuos,
     * Avodah Zarah, Horayos, Nidah, and No Daf Today.
     *
     * @return the transliterated name of the masechta (tractate) of the Daf Yomi such as Berachos.
     */
    getYerushlmiMasechtaTransliterated(): string;
    /**
     * Setter method to allow overriding of the default list of Yerushalmi masechtos transliterated into into Latin chars.
     * The default uses Ashkenazi American English transliteration.
     *
     * @param masechtosYerushalmiTransliterated the list of transliterated Yerushalmi masechtos to set.
     */
    static setYerushlmiMasechtaTransliterated(masechtosYerushalmiTransliterated: string[]): void;
    /**
     * Returns the Yerushlmi masechta (tractate) of the Daf Yomi in Hebrew, It will return
     * &#x05D1;&#x05E8;&#x05DB;&#x05D5;&#x05EA; for Berachos.
     *
     * @return the Yerushalmi masechta (tractate) of the Daf Yomi in Hebrew, It will return
     *         &#x05D1;&#x05E8;&#x05DB;&#x05D5;&#x05EA; for Berachos.
     */
    getYerushalmiMasechta(): string;
}

/**
 * List of <em>parshiyos</em>. {@link #NONE} indicates a week without a <em>parsha</em>, while the enum for the <em>parsha</em> of
 * {@link #VZOS_HABERACHA} exists for consistency, but is not currently used.
 *
 */
declare enum Parsha {
    /** NONE - A week without any <em>parsha</em> such as <em>Shabbos Chol Hamoed</em> */
    NONE = 0,
    BERESHIS = 1,
    NOACH = 2,
    LECH_LECHA = 3,
    VAYERA = 4,
    CHAYEI_SARA = 5,
    TOLDOS = 6,
    VAYETZEI = 7,
    VAYISHLACH = 8,
    VAYESHEV = 9,
    MIKETZ = 10,
    VAYIGASH = 11,
    VAYECHI = 12,
    SHEMOS = 13,
    VAERA = 14,
    BO = 15,
    BESHALACH = 16,
    YISRO = 17,
    MISHPATIM = 18,
    TERUMAH = 19,
    TETZAVEH = 20,
    KI_SISA = 21,
    VAYAKHEL = 22,
    PEKUDEI = 23,
    VAYIKRA = 24,
    TZAV = 25,
    SHMINI = 26,
    TAZRIA = 27,
    METZORA = 28,
    ACHREI_MOS = 29,
    KEDOSHIM = 30,
    EMOR = 31,
    BEHAR = 32,
    BECHUKOSAI = 33,
    BAMIDBAR = 34,
    NASSO = 35,
    BEHAALOSCHA = 36,
    SHLACH = 37,
    KORACH = 38,
    CHUKAS = 39,
    BALAK = 40,
    PINCHAS = 41,
    MATOS = 42,
    MASEI = 43,
    DEVARIM = 44,
    VAESCHANAN = 45,
    EIKEV = 46,
    REEH = 47,
    SHOFTIM = 48,
    KI_SEITZEI = 49,
    KI_SAVO = 50,
    NITZAVIM = 51,
    VAYEILECH = 52,
    HAAZINU = 53,
    VZOS_HABERACHA = 54,
    /** The double parsha of Vayakhel &amp; Peudei */
    VAYAKHEL_PEKUDEI = 55,
    /** The double <em>parsha</em> of Tazria &amp; Metzora */
    TAZRIA_METZORA = 56,
    /** The double <em>parsha</em> of Achrei Mos &amp; Kedoshim */
    ACHREI_MOS_KEDOSHIM = 57,
    /** The double <em>parsha</em> of Behar &amp; Bechukosai */
    BEHAR_BECHUKOSAI = 58,
    /** The double <em>parsha</em> of Chukas &amp; Balak */
    CHUKAS_BALAK = 59,
    /** The double <em>parsha</em> of Matos &amp; Masei */
    MATOS_MASEI = 60,
    /** The double <em>parsha</em> of Nitzavim &amp; Vayelech */
    NITZAVIM_VAYEILECH = 61,
    /** The special <em>parsha</em> of Shekalim */
    SHKALIM = 62,
    /** The special <em>parsha</em> of Zachor */
    ZACHOR = 63,
    /** The special <em>parsha</em> of Para */
    PARA = 64,
    /** The special <em>parsha</em> of Hachodesh */
    HACHODESH = 65
}
/**
 * The JewishCalendar extends the JewishDate class and adds calendar methods.
 *
 * This open source Java code was originally ported by <a href="http://www.facebook.com/avromf">Avrom Finkelstien</a>
 * from his C++ code. It was refactored to fit the KosherJava Zmanim API with simplification of the code, enhancements
 * and some bug fixing. The class allows setting whether the holiday and parsha scheme follows the Israel scheme or outside Israel
 * scheme. The default is the outside Israel scheme.
 * The parsha code was ported by Y. Paritcher from his <a href="https://github.com/yparitcher/libzmanim">libzmanim</a> code.
 *
 * TODO: Some do not belong in this class, but here is a partial list of what should still be implemented in some form:
 * <ol>
 * <li>Add Isru Chag</li>
 * <li>Mishna yomis etc</li>
 * </ol>
 *
 * @see java.util.Date
 * @see java.util.Calendar
 * @author &copy; Y. Paritcher 2019
 * @author &copy; Avrom Finkelstien 2002
 * @author &copy; Eliyahu Hershfeld 2011 - 2019
 */
declare class JewishCalendar extends JewishDate {
    /** The 14th day of Nisan, the day before of Pesach (Passover). */
    static readonly EREV_PESACH: number;
    /** The holiday of Pesach (Passover) on the 15th (and 16th out of Israel) day of Nisan. */
    static readonly PESACH: number;
    /** Chol Hamoed (interim days) of Pesach (Passover) */
    static readonly CHOL_HAMOED_PESACH: number;
    /** Pesach Sheni, the 14th day of Iyar, a minor holiday. */
    static readonly PESACH_SHENI: number;
    /** Erev Shavuos (the day before Shavuos), the 5th of Sivan */
    static readonly EREV_SHAVUOS: number;
    /** Shavuos (Pentecost), the 6th of Sivan */
    static readonly SHAVUOS: number;
    /** The fast of the 17th day of Tamuz */
    static readonly SEVENTEEN_OF_TAMMUZ: number;
    /** The fast of the 9th of Av */
    static readonly TISHA_BEAV: number;
    /** The 15th day of Av, a minor holiday */
    static readonly TU_BEAV: number;
    /** Erev Rosh Hashana (the day before Rosh Hashana), the 29th of Elul */
    static readonly EREV_ROSH_HASHANA: number;
    /** Rosh Hashana, the first of Tishrei. */
    static readonly ROSH_HASHANA: number;
    /** The fast of Gedalyah, the 3rd of Tishrei. */
    static readonly FAST_OF_GEDALYAH: number;
    /** The 9th day of Tishrei, the day before of Yom Kippur. */
    static readonly EREV_YOM_KIPPUR: number;
    /** The holiday of Yom Kippur, the 10th day of Tishrei */
    static readonly YOM_KIPPUR: number;
    /** The 14th day of Tishrei, the day before of Succos/Sukkos (Tabernacles). */
    static readonly EREV_SUCCOS: number;
    /** The holiday of Succos/Sukkos (Tabernacles), the 15th (and 16th out of Israel) day of Tishrei */
    static readonly SUCCOS: number;
    /** Chol Hamoed (interim days) of Succos/Sukkos (Tabernacles) */
    static readonly CHOL_HAMOED_SUCCOS: number;
    /** Hoshana Rabba, the 7th day of Succos/Sukkos that occurs on the 21st of Tishrei. */
    static readonly HOSHANA_RABBA: number;
    /** Shmini Atzeres, the 8th day of Succos/Sukkos is an independent holiday that occurs on the 22nd of Tishrei. */
    static readonly SHEMINI_ATZERES: number;
    /** Simchas Torah, the 9th day of Succos/Sukkos, or the second day of Shmini Atzeres that is celebrated
     * {@link #getInIsrael() out of Israel} on the 23rd of Tishrei.
     */
    static readonly SIMCHAS_TORAH: number;
    /** The holiday of Chanukah. 8 days starting on the 25th day Kislev. */
    static readonly CHANUKAH: number;
    /** The fast of the 10th day of Teves. */
    static readonly TENTH_OF_TEVES: number;
    /** Tu Bishvat on the 15th day of Shevat, a minor holiday. */
    static readonly TU_BESHVAT: number;
    /** The fast of Esther, usually on the 13th day of Adar (or Adar II on leap years). It is earlier on some years. */
    static readonly FAST_OF_ESTHER: number;
    /** The holiday of Purim on the 14th day of Adar (or Adar II on leap years). */
    static readonly PURIM: number;
    /** The holiday of Shushan Purim on the 15th day of Adar (or Adar II on leap years). */
    static readonly SHUSHAN_PURIM: number;
    /** The holiday of Purim Katan on the 14th day of Adar I on a leap year when Purim is on Adar II, a minor holiday. */
    static readonly PURIM_KATAN: number;
    /**
     * Rosh Chodesh, the new moon on the first day of the Jewish month, and the 30th day of the previous month in the
     * case of a month with 30 days.
     */
    static readonly ROSH_CHODESH: number;
    /** Yom HaShoah, Holocaust Remembrance Day, usually held on the 27th of Nisan. If it falls on a Friday, it is moved
     * to the 26th, and if it falls on a Sunday it is moved to the 28th. A {@link #isUseModernHolidays() modern holiday}.
     */
    static readonly YOM_HASHOAH: number;
    /**
     * Yom HaZikaron, Israeli Memorial Day, held a day before Yom Ha'atzmaut.  A {@link #isUseModernHolidays() modern holiday}.
     */
    static readonly YOM_HAZIKARON: number;
    /** Yom Ha'atzmaut, Israel Independence Day, the 5th of Iyar, but if it occurs on a Friday or Saturday, the holiday is
     * moved back to Thursday, the 3rd of 4th of Iyar, and if it falls on a Monday, it is moved forward to Tuesday the
     * 6th of Iyar.  A {@link #isUseModernHolidays() modern holiday}. */
    static readonly YOM_HAATZMAUT: number;
    /**
     * Yom Yerushalayim or Jerusalem Day, on 28 Iyar. A {@link #isUseModernHolidays() modern holiday}.
     */
    static readonly YOM_YERUSHALAYIM: number;
    /** The 33rd day of the Omer, the 18th of Iyar, a minor holiday. */
    static readonly LAG_BAOMER: number;
    /** The holiday of Purim Katan on the 15th day of Adar I on a leap year when Purim is on Adar II, a minor holiday. */
    static readonly SHUSHAN_PURIM_KATAN: number;
    /**
     * Is the calendar set to Israel, where some holidays have different rules.
     * @see #getInIsrael()
     * @see #setInIsrael(boolean)
     */
    private inIsrael;
    /**
     * Is the calendar set to use modern Israeli holidays such as Yom Haatzmaut.
     * @see #isUseModernHolidays()
     * @see #setUseModernHolidays(boolean)
     */
    private useModernHolidays;
    /**
     * An array of <em>parshiyos</em> in the 17 possible combinations.
     */
    static readonly parshalist: Parsha[][];
    /**
     * Is this calendar set to return modern Israeli national holidays. By default this value is false. The holidays
     * are: "Yom HaShoah", "Yom Hazikaron", "Yom Ha'atzmaut" and "Yom Yerushalayim"
     *
     * @return the useModernHolidays true if set to return modern Israeli national holidays
     */
    isUseModernHolidays(): boolean;
    /**
     * Seth the calendar to return modern Israeli national holidays. By default this value is false. The holidays are:
     * "Yom HaShoah", "Yom Hazikaron", "Yom Ha'atzmaut" and "Yom Yerushalayim"
     *
     * @param useModernHolidays
     *            the useModernHolidays to set
     */
    setUseModernHolidays(useModernHolidays: boolean): void;
    /**
     * Default constructor will set a default date to the current system date.
     */
    /**
     * A constructor that initializes the date to the {@link java.util.Date Date} parameter.
     *
     * @param date
     *            the <code>Date</code> to set the calendar to
     */
    /**
     * A constructor that initializes the date to the {@link java.util.Calendar Calendar} parameter.
     *
     * @param calendar
     *            the <code>Calendar</code> to set the calendar to
     */
    /**
     * Creates a Jewish date based on a Jewish year, month and day of month.
     *
     * @param jewishYear
     *            the Jewish year
     * @param jewishMonth
     *            the Jewish month. The method expects a 1 for Nissan ... 12 for Adar and 13 for Adar II. Use the
     *            constants {@link #NISSAN} ... {@link #ADAR} (or {@link #ADAR_II} for a leap year Adar II) to avoid any
     *            confusion.
     * @param jewishDayOfMonth
     *            the Jewish day of month. If 30 is passed in for a month with only 29 days (for example {@link #IYAR},
     *            or {@link #KISLEV} in a year that {@link #isKislevShort()}), the 29th (last valid date of the month)
     *            will be set
     * @throws IllegalArgumentException
     *             if the day of month is &lt; 1 or &gt; 30, or a year of &lt; 0 is passed in.
     */
    /**
     * Creates a Jewish date based on a Jewish date and whether in Israel
     *
     * @param jewishYear
     *            the Jewish year
     * @param jewishMonth
     *            the Jewish month. The method expects a 1 for Nissan ... 12 for Adar and 13 for Adar II. Use the
     *            constants {@link #NISSAN} ... {@link #ADAR} (or {@link #ADAR_II} for a leap year Adar II) to avoid any
     *            confusion.
     * @param jewishDayOfMonth
     *            the Jewish day of month. If 30 is passed in for a month with only 29 days (for example {@link #IYAR},
     *            or {@link #KISLEV} in a year that {@link #isKislevShort()}), the 29th (last valid date of the month)
     *            will be set
     * @param inIsrael
     *            whether in Israel. This affects Yom Tov calculations
     */
    constructor(jewishYear: number, jewishMonth: number, jewishDayOfMonth: number, inIsrael?: boolean);
    constructor(date: Date);
    constructor(date: DateTime);
    constructor();
    /**
     * Sets whether to use Israel holiday scheme or not. Default is false.
     *
     * @param inIsrael
     *            set to true for calculations for Israel
     */
    setInIsrael(inIsrael: boolean): void;
    /**
     * Gets whether Israel holiday scheme is used or not. The default (if not set) is false.
     *
     * @return if the if the calendar is set to Israel
     */
    getInIsrael(): boolean;
    /**
     * <a href="https://en.wikipedia.org/wiki/Birkat_Hachama">Birkas Hachamah</a> is recited every 28 years based on
     * Tekufas Shmulel (Julian years) that a year is 365.25 days. The <a href="https://en.wikipedia.org/wiki/Maimonides">Rambam</a>
     * in <a href="http://hebrewbooks.org/pdfpager.aspx?req=14278&amp;st=&amp;pgnum=323">Hilchos Kiddush Hachodesh 9:3</a> states that
     * tekufas Nisan of year 1 was 7 days + 9 hours before molad Nisan. This is calculated as every 10,227 days (28 * 365.25).
     * @return true for a day that Birkas Hachamah is recited.
     */
    isBirkasHachamah(): boolean;
    /**
     * Return the type of year for parsha calculations. The algorithm follows the
     * <a href="http://hebrewbooks.org/pdfpager.aspx?req=14268&amp;st=&amp;pgnum=222">Luach Arba'ah Shearim</a> in the Tur Ohr Hachaim.
     * @return the type of year for parsha calculations.
     * @todo Use constants in this class.
     */
    private getParshaYearType;
    /**
     * Returns this week's {@link Parsha} if it is Shabbos.
     * returns Parsha.NONE if a weekday or if there is no parsha that week (for example Yomtov is on Shabbos)
     * @return the current parsha
     */
    getParsha(): Parsha;
    /**
     * Returns a parsha enum if the Shabbos is one of the four parshiyos of Parsha.SHKALIM, Parsha.ZACHOR, Parsha.PARA,
     * Parsha.HACHODESH or Parsha.NONE for a regular Shabbos (or any weekday).
     * @return one of the four parshiyos of Parsha.SHKALIM, Parsha.ZACHOR, Parsha.PARA, Parsha.HACHODESH or Parsha.NONE.
     */
    getSpecialShabbos(): Parsha;
    /**
     * Returns an index of the Jewish holiday or fast day for the current day, or a -1 if there is no holiday for this
     * day. There are constants in this class representing each Yom Tov. Formatting of the Yomim tovim is done in the
     * ZmanimFormatter#
     *
     * @todo consider using enums instead of the constant ints.
     *
     * @return the index of the holiday such as the constant {@link #LAG_BAOMER} or {@link #YOM_KIPPUR} or a -1 if it is not a holiday.
     * @see HebrewDateFormatter
     */
    getYomTovIndex(): number;
    /**
     * Returns true if the current day is Yom Tov. The method returns true even for holidays such as {@link #CHANUKAH} and minor
     * ones such as {@link #TU_BEAV} and {@link #PESACH_SHENI}. Erev Yom Tov (with the exception of {@link #HOSHANA_RABBA},
     * Erev the second days of Pesach) returns false, as do {@link #isTaanis() fast days} besides {@link #YOM_KIPPUR}. Use
     * {@link #isAssurBemelacha()} to find the days that have a prohibition of work.
     *
     * @return true if the current day is a Yom Tov
     *
     * @see #getYomTovIndex()
     * @see #isErevYomTov()
     * @see #isErevYomTovSheni()
     * @see #isTaanis()
     * @see #isAssurBemelacha()
     * @see #isCholHamoed()
     */
    isYomTov(): boolean;
    /**
     * Returns true if the <em>Yom Tov</em> day has a <em>melacha</em> (work) prohibition. This method will return false for a
     * non-<em>Yom Tov</em> day, even if it is <em>Shabbos</em>.
     *
     * @return if the <em>Yom Tov</em> day has a <em>melacha</em> (work) prohibition.
     */
    isYomTovAssurBemelacha(): boolean;
    /**
     * Returns true if it is <em>Shabbos</em> or if it is a <em>Yom Tov</em> day that has a <em>melacha</em> (work)  prohibition.
     * This method will return false for a.
     * @return if the day is a <em>Yom Tov</em> that is <em>assur bemlacha</em> or <em>Shabbos</em>
     */
    isAssurBemelacha(): boolean;
    /**
     * Returns true if the day has candle lighting. This will return true on erev <em>Shabbos</em>, erev <em>Yom Tov</em>, the
     * first day of <em>Rosh Hashana</em> and the first days of <em>Yom Tov</em> out of Israel. It is identical
     * to calling {@link #isTomorrowShabbosOrYomTov()}.
     *
     * @return if the day has candle lighting
     */
    hasCandleLighting(): boolean;
    /**
     * Returns true if tomorrow is <em>Shabbos</em> or <em>Yom Tov</em>. This will return true on erev <em>Shabbos</em>, erev
     * <em>Yom Tov</em>, the first day of <em>Rosh Hashana</em> and <em>erev</em> the first days of <em>Yom Tov</em> out of
     * Israel. It is identical to calling {@link #hasCandleLighting()}.
     * @return will return if the next day is <em>Shabbos</em> or <em>Yom Tov</em>
     */
    isTomorrowShabbosOrYomTov(): boolean;
    /**
     * Returns true if the day is the second day of <em>Yom Tov</em>. This impacts the second day of <em>Rosh Hashana</em>
     * everywhere, and the second days of Yom Tov in <em>chutz laaretz</em> (out of Israel).
     *
     * @return  if the day is the second day of <em>Yom Tov</em>.
     */
    isErevYomTovSheni(): boolean;
    /**
     * Returns true if the current day is <em>Aseret Yemei Teshuva</em>.
     *
     * @return if the current day is <em>Aseret Yemei Teshuvah</em>
     */
    isAseresYemeiTeshuva(): boolean;
    /**
     * Returns true if the current day is <em>Chol Hamoed</em> of <em>Pesach</em> or <em>Succos</em>.
     *
     * @return true if the current day is <em>Chol Hamoed</em> of <em>Pesach</em> or <em>Succos</em>
     * @see #isYomTov()
     * @see #CHOL_HAMOED_PESACH
     * @see #CHOL_HAMOED_SUCCOS
     */
    isCholHamoed(): boolean;
    /**
     * Returns true if the current day is <em>Chol Hamoed</em> of <em>Pesach</em>.
     *
     * @return true if the current day is <em>Chol Hamoed</em> of <em>Pesach</em>
     * @see #isYomTov()
     * @see #CHOL_HAMOED_PESACH
     */
    isCholHamoedPesach(): boolean;
    /**
     * Returns true if the current day is <em>Chol Hamoed</em> of <em>Succos</em>.
     *
     * @return true if the current day is <em>Chol Hamoed</em> of <em>Succos</em>
     * @see #isYomTov()
     * @see #CHOL_HAMOED_SUCCOS
     */
    isCholHamoedSuccos(): boolean;
    /**
     * Returns true if the current day is erev Yom Tov. The method returns true for Erev - Pesach (first and last days),
     * Shavuos, Rosh Hashana, Yom Kippur and Succos and Hoshana Rabba.
     *
     * @return true if the current day is Erev - Pesach, Shavuos, Rosh Hashana, Yom Kippur and Succos
     * @see #isYomTov()
     * @see #isErevYomTovSheni()
     */
    isErevYomTov(): boolean;
    /**
     * Returns true if the current day is Erev Rosh Chodesh. Returns false for Erev Rosh Hashana
     *
     * @return true if the current day is Erev Rosh Chodesh. Returns false for Erev Rosh Hashana
     * @see #isRoshChodesh()
     */
    isErevRoshChodesh(): boolean;
    /**
     * Return true if the day is a Taanis (fast day). Return true for 17 of Tammuz, Tisha B'Av, Yom Kippur, Fast of
     * Gedalyah, 10 of Teves and the Fast of Esther
     *
     * @return true if today is a fast day
     */
    isTaanis(): boolean;
    /**
     * Return true if the day is Taanis Bechoros (on erev Pesach). It will return true for the 14th of Nissan if it is not
     * on Shabbos, or if the 12th of Nissan occurs on a Thursday
     *
     * @return true if today is the fast of Bechoros
     */
    isTaanisBechoros(): boolean;
    /**
     * Returns the day of <em>Chanukah</em> or -1 if it is not <em>Chanukah</em>.
     *
     * @return the day of <em>Chanukah</em> or -1 if it is not <em>Chanukah</em>.
     * @see #isChanukah()
     */
    getDayOfChanukah(): number;
    /**
     * Returns true if the current day is one of the 8 days of <em>Chanukah</em>.
     * @return if the current day is one of the 8 days of <em>Chanukah</em>.
     * @see #getDayOfChanukah()
     */
    isChanukah(): boolean;
    /**
     * Returns if the day is Rosh Chodesh. Rosh Hashana will return false
     *
     * @return true if it is Rosh Chodesh. Rosh Hashana will return false
     */
    isRoshChodesh(): boolean;
    /**
     * Returns if the day is Shabbos and sunday is Rosh Chodesh.
     *
     * @return true if it is Shabbos and sunday is Rosh Chodesh.
     */
    isMacharChodesh(): boolean;
    /**
     * Returns if the day is Shabbos Mevorchim.
     *
     * @return true if it is Shabbos Mevorchim.
     */
    isShabbosMevorchim(): boolean;
    /**
     * Returns the int value of the Omer day or -1 if the day is not in the omer
     *
     * @return The Omer count as an int or -1 if it is not a day of the Omer.
     */
    getDayOfOmer(): number;
    /**
     * Returns the molad in Standard Time in Yerushalayim as a Date. The traditional calculation uses local time. This
     * method subtracts 20.94 minutes (20 minutes and 56.496 seconds) from the local time (Har Habayis with a longitude
     * of 35.2354&deg; is 5.2354&deg; away from the %15 timezone longitude) to get to standard time. This method
     * intentionally uses standard time and not dailight savings time. Java will implicitly format the time to the
     * default (or set) Timezone.
     *
     * @return the Date representing the moment of the molad in Yerushalayim standard time (GMT + 2)
     */
    getMoladAsDate(): DateTime;
    /**
     * Returns the earliest time of <em>Kiddush Levana</em> calculated as 3 days after the molad. This method returns the time
     * even if it is during the day when <em>Kiddush Levana</em> can't be said. Callers of this method should consider
     * displaying the next <em>tzais</em> if the zman is between <em>alos</em> and <em>tzais</em>.
     *
     * @return the Date representing the moment 3 days after the molad.
     *
     * @see ComplexZmanimCalendar#getTchilasZmanKidushLevana3Days()
     * @see ComplexZmanimCalendar#getTchilasZmanKidushLevana3Days(Date, Date)
     */
    getTchilasZmanKidushLevana3Days(): DateTime;
    /**
     * Returns the earliest time of Kiddush Levana calculated as 7 days after the molad as mentioned by the <a
     * href="http://en.wikipedia.org/wiki/Yosef_Karo">Mechaber</a>. See the <a
     * href="http://en.wikipedia.org/wiki/Yoel_Sirkis">Bach's</a> opinion on this time. This method returns the time
     * even if it is during the day when <em>Kiddush Levana</em> can't be said. Callers of this method should consider
     * displaying the next <em>tzais</em> if the zman is between <em>alos</em> and <em>tzais</em>.
     *
     * @return the Date representing the moment 7 days after the molad.
     *
     * @see ComplexZmanimCalendar#getTchilasZmanKidushLevana7Days()
     * @see ComplexZmanimCalendar#getTchilasZmanKidushLevana7Days(Date, Date)
     */
    getTchilasZmanKidushLevana7Days(): DateTime;
    /**
     * Returns the latest time of Kiddush Levana according to the <a
     * href="http://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> opinion that it is calculated as
     * halfway between molad and molad. This adds half the 29 days, 12 hours and 793 chalakim time between molad and
     * molad (14 days, 18 hours, 22 minutes and 666 milliseconds) to the month's molad. This method returns the time
     * even if it is during the day when <em>Kiddush Levana</em> can't be said. Callers of this method should consider
     * displaying <em>alos</em> before this time if the zman is between <em>alos</em> and <em>tzais</em>.
     *
     * @return the Date representing the moment halfway between molad and molad.
     * @see #getSofZmanKidushLevana15Days()
     * @see ComplexZmanimCalendar#getSofZmanKidushLevanaBetweenMoldos()
     * @see ComplexZmanimCalendar#getSofZmanKidushLevanaBetweenMoldos(Date, Date)
     */
    getSofZmanKidushLevanaBetweenMoldos(): DateTime;
    /**
     * Returns the latest time of Kiddush Levana calculated as 15 days after the molad. This is the opinion brought down
     * in the Shulchan Aruch (Orach Chaim 426). It should be noted that some opinions hold that the
     * <a href="http://en.wikipedia.org/wiki/Moses_Isserles">Rema</a> who brings down the opinion of the <a
     * href="http://en.wikipedia.org/wiki/Yaakov_ben_Moshe_Levi_Moelin">Maharil's</a> of calculating
     * {@link #getSofZmanKidushLevanaBetweenMoldos() half way between molad and mold} is of the opinion that Mechaber
     * agrees to his opinion. Also see the Aruch Hashulchan. For additional details on the subject, See Rabbi Dovid
     * Heber's very detailed writeup in Siman Daled (chapter 4) of <a
     * href="http://www.worldcat.org/oclc/461326125">Shaarei Zmanim</a>. This method returns the time even if it is during
     * the day when <em>Kiddush Levana</em> can't be said. Callers of this method should consider displaying <em>alos</em>
     * before this time if the zman is between <em>alos</em> and <em>tzais</em>.
     *
     * @return the Date representing the moment 15 days after the molad.
     * @see #getSofZmanKidushLevanaBetweenMoldos()
     * @see ComplexZmanimCalendar#getSofZmanKidushLevana15Days()
     * @see ComplexZmanimCalendar#getSofZmanKidushLevana15Days(Date, Date)
     */
    getSofZmanKidushLevana15Days(): DateTime;
    /**
     * Returns the Daf Yomi (Bavli) for the date that the calendar is set to. See the
     * {@link HebrewDateFormatter#formatDafYomiBavli(Daf)} for the ability to format the daf in Hebrew or transliterated
     * masechta names.
     *
     * @deprecated This depends on a circular dependency. Use <pre>YomiCalculator.getDafYomiBavli(jewishCalendar)</pre> instead.
     * @return the daf as a {@link Daf}
     */
    getDafYomiBavli(): Daf;
    /**
     * Returns the Daf Yomi (Yerushalmi) for the date that the calendar is set to. See the
     * {@link HebrewDateFormatter#formatDafYomiYerushalmi(Daf)} for the ability to format the daf in Hebrew or transliterated
     * masechta names.
     *
     * @deprecated This depends on a circular dependency. Use <pre>YerushalmiYomiCalculator.getDafYomiYerushalmi(jewishCalendar)</pre> instead.
     * @return the daf as a {@link Daf}
     */
    getDafYomiYerushalmi(): Daf;
    /**
     * Indicates whether some other object is "equal to" this one.
     * @see Object#equals(Object)
     */
    equals(jewishCalendar: JewishCalendar): boolean;
}

/**
 * This class calculates the Daf Yomi Bavli page (daf) for a given date. To calculate Daf Yomi Yerushalmi
 * use the {@link YerushalmiYomiCalculator}. The library may cover Mishna Yomi etc. at some point in the future.
 *
 * @author &copy; Bob Newell (original C code)
 * @author &copy; Eliyahu Hershfeld 2011 - 2019
 * @version 0.0.1
 */
declare class YomiCalculator {
    /**
     * The start date of the first Daf Yomi Bavli cycle of September 11, 1923 / Rosh Hashana 5684.
     */
    private static readonly dafYomiStartDate;
    /** The start date of the first Daf Yomi Bavli cycle in the Julian calendar. Used internally for claculations. */
    private static readonly dafYomiJulianStartDay;
    /**
     * The date that the pagination for the Daf Yomi <em>Maseches Shekalim</em> changed to use the commonly used Vilna
     * Shas pagination from the no longer commonly available Zhitomir / Slavuta Shas used by Rabbi Meir Shapiro.
     */
    private static readonly shekalimChangeDate;
    /** The Julian date that the cycle for Shekalim changed.
     * @see #getDafYomiBavli(JewishCalendar) for details.
     */
    private static readonly shekalimJulianChangeDay;
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Daf_yomi">Daf Yomi</a> <a
     * href="http://en.wikipedia.org/wiki/Talmud">Bavli</a> {@link Daf} for a given date. The first Daf Yomi cycle
     * started on Rosh Hashana 5684 (September 11, 1923) and calculations prior to this date will result in an
     * IllegalArgumentException thrown. For historical calculations (supported by this method), it is important to note
     * that a change in length of the cycle was instituted starting in the eighth Daf Yomi cycle beginning on June 24,
     * 1975. The Daf Yomi Bavli cycle has a single masechta of the Talmud Yerushalmi - Shekalim as part of the cycle.
     * Unlike the Bavli where the number of daf per masechta was standardized since the original <a
     * href="http://en.wikipedia.org/wiki/Daniel_Bomberg">Bomberg Edition</a> published from 1520 - 1523, there is no
     * uniform page length in the Yerushalmi. The early cycles had the Yerushalmi Shekalim length of 13 days following the
     * <a href=
     * "https://he.wikipedia.org/wiki/%D7%93%D7%A4%D7%95%D7%A1_%D7%A1%D7%9C%D7%90%D7%95%D7%95%D7%99%D7%98%D7%90">Slavuta/Zhytomyr</a>
     * Shas used by <a href="http://en.wikipedia.org/wiki/Meir_Shapiro">Rabbi Meir Shapiro</a>. With the start of the eighth Daf Yomi
     * cycle beginning on June 24, 1975 the length of the Yerushalmi Shekalim was changed from 13 to 22 daf to follow
     * the <a href="https://en.wikipedia.org/wiki/Vilna_Edition_Shas">Vilna Shas</a> that is in common use today.
     *
     * @param calendar
     *            the calendar date for calculation
     * @return the {@link Daf}.
     *
     * @throws IllegalArgumentException
     *             if the date is prior to the September 11, 1923 start date of the first Daf Yomi cycle
     */
    static getDafYomiBavli(calendar: JewishCalendar): Daf;
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> from a Java Date.
     *
     * @param date
     *            The Java Date
     * @return the Julian day number corresponding to the date
     */
    private static getJulianDay;
}

/**
 * This class calculates the <a href="https://en.wikipedia.org/wiki/Jerusalem_Talmud">Talmud Yerusalmi</a> <a href=
 * "https://en.wikipedia.org/wiki/Daf_Yomi">Daf Yomi</a> page ({@link Daf}) for the a given date.
 *
 * @author &copy; elihaidv
 * @author &copy; Eliyahu Hershfeld 2017 - 2019
 */
declare class YerushalmiYomiCalculator {
    /**
     * The start date of the first Daf Yomi Yerushalmi cycle of February 2, 1980 / 15 Shevat, 5740.
     */
    private static readonly DAF_YOMI_START_DAY;
    /** The number of pages in the Talmud Yerushalmi. */
    private static readonly WHOLE_SHAS_DAFS;
    /** The number of pages per <em>masechta</em> (tractate). */
    private static readonly BLATT_PER_MASECHTA;
    /**
     * Returns the <a href="https://en.wikipedia.org/wiki/Daf_Yomi">Daf Yomi</a>
     * <a href="https://en.wikipedia.org/wiki/Jerusalem_Talmud">Yerusalmi</a> page ({@link Daf}) for a given date.
     * The first Daf Yomi cycle started on 15 Shevat (Tu Bishvat) 5740 (February, 2, 1980) and calculations
     * prior to this date will result in an IllegalArgumentException thrown.
     *
     * @param jewishCalendar
     *            the calendar date for calculation
     * @return the {@link Daf}.
     *
     * @throws IllegalArgumentException
     *             if the date is prior to the February 2, 1980, the start date of the first Daf Yomi Yerushalmi cycle
     */
    static getDafYomiYerushalmi(jewishCalendar: JewishCalendar): Daf;
    /**
     * Return the number of special days (Yom Kippur and Tisha B'Av) on which there is no daf, between the two given dates
     *
     * @param start - start date to calculate
     * @param end - end date to calculate
     * @return the number of special days
     */
    private static getNumOfSpecialDays;
}

/**
 * The HebrewDateFormatter class formats a {@link JewishDate}.
 *
 * The class formats Jewish dates, numbers, Daf Yomi</em> (<em>Bavli and Yerushalmi), the Omer</em>,
 * <em>Parshas Hashavua</em>, (including special <em>parshiyos</em> of <em>Shekalim</em>, <em>Zachor</em>, <em>Parah</em>,
 * and <em>Hachodesh</em>), Yomim Tovim and the Molad (experimental) in Hebrew or Latin chars, and has various settings.
 * Sample full date output includes (using various options):
 * <ul>
 * <li>21 Shevat, 5729</li>
 * <li>&#x5DB;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5DB;&#x5D8;</li>
 * <li>&#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5D4;&#x5F3;&#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;</li>
 * <li>&#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5F4;&#x05E4; or
 * &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5F4;&#x05E3;</li>
 * <li>&#x05DB;&#x05F3; &#x05E9;&#x05D1;&#x05D8; &#x05D5;&#x05F3; &#x05D0;&#x05DC;&#x05E4;&#x05D9;&#x05DD;</li>
 * </ul>
 *
 * @see JewishDate
 * @see JewishCalendar
 *
 * @author &copy; Eliyahu Hershfeld 2011 - 2015
 */
declare class HebrewDateFormatter {
    /**
     * See {@link #isHebrewFormat()} and {@link #setHebrewFormat(boolean)}.
     */
    private hebrewFormat;
    /**
     * See {@link #isUseLongHebrewYears()} and {@link #setUseLongHebrewYears(boolean)}.
     */
    private useLonghebrewYears;
    /**
     * See {@link #isUseGershGershayim()} and {@link #setUseGershGershayim(boolean)}.
     */
    private useGershGershayim;
    /**
     * See {@link #isLongWeekFormat()} and {@link #setLongWeekFormat(boolean)}.
     */
    private longWeekFormat;
    /**
     * See {@link #isUseFinalFormLetters()} and {@link #setUseFinalFormLetters(boolean)}.
     */
    private useFinalFormLetters;
    /**
     * The internal DateFormat.&nbsp; See {@link #isLongWeekFormat()} and {@link #setLongWeekFormat(boolean)}.
     */
    private weekFormat;
    /**
     * List of transliterated parshiyos using the default <em>Ashkenazi</em> pronounciation.&nbsp; The formatParsha method uses this
     * for transliterated <em>parsha</em> formatting.&nbsp; This list can be overridden (for <em>Sephardi</em> English transliteration for
     * example) by setting the {@link #setTransliteratedParshiosList(EnumMap)}.&nbsp; The list includes double and special
     * <em>parshiyos</em> is set as "<em>Bereshis, Noach, Lech Lecha, Vayera, Chayei Sara, Toldos, Vayetzei, Vayishlach, Vayeshev, Miketz,
     * Vayigash, Vayechi, Shemos, Vaera, Bo, Beshalach, Yisro, Mishpatim, Terumah, Tetzaveh, Ki Sisa, Vayakhel, Pekudei,
     * Vayikra, Tzav, Shmini, Tazria, Metzora, Achrei Mos, Kedoshim, Emor, Behar, Bechukosai, Bamidbar, Nasso, Beha'aloscha,
     * Sh'lach, Korach, Chukas, Balak, Pinchas, Matos, Masei, Devarim, Vaeschanan, Eikev, Re'eh, Shoftim, Ki Seitzei, Ki Savo,
     * Nitzavim, Vayeilech, Ha'Azinu, Vezos Habracha, Vayakhel Pekudei, Tazria Metzora, Achrei Mos Kedoshim, Behar Bechukosai,
     * Chukas Balak, Matos Masei, Nitzavim Vayeilech, Shekalim, Zachor, Parah, Hachodesh</em>".
     *
     * @see #formatParsha(JewishCalendar)
     */
    private transliteratedParshaMap;
    /**
     * Unicode {@link Record} of Hebrew <em>parshiyos</em>.&nbsp; The list includes double and special <em>parshiyos</em> and
     * contains <code>"&#x05D1;&#x05E8;&#x05D0;&#x05E9;&#x05D9;&#x05EA;, &#x05E0;&#x05D7;, &#x05DC;&#x05DA; &#x05DC;&#x05DA;,
     *  &#x05D5;&#x05D9;&#x05E8;&#x05D0;, &#x05D7;&#x05D9;&#x05D9; &#x05E9;&#x05E8;&#x05D4;,
     *  &#x05EA;&#x05D5;&#x05DC;&#x05D3;&#x05D5;&#x05EA;, &#x05D5;&#x05D9;&#x05E6;&#x05D0;, &#x05D5;&#x05D9;&#x05E9;&#x05DC;&#x05D7;,
     *  &#x05D5;&#x05D9;&#x05E9;&#x05D1;, &#x05DE;&#x05E7;&#x05E5;, &#x05D5;&#x05D9;&#x05D2;&#x05E9;, &#x05D5;&#x05D9;&#x05D7;&#x05D9;,
     *  &#x05E9;&#x05DE;&#x05D5;&#x05EA;, &#x05D5;&#x05D0;&#x05E8;&#x05D0;, &#x05D1;&#x05D0;, &#x05D1;&#x05E9;&#x05DC;&#x05D7;,
     *  &#x05D9;&#x05EA;&#x05E8;&#x05D5;, &#x05DE;&#x05E9;&#x05E4;&#x05D8;&#x05D9;&#x05DD;, &#x05EA;&#x05E8;&#x05D5;&#x05DE;&#x05D4;,
     *  &#x05EA;&#x05E6;&#x05D5;&#x05D4;, &#x05DB;&#x05D9; &#x05EA;&#x05E9;&#x05D0;, &#x05D5;&#x05D9;&#x05E7;&#x05D4;&#x05DC;,
     *  &#x05E4;&#x05E7;&#x05D5;&#x05D3;&#x05D9;, &#x05D5;&#x05D9;&#x05E7;&#x05E8;&#x05D0;, &#x05E6;&#x05D5;,
     *  &#x05E9;&#x05DE;&#x05D9;&#x05E0;&#x05D9;, &#x05EA;&#x05D6;&#x05E8;&#x05D9;&#x05E2;, &#x05DE;&#x05E6;&#x05E8;&#x05E2;,
     *  &#x05D0;&#x05D7;&#x05E8;&#x05D9; &#x05DE;&#x05D5;&#x05EA;, &#x05E7;&#x05D3;&#x05D5;&#x05E9;&#x05D9;&#x05DD;,
     *  &#x05D0;&#x05DE;&#x05D5;&#x05E8;, &#x05D1;&#x05D4;&#x05E8;, &#x05D1;&#x05D7;&#x05E7;&#x05EA;&#x05D9;,
     *  &#x05D1;&#x05DE;&#x05D3;&#x05D1;&#x05E8;, &#x05E0;&#x05E9;&#x05D0;, &#x05D1;&#x05D4;&#x05E2;&#x05DC;&#x05EA;&#x05DA;,
     *  &#x05E9;&#x05DC;&#x05D7; &#x05DC;&#x05DA;, &#x05E7;&#x05E8;&#x05D7;, &#x05D7;&#x05D5;&#x05E7;&#x05EA;, &#x05D1;&#x05DC;&#x05E7;,
     *  &#x05E4;&#x05D9;&#x05E0;&#x05D7;&#x05E1;, &#x05DE;&#x05D8;&#x05D5;&#x05EA;, &#x05DE;&#x05E1;&#x05E2;&#x05D9;,
     *  &#x05D3;&#x05D1;&#x05E8;&#x05D9;&#x05DD;, &#x05D5;&#x05D0;&#x05EA;&#x05D7;&#x05E0;&#x05DF;, &#x05E2;&#x05E7;&#x05D1;,
     *  &#x05E8;&#x05D0;&#x05D4;, &#x05E9;&#x05D5;&#x05E4;&#x05D8;&#x05D9;&#x05DD;, &#x05DB;&#x05D9; &#x05EA;&#x05E6;&#x05D0;,
     *  &#x05DB;&#x05D9; &#x05EA;&#x05D1;&#x05D5;&#x05D0;, &#5D9;&#x05E6;&#x05D1;&#x05D9;&#x05DD;, &#x05D5;&#x05D9;&#x05DC;&#x05DA;,
     *  &#x05D4;&#x05D0;&#x05D6;&#x05D9;&#x05E0;&#x05D5;, &#x05D5;&#x05D6;&#x05D0;&#x05EA; &#x05D4;&#x05D1;&#x05E8;&#x05DB;&#x05D4;,
     *  &#x05D5;&#x05D9;&#x05E7;&#x05D4;&#x05DC; &#x05E4;&#x05E7;&#x05D5;&#x05D3;&#x05D9;, &#x05EA;&#x05D6;&#x05E8;&#x05D9;&#x05E2;
     *  &#x05DE;&#x05E6;&#x05E8;&#x05E2;, &#x05D0;&#x05D7;&#x05E8;&#x05D9; &#x05DE;&#x05D5;&#x05EA;
     *  &#x05E7;&#x05D3;&#x05D5;&#x05E9;&#x05D9;&#x05DD;, &#x05D1;&#x05D4;&#x05E8; &#x05D1;&#x05D7;&#x05E7;&#x05EA;&#x05D9;,
     *  &#x05D7;&#x05D5;&#x05E7;&#x05EA; &#x05D1;&#x05DC;&#x05E7;, &#x05DE;&#x05D8;&#x05D5;&#x05EA; &#x05DE;&#x05E1;&#x05E2;&#x05D9;,
     *  &#x05E0;&#x05E6;&#x05D1;&#x05D9;&#x05DD; &#x05D5;&#x05D9;&#x05DC;&#x05DA;, &#x05E9;&#x05E7;&#x05DC;&#x05D9;&#x05DD;,
     *  &#x05D6;&#x05DB;&#x05D5;&#x05E8;, &#x05E4;&#x05E8;&#x05D4;, &#x05D4;&#x05D7;&#x05D3;&#x05E9;"</code>
     */
    private readonly hebrewParshaMap;
    /**
     * returns if the {@link #formatDayOfWeek(JewishDate)} will use the long format such as
     * &#x05E8;&#x05D0;&#x05E9;&#x05D5;&#x05DF; or short such as &#x05D0; when formatting the day of week in
     * {@link #isHebrewFormat() Hebrew}.
     *
     * @return the longWeekFormat
     * @see #setLongWeekFormat(boolean)
     * @see #formatDayOfWeek(JewishDate)
     */
    isLongWeekFormat(): boolean;
    /**
     * Setting to control if the {@link #formatDayOfWeek(JewishDate)} will use the long format such as
     * &#x05E8;&#x05D0;&#x05E9;&#x05D5;&#x05DF; or short such as &#x05D0; when formatting the day of week in
     * {@link #isHebrewFormat() Hebrew}.
     *
     * @param longWeekFormat
     *            the longWeekFormat to set
     */
    setLongWeekFormat(longWeekFormat: boolean): void;
    /**
     * The <a href="https://en.wikipedia.org/wiki/Geresh#Punctuation_mark">gersh</a> character is the &#x05F3; char
     * that is similar to a single quote and is used in formatting Hebrew numbers.
     */
    private static readonly GERESH;
    /**
     * The <a href="https://en.wikipedia.org/wiki/Gershayim#Punctuation_mark">gershyim</a> character is the &#x05F4; char
     * that is similar to a double quote and is used in formatting Hebrew numbers.
     */
    private static readonly GERSHAYIM;
    /**
     * Transliterated month names.&nbsp; Defaults to ["Nissan", "Iyar", "Sivan", "Tammuz", "Av", "Elul", "Tishrei", "Cheshvan",
     * "Kislev", "Teves", "Shevat", "Adar", "Adar II", "Adar I" ].
     * @see #getTransliteratedMonthList()
     * @see #setTransliteratedMonthList(String[])
     */
    private transliteratedMonths;
    /**
     * The Hebrew omer prefix charachter. It defaults to &#x05D1; producing &#x05D1;&#x05E2;&#x05D5;&#x05DE;&#x05E8;,
     * but can be set to &#x05DC; to produce &#x05DC;&#x05E2;&#x05D5;&#x05DE;&#x05E8; (or any other prefix).
     * @see #getHebrewOmerPrefix()
     * @see #setHebrewOmerPrefix(String)
     */
    private hebrewOmerPrefix;
    /**
     * The default value for formatting Shabbos (Saturday).&nbsp; Defaults to Shabbos.
     * @see #getTransliteratedShabbosDayOfWeek()
     * @see #setTransliteratedShabbosDayOfWeek(String)
     */
    private transliteratedShabbosDayOfweek;
    /**
     * Returns the day of Shabbos transliterated into Latin chars. The default uses Ashkenazi pronunciation "Shabbos".
     * This can be overwritten using the {@link #setTransliteratedShabbosDayOfWeek(String)}
     *
     * @return the transliteratedShabbos. The default list of months uses Ashkenazi pronunciation "Shabbos".
     * @see #setTransliteratedShabbosDayOfWeek(String)
     * @see #formatDayOfWeek(JewishDate)
     */
    getTransliteratedShabbosDayOfWeek(): string;
    /**
     * Setter to override the default transliterated name of "Shabbos" to alternate spelling such as "Shabbat" used by
     * the {@link #formatDayOfWeek(JewishDate)}
     *
     * @param transliteratedShabbos
     *            the transliteratedShabbos to set
     *
     * @see #getTransliteratedShabbosDayOfWeek()
     * @see #formatDayOfWeek(JewishDate)
     */
    setTransliteratedShabbosDayOfWeek(transliteratedShabbos: string): void;
    /**
     * See {@link #getTransliteratedHolidayList()} and {@link #setTransliteratedHolidayList(String[])}.
     */
    private transliteratedHolidays;
    /**
     * Returns the list of holidays transliterated into Latin chars. This is used by the
     * {@link #formatYomTov(JewishCalendar)} when formatting the Yom Tov String. The default list of months uses
     * Ashkenazi pronunciation in typical American English spelling.
     *
     * @return the list of transliterated holidays. The default list is currently ["Erev Pesach", "Pesach",
     *         "Chol Hamoed Pesach", "Pesach Sheni", "Erev Shavuos", "Shavuos", "Seventeenth of Tammuz", "Tishah B'Av",
     *         "Tu B'Av", "Erev Rosh Hashana", "Rosh Hashana", "Fast of Gedalyah", "Erev Yom Kippur", "Yom Kippur",
     *         "Erev Succos", "Succos", "Chol Hamoed Succos", "Hoshana Rabbah", "Shemini Atzeres", "Simchas Torah",
     *         "Erev Chanukah", "Chanukah", "Tenth of Teves", "Tu B'Shvat", "Fast of Esther", "Purim", "Shushan Purim",
     *         "Purim Katan", "Rosh Chodesh", "Yom HaShoah", "Yom Hazikaron", "Yom Ha'atzmaut", "Yom Yerushalayim",
     *         "Lag B'Omer","Shushan Purim Katan"].
     *
     * @see #setTransliteratedMonthList(String[])
     * @see #formatYomTov(JewishCalendar)
     * @see #isHebrewFormat()
     */
    getTransliteratedHolidayList(): string[];
    /**
     * Sets the list of holidays transliterated into Latin chars. This is used by the
     * {@link #formatYomTov(JewishCalendar)} when formatting the Yom Tov String.
     *
     * @param transliteratedHolidays
     *            the transliteratedHolidays to set. Ensure that the sequence exactly matches the list returned by the
     *            default
     */
    setTransliteratedHolidayList(transliteratedHolidays: string[]): void;
    /**
     * Hebrew holiday array in the following format.<br><code>["&#x05E2;&#x05E8;&#x05D1; &#x05E4;&#x05E1;&#x05D7;",
     * "&#x05E4;&#x05E1;&#x05D7;", "&#x05D7;&#x05D5;&#x05DC; &#x05D4;&#x05DE;&#x05D5;&#x05E2;&#x05D3;
     * &#x05E4;&#x05E1;&#x05D7;", "&#x05E4;&#x05E1;&#x05D7; &#x05E9;&#x05E0;&#x05D9;", "&#x05E2;&#x05E8;&#x05D1;
     * &#x05E9;&#x05D1;&#x05D5;&#x05E2;&#x05D5;&#x05EA;", "&#x05E9;&#x05D1;&#x05D5;&#x05E2;&#x05D5;&#x05EA;",
     * "&#x05E9;&#x05D1;&#x05E2;&#x05D4; &#x05E2;&#x05E9;&#x05E8; &#x05D1;&#x05EA;&#x05DE;&#x05D5;&#x05D6;",
     * "&#x05EA;&#x05E9;&#x05E2;&#x05D4; &#x05D1;&#x05D0;&#x05D1;",
     * "&#x05D8;&#x05F4;&#x05D5; &#x05D1;&#x05D0;&#x05D1;",
     * "&#x05E2;&#x05E8;&#x05D1; &#x05E8;&#x05D0;&#x05E9; &#x05D4;&#x05E9;&#x05E0;&#x05D4;",
     * "&#x05E8;&#x05D0;&#x05E9; &#x05D4;&#x05E9;&#x05E0;&#x05D4;",
     * "&#x05E6;&#x05D5;&#x05DD; &#x05D2;&#x05D3;&#x05DC;&#x05D9;&#x05D4;",
     * "&#x05E2;&#x05E8;&#x05D1; &#x05D9;&#x05D5;&#x05DD; &#x05DB;&#x05D9;&#x05E4;&#x05D5;&#x05E8;",
     * "&#x05D9;&#x05D5;&#x05DD; &#x05DB;&#x05D9;&#x05E4;&#x05D5;&#x05E8;",
     * "&#x05E2;&#x05E8;&#x05D1; &#x05E1;&#x05D5;&#x05DB;&#x05D5;&#x05EA;",
     * "&#x05E1;&#x05D5;&#x05DB;&#x05D5;&#x05EA;",
     * "&#x05D7;&#x05D5;&#x05DC; &#x05D4;&#x05DE;&#x05D5;&#x05E2;&#x05D3; &#x05E1;&#x05D5;&#x05DB;&#x05D5;&#x05EA;",
     * "&#x05D4;&#x05D5;&#x05E9;&#x05E2;&#x05E0;&#x05D0; &#x05E8;&#x05D1;&#x05D4;",
     * "&#x05E9;&#x05DE;&#x05D9;&#x05E0;&#x05D9; &#x05E2;&#x05E6;&#x05E8;&#x05EA;",
     * "&#x05E9;&#x05DE;&#x05D7;&#x05EA; &#x05EA;&#x05D5;&#x05E8;&#x05D4;",
     * "&#x05E2;&#x05E8;&#x05D1; &#x05D7;&#x05E0;&#x05D5;&#x05DB;&#x05D4;",
     * "&#x05D7;&#x05E0;&#x05D5;&#x05DB;&#x05D4;", "&#x05E2;&#x05E9;&#x05E8;&#x05D4; &#x05D1;&#x05D8;&#x05D1;&#x05EA;",
     * "&#x05D8;&#x05F4;&#x05D5; &#x05D1;&#x05E9;&#x05D1;&#x05D8;",
     * "&#x05EA;&#x05E2;&#x05E0;&#x05D9;&#x05EA; &#x05D0;&#x05E1;&#x05EA;&#x05E8;",
     * "&#x05E4;&#x05D5;&#x05E8;&#x05D9;&#x05DD;",
     * "&#x05E4;&#x05D5;&#x05E8;&#x05D9;&#x05DD; &#x05E9;&#x05D5;&#x05E9;&#x05DF;",
     * "&#x05E4;&#x05D5;&#x05E8;&#x05D9;&#x05DD; &#x05E7;&#x05D8;&#x05DF;",
     * "&#x05E8;&#x05D0;&#x05E9; &#x05D7;&#x05D5;&#x05D3;&#x05E9;",
     * "&#x05D9;&#x05D5;&#x05DD; &#x05D4;&#x05E9;&#x05D5;&#x05D0;&#x05D4;",
     * "&#x05D9;&#x05D5;&#x05DD; &#x05D4;&#x05D6;&#x05D9;&#x05DB;&#x05E8;&#x05D5;&#x05DF;",
     * "&#x05D9;&#x05D5;&#x05DD; &#x05D4;&#x05E2;&#x05E6;&#x05DE;&#x05D0;&#x05D5;&#x05EA;",
     * "&#x05D9;&#x05D5;&#x05DD; &#x05D9;&#x05E8;&#x05D5;&#x05E9;&#x05DC;&#x05D9;&#x05DD;",
     * "&#x05DC;&#x05F4;&#x05D2; &#x05D1;&#x05E2;&#x05D5;&#x05DE;&#x05E8;",
     * "&#x05E4;&#x05D5;&#x05E8;&#x05D9;&#x05DD; &#x05E9;&#x05D5;&#x05E9;&#x05DF; &#x05E7;&#x05D8;&#x05DF;"]</code>
     */
    private static readonly hebrewHolidays;
    /**
     * Formats the Yom Tov (holiday) in Hebrew or transliterated Latin characters.
     *
     * @param jewishCalendar the JewishCalendar
     * @return the formatted holiday or an empty String if the day is not a holiday.
     * @see #isHebrewFormat()
     */
    formatYomTov(jewishCalendar: JewishCalendar): string;
    /**
     * Formats a day as Rosh Chodesh in the format of in the format of &#x05E8;&#x05D0;&#x05E9;
     * &#x05D7;&#x05D5;&#x05D3;&#x05E9; &#x05E9;&#x05D1;&#x05D8; or Rosh Chodesh Shevat. If it
     * is not Rosh Chodesh, an empty <code>String</code> will be returned.
     * @param jewishCalendar the JewishCalendar
     * @return The formatted <code>String</code> in the format of &#x05E8;&#x05D0;&#x05E9;
     * &#x05D7;&#x05D5;&#x05D3;&#x05E9; &#x05E9;&#x05D1;&#x05D8; or Rosh Chodesh Shevat. If it
     * is not Rosh Chodesh, an empty <code>String</code> will be returned.
     */
    formatRoshChodesh(jewishCalendar: JewishCalendar): string;
    /**
     * Returns if the formatter is set to use Hebrew formatting in the various formatting methods.
     *
     * @return the hebrewFormat
     * @see #setHebrewFormat(boolean)
     * @see #format(JewishDate)
     * @see #formatDayOfWeek(JewishDate)
     * @see #formatMonth(JewishDate)
     * @see #formatOmer(JewishCalendar)
     * @see #formatParsha(JewishCalendar)
     * @see #formatYomTov(JewishCalendar)
     */
    isHebrewFormat(): boolean;
    /**
     * Sets the formatter to format in Hebrew in the various formatting methods.
     *
     * @param hebrewFormat
     *            the hebrewFormat to set
     * @see #isHebrewFormat()
     * @see #format(JewishDate)
     * @see #formatDayOfWeek(JewishDate)
     * @see #formatMonth(JewishDate)
     * @see #formatOmer(JewishCalendar)
     * @see #formatParsha(JewishCalendar)
     * @see #formatYomTov(JewishCalendar)
     */
    setHebrewFormat(hebrewFormat: boolean): void;
    /**
     * Returns the Hebrew Omer prefix.&nbsp; By default it is the letter &#x05D1; producing
     * &#x05D1;&#x05E2;&#x05D5;&#x05DE;&#x05E8;, but it can be set to &#x05DC; to produce
     * &#x05DC;&#x05E2;&#x05D5;&#x05DE;&#x05E8; (or any other prefix) using the {@link #setHebrewOmerPrefix(String)}.
     *
     * @return the hebrewOmerPrefix
     *
     * @see #hebrewOmerPrefix
     * @see #setHebrewOmerPrefix(String)
     * @see #formatOmer(JewishCalendar)
     */
    getHebrewOmerPrefix(): string;
    /**
     * Method to set the Hebrew Omer prefix. By default it is the letter &#x5D1;, but this allows setting it to a
     * &#x5DC; (or any other prefix).
     *
     * @param hebrewOmerPrefix
     *            the hebrewOmerPrefix to set. You can use the Unicode &#92;u05DC to set it to &#x5DC;.
     * @see #getHebrewOmerPrefix()
     * @see #formatOmer(JewishCalendar)
     */
    setHebrewOmerPrefix(hebrewOmerPrefix: string): void;
    /**
     * Returns the list of months transliterated into Latin chars. The default list of months uses Ashkenazi
     * pronunciation in typical American English spelling. This list has a length of 14 with 3 variations for Adar -
     * "Adar", "Adar II", "Adar I"
     *
     * @return the list of months beginning in Nissan and ending in in "Adar", "Adar II", "Adar I". The default list is
     *         currently ["Nissan", "Iyar", "Sivan", "Tammuz", "Av", "Elul", "Tishrei", "Cheshvan", "Kislev", "Teves",
     *         "Shevat", "Adar", "Adar II", "Adar I"].
     * @see #setTransliteratedMonthList(String[])
     */
    getTransliteratedMonthList(): string[];
    /**
     * Setter method to allow overriding of the default list of months transliterated into into Latin chars. The default
     * uses Ashkenazi American English transliteration.
     *
     * @param transliteratedMonths
     *            an array of 14 month names that defaults to ["Nissan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Tishrei",
     *            "Heshvan", "Kislev", "Tevet", "Shevat", "Adar", "Adar II", "Adar I"].
     * @see #getTransliteratedMonthList()
     */
    setTransliteratedMonthList(transliteratedMonths: string[]): void;
    /**
     * Unicode list of Hebrew months in the following format <code>["\u05E0\u05D9\u05E1\u05DF","\u05D0\u05D9\u05D9\u05E8",
     * "\u05E1\u05D9\u05D5\u05DF","\u05EA\u05DE\u05D5\u05D6","\u05D0\u05D1","\u05D0\u05DC\u05D5\u05DC",
     * "\u05EA\u05E9\u05E8\u05D9","\u05D7\u05E9\u05D5\u05DF","\u05DB\u05E1\u05DC\u05D5","\u05D8\u05D1\u05EA",
     * "\u05E9\u05D1\u05D8","\u05D0\u05D3\u05E8","\u05D0\u05D3\u05E8 \u05D1","\u05D0\u05D3\u05E8 \u05D0"]</code>
     *
     * @see #formatMonth(JewishDate)
     */
    private hebrewMonths;
    /**
     * Unicode list of Hebrew days of week in the format of <code>["&#x05E8;&#x05D0;&#x05E9;&#x05D5;&#x05DF;",
     * "&#x05E9;&#x05E0;&#x05D9;","&#x05E9;&#x05DC;&#x05D9;&#x05E9;&#x05D9;","&#x05E8;&#x05D1;&#x05D9;&#x05E2;&#x05D9;",
     * "&#x05D7;&#x05DE;&#x05D9;&#x05E9;&#x05D9;","&#x05E9;&#x05E9;&#x05D9;","&#x05E9;&#x05D1;&#x05EA;"]</code>
     */
    private static readonly hebrewDaysOfWeek;
    /**
     * Formats the day of week. If {@link #isHebrewFormat() Hebrew formatting} is set, it will display in the format
     * &#x05E8;&#x05D0;&#x05E9;&#x05D5;&#x05DF; etc. If Hebrew formatting is not in use it will return it in the format
     * of Sunday etc. There are various formatting options that will affect the output.
     *
     * @param jewishDate the JewishDate Object
     * @return the formatted day of week
     * @see #isHebrewFormat()
     * @see #isLongWeekFormat()
     */
    formatDayOfWeek(jewishDate: JewishDate): string;
    /**
     * Returns whether the class is set to use the Geresh &#x5F3; and Gershayim &#x5F4; in formatting Hebrew dates and
     * numbers. When true and output would look like &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5F4;&#x5DB;
     * (or &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5F4;&#x5DA;). When set to false, this output
     * would display as &#x5DB;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5DB;.
     *
     * @return true if set to use the Geresh &#x5F3; and Gershayim &#x5F4; in formatting Hebrew dates and numbers.
     */
    isUseGershGershayim(): boolean;
    /**
     * Sets whether to use the Geresh &#x5F3; and Gershayim &#x5F4; in formatting Hebrew dates and numbers. The default
     * value is true and output would look like &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5F4;&#x5DB;
     * (or &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5F4;&#x5DA;). When set to false, this output would
     * display as &#x5DB;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5DB; (or
     * &#x5DB;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5DA;). Single digit days or month or years such as &#x05DB;&#x05F3;
     * &#x05E9;&#x05D1;&#x05D8; &#x05D5;&#x05F3; &#x05D0;&#x05DC;&#x05E4;&#x05D9;&#x05DD; show the use of the Geresh.
     *
     * @param useGershGershayim
     *            set to false to omit the Geresh &#x5F3; and Gershayim &#x5F4; in formatting
     */
    setUseGershGershayim(useGershGershayim: boolean): void;
    /**
     * Returns whether the class is set to use the &#x05DE;&#x05E0;&#x05E6;&#x05E4;&#x05F4;&#x05DA; letters when
     * formatting years ending in 20, 40, 50, 80 and 90 to produce &#x05EA;&#x05E9;&#x05F4;&#x05E4; if false or
     * or &#x05EA;&#x05E9;&#x05F4;&#x05E3; if true. Traditionally non-final form letters are used, so the year
     * 5780 would be formatted as &#x05EA;&#x05E9;&#x05F4;&#x05E4; if the default false is used here. If this returns
     * true, the format &#x05EA;&#x05E9;&#x05F4;&#x05E3; would be used.
     *
     * @return true if set to use final form letters when formatting Hebrew years. The default value is false.
     */
    isUseFinalFormLetters(): boolean;
    /**
     * When formatting a Hebrew Year, traditionally years ending in 20, 40, 50, 80 and 90 are formatted using non-final
     * form letters for example &#x05EA;&#x05E9;&#x05F4;&#x05E4; for the year 5780. Setting this to true (the default
     * is false) will use the final form letters for &#x05DE;&#x05E0;&#x05E6;&#x05E4;&#x05F4;&#x05DA; and will format
     * the year 5780 as &#x05EA;&#x05E9;&#x05F4;&#x05E3;.
     *
     * @param useFinalFormLetters
     *            Set this to true to use final form letters when formatting Hebrew years.
     */
    setUseFinalFormLetters(useFinalFormLetters: boolean): void;
    /**
     * Returns whether the class is set to use the thousands digit when formatting. When formatting a Hebrew Year,
     * traditionally the thousands digit is omitted and output for a year such as 5729 (1969 Gregorian) would be
     * calculated for 729 and format as &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;. When set to true the long format year such
     * as &#x5D4;&#x5F3; &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8; for 5729/1969 is returned.
     *
     * @return true if set to use the thousands digit when formatting Hebrew dates and numbers.
     */
    isUseLongHebrewYears(): boolean;
    /**
     * When formatting a Hebrew Year, traditionally the thousands digit is omitted and output for a year such as 5729
     * (1969 Gregorian) would be calculated for 729 and format as &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;. This method
     * allows setting this to true to return the long format year such as &#x5D4;&#x5F3;
     * &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8; for 5729/1969.
     *
     * @param useLongHebrewYears
     *            Set this to true to use the long formatting
     */
    setUseLongHebrewYears(useLongHebrewYears: boolean): void;
    /**
     * Formats the Jewish date. If the formatter is set to Hebrew, it will format in the form, "day Month year" for
     * example &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;, and the format
     * "21 Shevat, 5729" if not.
     *
     * @param jewishDate
     *            the JewishDate to be formatted
     * @return the formatted date. If the formatter is set to Hebrew, it will format in the form, "day Month year" for
     *         example &#x5DB;&#x5F4;&#x5D0; &#x5E9;&#x5D1;&#x5D8; &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;, and the format
     *         "21 Shevat, 5729" if not.
     */
    format(jewishDate: JewishDate): string;
    /**
     * Returns a string of the current Hebrew month such as "Tishrei". Returns a string of the current Hebrew month such
     * as "&#x5D0;&#x5D3;&#x5E8; &#x5D1;&#x5F3;".
     *
     * @param jewishDate
     *            the JewishDate to format
     * @return the formatted month name
     * @see #isHebrewFormat()
     * @see #setHebrewFormat(boolean)
     * @see #getTransliteratedMonthList()
     * @see #setTransliteratedMonthList(String[])
     */
    formatMonth(jewishDate: JewishDate): string;
    /**
     * Returns a String of the Omer day in the form &#x5DC;&#x5F4;&#x5D2; &#x5D1;&#x05E2;&#x05D5;&#x05DE;&#x5E8; if
     * Hebrew Format is set, or "Omer X" or "Lag B'Omer" if not. An empty string if there is no Omer this day.
     *
     * @param jewishCalendar
     *            the JewishCalendar to be formatted
     *
     * @return a String of the Omer day in the form or an empty string if there is no Omer this day. The default
     *         formatting has a &#x5D1;&#x5F3; prefix that would output &#x5D1;&#x05E2;&#x05D5;&#x05DE;&#x5E8;, but this
     *         can be set via the {@link #setHebrewOmerPrefix(String)} method to use a &#x5DC; and output
     *         &#x5DC;&#x5F4;&#x5D2; &#x5DC;&#x05E2;&#x05D5;&#x05DE;&#x5E8;.
     * @see #isHebrewFormat()
     * @see #getHebrewOmerPrefix()
     * @see #setHebrewOmerPrefix(String)
     */
    formatOmer(jewishCalendar: JewishCalendar): string;
    /**
     * Formats a molad.
     * TODO: Experimental and incomplete
     *
     * @param moladChalakim - the chalakim of the molad
     * @return the formatted molad. FIXME: define proper format in English and Hebrew.
     */
    private static formatMolad;
    /**
     * Returns the kviah in the traditional 3 letter Hebrew format where the first letter represents the day of week of
     * Rosh Hashana, the second letter represents the lengths of Cheshvan and Kislev ({@link JewishDate#SHELAIMIM
       * Shelaimim} , {@link JewishDate#KESIDRAN Kesidran} or {@link JewishDate#CHASERIM Chaserim}) and the 3rd letter
     * represents the day of week of Pesach. For example 5729 (1969) would return &#x5D1;&#x5E9;&#x5D4; (Rosh Hashana on
     * Monday, Shelaimim, and Pesach on Thursday), while 5771 (2011) would return &#x5D4;&#x5E9;&#x5D2; (Rosh Hashana on
     * Thursday, Shelaimim, and Pesach on Tuesday).
     *
     * @param jewishYear
     *            the Jewish year
     * @return the Hebrew String such as &#x5D1;&#x5E9;&#x5D4; for 5729 (1969) and &#x5D4;&#x5E9;&#x5D2; for 5771
     *         (2011).
     */
    getFormattedKviah(jewishYear: number): string;
    /**
     * Formats the <a href="https://en.wikipedia.org/wiki/Daf_Yomi">Daf Yomi</a> Bavli in the format of
     * "&#x05E2;&#x05D9;&#x05E8;&#x05D5;&#x05D1;&#x05D9;&#x05DF; &#x05E0;&#x05F4;&#x05D1;" in {@link #isHebrewFormat() Hebrew},
     * or the transliterated format of "Eruvin 52".
     * @param daf the Daf to be formatted.
     * @return the formatted daf.
     */
    formatDafYomiBavli(daf: Daf): string;
    /**
     * Formats the <a href="https://en.wikipedia.org/wiki/Jerusalem_Talmud#Daf_Yomi_Yerushalmi">Daf Yomi Yerushalmi</a> in the format
     * of "&#x05E2;&#x05D9;&#x05E8;&#x05D5;&#x05D1;&#x05D9;&#x05DF; &#x05E0;&#x05F4;&#x05D1;" in {@link #isHebrewFormat() Hebrew}, or
     * the transliterated format of "Eruvin 52".
     *
     * @param daf the Daf to be formatted.
     * @return the formatted daf.
     */
    formatDafYomiYerushalmi(daf: Daf): string;
    /**
     * Returns a Hebrew formatted string of a number. The method can calculate from 0 - 9999.
     * <ul>
     * <li>Single digit numbers such as 3, 30 and 100 will be returned with a &#x5F3; (<a
     * href="http://en.wikipedia.org/wiki/Geresh">Geresh</a>) appended as at the end. For example &#x5D2;&#x5F3;,
     * &#x5DC;&#x5F3; and &#x5E7;&#x5F3;</li>
     * <li>multi digit numbers such as 21 and 769 will be returned with a &#x5F4; (<a
     * href="http://en.wikipedia.org/wiki/Gershayim">Gershayim</a>) between the second to last and last letters. For
     * example &#x5DB;&#x5F4;&#x5D0;, &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;</li>
     * <li>15 and 16 will be returned as &#x5D8;&#x5F4;&#x5D5; and &#x5D8;&#x5F4;&#x5D6;</li>
     * <li>Single digit numbers (years assumed) such as 6000 (%1000=0) will be returned as &#x5D5;&#x5F3;
     * &#x5D0;&#x5DC;&#x5E4;&#x5D9;&#x5DD;</li>
     * <li>0 will return &#x5D0;&#x5E4;&#x05E1;</li>
     * </ul>
     *
     * @param num
     *            the number to be formatted. It will trow an IllegalArgumentException if the number is &lt; 0 or &gt; 9999.
     * @return the Hebrew formatted number such as &#x5EA;&#x5E9;&#x5DB;&#x5F4;&#x5D8;
     * @see #isUseFinalFormLetters()
     * @see #isUseGershGershayim()
     * @see #isHebrewFormat()
     *
     */
    formatHebrewNumber(num: number): string;
    /**
     * Returns the list of transliterated parshiyos used by this formatter.
     *
     * @return the list of transliterated Parshios
     */
    getTransliteratedParshiosList(): Record<Parsha, string>;
    /**
     * Setter method to allow overriding of the default list of parshiyos transliterated into into Latin chars. The
     * default uses Ashkenazi American English transliteration.
     *
     * @param transliteratedParshaMap
     *            the transliterated Parshios as an EnumMap to set
     * @see #getTransliteratedParshiosList()
     */
    setTransliteratedParshiosList(transliteratedParshaMap: Record<Parsha, string>): void;
    /**
     * Returns a String with the name of the current parsha(ios). If the formatter is set to format in Hebrew, returns
     * a string of the current parsha(ios) in Hebrew for example &#x05D1;&#x05E8;&#x05D0;&#x05E9;&#x05D9;&#x05EA; or
     * &#x05E0;&#x05E6;&#x05D1;&#x05D9;&#x05DD; &#x05D5;&#x05D9;&#x05DC;&#x05DA; or an empty string if there
     * are none. If not set to Hebrew, it returns a string of the parsha(ios) transliterated into Latin chars. The
     * default uses Ashkenazi pronunciation in typical American English spelling, for example Bereshis or
     * Nitzavim Vayeilech or an empty string if there are none.
     *
     * @param jewishCalendar the JewishCalendar Object
     * @return today's parsha(ios) in Hebrew for example, if the formatter is set to format in Hebrew, returns a string
     *         of the current parsha(ios) in Hebrew for example &#x05D1;&#x05E8;&#x05D0;&#x05E9;&#x05D9;&#x05EA; or
     *         &#x05E0;&#x05E6;&#x05D1;&#x05D9;&#x05DD; &#x05D5;&#x05D9;&#x05DC;&#x05DA; or an empty string if
     *         there are none. If not set to Hebrew, it returns a string of the parsha(ios) transliterated into Latin
     *         chars. The default uses Ashkenazi pronunciation in typical American English spelling, for example
     *         Bereshis or Nitzavim Vayeilech or an empty string if there are none.
     */
    formatParsha(jewishCalendar: JewishCalendar): string;
    /**
     * Returns a String with the name of the current special parsha of Shekalim, Zachor, Parah or Hachodesh or an
     * empty String for a non-special parsha. If the formatter is set to format in Hebrew, it returns a string of
     * the current special parsha in Hebrew, for example &#x05E9;&#x05E7;&#x05DC;&#x05D9;&#x05DD;,
     * &#x05D6;&#x05DB;&#x05D5;&#x05E8;, &#x05E4;&#x05E8;&#x05D4; or &#x05D4;&#x05D7;&#x05D3;&#x05E9;. An empty
     * string if the date is not a special parsha. If not set to Hebrew, it returns a string of the special parsha
     * transliterated into Latin chars. The default uses Ashkenazi pronunciation in typical American English spelling
     * Shekalim, Zachor, Parah or Hachodesh.
     *
     * @param jewishCalendar the JewishCalendar Object
     * @return today's special parsha. If the formatter is set to format in Hebrew, returns a string
     *         of the current special parsha  in Hebrew for in the format of &#x05E9;&#x05E7;&#x05DC;&#x05D9;&#x05DD;,
     *         &#x05D6;&#x05DB;&#x05D5;&#x05E8;, &#x05E4;&#x05E8;&#x05D4; or &#x05D4;&#x05D7;&#x05D3;&#x05E9; or an empty
     *         string if there are none. If not set to Hebrew, it returns a string of the special parsha transliterated
     *         into Latin chars. The default uses Ashkenazi pronunciation in typical American English spelling of Shekalim,
     *         Zachor, Parah or Hachodesh. An empty string if there are none.
     */
    formatSpecialParsha(jewishCalendar: JewishCalendar): string;
}

declare function getZmanimJson(options: Options): JsonOutput;
interface Options {
    /**
     * @default Current date and time
     */
    date?: Date | string | number | _Luxon.DateTime;
    /**
     * IANA timezone ID
     */
    timeZoneId: string;
    locationName?: string;
    latitude: number;
    longitude: number;
    /**
     * @default 0
     */
    elevation?: number;
    /**
     * Whether to use `ComplexZmanimCalendar` instead of `ZmanimCalendar`
     * @default false
     */
    complexZmanim?: boolean;
}

declare const Luxon: typeof _Luxon;

export { AstronomicalCalendar, Calendar, ComplexZmanimCalendar, Daf, GeoLocation, GeoLocationUtils, HebrewDateFormatter, IntegerUtils, JewishCalendar, JewishDate, JsonOutput, Long_MIN_VALUE, Luxon, MathUtils, NOAACalculator, Options, OutputMetadata, Parsha, StringUtils, SunTimesCalculator, Time, TimeZone, Utils, YerushalmiYomiCalculator, YomiCalculator, Zman, ZmanWithDuration, ZmanWithZmanDate, ZmanimCalendar, ZmanimFormatter, getZmanimJson, padZeros };
