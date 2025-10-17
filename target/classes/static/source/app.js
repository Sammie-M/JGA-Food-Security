
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const API_ENDPOINT = '/api/chat';

function displayMessage(message, sender) {
  const msg = document.createElement('div');
  msg.classList.add('chat-message', sender);
  const content = document.createElement('div');
  content.classList.add('message-content');
  content.textContent = message;
  msg.appendChild(content);
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

displayMessage('Hello! How can I help you today?', 'bot');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  displayMessage(message, 'user');
  userInput.value = '';

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    displayMessage(data.message, 'bot');
  } catch (err) {
    displayMessage('Connection error. Please check the server.', 'bot');
  }
}
