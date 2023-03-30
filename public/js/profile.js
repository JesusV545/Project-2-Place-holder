const newFormHandler = async (event) => {
    event.preventDefault();
    
    //NEED TO MAKE CHANGES TO LINKS  OF IDS OR CLASS WITH HTML
    const name = document.querySelector('#name1').value.trim();
    const email = document.querySelector('#email1').value.trim();
    const password = document.querySelector('#password1').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
  
    if (name && email && password) {
      const response = await fetch(`/api/users`, {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        document.location.replace('/product');
      } else {
        alert('Route failed');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#signup-btn')
    .addEventListener('click', newFormHandler);

    // document
    // .querySelector('#reg-btn')
    // .addEventListener('click', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);