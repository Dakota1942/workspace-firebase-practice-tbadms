
var firebaseConfig = {
  apiKey: "AIzaSyA4RRvZ4ivOsgNRRN1igIjc43VdVARMQo0",
  authDomain: "grocery-list-98b6c.firebaseapp.com",
  projectId: "grocery-list-98b6c",
  storageBucket: "grocery-list-98b6c.appspot.com",
  messagingSenderId: "279937219467",
  appId: "1:279937219467:web:9c24ec3c319961c4438d8e",
  measurementId: "G-GRJKNJ2PLM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#password').val();

  console.log("email: " + email + " password: " + password);
  let user = firebase.auth().currentUser;
  window.location.href="Surveyresult.html";

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email);
    } else {
      // User is signed out
      console.log('no user is logged in');
      window.location.href="index.html";
    }
  });


  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

$('#google').click(function(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    console.log("Google User: " + user.email)
    //window.location.href="Surveyresult.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error message: " + errorMessage);
  });
});