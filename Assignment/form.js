

  document.addEventListener("DOMContentLoaded", function() {
    const formHTML = document.getElementById("form");

    formHTML.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementsByName('body').value;

        const randomNumber = Math.floor(Math.random() * 10000);

        const subject = `Inquiry #${randomNumber}`;
        const emailBody = `Message: ${message}`;

        const mailtoLink = `mailto:mariatalbert@gmail.com?cc=whereiswaldo@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        errorMessage.textContent = 'Your message has been sent successfully. Redirecting to homepage...';

        if (mailtoLink) {
            setTimeout(function() {
        window.location.href = 'landingpage.html';
        }, 5000);
    }
});
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    /*});

  formHTML.addEventListener("submit", function (){
    Event.preventDefault()
    let randomDecimalBetween0and200 = Math.random() * 200
    let randomWholeBetween0and200 = Math.floor(randomDecimalBetween0and200)
    console.log(randomWholeBetween0and200)
});

let subjectInputHTML = document.getElementById("subject")
    let subjectinput = subjectInputHTML.value + " #" + randomWholeBetween0and200

    let emailInputHTML = document.getElementById("email")
    let emailinput = emailInputHTML.value

    let bodyInputHTML = document.getElementById("body")
    let bodyinput = bodyInputHTML

    window.location.href = `mailto:mariatalbert@gmail.com?subject=${subjectinput}&cc=${emailinput}&body=${bodyinput*/