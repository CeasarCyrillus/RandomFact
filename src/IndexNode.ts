export class IndexNode {
	public readonly previousNode: number | null;
	public readonly nextNode: number | null;
	constructor(previousIndex: number | null, nextIndex: number | null) {
		this.previousNode = previousIndex;
		this.nextNode = nextIndex;
	}
}