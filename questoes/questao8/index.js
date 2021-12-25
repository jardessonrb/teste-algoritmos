function arraysJoin(arrays){
    const newArray = [];
    for (let i = 0; i < arrays.length; i++) {
        if(typeof arrays[i] != "number"){
            for (let j = 0; j < arrays[i].length; j++) {
                newArray.push(arrays[i][j]);                
            }
        }else{
            newArray.push(arrays[i]);
        }
    }

    return newArray;
}

module.exports = arraysJoin;