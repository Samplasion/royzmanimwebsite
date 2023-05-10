import { AstronomicalCalculator } from './AstronomicalCalculator';
import { MathUtils } from '../polyfills/Utils';
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
export class NOAACalculator extends AstronomicalCalculator {
    /**
     * @see AstronomicalCalculator#getCalculatorName()
     */
    // eslint-disable-next-line class-methods-use-this
    getCalculatorName() {
        return 'US National Oceanic and Atmospheric Administration Algorithm';
    }
    /**
     * @see AstronomicalCalculator#getUTCSunrise(Calendar, GeoLocation, double, boolean)
     */
    getUTCSunrise(date, geoLocation, zenith, adjustForElevation) {
        const elevation = adjustForElevation ? geoLocation.getElevation() : 0;
        const adjustedZenith = this.adjustZenith(zenith, elevation);
        let sunrise = NOAACalculator.getSunriseUTC(NOAACalculator.getJulianDay(date), geoLocation.getLatitude(), -geoLocation.getLongitude(), adjustedZenith);
        sunrise = sunrise / 60;
        // ensure that the time is >= 0 and < 24
        while (sunrise < 0) {
            sunrise += 24;
        }
        while (sunrise >= 24) {
            sunrise -= 24;
        }
        return sunrise;
    }
    /**
     * @see AstronomicalCalculator#getUTCSunset(Calendar, GeoLocation, double, boolean)
     */
    getUTCSunset(date, geoLocation, zenith, adjustForElevation) {
        const elevation = adjustForElevation ? geoLocation.getElevation() : 0;
        const adjustedZenith = this.adjustZenith(zenith, elevation);
        let sunset = NOAACalculator.getSunsetUTC(NOAACalculator.getJulianDay(date), geoLocation.getLatitude(), -geoLocation.getLongitude(), adjustedZenith);
        sunset = sunset / 60;
        // ensure that the time is >= 0 and < 24
        while (sunset < 0) {
            sunset += 24;
        }
        while (sunset >= 24) {
            sunset -= 24;
        }
        return sunset;
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> from a Java Calendar
     *
     * @param calendar
     *            The Java Calendar
     * @return the Julian day corresponding to the date Note: Number is returned for start of day. Fractional days
     *         should be added later.
     */
    static getJulianDay(date) {
        let { year, month } = date;
        const { day } = date;
        if (month <= 2) {
            year -= 1;
            month += 12;
        }
        const a = Math.trunc(year / 100);
        const b = Math.trunc(2 - a + a / 4);
        return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
    }
    /**
     * Convert <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> to centuries since J2000.0.
     *
     * @param julianDay
     *            the Julian Day to convert
     * @return the centuries since 2000 Julian corresponding to the Julian Day
     */
    static getJulianCenturiesFromJulianDay(julianDay) {
        return (julianDay - NOAACalculator.JULIAN_DAY_JAN_1_2000) / NOAACalculator.JULIAN_DAYS_PER_CENTURY;
    }
    /**
     * Convert centuries since J2000.0 to <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a>.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Julian Day corresponding to the Julian centuries passed in
     */
    static getJulianDayFromJulianCenturies(julianCenturies) {
        return julianCenturies * NOAACalculator.JULIAN_DAYS_PER_CENTURY + NOAACalculator.JULIAN_DAY_JAN_1_2000;
    }
    /**
     * Returns the Geometric <a href="http://en.wikipedia.org/wiki/Mean_longitude">Mean Longitude</a> of the Sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Geometric Mean Longitude of the Sun in degrees
     */
    static getSunGeometricMeanLongitude(julianCenturies) {
        let longitude = 280.46646 + julianCenturies * (36000.76983 + 0.0003032 * julianCenturies);
        while (longitude > 360) {
            longitude -= 360;
        }
        while (longitude < 0) {
            longitude += 360;
        }
        return longitude; // in degrees
    }
    /**
     * Returns the Geometric <a href="http://en.wikipedia.org/wiki/Mean_anomaly">Mean Anomaly</a> of the Sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the Geometric Mean Anomaly of the Sun in degrees
     */
    static getSunGeometricMeanAnomaly(julianCenturies) {
        return 357.52911 + julianCenturies * (35999.05029 - 0.0001537 * julianCenturies); // in degrees
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Eccentricity_%28orbit%29">eccentricity of earth's orbit</a>.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the unitless eccentricity
     */
    static getEarthOrbitEccentricity(julianCenturies) {
        return 0.016708634 - julianCenturies * (0.000042037 + 0.0000001267 * julianCenturies); // unitless
    }
    /**
     * Returns the <a href="http://en.wikipedia.org/wiki/Equation_of_the_center">equation of center</a> for the sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the equation of center for the sun in degrees
     */
    static getSunEquationOfCenter(julianCenturies) {
        const m = NOAACalculator.getSunGeometricMeanAnomaly(julianCenturies);
        const mrad = MathUtils.degreesToRadians(m);
        const sinm = Math.sin(mrad);
        const sin2m = Math.sin(mrad + mrad);
        const sin3m = Math.sin(mrad + mrad + mrad);
        return sinm * (1.914602 - julianCenturies * (0.004817 + 0.000014 * julianCenturies)) + sin2m
            * (0.019993 - 0.000101 * julianCenturies) + sin3m * 0.000289; // in degrees
    }
    /**
     * Return the true longitude of the sun
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the sun's true longitude in degrees
     */
    static getSunTrueLongitude(julianCenturies) {
        const sunLongitude = NOAACalculator.getSunGeometricMeanLongitude(julianCenturies);
        const center = NOAACalculator.getSunEquationOfCenter(julianCenturies);
        return sunLongitude + center; // in degrees
    }
    // /**
    // * Returns the <a href="http://en.wikipedia.org/wiki/True_anomaly">true anamoly</a> of the sun.
    // *
    // * @param julianCenturies
    // * the number of Julian centuries since J2000.0
    // * @return the sun's true anamoly in degrees
    // */
    // private static double getSunTrueAnomaly(double julianCenturies) {
    // double meanAnomaly = getSunGeometricMeanAnomaly(julianCenturies);
    // double equationOfCenter = getSunEquationOfCenter(julianCenturies);
    //
    // return meanAnomaly + equationOfCenter; // in degrees
    // }
    /**
     * Return the apparent longitude of the sun
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return sun's apparent longitude in degrees
     */
    static getSunApparentLongitude(julianCenturies) {
        const sunTrueLongitude = NOAACalculator.getSunTrueLongitude(julianCenturies);
        const omega = 125.04 - 1934.136 * julianCenturies;
        const lambda = sunTrueLongitude - 0.00569 - 0.00478 * Math.sin(MathUtils.degreesToRadians(omega));
        return lambda; // in degrees
    }
    /**
     * Returns the mean <a href="http://en.wikipedia.org/wiki/Axial_tilt">obliquity of the ecliptic</a> (Axial tilt).
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the mean obliquity in degrees
     */
    static getMeanObliquityOfEcliptic(julianCenturies) {
        const seconds = 21.448 - julianCenturies
            * (46.8150 + julianCenturies * (0.00059 - julianCenturies * (0.001813)));
        return 23 + (26 + (seconds / 60)) / 60; // in degrees
    }
    /**
     * Returns the corrected <a href="http://en.wikipedia.org/wiki/Axial_tilt">obliquity of the ecliptic</a> (Axial
     * tilt).
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return the corrected obliquity in degrees
     */
    static getObliquityCorrection(julianCenturies) {
        const obliquityOfEcliptic = NOAACalculator.getMeanObliquityOfEcliptic(julianCenturies);
        const omega = 125.04 - 1934.136 * julianCenturies;
        return obliquityOfEcliptic + 0.00256 * Math.cos(MathUtils.degreesToRadians(omega)); // in degrees
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Declination">declination</a> of the sun.
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return
     *            the sun's declination in degrees
     */
    static getSunDeclination(julianCenturies) {
        const obliquityCorrection = NOAACalculator.getObliquityCorrection(julianCenturies);
        const lambda = NOAACalculator.getSunApparentLongitude(julianCenturies);
        const sint = Math.sin(MathUtils.degreesToRadians(obliquityCorrection)) * Math.sin(MathUtils.degreesToRadians(lambda));
        const theta = MathUtils.radiansToDegrees(Math.asin(sint));
        return theta; // in degrees
    }
    /**
     * Return the <a href="http://en.wikipedia.org/wiki/Equation_of_time">Equation of Time</a> - the difference between
     * true solar time and mean solar time
     *
     * @param julianCenturies
     *            the number of Julian centuries since J2000.0
     * @return equation of time in minutes of time
     */
    static getEquationOfTime(julianCenturies) {
        const epsilon = NOAACalculator.getObliquityCorrection(julianCenturies);
        const geomMeanLongSun = NOAACalculator.getSunGeometricMeanLongitude(julianCenturies);
        const eccentricityEarthOrbit = NOAACalculator.getEarthOrbitEccentricity(julianCenturies);
        const geomMeanAnomalySun = NOAACalculator.getSunGeometricMeanAnomaly(julianCenturies);
        let y = Math.tan(MathUtils.degreesToRadians(epsilon) / 2);
        y *= y;
        const sin2l0 = Math.sin(2 * MathUtils.degreesToRadians(geomMeanLongSun));
        const sinm = Math.sin(MathUtils.degreesToRadians(geomMeanAnomalySun));
        const cos2l0 = Math.cos(2 * MathUtils.degreesToRadians(geomMeanLongSun));
        const sin4l0 = Math.sin(4 * MathUtils.degreesToRadians(geomMeanLongSun));
        const sin2m = Math.sin(2 * MathUtils.degreesToRadians(geomMeanAnomalySun));
        const equationOfTime = y * sin2l0 - 2 * eccentricityEarthOrbit * sinm + 4 * eccentricityEarthOrbit * y
            * sinm * cos2l0 - 0.5 * y * y * sin4l0 - 1.25 * eccentricityEarthOrbit * eccentricityEarthOrbit * sin2m;
        return MathUtils.radiansToDegrees(equationOfTime) * 4; // in minutes of time
    }
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
    static getSunHourAngleAtSunrise(lat, solarDec, zenith) {
        const latRad = MathUtils.degreesToRadians(lat);
        const sdRad = MathUtils.degreesToRadians(solarDec);
        return (Math.acos(Math.cos(MathUtils.degreesToRadians(zenith)) / (Math.cos(latRad) * Math.cos(sdRad))
            - Math.tan(latRad) * Math.tan(sdRad))); // in radians
    }
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
    static getSunHourAngleAtSunset(lat, solarDec, zenith) {
        const latRad = MathUtils.degreesToRadians(lat);
        const sdRad = MathUtils.degreesToRadians(solarDec);
        const hourAngle = (Math.acos(Math.cos(MathUtils.degreesToRadians(zenith)) / (Math.cos(latRad) * Math.cos(sdRad))
            - Math.tan(latRad) * Math.tan(sdRad)));
        return -hourAngle; // in radians
    }
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
    static getSolarElevation(date, lat, lon) {
        const julianDay = NOAACalculator.getJulianDay(date);
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        const equationOfTime = NOAACalculator.getEquationOfTime(julianCenturies);
        let longitude = (date.hour + 12) + (date.minute + equationOfTime + date.second / 60) / 60;
        longitude = -(longitude * 360 / 24) % 360;
        const hourAngleRad = MathUtils.degreesToRadians(lon - longitude);
        const declination = NOAACalculator.getSunDeclination(julianCenturies);
        const decRad = MathUtils.degreesToRadians(declination);
        const latRad = MathUtils.degreesToRadians(lat);
        return MathUtils.radiansToDegrees(Math.asin((Math.sin(latRad) * Math.sin(decRad))
            + (Math.cos(latRad) * Math.cos(decRad) * Math.cos(hourAngleRad))));
    }
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
    static getSolarAzimuth(date, latitude, lon) {
        const julianDay = NOAACalculator.getJulianDay(date);
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        const equationOfTime = NOAACalculator.getEquationOfTime(julianCenturies);
        let longitude = (date.hour + 12) + (date.minute + equationOfTime + date.second / 60) / 60;
        longitude = -(longitude * 360 / 24) % 360;
        const hourAngleRad = MathUtils.degreesToRadians(lon - longitude);
        const declination = NOAACalculator.getSunDeclination(julianCenturies);
        const decRad = MathUtils.degreesToRadians(declination);
        const latRad = MathUtils.degreesToRadians(latitude);
        return MathUtils.radiansToDegrees(Math.atan(Math.sin(hourAngleRad)
            / ((Math.cos(hourAngleRad) * Math.sin(latRad)) - (Math.tan(decRad) * Math.cos(latRad))))) + 180;
    }
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
    static getSunriseUTC(julianDay, latitude, longitude, zenith) {
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        // Find the time of solar noon at the location, and use that declination. This is better than start of the
        // Julian day
        const noonmin = NOAACalculator.getSolarNoonUTC(julianCenturies, longitude);
        const tnoon = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay + noonmin / 1440);
        // First pass to approximate sunrise (using solar noon)
        let eqTime = NOAACalculator.getEquationOfTime(tnoon);
        let solarDec = NOAACalculator.getSunDeclination(tnoon);
        let hourAngle = NOAACalculator.getSunHourAngleAtSunrise(latitude, solarDec, zenith);
        let delta = longitude - MathUtils.radiansToDegrees(hourAngle);
        let timeDiff = 4 * delta; // in minutes of time
        let timeUTC = 720 + timeDiff - eqTime; // in minutes
        // Second pass includes fractional Julian Day in gamma calc
        const newt = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) + timeUTC / 1440);
        eqTime = NOAACalculator.getEquationOfTime(newt);
        solarDec = NOAACalculator.getSunDeclination(newt);
        hourAngle = NOAACalculator.getSunHourAngleAtSunrise(latitude, solarDec, zenith);
        delta = longitude - MathUtils.radiansToDegrees(hourAngle);
        timeDiff = 4 * delta;
        timeUTC = 720 + timeDiff - eqTime; // in minutes
        return timeUTC;
    }
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
    static getSolarNoonUTC(julianCenturies, longitude) {
        // First pass uses approximate solar noon to calculate eqtime
        const tnoon = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) + longitude / 360);
        let eqTime = NOAACalculator.getEquationOfTime(tnoon);
        const solNoonUTC = 720 + (longitude * 4) - eqTime; // min
        const newt = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) - 0.5 + solNoonUTC / 1440);
        eqTime = NOAACalculator.getEquationOfTime(newt);
        return 720 + (longitude * 4) - eqTime; // min
    }
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
    static getSunsetUTC(julianDay, latitude, longitude, zenith) {
        const julianCenturies = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay);
        // Find the time of solar noon at the location, and use that declination. This is better than start of the
        // Julian day
        const noonmin = NOAACalculator.getSolarNoonUTC(julianCenturies, longitude);
        const tnoon = NOAACalculator.getJulianCenturiesFromJulianDay(julianDay + noonmin / 1440);
        // First calculates sunrise and approx length of day
        let eqTime = NOAACalculator.getEquationOfTime(tnoon);
        let solarDec = NOAACalculator.getSunDeclination(tnoon);
        let hourAngle = NOAACalculator.getSunHourAngleAtSunset(latitude, solarDec, zenith);
        let delta = longitude - MathUtils.radiansToDegrees(hourAngle);
        let timeDiff = 4 * delta;
        let timeUTC = 720 + timeDiff - eqTime;
        // Second pass includes fractional Julian Day in gamma calc
        const newt = NOAACalculator.getJulianCenturiesFromJulianDay(NOAACalculator.getJulianDayFromJulianCenturies(julianCenturies) + timeUTC / 1440);
        eqTime = NOAACalculator.getEquationOfTime(newt);
        solarDec = NOAACalculator.getSunDeclination(newt);
        hourAngle = NOAACalculator.getSunHourAngleAtSunset(latitude, solarDec, zenith);
        delta = longitude - MathUtils.radiansToDegrees(hourAngle);
        timeDiff = 4 * delta;
        timeUTC = 720 + timeDiff - eqTime; // in minutes
        return timeUTC;
    }
}
/**
 * The <a href="http://en.wikipedia.org/wiki/Julian_day">Julian day</a> of January 1, 2000
 */
NOAACalculator.JULIAN_DAY_JAN_1_2000 = 2451545;
/**
 * Julian days per century
 */
NOAACalculator.JULIAN_DAYS_PER_CENTURY = 36525;
//# sourceMappingURL=NOAACalculator.js.map