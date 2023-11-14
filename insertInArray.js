function insertInArray(arrIn, indexThatIsBefore, arrayOrPrimitiveToInsert) {
    let arrOut = [];

    for (let i = 0, j = 0; i < arrIn.length; i++, j++) {
        arrOut[j] = arrIn[i];
        if (i === indexThatIsBefore) {
            if (typeof arrayOrPrimitiveToInsert !== 'object' ||
                arrayOrPrimitiveToInsert === null) {

                j++;
                arrOut[j] = arrayOrPrimitiveToInsert;
            } else {
                for (let k = 0; k < arrayOrPrimitiveToInsert.length; k++) {
                    j++;
                    arrOut[j] = arrayOrPrimitiveToInsert[k];
                }
            }

        }

    }

    return arrOut;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function uts() {

    // description: [0],
    // array: [1],
    // index: [2],
    // element: [3],
    // expected:[4]

    const test = [
        [
            "Inserts primitive at index",
            [true, "hi", 4, "yes", null, 8],
            3,
            "bye",
            [true, "hi", 4, "yes", "bye", null, 8]
        ],
        [
            "Inserts array at index",
            [1, 2, 3, 4],
            2,
            [5, 6],
            [1, 2, 3, 5, 6, 4]
        ],
        [
            "Inserts null at index",
            ["a", "b", "c"],
            1,
            null,
            ["a", "b", null, "c"]
        ]
    ];

    for (let i = 0; i < test.length; i++) {

        const arrOut = insertInArray(test[i][1], test[i][2], test[i][3]);
        const testPassed = arraysEqual(arrOut, test[i][4]);
        const result = testPassed ? "Passed" : "Failed";


        if (result === "Failed") {

            console.log(`Test ${i + 1} : ${test[i][0]} ${test[i][2]} : ${result} : ${arrOut} : ${test[i][4]}`);
        } else {

            console.log(`Test ${i + 1} : ${test[i][0]} ${test[i][2]} : ${result}`);
        }
    }
}






