let n = 9;

sudokuMatrix = [];
resultSudokuMatrix = [];
tenList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
zeroList = Array(n).fill(0);

for (let index = 0; index < n; index++) {
	sudokuMatrix.push(zeroList.concat());
}

for (let i = 0; i < n; i++) {
	resultSudokuMatrix.push([])
	for (let j = 0; j < n; j++) {
		resultSudokuMatrix[i].push(tenList.concat());
	}
}

function DictApplyToSudoku(List, Dict) {
	for (let element in Dict) {
		List[element[0] - 1][element[1] - 1] = Dict[element]
	}
}

function updateResultMatrix(x, y, number) {
	for (let i = 0; i < n; i++) {
		if (typeof(resultSudokuMatrix[i][y]) != 'number') {
			console.log(resultSudokuMatrix[i][y])
			resultSudokuMatrix[i][y] = resultSudokuMatrix[i][y].filter((value) => {return value != number});
		}
	}

	for (let j = 0; j < n; j++) {
		resultSudokuMatrix[x][j] = resultSudokuMatrix[x][j].filter((value) => {return value != number});
	}
}

function SudokuApplyToResult() {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (sudokuMatrix[i][j] != 0) {
				updateResultMatrix(i, j, sudokuMatrix[i][j]);
				resultSudokuMatrix[i][j] = sudokuMatrix[i][j];
			}
		}
	}
}

function lowLengthSolve() {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (resultSudokuMatrix[i][j].length == 1) {
				updateResultMatrix(i, j, resultSudokuMatrix[i][j][0]);
			}
		}
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

DictApplyToSudoku(sudokuMatrix, Dict_M)

SudokuApplyToResult()

console.log(resultSudokuMatrix);