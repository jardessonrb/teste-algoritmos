function partitionArray(array, numberParts){
    const newArray = [];
    const parts = Math.ceil(array.length / numberParts); //Arredonda p/ cima em quantos subarrays eu posso ter
    let index = 0;

    for (let i = 0; i < parts; i++) { //Percorro pela quantidade de subarrays;
        const miniArray = [];
        for (let j = 0; j < numberParts; j++) {
            miniArray.push(array[index]);//Insiro no subarray
            if(index == (array.length - 1)){//Se index chegou no máximo, ele fecha e acaba a execução
                break;
            }
            index++;
        }
        newArray.push(miniArray);
    }

    return newArray;
}

module.exports = partitionArray;

