// Get the form element
const form = document.getElementById('user');

// Get the input fields
const firstname = document.querySelector('#fname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const phonenum = document.querySelector('#phonenum');
// const genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');
const logOut = document.getElementById("logout");
const logOut2 = document.getElementById("logout2");


// Get the submit button
const submitBtn2 = document.querySelector('#submit-btn');

// Retrieve the form data from local storage and pre-populate the form fields

class User {
  constructor(fullname, username, password, id, phonenumber, date, type) {
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.phonenumber = phonenumber;
    this.date = date;
    this.logedin = 0;
    this.type = type;
    this.id = id;
  }
}

let curUser = new User();

window.onload = function () {
  /*
  for (i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);
    if (JSON.parse(localStorage.getItem(k)).type === 0)
      continue;

    flag = 1;
    let x = JSON.parse(localStorage.getItem(k));
    if (x.logedin === 1) {
      curUser = x;
      break;
    }
  }
  firstname.value = curUser.fullname;
  username.value = curUser.username;
  password.value = curUser.password;
  phonenum.value = curUser.phonenumber;
  */
}

// Add an event listener to the submit button
submitBtn2.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
  let idRegex = /^\d{8}$/;
  let numRegex = /^(010|011|012|015)\d{8}$/;


  // Check if the required fields are filled
  if (firstname.value.trim() === '' || !nameRegex.test(firstname.value.trim())) {
    alert('Please enter your first name.');
    firstname.focus();
    return false;
  }

  if (phonenum.value.trim() === '' || !numRegex.test(phonenum.value)) {
    alert('Please enter your phone number.');
    phonenum.focus();
    return false;
  }

  if (password.value.trim() === '' || password.value.trim().length < 8) {
    alert('Password should be at least 8 characters');
    password.focus();
    return false;
  }

  /*
  let c = -1;
  for (i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);

    if (JSON.parse(localStorage.getItem(k)).type === 0)
      continue;

    if ((JSON.parse(localStorage.getItem(k)).logedin === 1))
      c = k;
    if (JSON.parse(localStorage.getItem(k)).username === username.value && (JSON.parse(localStorage.getItem(k)).logedin === 0)) {
      alert(" This username is already used");
      return false;
    }
  }

  const user = new User(firstname.value, username.value, password.value, curUser.id, phonenum.value, curUser.date, 1);

  user.logedin = 1;

  console.log(user);
  localStorage.setItem(c, JSON.stringify(user));
  console.log("Success");

  window.location.replace(
    "user.html"
  );
  */
});

logOut.onclick = function () {
  /*
  for (i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);
    if (JSON.parse(localStorage.getItem(k)).type === 0)
      continue;

    let x = JSON.parse(localStorage.getItem(k));
    if (x.logedin === 1) {
      x.logedin = 0;
      localStorage.setItem(k, JSON.stringify(x));
      break;
    }
  }
  */
}

logOut2.onclick = function () {
  /*
  for (i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);
    if (JSON.parse(localStorage.getItem(k)).type === 0)
      continue;

    let x = JSON.parse(localStorage.getItem(k));
    if (x.logedin === 1) {
      x.logedin = 0;
      localStorage.setItem(k, JSON.stringify(x));
      break;
    }
  }
  */
}