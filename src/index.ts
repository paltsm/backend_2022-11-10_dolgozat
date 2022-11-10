import {Artwork} from "./Artwork"

class Statue implements Artwork{
	title: string;
	year: number;
	price: number;
	height: number;

	constructor(title: string,year:number,price:number,height:number){
		this.title=title;
		this.year=year;
		this.price=price;
		this.height=height;
	}
	
}
let artworks : Artwork[]=[];

function felvetel() {
	// let aa = (document.getElementById('title') as HTMLInputElement).value;
	// (document.getElementById('kimenet') as HTMLElement).textContent = aa;
	title();
	year();
	price();
	height();
}
function title() : boolean{
	let title = (document.getElementById('title') as HTMLInputElement).value;
	if (title==null){
		return false;
	}else{
		let reg:RegExp=/[a-z ,-]+/g;
		// console.log(reg.test(title))
		return reg.test(title);

	}
}
function year(){
	console.log("---year")
	let year =parseInt((document.getElementById('year') as HTMLInputElement).value);
	if(year>2022){
		return false;
	}else{
		console.log(year<2022);
		return true;
	}
}
function price(){
	console.log("---price")
}
function height(){
	console.log("---height")
}


function init() {
	// document.getElementById('title')?.addEventListener('input', test);
	document.getElementById('felvetel')?.addEventListener('click', felvetel);
}

document.addEventListener('DOMContentLoaded', init);