"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    // above is a shorthand equivalent to below code:
    // collection: number[]
    // constructor(collection: number[]) {
    //   this.collection = collection
    // }
    Sorter.prototype.sort = function () { };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
