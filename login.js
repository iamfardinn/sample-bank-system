document.getElementById('btn-submit').addEventListener("click", function(){
   const emailField = document.getElementById('user-email');
   const email=emailField.value;
   
   const passwordField = document.getElementById('user-pass');
   const password=passwordField.value;

   if(email === 'abrar@gmail.com' && password ==='12345'){
    window.location.href ='bang.html';
   }
   else{
   alert('invalid user ');
   }

})