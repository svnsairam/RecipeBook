export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    constructor(name:string,des:string,path:string){
        this.name = name;
        this.description = des;
        this.imagePath = path;
    }
}