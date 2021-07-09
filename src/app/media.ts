export class Media {
  constructor(
    public Media_id: string,
    public Thumbnail:string,
    public Media_link:string,
    public Title:string,
    public created_on: Date,
    public Description:string,
    public like_by_user:string,
    public popularity: number,
  ){
  }
}
