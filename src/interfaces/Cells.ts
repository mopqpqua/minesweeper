export interface Cell {
	coords: [number, number];
	isOpen: boolean;
}

export interface BombCell extends Cell {
	isBomb: true;
}

export interface RegularCell extends Cell {
	number: number;
}
