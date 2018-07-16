export class User {
	private id:number
	private name:string
	private type:{name:string, id:number}

	constructor (
		obj: {
			id:number,
			name:string
		}
	) {
		this.id = obj.id
		this.name = obj.name
	}

	public setName = (name) => {
		this.name = name
		return this
	}

	public getName = () => {
		return this.name
	}

	public setId = (id) => {
		this.id = id
		return this
	}

	public getId = () => {
		return this.id
	}
}
