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

function test() {
	let aa = (document.getElementById('title') as HTMLInputElement).value;
	(document.getElementById('kimenet') as HTMLElement).textContent = aa;
}

function init() {
	// document.getElementById('title')?.addEventListener('input', test);
	document.getElementById('felvetel')?.addEventListener('click', test);
}

document.addEventListener('DOMContentLoaded', init);