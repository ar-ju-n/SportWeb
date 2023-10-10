const loginText = document.querySelector(".title-text .login");
const loginbox = document.querySelector("box.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("box .signup-link a");
signupBtn.onclick = (()=>{
  loginbox.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
function login() {
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if (username =="mask" && password == "sports"){
     window.location.href ="index1.html";
     
  }else {
   window.alert("Username or Password error!");
   window.location.href ="account.html";

  }
}
  function signup(){

  }

 loginBtn.onclick = (()=>{
   loginbox.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
 });
 signupLink.onclick = (()=>{
   signupBtn.click()
   return false;
 });
 