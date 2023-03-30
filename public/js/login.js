const loginFormHandler = async (event) => {
    event.preventDefault();
  
   // Collect values from the login form
    //WILL NEED TO PAIR UP WITH THE HTML LOGIN PAGE

    const email = document.querySelector('#loginName').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      console.log(email, password);
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
         document.location.replace('/product');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormChange = async (event) => {
    event.preventDefault();
      document.location.replace('signUp');
  };


  const cartPageChange = async (event) => {
      event.preventDefault();
        document.location.replace('cart');
    
    };


  //REMEMBER TO CHECK AND CHANGE THE QUERY SELECTORS WITH PROPER CLASSES OR IDS IN RESPECTIVE HTML
  
  document
  .getElementById('loginbutton')
  .addEventListener('click', loginFormHandler);
  
  document
  .getElementById('signup')
  .addEventListener('click', signupFormChange);

  document
  .querySelector('#reg-btn')
  .addEventListener('click', signupFormChange);

  document
  .querySelector('#cart-btn')
  .addEventListener('click', cartPageChange);




  // document
  // .getElementById('login')
  // .addEventListener('click', document.location.replace('login'));
  