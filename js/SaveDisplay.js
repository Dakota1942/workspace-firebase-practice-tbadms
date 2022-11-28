// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputData = $('form').serializeArray();

  var data = {};
  inputData.forEach((entry)=>{
    console.log(entry);
    data[entry.name]=entry.value;
  });
  console.log(data);
  firebase.firestore().collection("surveydata").add(data);
  /* clear the entry */
  $('form')[0].reset();
});

firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
    });
  });


// update the result in table
firebase.firestore().collection('surveydata').onSnapshot(function(querySnapshot){
  var n1 = 0; // how many A's
  var n2 = 0; // how many B's
  var n3 = 0; // how many C's
  var n4 = 0; // how many D's
  var n5 = 0; // how many E's
  querySnapshot.forEach(function(doc){
    console.log("document ---", doc.data().choice);
    var s = doc.data().choice;
    switch(s) {
      case "A": n1++; $('#ans1').text(n1);break;
      case "B": n2++; $('#ans2').text(n2);break;
      case "C": n3++; $('#ans3').text(n3);break;
      case "D": n4++; $('#ans4').text(n4);break;
      case "E": n5++; $('#ans5').text(n5);break;
    }
  });
});

$('#signout').click(function() {
  firebase.auth().signOut().then(() => {
    window.location.href="index.html";
  }).catch((error) => {
    console.log(error.message);
  });
});