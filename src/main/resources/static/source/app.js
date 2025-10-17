
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

//chatbot
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");

chatToggle.addEventListener("click", () => {
  chatContainer.classList.toggle("active");

  // Optional: hide toggle when chat is open
  if (chatContainer.classList.contains("active")) {
    chatToggle.style.display = "none";
  }
});

// Add a small close button to chat header
const header = document.querySelector(".header");
const closeBtn = document.createElement("span");
closeBtn.textContent = "✖";
closeBtn.style.float = "right";
closeBtn.style.cursor = "pointer";
closeBtn.style.marginRight = "8px";
header.appendChild(closeBtn);

closeBtn.addEventListener("click", () => {
  chatContainer.classList.remove("active");
  chatToggle.style.display = "flex";
});
