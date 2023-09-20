"use strict";
const calculatePercent = (studentScore, testTotal) => {
    const percent = studentScore / testTotal;
    return `this student got ${percent}`;
};
let grade;
let test = 100; // Initialize 'test' with a number value
let grade2 = 90; // Initialize 'grade2' with a number value
let allTest = [{ name: "test1", total_score: 100 },];
allTest.push({
    name: "test2",
    total_score: 99,
});
