
let userName = document.getElementById('userName');


 if (localStorage.getItem('user')!=null) {
    usersNames=JSON.parse(localStorage.getItem('userName'))
}


 userName.innerHTML=`Welcome ${usersNames}`