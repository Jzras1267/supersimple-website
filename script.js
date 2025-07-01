fetch('http://localhost:5000/api/message')
  .then(response => response.json())
  .then(data=> {
    document.getElementById('backend-message').textContent = data.message;
  })
  .catch(error => {
    document.getElementById('backend-message').textContent = 'Failed to load message';
  });