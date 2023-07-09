function getAverageValue(arr) {
    const sum = arr.reduce((total, currentValue) => total + currentValue);
    const average = sum / arr.length;

    return Math.floor(average);
}
const all = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const averageCheck = getAverageValue(all);
console.log(averageCheck);
