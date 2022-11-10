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
artworks.push(new Statue("test",1234,1234,1234))

function felvetel() {
	let title = (document.getElementById('title') as HTMLInputElement).value;
	let year =parseInt((document.getElementById('year') as HTMLInputElement).value);
	let price =parseInt((document.getElementById('price') as HTMLInputElement).value);
	let height =parseInt((document.getElementById('height') as HTMLInputElement).value);
	console.log("ssssssssssssssssssss");
	// titlef();
	// yearf();
	// pricef();
	// heightf();
	if(titlef() && yearf() && pricef() && heightf()){
		artworks.push(new Statue(title,year,price,height));
		for(let a of artworks){
			console.log(a);
		}
	}else{
		console.log("hulye");
	}
}
function titlef() : boolean{
	console.log("---title")
	let title = (document.getElementById('title') as HTMLInputElement).value;
	if (title==null){
		return false;
	}else{
		let reg:RegExp=/[a-z ,-]+/g;
		console.log(reg.test(title));
		console.log("t");
		return reg.test(title);

	}
}
function yearf() : boolean{
	console.log("---year")
	let year =parseInt((document.getElementById('year') as HTMLInputElement).value);
	
	if(year<2023){
		console.log(year<2023);
		console.log("y");
		return true;
	}else{
		console.log(year<2023);
		console.log("y");
		return false;
	}
}
function pricef() : boolean{
	console.log("---price")
	let price =parseInt((document.getElementById('price') as HTMLInputElement).value);
	
	if(price>0){
		console.log(price>0);
		console.log("p");
		return true;
	}else{
		console.log(price>0);
		console.log("p");
		return false;
	}
}
function heightf() : boolean{
	console.log("---height");
	let height =parseInt((document.getElementById('height') as HTMLInputElement).value);
	
	if(height>19){
		console.log(height>19);
		console.log("h");
		return true;
	}else{
		console.log(height>19);
		console.log("h");
		return false;
	}
}


function init() {
	// document.getElementById('title')?.addEventListener('input', test);
	document.getElementById('felvetel')?.addEventListener('click', felvetel);
}

document.addEventListener('DOMContentLoaded', init);