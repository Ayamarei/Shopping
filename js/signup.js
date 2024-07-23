
//TODO---------------------GLOBAL----------------------
var addName = document.getElementById('signupName');
var addEmail = document.getElementById('signupEmail');
var addPassword = document.getElementById('signupPassword');
var btnClick = document.getElementById('signupBtn');
// var goSignin = document.getElementById('go-signin');

var users = [];

if (localStorage.getItem('user')!=null) {
    users=JSON.parse(localStorage.getItem('user'))
}


//TODO-----------------------FUNCTIONS--------------------------
function addUser() {
    
        var user={
            name: addName.value,
            email: addEmail.value,
            password:addPassword.value
    }
    if (checkInputsEmpty()) {
    document.getElementById('message').innerHTML=`<span class="text-danger m-3">All inputs is required</span>`
        
    } else {
        if (checkEmailExist()) {
         document.getElementById('message').innerHTML=`<span class="text-danger m-3">email already exists</span>`      
        } else {
            users.push(user)
        localStorage.setItem('user', JSON.stringify(users))
        document.getElementById('message').innerHTML = `<span class="text-success m-3">Success</span>`
        clrInputs()
        }
        
    }
       
    }

    function checkInputsEmpty() {
        if (addName.value==''||addEmail.value==''||addPassword.value=='') {
            return true
        } else
            return false
    }


    function checkEmailExist() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email==addEmail.value) {
                return true
            }
            
        }
}
    
function clrInputs() {
    addName.value = '';
    addEmail.value = '';
    addPassword.value = '';
}

    //TODO----------------------EVENTS--------------------------
btnClick.addEventListener("click",function () {
    addUser()
})
