function convertArraIntoObject(array){
    let newObject = {};
    for (let i = 0; i < array.length; i++) {
        newObject[array[i][0]] = array[i][1];      
    }

    return newObject;
}

module.exports = convertArraIntoObject;
