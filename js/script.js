// Get the message input element
const messageInput = document.getElementById('message-input');

// Add an event listener for the 'keydown' event
messageInput.addEventListener('keydown', function(event) {
  // Check if the pressed key is the Enter key
  if (event.key === 'Enter') {
    // Display a message
    alert('You pressed the Enter key!');
  }
});
