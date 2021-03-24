export class Note {
    id:number;
    title:string;
    text:string;


    constructor(){
        this.id=Math.random()
        this.title=""
        this.text=""
    }
}
