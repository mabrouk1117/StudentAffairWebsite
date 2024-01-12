// const submitbtn = document.querySelector("#Register"); // Change the ID to "add"
// const id = document.getElementById("id");
// let flag = 0;

// submitbtn.addEventListener("click", function (event) {
//     flag = 1;
//     event.preventDefault();

//     $(document).ready(function () {
//         $.ajax({
//             type: "GET",
//             url: "{% url 'getstudents' %}",
//             success: function (response) {
//                 for (var key in response.Data) {
//                     if (id.value == response.Data[key].student_id) {
//                         flag = 0;
//                         break;
//                     }
//                 }
//                 if (flag == 0) { // Invert the flag check
//                     alert("User ID already exists"); // Change the alert message
//                 } else {
//                     const ID = document.getElementById("id");
//                     const studentName = document.getElementById("name");
//                     const phoneNumber = document.getElementById("number");
//                     const email = document.getElementById("email");
//                     const address = document.getElementById("address");
//                     const level = document.getElementById("level");
//                     const gpa = document.getElementById("gpa");

//                     // Validation functions
//                     const isValidEmail = email => {
//                         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                         return re.test(String(email).toLowerCase());
//                     };

//                     const isValidPhoneNumber = phoneNumber => {
//                         const regex = /^(\+)?(\d{1,2})?(\s)?((\d{3})|(\(\d{3}\)))?(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
//                         return regex.test(phoneNumber);
//                     };

//                     const hasOnlyDigits = str => {
//                         const regex = /^\d{8}$/;
//                         return regex.test(str);
//                     };

//                     function isValidName(name) {
//                         let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
//                         return nameRegex.test(name);
//                     }

//                     // Perform data validation
//                     if (
//                         ID.value === "" ||
//                         email.value === "" ||
//                         studentName.value === "" ||
//                         phoneNumber.value === "" ||
//                         address.value === "" ||
//                         level.value === ""
//                     ) {
//                         alert("Data is not complete");
//                         return false;
//                     }

//                     if (!hasOnlyDigits(ID.value) || ID.value.length < 5 || ID.value.length > 20) {
//                         alert("Enter a valid ID containing only numbers between 5 and 20 characters in length");
//                         return false;
//                     }

//                     if (!isValidEmail(email.value)) {
//                         alert("Enter a valid email");
//                         return false;
//                     }

//                     if (!isValidPhoneNumber(phoneNumber.value)) {
//                         alert("Enter a valid phone number");
//                         return false;
//                     }

//                     if (!isValidName(studentName.value)) {
//                         alert("Enter a valid Name containing only characters separated by space");
//                         return false;
//                     }

//                     if (level.value < 1 || level.value > 4) {
//                         alert("Enter a valid level between 1 and 4");
//                         return false;
//                     }

//                     if (gpa.value < "1" || gpa.value > "4" || parseFloat(gpa.value) < 1 || parseFloat(gpa.value) > 4) {
//                         alert("Enter a valid GPA number between 1 and 4");
//                         return false;
//                     }

//                     document.getElementById("myform").submit(); // Submit the form
//                 }
//             },
//             error: function () {
//                 alert("An Error Occurred");
//             }
//         });
//     });
// });

