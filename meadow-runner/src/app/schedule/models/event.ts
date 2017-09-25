export class Event {
  constructor(
    public id:number,
    public title: string,
    public start: string,
    public end: string,
    public hasTime: boolean,
    public backgroundColor:string

) { }
}