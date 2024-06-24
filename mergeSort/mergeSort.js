function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    } else if (arr.length == 0) {
        return console.log("Please enter an array.");
    } else if (!Array.isArray(arr)) {
        throw console.error("Error: Please enter an array.")
    }

    let div = Math.round(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, div));
    let secondHalf = mergeSort(arr.slice(div, arr.length));
    let sorted = merge(firstHalf, secondHalf);
    return sorted;
}

function merge(left, right) {
    let sorted = [];
    let i = 0;
    let j = 0;
    let k = 0;

    do {
        if (left[i] <= right[j] || isNaN(right[j])) {
            sorted[k] = left[i];
            i++;
            k++;
        } else {
            sorted[k] = right[j];
            j++;
            k++;
        };
    } while (k < left.length + right.length);
    return sorted;
}

console.log(merge([1, 2, 3, 13], [0, 1, 5, 8]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([626]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 10, 5, 7, 9, 10, 11, 6, 26]));