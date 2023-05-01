// Set variables

const form = document.getElementById("emailform");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Once the submit button is clicked the following will occur
form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkValues();

    if((userName.value !== "") && (email.value !== "") && (message.value !== "")) {
        form.submit();
        console.log("Form Submitted!");
        alert("Form Submitted!");
    } 
   
});

function checkValues() {
    let userNameValue = userName.value;
    let emailValue = email.value;
    let subjectValue = subject.value;
    let messageValue = message.value;

    let nameError = document.querySelector(".name-error");
    let emailError = document.querySelector(".email-error");
    let subjectError = document.querySelector(".subject-error");
    let messageError = document.querySelector(".message-error");


// First Name Logic

if(userNameValue == "") {
    console.log("its working");
    userName.style.backgroundColor = "#EE76CA";
    // userName.style.boxShadow =  1px 4px 4px var(--black);
    nameError.innerText = "Please enter your name.";
} else {
    userName.style.backgroundColor = "#4f4f4f";
    nameError.innerText = "";
}

if(emailValue == "") {
    console.log("its working");
    email.style.backgroundColor = "#EE76CA";
    emailError.innerText = "Please enter a valid email.";
} else {
    email.style.backgroundColor = "#4f4f4f";
    emailError.innerText = "";
}

if(subjectValue == "") {
    console.log("its working");
    subject.style.backgroundColor = "#EE76CA";
    subjectError.innerText = "Please enter your email.";
} else {
    subject.style.backgroundColor = "#4f4f4f";
    subjectError.innerText = "";
}

if(messageValue == "") {
    console.log("its working");
    message.style.backgroundColor = "#EE76CA";
    messageError.innerText = "Please enter a message.";
} else {
    message.style.backgroundColor = "#4f4f4f";
    messageError.innerText = "";
}

}