import { reactive } from 'vue';
import { GameSize } from '@apptypes/GameSize';
import { GameRow } from '@apptypes/GameRow';
import { GameMatrix } from '@apptypes/GameMatrix';
import { getRandomCoordsIncluded } from '@utils/getRandomCoordsIncluded';

export function useGameMatrix(gameSize: GameSize): { GAME_MATRIX: GameMatrix } {
	const MATRIX_SIZE: number = Math.sqrt(gameSize);
	const GAME_MATRIX: GameMatrix = makeMatrix(MATRIX_SIZE);

	console.log(GAME_MATRIX);

	return { GAME_MATRIX: reactive(GAME_MATRIX) };
}

function makeMatrix(matrixSize: number): GameMatrix {
	const matrix: GameMatrix = new Array(matrixSize).fill(0);

	enrichMatrixByCells(matrix, matrixSize);
	enrichMatrixCells(matrix, matrixSize);

	return matrix;
}

function enrichMatrixByCells(matrix: GameMatrix, matrixSize: number): void {
	matrix.forEach((_, index) => {
		matrix[index] = makeMatrixRow(index, matrixSize);
	});
}

function makeMatrixRow(rowIndex: number, matrixSize: number): GameRow {
	const row: GameRow = [];
	for (let i = 0; i < matrixSize; i++) {
		row.push({
			coords: [rowIndex, i],
			isOpen: false,
			number: 0,
		});
	}

	return row;
}

function enrichMatrixCells(matrix: GameMatrix, matrixSize: number): void {
	const bombsCoords = getRandomCoordsIncluded(0, matrixSize - 1, matrixSize + 1);

	for (let coords of bombsCoords) {
		const topRowSibling = matrix[coords[0] - 1] ?? null;
		const bottomRowSibling = matrix[coords[0] + 1] ?? null;
		const bombRow = matrix[coords[0]];

		matrix[coords[0]][coords[1]].isBomb = true;

		if (topRowSibling) adjustCellsNumber(topRowSibling, coords[1]);
		if (bottomRowSibling) adjustCellsNumber(bottomRowSibling, coords[1]);
		adjustCellsNumber(bombRow, coords[1]);
	}
}

function adjustCellsNumber(row: GameRow, bombIndex: number): void {
	if (row[bombIndex - 1]) row[bombIndex - 1].number += 1;
	if (row[bombIndex + 1]) row[bombIndex + 1].number += 1;
	if (row[bombIndex] && !row[bombIndex].isBomb) row[bombIndex].number += 1;
}
