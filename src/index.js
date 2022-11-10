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
function felvetel() {
    // let aa = (document.getElementById('title') as HTMLInputElement).value;
    // (document.getElementById('kimenet') as HTMLElement).textContent = aa;
    title();
    year();
    price();
    height();
}
function title() {
    let title = document.getElementById('title').value;
    if (title == null) {
        return false;
    }
    else {
        let reg = /[a-z ,-]+/g;
        // console.log(reg.test(title))
        return reg.test(title);
    }
}
function year() {
    console.log("---year");
    let year = parseInt(document.getElementById('year').value);
    if (year > 2022) {
        return false;
    }
    else {
        console.log(year < 2022);
        return true;
    }
}
function price() {
    console.log("---price");
}
function height() {
    console.log("---height");
}
function init() {
    var _a;
    // document.getElementById('title')?.addEventListener('input', test);
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', felvetel);
}
document.addEventListener('DOMContentLoaded', init);
