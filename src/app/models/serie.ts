export class Serie {
    constructor(private _id : number, private _title : string, private _description: string, 
        private _startYearPublication: number, private _thumbnailPath: string, private _thumbnailExtension: string){}
   
    public get id(): number {
        return this._id;
    }
    public get title(): string {
        return this._title;
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
    public set title(value: string) {
        this._title = value;
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
    public get startYearPublication(): number {
        return this._startYearPublication;
    }
    public set startYearPublication(value: number) {
        this._startYearPublication = value;
    }

}
