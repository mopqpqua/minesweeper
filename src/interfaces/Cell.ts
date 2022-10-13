export interface Cell {
	coords: [number, number];
	isOpen: boolean;
	number: number;
	isBomb?: true;
}
