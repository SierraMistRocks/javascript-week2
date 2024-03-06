// while (true) {
//     console.log('infinite loop');
// }

// while (false) {
//     console.log('this never runs');
// }

// while loop example
// let burgersEaten = 0;

// function eatBurger(index) {
//     console.log('om nom nom x ' + index);
// }

// while (burgersEaten > 10) {
//     eatBurger(burgersEaten);
//     burgersEaten++; //burgersEaten = burgersEaten + 1;
// } 

// do while loop example
// let friesEaten = 0;

// function eatFry() {
//     console.log('om nom nom');
// }

// do {
//     eatFry();
//     //friesEaten++; //removing the increment, which is part of the loop condition, causes an infinite loop
// } while (friesEaten < 1)

// let x1 = Math.random();
// let x2 = Math.random() * 10;
// let x3 = Math.round(Math.random() * 10); //9.5
// let x4 = Math.floor(Math.random() * 10);

// while loop part 2
// let arrived = false;

// function drive() {
//     console.log('on the road again');
//     let GPS = Math.round(Math.random() * 10) == 7;
//     if (GPS) {
//         arrived = true;
//     } 
// }

// while (!arrived) {
//     drive();
// }
// console.log('You have arrived');

// students.infinity = Number.MAX_SAFE_INTEGER;
// console.log(students.infinity);

/*let students = ['Arlindo', 'Dom', 'Ebony', 'JR', 'Brian'];
for (let index = 0; index < students.length; index++) {
    console.log("Name: " + students[index] + " at index[" + index + "]");
    /*if (index == 0) {
        console.log('this is an abstract name, no actual student is being referenced for respect of person');
    } else if (index == 1) {
        console.log('Sup Dom, when is Fast 11 coming out?');
    } else if (index == 2) {
        console.log("What's lunch today?");
    } else if (index == 3) {
        console.log("When's the internship starting?");
    } else if (index == 4) {
        console.log("ummmmmmm");
        console.log("Did you buy some Bitcoin today?");
    }*/
/*}
console.log('The countdown begins now');
for (let index = students.length; index >= 0; index--) {
    console.log("Name: " + students[index] + " at index[" + index + "]");
}
console.log('Iterate by 2') //index = index + 2
for (let index = 0; index < students.length; index += 2) {
    console.log("Name: " + students[index] + " at index[" + index + "]");
}
console.log('log odd index students');
for(let index = 0; index < students.length; index++) {
    if (index % 2 == 1) {
        console.log("Name: " + students[index] + " at index[" + index + "]");
    }
}
console.log('log even indexs');
for (let index = 0; index < students.length; index++) {
    if (index % 2 == 0) {
        console.log("Name: " + students[index] + " at index[" + index + "]");
    }
}*/


