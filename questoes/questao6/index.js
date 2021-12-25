function removeDuplicateValues(values){
    const visitedMap = new Map();//Crio um mapa de visitados, se não existir essa chave, eu insiro,
    const newArray = [];         //E marco como visitado, assim cada valor só é inserido uma vez
    for (let i = 0; i < values.length; i++) {
        if(!visitedMap.has(values[i])){
            newArray.push(values[i]);
        }       
        visitedMap.set(values[i], true);
    }

    return newArray;
}

module.exports = removeDuplicateValues;