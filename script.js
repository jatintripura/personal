const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");
  const errorInput = document.getElementById("error-text");
  const formInput = document.getElementById("form-data");

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    formInput.innerHTML = "Form Submitted Successfully";
    errorInput.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    emailjs.send(
      "service_1234test",
      "My_email_js_11",
      templateParams,
      "rcxZ88zFSzYRW9byq"
    );
    console.log(nameValue,emailValue,messageValue);
  } else {
    errorInput.innerHTML = "Please fill all the form";
    formInput.innerHTML = "";
  }
});
console.log("Thank You");