function cleanArrayInPlace(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null && arr[i] !== undefined && arr[i] !== "empty") {
            if (i !== index) {
                arr[index] = arr[i];
            }
            index++;
        }
    }
    arr.length = index; // Truncate the array to the valid length
}

// Utility function to compare arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!arraysEqual(arr1[i], arr2[i])) {
                return false;
            }
        } else if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
            if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
                return false;
            }
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Unit tests for cleanArrayInPlace
function uts() {
    const arrayInOut2 = [3, , , , 4, undefined, 5, null, { a: 6 }, [7, 8, null, 9], 10];
    cleanArrayInPlace(arrayInOut2);
    const expected = [3, 4, 5, { a: 6 }, [7, 8, null, 9], 10];

    const equalArrays = arraysEqual(arrayInOut2, expected);
    console.log("cleanArrayInPlace Test :", equalArrays ? "Passed" : "Failed");
    console.log("Output :", arrayInOut2);
    console.log("Expected :", expected);
}




