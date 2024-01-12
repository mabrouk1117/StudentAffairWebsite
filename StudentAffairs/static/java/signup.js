const submitbtn = document.querySelector("#submit-btn");
const id = document.getElementById("nid");
const user = document.getElementById("username");

submitbtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission
  let flag = 1;

  fetch("getprofiles")
    .then(response => response.json())
    .then(response => {
      for (var key in response.Data) {
        if (id.value == response.Data[key].NationalId) {
          alert("ID is already used");
          flag = 0;
          break; // Stop further processing
        }
      }

      for (var key in response.Data) {
        if (user.value == response.Data[key].UserName) {
          alert("Username is already used");
          flag = 0;
          break; // Stop further processing
        }
      }
      if (flag === 1) {
        const fullname = document.querySelector("#fullname");
        const username = document.querySelector("#username");
        const password = document.querySelector("#password");
        const confirmpass = document.querySelector("#confirmpass");
        const phonenum = document.querySelector("#phonenum");
        const NationalID = document.querySelector("#nid");
        const date = document.querySelector('input[type="date"]');

        let naid = /^\d{14}$/;
        let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
        let idRegex = /^\d{8}$/;
        let numRegex = /^(010|011|012|015)\d{8}$/;

        if (!naid.test(NationalID.value.trim())) {
          alert("please enter a correct National ID");
          NationalID.focus();
          event.preventDefault();
          return false;
        }

        // Check if the required fields are filled
        if (
          fullname.value.trim() === "" ||
          !nameRegex.test(fullname.value.trim())
        ) {
          alert("Please enter your full name.");
          fullname.focus();
          event.preventDefault();

          return false;
        }

        if (
          username.value.trim() === "" ||
          username.value.trim().length < 3 ||
          !idRegex.test(username.value)
        ) {
          alert("Username should be 8 characters");
          username.focus();
          return false;
        }

        if (
          password.value.trim() === "" ||
          password.value.trim().length < 8
        ) {
          alert("Password should be at least 8 characters");
          password.focus();
          return false;
        }

        if (confirmpass.value.trim() != password.value.trim()) {
          alert("Passwords do not match!");
          confirmpass.focus();
          return false;
        }

        if (
          phonenum.value.trim() === "" ||
          !numRegex.test(phonenum.value)
        ) {
          alert("Please enter your phone number.");
          phonenum.focus();
          return false;
        }

        if (date.value.trim() === "") {
          alert("Please enter your date of birth.");
          date.focus();
          return false;
        }
        document.getElementById("myForm").submit();
      }
    })
    .catch(() => {
      alert("An error occurred");
    });
});
