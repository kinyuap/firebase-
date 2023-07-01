const firebaseConfig = {
  apiKey: "AIzaSyB6sjf9hMi8mGWLOtWGO2xFqMmoQRqcSPw",
  authDomain: "kieir-system.firebaseapp.com",
  databaseURL: "https://kieir-system-default-rtdb.firebaseio.com",
  projectId: "kieir-system",
  storageBucket: "kieir-system.appspot.com",
  messagingSenderId: "918833172673",
  appId: "1:918833172673:web:fe222a0301a984fc7f8440",
  measurementId: "G-QQGK8NCZES"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var totalItem;
var maxCode;
var code;

function identificationDetails(event) {
  event.preventDefault();
}

var firstName = document.getElementById(".fname").value;
var lastName = document.getElementById("lname").value;
var telphoneNumber = getElementById("tel").value;
var descriptionDetails = getElementById("desc").value;

document.getElementById("fname") = "";
document.getElementById("lname") = "";
document.getElementById("tel") = "";
document.getElementById("desc") = "";

//store data to firebase
firebase.database().ref("firebase/ + code").set({
  fname: fname,
  lname: lname,
  tel: tel,
  desc:desc,
});