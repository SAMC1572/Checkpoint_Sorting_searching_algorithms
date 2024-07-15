function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Compare the current element with the sorted portion of the array
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];  // Shift the element to the right
            j--;
        }
        arr[j + 1] = current;  // Insert the current element into its correct position
    }
    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Original array:", array);

let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
