async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

   // Toggle the eye on and off in the password input to show password
   const togglePassword = document.querySelector('#togglePassword');
   const password = document.querySelector('#password-signup');
 
   togglePassword.addEventListener('click', function (e) {
     // toggle the type attribute
     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
     password.setAttribute('type', type);
     // toggle the eye slash icon
     this.classList.toggle('fa-eye-slash');
 });

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);