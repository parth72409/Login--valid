function validation(){
  
  var name = document.getElementById("username").value
  var password = document.getElementById("Password").value

  if(name == "parth" && password == "patel" ){
    alert("LOGIN Ho GYE BHAI")
    window.localStorage.setItem("loginStatus", true)
    window.location.href = "Dashboard.html"
  }else{
    alert("Shi dal bhosdi ke")
  }

}

let loginstatus = window.localStorage.getItem("loginstatus")

if(loginstatus == true){
    window.localStorage.href = "Dashboard.html"
}
































//  function loginValidate(){
//     var name = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

// if(name == password && name.length>2){
//     alert("Login succsessful")
//     window.localStorage.setItem("loginStatus" , true)
//     window.location.href = "Oreder.html";
// }else{
//     alert("please enter valid credentials!")
// }
// }

// let loginstatus = window.localStorage.getItem("loginStatus");
// if(loginstatus == true){
//     window.localStorage.href = "Oreder.html" ;
// }