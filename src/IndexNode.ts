export class IndexNode {
	public readonly previousNode: IndexNode | null;
	public readonly nextNode: IndexNode | null;
	public readonly value: number | null;
	constructor(value: number | null, previousNode: IndexNode | null, nextNode: IndexNode | null) {
		this.value = value;
		this.previousNode = previousNode;
		this.nextNode = nextNode;
	}
}