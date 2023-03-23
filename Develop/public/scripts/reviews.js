const feedbackForm = document.getElementById('review-form');

//code copied from mini project modify to fit
feedbackForm
  .addEventListener('submit', (e) => {
    e.preventDefault();

    let feedback = document.getElementById('feedbackText').value;
    let email = document.getElementById('feedbackUsername').value.trim();

    const newFeedback = {
      feedback,
      email,
      feedbackType: 'Complaint',
    };

    fetch('api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
        email = '';
        feedback = '';
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
