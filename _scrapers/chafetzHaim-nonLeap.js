const Tishrei = 'M01';
const Cheshvan = 'M02';
const Kislev = 'M03';
const Teves = 'M04';
const Shvat = 'M05';
const Adar = 'M06';
const Nisan = 'M07';
const Iyyar = 'M08';
const Sivan = 'M09';
const Tamuz = 'M10';
const Av = 'M11';
const Elul = 'M12';

const Hakdamah = 'הקדמה';
const Psichah = 'פתיחה';
const Lavin = 'לווין';
const Asin = 'עשין';
const Arurin = 'ערורין';
const HilchosLH = 'הלכות ל"ה';
const HilchosRechilus = 'הלכות רכילות';
const Tziyurim = 'צייורים';

const simple = [
    [[1, Tishrei, 1, Shvat, 1, Sivan], Hakdamah, 1, 4, 'ברוך ד׳', 'שכינתו בתוכנו'],
    [[2, Tishrei, 2, Shvat, 2, Sivan], Hakdamah, 5, 10, 'וכאשר נחפשה', 'מגדל העון'],
    [[3, Tishrei, 3, Shvat, 3, Sivan], Hakdamah, 11, 16, 'ונראה פשוט', 'לאין שעור'],
    [[4, Tishrei, 4, Shvat, 4, Sivan], Hakdamah, 17, 22, 'ואחשבה', 'בפנים הספר'],
    [[5, Tishrei, 5, Shvat, 5, Sivan], Hakdamah, 23, 27, 'על כן', 'צד הדי'],
    [[6, Tishrei, 6, Shvat, 6, Sivan], Hakdamah, 28, [33, 34], 'ואחלה להקורא', 'במהרה בימינו אמן'],
    [[7, Tishrei, 6, Shvat, 6, Sivan], Hakdamah, 29, 32, 'ואל יפלא', 'לעון כלל'],
    [[8, Tishrei, 7, Shvat, 7, Sivan], Psichah, 1, 4],
    [[9, Tishrei, 8, Shvat, 8, Sivan], Psichah, 5, 11],
    [[10, Tishrei, 9, Shvat, 9, Sivan], Lavin, 1, 2],
    [[11, Tishrei, 10, Shvat, 10, Sivan], Lavin, 3, 4],
    [[12, Tishrei, 11, Shvat, 11, Sivan], Lavin, 5, 6],
    [[13, Tishrei, 12, Shvat, 12, Sivan], Lavin, 7, 9],
    [[14, Tishrei, 13, Shvat, 13, Sivan], Lavin, 10, 11],
    [[15, Tishrei, 14, Shvat, 14, Sivan], Lavin, 12, 13],
    [[16, Tishrei, 15, Shvat, 15, Sivan], Lavin, 14, 15],
    [[17, Tishrei, 16, Shvat, 16, Sivan], Lavin, 16, 17],
    [[18, Tishrei, 17, Shvat, 17, Sivan], Asin, 1, 2],
    [[19, Tishrei, 18, Shvat, 18, Sivan], Asin, 3, 4],
    [[20, Tishrei, 19, Shvat, 19, Sivan], Asin, 5, 6],
    [[21, Tishrei, 20, Shvat, 20, Sivan], Asin, 7, 8],
    [[22, Tishrei, 21, Shvat, 21, Sivan], Asin, 9, 10],
    [[23, Tishrei, 22, Shvat, 22, Sivan], Asin, 11, 12],
    [[24, Tishrei, 23, Shvat, 23, Sivan], Asin, 13, 14],
    [[25, Tishrei, 24, Shvat, 24, Sivan], Arurin],
    [[26, Tishrei, 25, Shvat, 25, Sivan], HilchosLH, 1.1, 1.2],
    [[27, Tishrei, 26, Shvat, 26, Sivan], HilchosLH, 1.3, 1.4],
    [[28, Tishrei, 27, Shvat, 27, Sivan], HilchosLH, 1.5, 1.6],
    [[29, Tishrei, 28, Shvat, 28, Sivan], HilchosLH, 1.7, 1.9],
    [[30, Tishrei, 29, Shvat, 29, Sivan], HilchosLH, 2.1, 2.2],
    [[1, Cheshvan, 30, Shvat, 30, Sivan], HilchosLH, 2.3, 2.4],
    [[2, Cheshvan, 1, Adar, 1, Tamuz], HilchosLH, 2.5, 2.6],
    [[3, Cheshvan, 2, Adar, 2, Tamuz], HilchosLH, 2.7, 2.8],
    [[4, Cheshvan, 3, Adar, 3, Tamuz], HilchosLH, 2.9, '2.10'],
    [[5, Cheshvan, 4, Adar, 4, Tamuz], HilchosLH, 2.11],
    [[6, Cheshvan, 5, Adar, 5, Tamuz], HilchosLH, 2.12, 2.13],
    [[7, Cheshvan, 6, Adar, 6, Tamuz], HilchosLH, 3.1, 3.2],
    [[8, Cheshvan, 7, Adar, 7, Tamuz], HilchosLH, 3.3, 3.4],
    [[9, Cheshvan, 8, Adar, 8, Tamuz], HilchosLH, 3.5, 3.6],
    [[10, Cheshvan, 9, Adar, 9, Tamuz], HilchosLH, 3.7, 3.8],
    [[11, Cheshvan, 10, Adar, 10, Tamuz], HilchosLH, 4.1, 4.2],
    [[12, Cheshvan, 11, Adar, 11, Tamuz], HilchosLH, 4.3, 4.4],
    [[13, Cheshvan, 12, Adar, 12, Tamuz], HilchosLH, 4.5, 4.6],
    [[14, Cheshvan, 13, Adar, 13, Tamuz], HilchosLH, 4.7, 4.8],
    [[15, Cheshvan, 14, Adar, 14, Tamuz], HilchosLH, 4.9, '4.10'],
    [[16, Cheshvan, 15, Adar, 15, Tamuz], HilchosLH, 4.11],
    [[17, Cheshvan, 16, Adar, 16, Tamuz], HilchosLH, 4.12, 5.1],
    [[18, Cheshvan, 17, Adar, 17, Tamuz], HilchosLH, 5.2, 5.4],
    [[19, Cheshvan, 18, Adar, 18, Tamuz], HilchosLH, 5.5, 5.6],
    [[20, Cheshvan, 19, Adar, 19, Tamuz], HilchosLH, 5.7, 5.8],
    [[21, Cheshvan, 20, Adar, 20, Tamuz], HilchosLH, 6.1, 6.2],
    [[22, Cheshvan, 21, Adar, 21, Tamuz], HilchosLH, 6.3, 6.4],
    [[23, Cheshvan, 22, Adar, 22, Tamuz], HilchosLH, 6.5, 6.6],
    [[24, Cheshvan, 23, Adar, 23, Tamuz], HilchosLH, 6.7, 6.8],
    [[25, Cheshvan, 24, Adar, 24, Tamuz], HilchosLH, 6.9, '6.10'],
    [[26, Cheshvan, 25, Adar, 25, Tamuz], HilchosLH, 6.11, 6.12],
    [[27, Cheshvan, 26, Adar, 26, Tamuz], HilchosLH, 7.1, 7.2],
    [[28, Cheshvan, 27, Adar, 27, Tamuz], HilchosLH, 7.3, 7.4],
    [[29, Cheshvan, 28, Adar, 28, Tamuz], HilchosLH, 7.5, 7.6],
    [[30, Cheshvan, 29, Adar, 29, Tamuz], HilchosLH, 7.7, 7.8],
    [[1, Kislev, 1, Nisan, 1, Av], HilchosLH, 7.9],
    [[2, Kislev, 2, Nisan, 2, Av], HilchosLH, '7.10', 7.12],
    [[3, Kislev, 3, Nisan, 3, Av], HilchosLH, 7.13, 7.14],
    [[4, Kislev, 4, Nisan, 4, Av], HilchosLH, 8.1, 8.2],
    [[5, Kislev, 5, Nisan, 5, Av], HilchosLH, 8.3, 8.4],
    [[6, Kislev, 6, Nisan, 6, Av], HilchosLH, 8.5, 8.7],
    [[7, Kislev, 7, Nisan, 7, Av], HilchosLH, 8.8, 8.9],
    [[8, Kislev, 8, Nisan, 8, Av], HilchosLH, '8.10', 8.11],
    [[9, Kislev, 9, Nisan, 9, Av], HilchosLH, 8.12],
    [[10, Kislev, 10, Nisan, 10, Av], HilchosLH, 8.13, 8.14],
    [[11, Kislev, 11, Nisan, 11, Av], HilchosLH, 9.1, 9.2],
    [[12, Kislev, 12, Nisan, 12, Av], HilchosLH, 9.3, 9.4],
    [[13, Kislev, 13, Nisan, 13, Av], HilchosLH, 9.5, 9.6],
    [[14, Kislev, 14, Nisan, 14, Av], HilchosLH, 10.1, 10.2],
    [[15, Kislev, 15, Nisan, 15, Av], HilchosLH, 10.3, 10.4],
    [[16, Kislev, 16, Nisan, 16, Av], HilchosLH, 10.5, 10.6],
    [[17, Kislev, 17, Nisan, 17, Av], HilchosLH, 10.7, 10.8],
    [[18, Kislev, 18, Nisan, 18, Av], HilchosLH, 10.9, '10.10'],
    [[19, Kislev, 19, Nisan, 19, Av], HilchosLH, 10.11, 10.12],
    [[20, Kislev, 20, Nisan, 20, Av], HilchosLH, 10.13, 10.14],
    [[21, Kislev, 21, Nisan, 21, Av], HilchosLH, 10.15, 10.16],
    [[22, Kislev, 22, Nisan, 22, Av], HilchosLH, 10.17],
    [[23, Kislev, 23, Nisan, 23, Av], HilchosRechilus, 1.1, 1.3],
    [[24, Kislev, 24, Nisan, 24, Av], HilchosRechilus, 1.4, 1.5],
    [[25, Kislev, 25, Nisan, 25, Av], HilchosRechilus, 1.6, 1.7],
    [[26, Kislev, 26, Nisan, 26, Av], HilchosRechilus, 1.8, 1.9],
    [[27, Kislev, 27, Nisan, 27, Av], HilchosRechilus, '1.10', 1.11],
    [[28, Kislev, 28, Nisan, 28, Av], HilchosRechilus, 2.1, 2.2],
    [[29, Kislev, 29, Nisan, 29, Av], HilchosRechilus, 2.3, 2.4],
    [[30, Kislev, 30, Nisan, 30, Av], HilchosRechilus, 3.1],
    [[1, Teves, 1, Iyyar, 1, Elul], HilchosRechilus, 3.2, 3.4],
    [[2, Teves, 2, Iyyar, 2, Elul], HilchosRechilus, 4.1, 4.3],
    [[3, Teves, 3, Iyyar, 3, Elul], HilchosRechilus, 5.1, 5.2],
    [[4, Teves, 4, Iyyar, 4, Elul], HilchosRechilus, 5.3, 5.4],
    [[5, Teves, 5, Iyyar, 5, Elul], HilchosRechilus, 5.5],
    [[6, Teves, 6, Iyyar, 6, Elul], HilchosRechilus, 5.6, 5.7],
    [[7, Teves, 7, Iyyar, 7, Elul], HilchosRechilus, 6.1, 6.2],
    [[8, Teves, 8, Iyyar, 8, Elul], HilchosRechilus, 6.3, 6.4],
    [[9, Teves, 9, Iyyar, 9, Elul], HilchosRechilus, 6.5, 6.7],
    [[10, Teves, 10, Iyyar, 10, Elul], HilchosRechilus, 6.8, '6.10'],
    [[11, Teves, 11, Iyyar, 11, Elul], HilchosRechilus, 7.1],
    [[12, Teves, 12, Iyyar, 12, Elul], HilchosRechilus, 7.2],
    [[13, Teves, 13, Iyyar, 13, Elul], HilchosRechilus, 7.3, 7.4],
    [[14, Teves, 14, Iyyar, 14, Elul], HilchosRechilus, 7.5],
    [[15, Teves, 15, Iyyar, 15, Elul], HilchosRechilus, 8.1, 8.3],
    [[16, Teves, 16, Iyyar, 16, Elul], HilchosRechilus, 8.4, 8.5],
    [[17, Teves, 17, Iyyar, 17, Elul], HilchosRechilus, 9.1, 9.2],
    [[18, Teves, 18, Iyyar, 18, Elul], HilchosRechilus, 9.3, 9.4],
    [[19, Teves, 19, Iyyar, 19, Elul], HilchosRechilus, 9.5, 9.6],
    [[20, Teves, 20, Iyyar, 20, Elul], HilchosRechilus, 9.7, 9.9],
    [[21, Teves, 21, Iyyar, 21, Elul], HilchosRechilus, '9.10'],
    [[22, Teves, 22, Iyyar, 22, Elul], HilchosRechilus, 9.11, 9.12],
    [[23, Teves, 23, Iyyar, 23, Elul], HilchosRechilus, 9.13],
    [[24, Teves, 24, Iyyar, 24, Elul], HilchosRechilus, 9.14, 9.15],
    [[25, Teves, 25, Iyyar, 25, Elul], Tziyurim, 1, 3],
    [[26, Teves, 26, Iyyar, 26, Elul], Tziyurim, 4, 5],
    [[27, Teves, 27, Iyyar, 27, Elul], Tziyurim, 6, 7],
    [[28, Teves, 28, Iyyar, 28, Elul], Tziyurim, 8, 9],
    [[29, Teves, 29, Iyyar, 29, Elul], Tziyurim, 10, 11],
  ];

const calendarObjs = [];

for (const iterator of simple) {
    const limudObj = {
        "days": [
            { day: iterator[0][0], monthCode: iterator[0][1] },
            { day: iterator[0][2], monthCode: iterator[0][3] },
            { day: iterator[0][4], monthCode: iterator[0][5] }
        ],
        "title": iterator[1]
    }

    if (iterator[4]) {
        limudObj.section = [iterator[4], iterator[5]].join('-')
    } else if (iterator[2]) {
        limudObj.section = iterator[2] + (iterator[3] ? '-' + (Array.isArray(iterator[3]) ? iterator[3].at(-1) : iterator[3]) : '')
    }

    calendarObjs.push(limudObj)
}

calendarObjs;