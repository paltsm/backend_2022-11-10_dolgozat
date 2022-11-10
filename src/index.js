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
}
function title() {
    let title = document.getElementById('kimenet').textContent;
    if (title == null) {
        // (document.getElementById('kimenet') as HTMLElement).textContent = "hulye";
        return false;
    }
    else {
        // (document.getElementById('kimenet') as HTMLElement).textContent = "sksks";
        let reg = /[a-z ,-]+/g;
        console.log(reg.test(title));
        return reg.test(title);
    }
}
function year() {
    console.log("okos");
}
function price() {
}
function height() {
}
function init() {
    var _a;
    // document.getElementById('title')?.addEventListener('input', test);
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', felvetel);
}
document.addEventListener('DOMContentLoaded', init);
