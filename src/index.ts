import {Artwork} from "./Artwork"

class Statue implements Artwork{
	title: string;
	year: Date;
	price: number;
	height: number;

	constructor(title: string,year:Date,price:number,height:number){
		this.title=title;
		this.year=year;
		this.price=price;
		this.height=height;
	}
	
}
let artworks : Artwork[]=[];
