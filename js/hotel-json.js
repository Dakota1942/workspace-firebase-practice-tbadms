/* Change the configuration */

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

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputData = $('form').serializeArray();
  // console.log(inputData);
  /* save the data to database */
  /*for(var item in inputData) {
    console.log(inputData[item].value);
  }*/
  // console.log(inputData[2]);
  // console.log(inputData[2].name);
  // console.log(inputData[2].value);
  var data = {};
  inputData.forEach((entry)=>{
    console.log(entry);
    data[entry.name]=entry.value;
  });
  console.log(data);
  firebase.firestore().collection("hotel").add(data);
  /* clear the entry */
  $('form')[0].reset();
});


/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */


firebase
  .firestore()
  .collection('hotel')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().name);
      console.log(doc.data().room);
      console.log(doc.data().checkin);
      console.log(doc.data().checkout);
      console.log(doc.data().num);
    });
  });
