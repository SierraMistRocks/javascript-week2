
let formHTML = document.getElementById('form')

  document.addEventListener("DOMContentLoaded", () => {
    const formHTML = document.getElementById("form");
    formHTML.addEventListener("submit", function (){
    Event.preventDefault()
    let randomDecimalBetween0and200 = Math.random() * 200
    let randomWholeBetween0and200 = Math.floor(randomDecimalBetween0and200)
    console.log(randomWholeBetween0and200)

    let subjectInputHTML = document.getElementById("subject")
    let subjectinput = subjectInputHTML.value + " #" + randomWholeBetween0and200

    let emailInputHTML = document.getElementById("email")
    let emailinput = emailInputHTML.value

    let bodyInputHTML = document.getElementById("body")
    let bodyinput = bodyInputHTML

    window.location.href = `mailto:mariatalbert@gmail.com?subject=${subjectinput}&cc=${emailinput}&body=${bodyinput}`
});
  });

if (formHTML) {
    formHTML.addEventListener('submit', () => {
      console.log('You visited the link');
    });
  } else {
    console.log('You failed to retrieve the element.')
  }
