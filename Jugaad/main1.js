// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyAh0xd8TNarK1pQi2MZAlOJ-pvXkKL2Yoc",
  authDomain: "jugaag-1861d.firebaseapp.com",
  projectId: "jugaag-1861d",
  storageBucket: "jugaag-1861d.appspot.com",
  messagingSenderId: "614265807914",
  appId: "1:614265807914:web:2ec523f0375921b1a54f53",
  measurementId: "G-G98J4LP9D4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const auth=firebase.auth();
const db=firebase.firestore();

db.settings({timestampsInSnapshots: true});

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  console.log(123);
  // Get values
  var name = getInputVal('pname');
  var price = getInputVal('pprice');
  var email = getInputVal('pemail');
  var phone = getInputVal('pphone');
  var message = getInputVal('pdesc');

  // Save message
  saveMessage(name, price, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, price, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    price:price,
    email:email,
    phone:phone,
    message:message
  });
}
