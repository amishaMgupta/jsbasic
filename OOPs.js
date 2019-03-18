/*
* Objects in Js
*/
// Way 1
// let car = new Object();
// car.name = "BMW";
// car.price = () => {
//     console.log(car);
    
//     console.log("name of the car is ",car.name);
    
//     const baseprice = 120000;
//     const tax = 30000;
//     return baseprice+tax;
// }
// console.log(car.name);

// console.log(car['price']());

// Way 2

// let car = {
//     name : 'BMW',
//     price : () => {
//         const baseprice = 120000;
//         const tax = 30000;
//         return baseprice+tax;
//     }
// }
// console.log(car);
// car.type = "xx";
// console.log(car);

//way 3
// function car(){
//     console.log("inside car");
    
// }
// var data = new car();
// console.log(data);

//way 4
// function car (){
//     this.name = "BMW";
//     this.type = "xx";
//     this.price = () => {
//                 console.log(this);
                
//                  const baseprice = 120000;
//                  const tax = 30000;
//                  return baseprice+tax;
//              };
//     this.check = {as : "yyy"};
// }
// const obj = new car();
// console.log(obj.price());
// console.log(as);

// way 5

const car = () => {
    ({
    name : "BMW",
    price : () => {
        console.log('from inner function');
        
    }   
}).price();
console.log(this.price());

}
console.log(car());

