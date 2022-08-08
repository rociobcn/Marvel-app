export class Personaje {
    constructor(private _id : number, private _name : string, private _description: string, 
        private _thumbnailPath: string, private _thumbnailExtension: string){

    }
    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get description(): string {
        return this._description;
    }
    public get thumbnailPath(): string {
        return this._thumbnailPath;
    }
    public get thumbnailExtension(): string {
        return this._thumbnailExtension;
    }
    public get thumbnail(): string {
        return this._thumbnailPath + "." + this._thumbnailExtension;
    }
    public set id(value: number) {
        this._id = value;
    }
    public set name(value: string) {
        this._name = value;
    }
    public set description(value: string) {
        this._description = value;
    }
    public set thumbnailPath(value: string) {
        this._thumbnailPath = value;
    }
    public set thumbnailExtension(value: string) {
        this._thumbnailExtension = value;
    }
  
}
