function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'happybirthday') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('gallery').style.display = 'grid';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
