export function getRandomCoordsIncluded(min: number, max: number, amount: number): [number, number][] {
	min = Math.ceil(min);
	max = Math.floor(max);
	const numbers: [number, number][] = [];

	for (let i = 0; i < amount; i++) {
		numbers.push([
			Math.floor(Math.random() * (max - min + 1) + min),
			Math.floor(Math.random() * (max - min + 1) + min),
		]);
	}

	return numbers;
}
