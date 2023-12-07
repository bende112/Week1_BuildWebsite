// const form = document.getElementById("loginForm");

// function handleSubmit(event) {
//   event.preventDefault();

//   // one way to get the info from the form
//   const userEmail = event.target.userEmail.value;
//   const userPassword = event.target.userPassword.value;

//   // the other way to retrieve the data is with FormData
//   const formData = new FormData(form); // Create a new FormData object from our form element
//   const formValues = Object.fromEntries(formData); // Convert the FormData fields into an object
//   console.log(formValues);
//   // send email check the database for the user and password
// }

const form = document.querySelector("form");

form.addEventListener("submit", "Cancel" ,(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
});

form.addEventListener("submit", handleSubmit);
