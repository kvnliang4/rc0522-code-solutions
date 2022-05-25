var formValues = document.querySelector('#contact-form');

formValues.addEventListener('submit', preventDefault);

function preventDefault(event) {
  event.preventDefault();
  var messageData = {
    userName: document.querySelector('#user-name').value,
    email: document.querySelector('#user-email').value,
    message: document.querySelector('#user-message').value
  };
  console.log(messageData);
}
