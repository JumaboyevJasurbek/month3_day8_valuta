// 1-misol

// let h = parseInt(prompt("1 son"));
// let g = parseInt(prompt("2 son"));



// function addNumbers(a,d) {
//     console.log(a + d);
// }

// addNumbers(h, g);

// if (NaN || addNumbers) {
//     console.log("salom");
// }


// 2-misol


// let h = parseInt(prompt("1 son"));
// let g = parseInt(prompt("2 son"));
// let d = parseInt(prompt("3 son"));



// function son(a,b,c) {
//     console.log((a+b)/c);
// }
// son (h,g,d);




// 3-misol

// function son(a,b) {
//     return Math.round((a+b)/2)
// }
// let number1 = son(23,23);

// console.log(number1);



// uy ishi 1


function valuta(son,qiymati) {
    if (qiymati === "d") {
        return son * 0.000088;
    }
    if (qiymati=== "r") {
        return son * 0.0074;
    }
}

let son = Number(prompt("Kerak bo'lgan sum qiymatini kiriting"))

let qiymat = prompt("qaysi valyutaga otqizmoqchisiz dollor (d) yoki rubl (r)")

valuta (son,qiymat)

console.log(valuta(son,qiymat));


// uy ishi 2


let son1 = prompt(("Random son"), Math.round(Math.random()*1000000 + 1));
