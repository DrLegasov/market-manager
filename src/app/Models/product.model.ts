export class Product {

  private _id: number;
  private _name: string;
  private _status: string;

  static productlength = 1;

  constructor(name: string, status: string) {
    this._id = Product.productlength;
    this._name = name;
    this._status = status;

    Product.productlength++;
  }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

}
