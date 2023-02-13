class Rectangle {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    }
    // Getter
    get areaArr() {
        return this.calcAreaArr();
    }
    // Method
    calcAreaArr = () => this.height * this.width;

    get areaFun() {
        return this.calcAreaFun();
    }
    // Method
    calcAreaFun() { return this.height * this.width;}

    *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
    }
}

const square = new Rectangle(10, 10);


const obj = {
    altezza: 10,
    larghezza:10,
    areaFun: function(){
        return this.altezza * this.larghezza;
    },
    areaArr: () => {
        return this.altezza * this.larghezza
        },
}

this.altezza = 10;
this.larghezza = 10;

const formula = obj.areaFun.bind(obj);
const formulaArr = obj.areaArr;

console.log(square.areaArr);
console.log(square.areaFun)
console.log(formula());
console.log(formulaArr());

// const modulo = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// };
  
//   const unboundGetX = modulo.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   // Expected output: undefined
  
//   const boundGetX = unboundGetX.bind(modulo);
//   console.log(boundGetX());
//   // Expected output: 42