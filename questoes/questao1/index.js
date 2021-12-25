function createArray(lengthArray, value){
    const array = [];
    for (let i = 0; i < lengthArray; i++) {
        array.push(value);
    }

    return array;
}

module.exports = createArray;