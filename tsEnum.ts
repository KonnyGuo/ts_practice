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
enum Month {
    Jan=1,
    Feb,
    Mar,
    Apr,
    May, 
    Jun,
    Jul,
    Aug,
    Sep,
    Oct, 
    Nov,
    Dec
}

function isMonth(check: Month):boolean {
    let isSummer:boolean = false
    if(check == Month.Jul) {
        isSummer = true;
    }

    return isSummer
}

console.log(isMonth(Month.Jul)) //true
console.log(isMonth(Month.Aug)) //false