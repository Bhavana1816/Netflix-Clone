const radius =[3,1,2,4];

const area=function(radius){
    return Math.PI* radius * radius;
};

const circumfernce=function(radius){
    return 2*Math.PI*radius;
};

const Diameter= function(radius){
    return 2* radius;
}
const Calculate = function(radius, logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(Calculate(radius,area));
console.log(Calculate(radius,circumfernce));
console.log(Calculate(radius,Diameter));