const submissions = [
    { name: 'Jane', score: 95, date: '2020-01-24', passed: true },
    { name: 'Joe', score: 77, date: '2018-05-14', passed: true },
    { name: 'Jack', score: 59, date: '2019-07-05', passed: false },
    { name: 'Jill', score: 88, date: '2020-04-22', passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
    const passed = newScore >= 60;
    const newSubmission = { name: newName, score: newScore, date: newDate, passed: passed };
    array.push(newSubmission);
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    // const submission = array.find(s => s.name === name);
    // const indexOfSubmission = array.indexOf(submission);
    // same as 
    const indexOfSubmission = array.findIndex(s => s.name === name);
    array.splice(indexOfSubmission, 1);
}

function editSubmission(array, index, score) {
    const passed = score >= 60;
    array[index].score = score;
    array[index].passed = passed;
}

function findSubmissionByName(array, name) {
    return array.find(s => s.name === name);
}

function findLowestScore(array) {
    let lowestScore = 101;
    array.forEach(s => {
            if (s.score < lowestScore) {
                lowestScore = s.score;
            }
        })
        // for (let s of array) {
        //     if (s.score < lowestScore) {
        //         lowestScore = s.score;
        //     }
        // }
    return array.find(s => s.score === lowestScore);
}

function findAverageScore(array) {
    const arrayLength = array.length;
    let total = 0;
    array.forEach(s => {
        total += s.score;
    })
    return total / arrayLength;
}

function filterPassing(array) {
    return array.filter(s => s.passed);
}

function filter90AndAbove(array) {
    return array.filter(s => s.score >= 90);
}

addSubmission(submissions, 'Jacob', 90, '2020-10-27');
// deleteSubmissionByIndex(submissions, 2);
//deleteSubmissionByName(submissions, 'Jill');
//editSubmission(submissions, 1, 59);
//console.log(submissions);
// const sub = findSubmissionByName(submissions, 'Jack');
// const lowestScoreSubmission = findLowestScore(submissions);
// console.log(lowestScoreSubmission);
const filteredSubmissions = filter90AndAbove(submissions);
console.log(filteredSubmissions);