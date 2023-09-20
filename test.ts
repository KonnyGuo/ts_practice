const calculatePercent = (studentScore: number, testTotal: number): string => {
    const percent = studentScore / testTotal;
    return `this student got ${percent}`;
}

let grade: string
let test: number = 100; // Initialize 'test' with a number value
let grade2: number = 90; // Initialize 'grade2' with a number value

// console.log(calculatePercent(grade2, test)); // Calculate a number result

type Test =  ({
    name: string,
    total_score: number,
})

let allTest: Test[] = [{name:"test1", total_score: 100},]
allTest.push({
    name: "test2",
    total_score: 99,
})
 