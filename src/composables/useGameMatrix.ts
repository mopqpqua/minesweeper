import { reactive } from 'vue';
import { GameSize } from '@apptypes/GameSize';
import { GameRow } from '@apptypes/GameRow';
import { GameMatrix } from '@apptypes/GameMatrix';
import { Cell, BombCell, RegularCell } from '@interfaces/Cells';

export function useGameMatrix(gameSize: GameSize) {
	const MATRIX_SIZE: number = Math.sqrt(gameSize);
	const GAME_MATRIX: GameMatrix = makeMatrix(MATRIX_SIZE);

	console.log(GAME_MATRIX);

	return { GAME_MATRIX }
};

function makeMatrix(matrixSize: number): GameMatrix {
	const rows: GameRow[] = new Array(matrixSize).fill(0);
	return rows.map((_, index) => {
		return enrichRow([], index, matrixSize);
	});
}

function enrichRow(row: GameRow, rowIndex: number, matrixSize: number): GameRow {
	for (let i = 0; i < matrixSize; i++) {
		row.push({
			coords: [rowIndex, i],
			isOpen: false,
		});
	}

	return row;
};
