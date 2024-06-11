const arr1=[5,1,3,2,4,6];

/*const res= arr1.filter((x) => x >4);
console.log(res);*/

//Reduce Funtn

//sum or max
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));  

const res= arr.reduce(function(acc,curr){
acc = acc +curr;
return acc;
},0);
console.log(res); 


const out = arr.reduce(function(max,curr){
if(curr > max){
    max=curr;
}
return max;
},0);
console.log(out);

const users=[
    {firstName: "Bhavana", lastName:"mahagoan",age:18},
    {firstName: "arun", lastName:"kere",age:28},
    {firstName: "Vaibhava", lastName:"mahagoan",age:28},
    {firstName: "Chentu", lastName:"maha",age:10},
];
//map prg
const val=users.map((x) => x.firstName+" "+x.lastName+" "+x.age);
console.log(val);
//Reduce porg
const values=users.reduce(function(acc, curr){
if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
}else{
    acc[curr.age]=1;
}
return acc;
},{});
console.log(values);

//filter prg
const vall= users.filter((x) => x.age<25).map((x) => x.firstName);
console.log(vall);
