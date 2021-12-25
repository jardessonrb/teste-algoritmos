const createArray = require('../questoes/questao1');
const reverseArray = require('../questoes/questao2');
const cleanArray = require('../questoes/questao3');
const convertArraIntoObject = require('../questoes/questao4');
const removeElementsFromArray = require('../questoes/questao5');

const removeDuplicateValues = require('../questoes/questao6');
const compareArrays = require('../questoes/questao7');
const arraysJoin = require('../questoes/questao8');
const partitionArray = require('../questoes/questao9');
const valuesCommonsBetweenArrays = require('../questoes/questao10');

describe("1° Implemente um método que crie um novo array baseado nos valores passados. ", () => {
    test("Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']", () => {
        expect(createArray(3, 'a')).toEqual(['a', 'a', 'a']);
    });
    test("Entradas do método (2, ab), Resultado do método: ['ab', 'ab']", () => {
        expect(createArray(2, 'ab')).toEqual(['ab', 'ab']);
    });
});

describe("2° Implemente um método que inverta um array, não utilize métodos nativos do array.", () => {
    test("Entradas do método [1,2,3,4], Resultado do método: [4,3,2,1]", () => {
        expect(reverseArray([1,2,3,4])).toEqual([4,3,2,1]);
    });
    test("Entradas do método [1,2,3,4,5], Resultado do método: [5,1,2,3,4]", () => {
        expect(reverseArray([1,2,3,4,5])).not.toEqual([1,2,3,4,5]);
    })
});

describe("3° Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null)", () => {
    test("Entradas do método [1,2,'', undefined], Resultado do método: [1,2]", () => {
        expect(cleanArray([1,2,'', undefined])).toEqual([1,2]);
    });
    test("Entradas do método [1,2,'', 3, 4, undefined], Resultado do método: [1,2,3,4]", () => {
        expect(cleanArray([1,2,'', 3, 4, undefined])).toEqual([1,2,3,4]);
    })
});

describe("4° Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor", () => {
    test("Entradas do método [['c',2],['d',4]], Resultado do método: {c:2, d:4}", () => {
        expect(convertArraIntoObject([["c",2],["d",4]])).toEqual({c:2, d:4});
    });
    test("Entradas do método [['c',2],['d',4], ['c',3]], Resultado do método: {c:3, d:4}", () => {
        expect(convertArraIntoObject([["c",2],["d",4],["c",3]])).toEqual({c:3, d:4});
    })
});

describe("5° Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada", () => {
    test("Entradas do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]", () => {
        expect(removeElementsFromArray([5,4,3,2,5], 5,3)).toEqual([4,2]);
    });
    test("Entradas do método ([5,4,3,2,5,6,7], 5,3,2), Resultado do método: [4,6,7]", () => {
        expect(removeElementsFromArray([5,4,3,2,5,6,7], 5,3,2)).toEqual([4,6,7]);
    })
});

describe("6° Implemente um método que retorne um array, sem valores duplicados", () => {
    test("Entradas do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]", () => {
        expect(removeDuplicateValues([1,2,3,3,2,4,5,4,7,3])).toEqual([1,2,3,4,5,7]);
    });
    test("Entradas do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]", () => {
        expect(removeDuplicateValues([1,1,2,3,4,5,4,6,7,3])).toEqual([1,2,3,4,5,6,7]);
    })
});

describe("7° Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano", () => {
    test("Entradas do método ([1,2,3,4], [1,2,3,4]), Resultado do método: true", () => {
        expect(compareArrays([1,2,3,4], [1,2,3,4])).toBeTruthy();
    });
    test("Entradas do método ([1,2,3,4],[1,2,3,4,5]), Resultado do método: false", () => {
        expect(compareArrays([1,2,3,4], [1,2,3,4,5])).toBeFalsy();
    })
});

describe("8° Implemente um método que remova os aninhamentos de um array de arrays para um array unico", () => {
    test("Entradas do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]", () => {
        expect(arraysJoin([1, 2, [3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    });
    test("Entradas do método ([1, 2, [3], [4, 5, 3], [1, 2]]), Resultado do método: [1, 2, 3, 4, 5, 3, 1, 2]", () => {
        expect(arraysJoin([1, 2, [3], [4, 5, 3], [1, 2]])).toEqual([1, 2, 3, 4, 5, 3, 1, 2]);
    })
});

describe("9° Implemente um método divida um array por uma quantidade passada por parâmetro", () => {
    test("Entradas do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]", () => {
        expect(partitionArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
    test("Entradas do método ([1, 2, 3, 4, 5, 6, 7], 6), Resultado do método: [[1, 2, 3, 4, 5, 6], [7]]", () => {
        expect(partitionArray([1, 2, 3, 4, 5, 6, 7], 6)).toEqual([[1, 2, 3, 4, 5, 6], [7]]);
    })
});

describe("10° Implemente um método que encontre os valores comuns entre dois arrays.", () => {
    test("Entradas do método ([6, 8], [8, 9]), Resultado do método: [8]", () => {
        expect(valuesCommonsBetweenArrays([6, 8], [8, 9])).toEqual([8]);
    });
    test("Entradas do método ([1, 2, 3, 4, 5, 8], [1, 5, 6,7]), Resultado do método: [1, 5]", () => {
        expect(valuesCommonsBetweenArrays([1, 2, 3, 4, 5, 8], [1, 5, 6,7])).toEqual([1, 5]);
    })
});