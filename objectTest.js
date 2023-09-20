"use strict";
// let studentFunction = ( 
//     user_id: Number,
//     first_name: String,
//     last_name: String,
//     is_enrolled: Boolean
// ): Boolean => {
//     let enrolled = is_enrolled
//     return enrolled
// }
// default value, if nothing is passed then its whatever its equal to
let studentFunction = (info, school = "Programming School") => {
    return `${info.is_enrolled} at ${school}`;
};
//if not passed as pragrams, then default is "Programming School"
let school = "no school";
console.log(studentFunction(({
    // user_id: 123,
    first_name: "hello",
    last_name: "world",
    is_enrolled: false,
    gpa: 99,
}), school));
