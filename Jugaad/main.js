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
// document.getElementById('contactForm').addEventListener('submit', submitForm);
//
// // Submit form
// function submitForm(e){
//   e.preventDefault();
//   console.log(123);
//   // Get values
//   var name = getInputVal('pname');
//   var price = getInputVal('pprice');
//   var email = getInputVal('pemail');
//   var phone = getInputVal('pphone');
//   var message = getInputVal('pdesc');
//
//   // Save message
//   saveMessage(name, price, email, phone, message);
//
//   // Show alert
//   document.querySelector('.alert').style.display = 'block';
//
//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);
//
//   // Clear form
//   document.getElementById('contactForm').reset();
// }
//
// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }
//
// // Save message to firebase
// function saveMessage(name, price, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     price:price,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }

function fetchData(){
  messagesRef.once('value',function(snapshot){
    snapshot.forEach(
      function(ChildSnapshot){
        let name=ChildSnapshot.val().name;
        let price=ChildSnapshot.val().price;
        addItem(name,price);
      }
    )
  })
}

function addItem(name,price){
  var item=document.getElementById('theProducts');
     var n=document.createElement('h6');
     var p=document.createElement('p');

     n.innerHTML='Product Name : '+name;
     p.innerHTML='Price : '+price;

        item.appendChild(n);
          item.appendChild(p);
}
window.onload(fetchData());
//
// messagesRef.get().then((snapshot) => {
//   console.log(snapshot.docs);
// })
//
// messagesRef.on('value',gotData,errData);
//
//
// function gotData(data){
//   const list=document.getElementById('AllItems')
//   var deets=data.val();
//   var keys=Object.keys(deets);
//   console.log(keys);
//   for(var i=0;i<keys.length;i++){
//     var k=keys[i];
//     var email=deets[k].email;
//     var name=deets[k].name;
//
//     var msg=deets[k].message;
//
//     var phn=deets[k].phone;
//
//     var price=deets[k].price;
//     var item=document.getElementById('theProducts');
//     var n=document.createElement('h3');
//     var p=document.createElement('p');
//     var d=document.createElement('p');
//     var c=document.createElement('p');
//
//
//     n.innerHTML='Product Name : '+name;
//     p.innerHTML='Price : '+price;
//     d.innerHTML='Description : '+msg;
//     c.innerHTML='Seller Details  : '+phn+' , '+email;
//     item.appendChild(n);
//     item.appendChild(p);
//     item.appendChild(d);
//     item.appendChild(c);
//
//
//
//   }
// }
//
// function errData(err){
//
// }
