function validate(redirect){
    var user= document.getElementById("user");
    var password= document.getElementById("pass");
    if( user.value=="admin" && password.value =="12345"){
        redirect();
    }
    else{
        alert("Enter a valid username & password");
    }
}
 function redirect() {
    location.replace ("todo.html");
 }