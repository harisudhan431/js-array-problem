
// 1.Array  Creation and Intialization
let arr =[1,2,3,4,5,6];
console.log(arr);

// 2.Array Manipulation
let arr1=[1,2,3,4,5]
arr1.push(12);
console.log (arr1);
arr1.pop();
console.log(arr1);

//3. Array Searching 
let arr2=[12,24,56,78,99];
console.log(arr2.indexOf(12));

console.log(arr2.includes(55));

//4. Array Sorting
function sorting(arr3){
    console.log(arr3.sort())
    console.log(arr3.reverse());
}
let arr3=[1,43,55,65,1,2];
sorting(arr3);

// 5.Array Joining
// 
const names = ["Hari", "Sudhan", "Pon", "Venkadesh"];
let text = names.join();
console.log(text);
let names2="I am student of Hindusthan";
console.log(names2.split(" "));

// 6. Array MAX and MIN 
function maxormin(arr6){
    console.log(Math.max(...arr6));
    console.log(Math.min(...arr6));

}
let arr6=[23,45,67,89,1,99];
maxormin(arr6);
//7. Array Map
const arr7=[1,2,3,4,5];
const nam=arr7.map(num=>num*3);
console.log(nam);

// 8.Array spreading
let ar1=[1,8,3];
let ar2=[4,5,2];
ar1=[...ar1,...ar2];
console.log(ar1);

// 9.Merge array
const ar3 = ["Hari", "Sudhan"];
const ar4 = ["Email", "Gmail", "Linus"];
const ch = ar3.concat(ar4);
console.log(ch);

// 10.Array Filter
let num=[1,2,33,45,67,889,12];
let grt=num.filter(num=>num<46);
console.log(grt);

// 11.Filter Array
let nums=['Harish','Kabil','Hesvanth','Afsal','Sudhan'];
let six=nums.filter(nums=>nums.length<6);
console.log(six);

// 12. Check the Element present in Array
function check( arr,target){
    let flag=0;
    for(let i=0;i<arr.length;i++)
        if(arr[i]===target){
            console.log("Element found in",i);
            flag=1;
            break;
        }
        if(flag==0)
            console.log("Element not in the array")
}
check(num,889);

// 13. Array Duplication

let arrays=[1,2,5,4,3,1,9,8,4,2];
let newarr =[...new Set(arrays)];
console.log(newarr);

//14 Array slice
let a=[1,3,5,67,34];
let b=a.slice(0,3);
console.log(b);

// 15.Flattening Array

let c=[1,[5,8],[4,[2,6],[10]]];
let d=c.flat(2);
console.log(d);

//16. Index of First Occurance
function firstoccurance(arr,target){

for (let i = 0; i < arr.length; ++i) {

    if (arr[i] === target) {
        console.log(
            "First index of " + target + " is: " + i
        );
        return;
    }
}

console.log(target + " is not present in the given array");
}

let e=[1,5,9,8,7,5,4,5,7,2,1,2,9];
firstoccurance(e,2);