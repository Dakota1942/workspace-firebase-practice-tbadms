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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email = "dj@solutionssquared.com";
  var password = "Password";

  document.getElementsByName('username').value=email;
  document.getElementsByName('password').value=password;
  
  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...
      
      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
