"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfloat = exports.cdate = exports.number_format_de = exports.number_format = void 0;
/**
 * Formatiert ein Zahl
 * Quelle: http://www.brain4.de/programmierecke/js/numberFormat.php
 *
 * @param {float} number Die Zahl selber
 * @param {int} laenge  Anzahl Zahlen nach dem Komma
 * @param {string} sep  Seperator
 * @param {string} th_sep Tausenderseperator
 * @returns {string} Formatierte Zahl
 */
function number_format(number, laenge, sep, th_sep) {
    let str_number;
    let arr_int;
    let nachkomma;
    let i;
    let j;
    let Begriff;
    let Extrakt;
    let str_first;
    number = Math.round(number * Math.pow(10, laenge)) / Math.pow(10, laenge);
    str_number = number + '';
    arr_int = str_number.split('.');
    if (!arr_int[0])
        arr_int[0] = '0';
    if (!arr_int[1])
        arr_int[1] = '';
    if (arr_int[1].length < laenge) {
        nachkomma = arr_int[1];
        for (i = arr_int[1].length + 1; i <= laenge; i++) {
            nachkomma += '0';
        }
        arr_int[1] = nachkomma;
    }
    //if (th_sep != "" && arr_int[0].length > 3) {
    if (th_sep != '' &&
        ((arr_int[0].length > 3 && arr_int[0] > 0) ||
            (arr_int[0].length > 4 && arr_int[0] < 0))) {
        Begriff = arr_int[0];
        arr_int[0] = '';
        for (j = 3; j < Begriff.length; j += 3) {
            Extrakt = Begriff.slice(Begriff.length - j, Begriff.length - j + 3);
            arr_int[0] = th_sep + Extrakt + arr_int[0] + '';
        }
        str_first = Begriff.substr(0, Begriff.length % 3 == 0 ? 3 : Begriff.length % 3);
        arr_int[0] = str_first + arr_int[0];
    }
    return arr_int[0] + sep + arr_int[1];
}
exports.number_format = number_format;
function number_format_de(number) {
    return number_format(number, 2, ',', '.');
}
exports.number_format_de = number_format_de;
/**
 * Formatiert ein DE oder ISO Datum zu Date
 * @param {string|date} datum
 * @return Date
 */
function cdate(datum) {
    if (datum instanceof Date) {
        return datum;
    }
    else if (typeof datum === 'string') {
        //Prüfen ob Punkt drin ist
        if (datum.indexOf('.') > 0) {
            var tmp = datum.split('.');
            datum =
                tmp[2] +
                    '-' +
                    ('00' + tmp[1]).slice(-2) +
                    '-' +
                    ('00' + tmp[0]).slice(-2);
            return new Date(datum);
        }
        else if (datum.indexOf('-') > 0) {
            var tmp = datum.split('-');
            datum =
                tmp[0] +
                    '-' +
                    ('00' + tmp[1]).slice(-2) +
                    '-' +
                    ('00' + tmp[2]).slice(-2);
            return new Date(datum);
        }
    }
    else if (isNaN(datum)) {
        datum = '0000-00-00';
    }
    else if (datum === undefined) {
        datum = '0000-00-00';
    }
    else if (datum === null) {
        datum = '0000-00-00';
    }
    return new Date(datum);
}
exports.cdate = cdate;
function cfloat(zahl) {
    //console.log('cfloat: ' + zahl + ' - ' + typeof zahl);
    if (typeof zahl == 'string') {
        zahl = zahl.replace('.', '');
        zahl = zahl.replace(',', '.');
        zahl = parseFloat(zahl);
        if (isNaN(zahl)) {
            zahl = 0;
        }
    }
    else if (isNaN(zahl)) {
        return 0;
    }
    else if (zahl === undefined) {
        return 0;
    }
    else if (zahl === null) {
        return 0;
    }
    return zahl;
}
exports.cfloat = cfloat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemFobC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy96YWhsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxNQUFjLEVBQUUsTUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFjO0lBQ3ZGLElBQUksVUFBa0IsQ0FBQztJQUN2QixJQUFJLE9BQWMsQ0FBQztJQUNuQixJQUFJLFNBQWlCLENBQUM7SUFDdEIsSUFBSSxDQUFTLENBQUM7SUFDZCxJQUFJLENBQVMsQ0FBQztJQUNkLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksU0FBaUIsQ0FBQztJQUV0QixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRSxVQUFVLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUN6QixPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFDOUIsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFB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