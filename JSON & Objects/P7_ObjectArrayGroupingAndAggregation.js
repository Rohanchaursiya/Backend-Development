function groupAndAggregateObjects(objArr) {
    const gradeStats = {};
    for (const student of objArr) {
        const { grade, age } = student; // Object Destructuring
        if (!gradeStats[grade]) {
            gradeStats[grade] = { totalAge: 0, count: 0 };
        }
        gradeStats[grade].totalAge += age;
        gradeStats[grade].count += 1;
    }
    let averageAgeByGrade = {};
    for (const grade in gradeStats) {
        averageAgeByGrade[grade] = gradeStats[grade].totalAge / gradeStats[grade].count;
    }
    return averageAgeByGrade;
}


let objArr = [
    { name: "John", age: 25, grade: "A" },
    { name: "Jane", age: 30, grade: "B" },
    { name: "Emily", age: 28, grade: "A" },
    { name: "Sam", age: 35, grade: "B" },
    { name: "Tom", age: 22, grade: "A" }
]

console.log(groupAndAggregateObjects(objArr));
