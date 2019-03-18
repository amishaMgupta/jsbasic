/**
 * Functions in js
 * 1. Functions are the first class member in js
 */
// Way 1

// function add(){
//     console.log("hello Functions");
    
//  }
//  add();

//way 2

// const add = function (){
//     console.log("hello");
//     return "check"
// }
//add();
//add;
//console.log(add);
//console.log(add());

//way 3
 //Arrow Function
// const add = () => {return "hello"} ;
// add();

// const add = () => {
//     return "hello";
// }

// const add = (x=1,y=12,z) =>{
//   //  console.log("from add(12)");
//     return x+x;
    
// }
// console.log(add(13));

// const add = (x) => x+x;

// console.log(add(12));
/**
 * Function as a parameter
 */
// const add = () => {
//     console.log("From Add");
// }
// const check = (cb) => {
//     console.log("From check");
//     cb();
// }

// const add = (x) => {
//     console.log(x);
    
// };

// const check = (cb,x) => {
//     //const x= "from add";
//     console.log("from check");
//     cb(x);
//   //  cb1("this");
// } 

// check(add);

const check = (cb) => {
    const y ="hello"
    console.log("Hello Check");
    cb(12);
    
};

check((data) => {
    console.log(data);
    
});















