/*to login the page by pre defined username and password.
ex:
username = "muthuraj"
password = "muthuraj@123" */

const btn = document.getElementById("button")
btn.addEventListener('click',display)
function display(){
const un = document.getElementById("username").value;
const pw = document.getElementById("password").value;
const una = "muthuraj"
const pwa = "muthuraj@123"
  if(un===una){
          if(pw===pwa)
    alert(`Hi, ${un}`);
         else
    alert("Wrong Password");
  }
  else
      alert("Username is Invalid")
  }



/*To get the username and password in a empty array*/

const userName = []
const passWord = []
const btn = document.getElementById('button')
btn.addEventListener('click',submit)
function submit(){
userName.push(document.getElementById('username').value)
passWord.push(document.getElementById('password').value)
/*  console.log(userName)
  console.log(passWord) */
}
