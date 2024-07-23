//TODO--------------------GLOBAL----------------
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var loginBtn = document.getElementById('loginBtn');
 
var users = [];

if (localStorage.getItem('user')!=null) {
    users=JSON.parse(localStorage.getItem('user'))
}





//TODO---------------------FUNCTIONS----------------
function userLogin() {
    if (checkInputsEmpty()) {
    document.getElementById('message').innerHTML=`<span class="text-danger m-3">All inputs is required</span>`
    } else {
        if (checkUser()) {
            window.location.href='welcom.html'
        } else {
            document.getElementById('message').innerHTML=`<span class="text-danger m-3">incorrect email or password</span>`      
        }
    }
    
}

function checkUser() {
   for (let i = 0; i < users.length; i++) {
       if (users[i].email == signinEmail.value && users[i].password == signinPassword.value) {
         localStorage.setItem("userName",JSON.stringify(users[i].name))
         return true
     }
 }
}
   
function checkInputsEmpty() {
    if (signinEmail.value==''||signinPassword.value=='') {
        return true
    } else
        return false
}


//TODO-------------------------EVENTS------------------------
loginBtn.addEventListener('click', function () {
    userLogin()
})
