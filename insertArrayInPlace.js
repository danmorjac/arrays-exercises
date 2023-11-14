function insertInArrayInPlace(
    arrayInOut, indexThatIsBefore, arrayOrPrimitiveToInsert
) {
    let insertedArray = [];
    const position = indexThatIsBefore + 1;

    for (let i = position, j = 0; i < arrayInOut.length; i++) {
        // Insert item
        if (i === position) {
            // Case 1: Is a primitive value
            if (
                typeof arrayOrPrimitiveToInsert !== 'object' ||
                arrayOrPrimitiveToInsert === null
            ) {
                insertedArray[i] = arrayOrPrimitiveToInsert;
                j++;
            }
            // Case 2: Is an Array
            else {
                for (; j < arrayOrPrimitiveToInsert.length; j++)
                    insertedArray[i + j] = arrayOrPrimitiveToInsert[j];
            };
        };

        // Insert rest of arrayIn
        if (i >= position)
            insertedArray[i + j] = arrayInOut[i];
    };

    for (let i = position; i < insertedArray.length; i++) {
        arrayInOut[i] = insertedArray[i];
    };
};

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
            "Insert 'hi' at position 1",
            [8, 9],
            0,
            "hi",
            [8, "hi", 9]
        ],
        [
            "Insert 1 at position 0",
            [3, 5, 7],
            -1,
            1,
            [1, 3, 5, 7]
        ],
        [
            "Insert 'test' into an empty array",
            [],
            0,
            "test",
            ["test"]
        ],
        [
            "Insert 'out' at an out-of-bounds index",
            [1, 2, 3],
            10,
            "out",
            [1, 2, 3]
        ],
        [
            "Insert undefined at position 1",
            [8, 9],
            0,
            undefined,
            [8, undefined, 9]
        ],
        [
            "Insert 42 at position 0",
            [3, 5, 7],
            -1,
            42,
            [42, 3, 5, 7]
        ]
    ];

    for (let i = 0; i < test.length; i++) {
        insertInArrayInPlace(test[i][1], test[i][2], test[i][3]);
        const testPassed = arraysEqual(test[i][1], test[i][4]);
        const result = testPassed ? " Passed " : " Failed ";

        if (testPassed) {
            console.log(`Test ${i + 1} : ${test[i][0]} - ${result}`);

        } else {
            console.log(`Test ${i + 1} : ${test[i][0]} - ${result}`);
            console.log("Expected : ", test[i][4]);
            console.log("Received : ", test[i][1]);
        }
    }
}

