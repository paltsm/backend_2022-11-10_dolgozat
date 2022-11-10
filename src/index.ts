// import {Artwork} from "./artwork"
export interface Artwork{
	title: string;
	year: Date;
	price: number;
}

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