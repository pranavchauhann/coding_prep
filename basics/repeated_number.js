function mostRepeated(arr) {
    let counts = {}; // Object to store counts of each number

    // Count occurrences of each number
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let maxCount = 0;
    let mostRepeatedNumber;

    // Find the number with the highest count
    for (let num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostRepeatedNumber = num;
        }
    }

    return mostRepeatedNumber;
}

let arr = [1, 2, 3, 4, 4, 1, 3, 4];
console.log(mostRepeated(arr)); // Output: 4
