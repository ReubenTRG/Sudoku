// Failed program remade and better in another file

sudoku = []
zer0 = []
for (let j = 0; j < 9; j++) {
    zer0.push(0)
}
for (let i = 0; i < 9; i++) {
    let z = zer0.slice()
    sudoku.push(z)
}

function DictApplyToSudoku(List, Dict) {
    for (let n in Dict) {
        List[n[0] - 1][n[1] - 1] = Dict[n]
    }
}

Dict_M = {
    '15': 4, '18': 2, '19': 3,
    '24': 1, '28': 9, '29': 8,
    '33': 3, '34': 8, '35': 5, '37': 7, '39': 4,
    '41': 6, '44': 5, '47': 4,
    '52': 7, '58': 3,
    '63': 8, '66': 4, '69': 6,
    '71': 3, '73': 9, '75': 1, '76': 7, '77': 8,
    '81': 2, '82': 4, '86': 8,
    '91': 1, '92': 8, '95': 6
}

Dict_S = {
    '14': 5, '15': 6, '17': 9, '18': 1, '19': 3,
    '21': 1, '25': 3, '27': 6,
    '31': 8, '37': 2, '38': 5, '39': 4,
    '42': 2, '43': 1, '44': 6,
    '51': 9, '56': 4, '5':  6
}

DictApplyToSudoku(sudoku, Dict)

function CheckByX(List) {
    let fakeDictUX = {}


    for (let row = 0; row< List.length; row++) {


        let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let element of List[row]) {


            if (element !== 0) {
                if (allNum.includes(element)) {
                    allNum.splice(allNum.indexOf(element), 1)
                } else {
                    fakeDictUX[String(row)] = 'Error'
                }
            }

            if ((allNum === []) && (fakeDictUX[String(row)] !== 'Error')){
                fakeDictUX[String(row)] = 'Complete'
            }else if ((allNum !== []) && (fakeDictUX[String(row)] !== 'Error')) {
                fakeDictUX[String(row)] = 'Less'
            }
        }
    }
    return fakeDictUX
}

function CheckByY(List) {
    let fakeDictUY = {}


    for (let column = 0; column < List.length; column++) {
        let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let row = 0; row < List.length; row++) {


            element = List[row][column]
            if (element !== 0) {
                if (allNum.includes(element)) {
                    allNum.splice(allNum.indexOf(element), 1)
                } else {
                    fakeDictUY[String(column)] = 'Error'
                }
            }

            if ((allNum === []) && (fakeDictUY[String(column)] !== 'Error')){
                fakeDictUY[String(column)] = 'Complete'
            }else if ((allNum !== []) && (fakeDictUY[String(column)] !== 'Error')) {
                fakeDictUY[String(column)] = 'Less'
            }
        }
    }
    return fakeDictUY
}

function CheckByBox(List) { // Not done, Error
    let fakeDictUB = {}


    for (let box = 0; box < List.length; box++) {
        let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let cell = 0; cell < List.length; cell++) {

            row = 3 * Math.floor(box / 3) + Math.floor(cell / 3)
            column = 3 * (box % 3) + cell % 3

            element = List[row][column]
            if (element !== 0) {
                if (allNum.includes(element)) {
                    allNum.splice(allNum.indexOf(element), 1)
                    console.log(element, row, column)
                } else {
                    fakeDictUB[String(row)] = 'Error'
                }
            }

            if ((allNum === []) && (fakeDictUB[String(row)] !== 'Error')){
                fakeDictUB[String(row)] = 'Complete'
            } else if ((allNum !== []) && (fakeDictUB[String(row)] !== 'Error')) {
                fakeDictUB[String(row)] = 'Less'
            }
        }
    }
    return fakeDictUB
}

function PatternChecker(List) {
    for (let number = 0; number < List.length; number++) {
        const NumberBox = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let box = 0; box < List.length; box++) {
            for (let coord = 0; coord < List.length; coord++) {
                x = 3 * Math.floor(box / 3) + Math.floor(coord / 3)
                y = 3 * (box % 3) + coord % 3

                element = List[x][y]

                if (element !== 0 & element === number) {

                }
                }
            }
        }
    }

function Checker(List) {

    console.log(PatternChecker(List))
}

Checker(sudoku)