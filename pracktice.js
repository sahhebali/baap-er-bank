
function serToMoon(ser) {
    if (ser < 0) {
        return "wrong input"
    }
    const mon = ser / 40;
    return mon;
}

// console.log(serToMoon(500));
// console.log("validition check", serToMoon(-500));

function totalSelse(shirt, pant, shoes) {
    if (shirt < 0 || pant < 0 || shoes < 0) {
        return "negetive valu cnat'n accept";
    }
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;

    const total = shirt * shirtPrice + pant * pantPrice + shoes * shoesPrice;
    return total;
}
// console.log(totalSelse(1, -1, 1));
// console.log(totalSelse(10, 5, 10));
// console.log(totalSelse(7, 9, 8));

function delivaryCost(num) {
    const first100 = 100;
    const second100 = 80;
    const rest50 = 50
    if (num >= 0 && num <= 100) {
        return num * first100;
    }
    else if (num > 100 && num <= 200) {
        const fast100Coast = 100 * first100;
        console.log(fast100Coast);
        const rest100 = (num - 100) * second100;
        // const second100Coast = rest100 * second100
        return fast100Coast + rest100;
    }

    else if (num > 200) {
        const fast100Coast = 100 * first100;
        const second100Coast = 100 * second100;
        const rest200 = (num - 200) * rest50;
        return fast100Coast + second100Coast + rest200;
    }
    else {
        return "invalid input";
    }
}
console.log(delivaryCost(101));
console.log(delivaryCost(200));
console.log(delivaryCost(201));
// console.log(delivaryCost(-1));(bujte hobe kal )

function frindsname(arr) {
    if(arr.length==0){
        return "plz enter a valid array";
    }
    for (const i = 0; i < arr.length; i++) {
        const name = arr[0];
        if (name.length == 5) {
            return name;
        }
    }
}
const frinds = ["abcdef", "abc", "abcdf", "abcd"];
console.log(frinds);