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
        let message=ChildSnapshot.val().message;
        let phone=ChildSnapshot.val().phone;
        let email=ChildSnapshot.val().email;

        addItem(name,price,message,phone,email);
      }
    )
  })
}

function addItem(name,price,message,phone,email){
  var item=document.getElementById('theProducts');
  // var name=document.getElementById('sellerName');
     var n=document.createElement('h6');
     var p=document.createElement('p');
     var d=document.createElement('p');
     var ph=document.createElement('p');
     var e=document.createElement('p');


     n.innerHTML=name;
     p.innerHTML="Rs . " + price;
     d.innerHTML=message;
     ph.innerHTML=phone;
     e.innerHTML=email;
     // e1.innerHTML=email;
     // name.appendChild(e1);


     var li=document.createElement('tr');
     li.classList.add('product');
     var details1=document.createElement('td');
     details1.appendChild(n);
     details1.classList.add('check');
     var details2=document.createElement('td');
     details2.appendChild(p);
     li.appendChild(details1);
     li.appendChild(details2);
     var details3=document.createElement('td');
     details3.appendChild(d);
     li.appendChild(details3);
     var details4=document.createElement('td');
     details4.appendChild(ph);
     li.appendChild(details4);
     var details5=document.createElement('td');
     details4.appendChild(e);
     li.appendChild(details5);
     li.classList.add('product');


     item.appendChild(li);

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
