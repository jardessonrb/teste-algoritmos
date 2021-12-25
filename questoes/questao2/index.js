function reverseArray(numbers){
    let newArray = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        newArray.push(numbers[i]);
    }

    return newArray;
}

module.exports = reverseArray;