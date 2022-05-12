function circle(r) {
    
    this.r = r;

    this.getArea = function () {
        return  Math.PI * Math.pow(this.radius, 2);
    };

    this.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
let result = new circle(2);
console.log('Area =', result.getArea().toFixed(2));
console.log('perimeter =', result.getPerimeter().toFixed(2));

