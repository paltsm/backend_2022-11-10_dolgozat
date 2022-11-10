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
function test() {
    let aa = document.getElementById('title').value;
    document.getElementById('kimenet').textContent = aa;
}
function init() {
    var _a;
    // document.getElementById('title')?.addEventListener('input', test);
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', test);
}
document.addEventListener('DOMContentLoaded', init);
