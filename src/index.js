"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
}
let artworks = [];
artworks.push(new Statue("test", 1234, 1234, 1234));
function felvetel() {
    let title = document.getElementById('title').value;
    let year = parseInt(document.getElementById('year').value);
    let price = parseInt(document.getElementById('price').value);
    let height = parseInt(document.getElementById('height').value);
    console.log("ssssssssssssssssssss");
    // titlef();
    // yearf();
    // pricef();
    // heightf();
    if (titlef() && yearf() && pricef() && heightf()) {
        artworks.push(new Statue(title, year, price, height));
        for (let a of artworks) {
            console.log(a);
        }
    }
    else {
        console.log("hulye");
    }
}
function titlef() {
    console.log("---title");
    let title = document.getElementById('title').value;
    if (title == null) {
        return false;
    }
    else {
        let reg = /[a-z ,-]+/g;
        console.log(reg.test(title));
        console.log("t");
        return reg.test(title);
    }
}
function yearf() {
    console.log("---year");
    let year = parseInt(document.getElementById('year').value);
    if (year < 2023) {
        console.log(year < 2023);
        console.log("y");
        return true;
    }
    else {
        console.log(year < 2023);
        console.log("y");
        return false;
    }
}
function pricef() {
    console.log("---price");
    let price = parseInt(document.getElementById('price').value);
    if (price > 0) {
        console.log(price > 0);
        console.log("p");
        return true;
    }
    else {
        console.log(price > 0);
        console.log("p");
        return false;
    }
}
function heightf() {
    console.log("---height");
    let height = parseInt(document.getElementById('height').value);
    if (height > 19) {
        console.log(height > 19);
        console.log("h");
        return true;
    }
    else {
        console.log(height > 19);
        console.log("h");
        return false;
    }
}
function init() {
    var _a;
    // document.getElementById('title')?.addEventListener('input', test);
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', felvetel);
}
document.addEventListener('DOMContentLoaded', init);
