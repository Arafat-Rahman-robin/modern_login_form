var input = document.getElementById('form');

input.addEventListener('submit', function(event){

    event.preventDefault();
    
    var Username = event.target.Username.value;
    var password = event.target.password.value;

    let info = {
        Username: Username,
        password: password
    }

    console.log(info);
});