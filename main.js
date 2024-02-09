function login() {
  let getUsername = document.getElementById('username1')
  let getPassword = document.getElementsById('password1')
    if (getUsername == 'admin' && getPassword == '123') {
      alert("Login Success");
      return true;
    }
    else{
        alert("Username or password is incorrect");
      return;
    }
  }