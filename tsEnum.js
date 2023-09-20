"use strict";
// You can also explicitly assign numeric values to enum members if you need to specify custom values:
// enum StatusCode {
//   OK = 200,
//   NotFound = 404,
//   InternalServerError = 500,
// }
// In this example, we've assigned specific numeric values to each StatusCode enum member.
// So, in summary, enum values in TypeScript can be numbers, and they can either be automatically assigned starting from 0 or explicitly assigned custom numeric values.
//start at 0 from jan
//if we assign jan=1 then rest will change starting from 1
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month || (Month = {}));
function isMonth(check) {
    let isSummer = false;
    if (check == Month.Jul) {
        isSummer = true;
    }
    return isSummer;
}
console.log(isMonth(Month.Jul)); //true
console.log(isMonth(Month.Aug)); //false
