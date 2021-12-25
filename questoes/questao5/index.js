function removeElementsFromArray(numbers, ...values){
    const mapValues = new Map();
    let newArray = [];
    //Crio um mapa dos valores que não devem estar no array para buscar mais rapido na verificação.
    for (let i = 0; i < values.length; i++) {
        mapValues.set(values[i], values[i]);        
    }

    //Caso não exista uma chave com aquele valor, eu adiciono no novo array;
    for (let i = 0; i < numbers.length; i++) {
        if(!mapValues.has(numbers[i])){
            newArray.push(numbers[i]);
        }
    }

    return newArray;
}

module.exports = removeElementsFromArray;