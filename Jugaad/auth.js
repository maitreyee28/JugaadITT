

function signup_bs(){
  // console.log("inside");
  // window.alert('hello');
  const form=document.getElementById('signUp');

  const userEmail=document.getElementById('email').value;
  const userPw=document.getElementById('pw').value;
  // console.log(userEmail);
  auth.createUserWithEmailAndPassword(userEmail,userPw).then(cred => {
    // console.log(cred);
    window.alert("Successfully Signed up! Sign in to continue shopping.")
  });

  // window.alert(userEmail);
}

function loginUser(){
  const form=document.getElementById('login');

  const userEmail=document.getElementById('loginID').value;
  const userPw=document.getElementById('loginPW').value;
  // console.log(userEmail);
  auth.signInWithEmailAndPassword(userEmail,userPw).then(cred => {
    // console.log(cred);
    window.location.href="index.html";
  })
  .catch((error) => {
window.alert("Incorrect ID or password. Try again .");
});

}
