function obterPrimeiraPosicao<T>(array: T[]): T {
	return array[0];
}

interface IListDatabase<T> {
	list: T[];
	total: number;
}

///

class Planta {}

class Arvore extends Planta {
	a(): void {}
}
class Grama extends Planta {
	b(): void {}
}

class ListDatabase<T extends Planta> {
	constructor(
		list: T[],
		total: number
	) { }
}

const list: Arvore[] = [];
const listDatabase = new ListDatabase<Arvore>(list, 0);
