function valuesCommonsBetweenArrays(firstArray, secondArray){
    const valuesCommons = [];
    const visitedMap = new Map(); //Para marcar os visitados e não deixar valores repetidos
    firstArray.sort(compareBetweenNumbers);

    //Usa busca binaria para minimizar o tempo de pesquisa dos valores
    for (let i = 0; i < secondArray.length; i++) {
        if(!visitedMap.has(secondArray[i]) && binarySearch(firstArray, secondArray[i])){
            valuesCommons.push(secondArray[i]);
        }  
        visitedMap.set(secondArray[i], true); 
    }

    return valuesCommons;
}

function compareBetweenNumbers(a,b) {
    if(a == b){
        return 0; 
    } 
    if (a < b) {
        return -1; 
    }
    if (a > b) {
        return 1; 
    }
}

function binarySearch(array, value){
    let l = 0;
    let r = array.length - 1;
    while(l <= r){
        const c = Math.ceil((l + r) / 2);
        if(array[c] == value){ 
            return true;
        }
        if(array[c] > value){
            r = c - 1;
        }else{
            l = c + 1;
        }
    }
    return false;
}

module.exports = valuesCommonsBetweenArrays;