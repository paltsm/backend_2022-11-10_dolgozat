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
}
function title() : boolean{
	let title = (document.getElementById('kimenet') as HTMLElement).textContent;
	if (title==null){
		// (document.getElementById('kimenet') as HTMLElement).textContent = "hulye";
		return false;
	}else{
		// (document.getElementById('kimenet') as HTMLElement).textContent = "sksks";
		let reg:RegExp=/[a-z ,-]+/g;
		console.log(reg.test(title));
		return reg.test(title);

	}
}
function year(){
	console.log("okos")
}
function price(){

}
function height(){

}


function init() {
	// document.getElementById('title')?.addEventListener('input', test);
	document.getElementById('felvetel')?.addEventListener('click', felvetel);
}

document.addEventListener('DOMContentLoaded', init);