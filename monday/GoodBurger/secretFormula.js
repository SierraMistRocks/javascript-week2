// add an eventlistener to the submit button
/*let orderButton = document.getElementById('orderButton');
// let orderButton = document.querySelector('#orderButton');
// let orderButton = document.querySelector("input[type='submit']");
// let orderButton = document.querySelector("input[value='Place Order']");
let form =  document.getElementsByTagName('form')[0];

form.addEventListener('submit', function(event){
    event.preventDefault();
    let burger = {};
    // console.log(form);
    if (form.meat.value > 2) {
        console.log('You ordered a big back burger');
    } else if (form.meat.value == 2) {
        console.log('You ordered a double burger');
    } else if (form.meat.value <= 0) {
        console.log('You order a Vegan Burger');
    } else {
        console.log('You ordered a burger');
    }

    if (form.onions.value == "no onions") {
        console.log('without onions');
    } else if (form.onions.value == "onions") {
        console.log('with onions');
    }

    if (form.pickles.value == "pickles") {
        console.log('with pickles');
    } else {
        console.log('without pickles');
    }

    if (form.meat.value <= 0) {
        if (confirm('Are you sure you want Cheese, Egg, and Bacon on your Vegan Burger?')) {
            console.log('with cheese, egg, and bacon');
        } else {
            console.log('only Vegan Toppings');
        }
    } else {
        console.log(form.cheese.value == "cheese" ? "with cheese" : "without cheese");
        console.log(form.egg.value == "egg" ? "with egg" : "without egg");
        console.log(form.bacon.value == "bacon" ? "with bacon" : "without bacon");

    }
    console.log(drink);
});

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     switch (parseInt(form.meat.value)) {
//         case 100:
//             console.log('You ordered a big back burger');
//         case 2:
//             console.log('You ordered a double burger');
//             break;
//         case 1:
//             console.log('You ordered a burger');
//             break;
//         default:
//             console.log('You ordered a vegan burger');
//             break;
//     }
// });*/