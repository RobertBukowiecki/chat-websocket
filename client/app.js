const selectors = {
  loginForm: "welcome-form",
  messagesSection: "messages-section",
  messagesList: "messages-list",
  addMessageForm: "add-messages-form",
  userNameInput: "username",
  messageContentInput: "message-content",
};

const loginForm = document.getElementById(selectors.loginForm);
const messagesSection = document.getElementById(selectors.messagesSection);
const messagesList = document.getElementById(selectors.messagesList);
const addMessageForm = document.getElementById(selectors.addMessageForm);
const userNameInput = document.getElementById(selectors.userNameInput);
const messageContentInput = document.getElementById(
  selectors.messageContentInput
);

let userName;

const login = (e) => {
  e.preventDefault();
  if (userNameInput.value.length > 0) {
    userName = userNameInput.value;
    loginForm.classList.remove("show");
    messagesSection.classList.add("show");
  } else {
    alert("You must type your name");
  }
};

function addMessage(author, content) {
  const message = document.createElement("li");
  message.classList.add("message");
  message.classList.add("message--received");
  if (author === userName) message.classList.add("message--self");
  message.innerHTML = `  
    <h3 class="message__author">${userName === author ? "You" : author}</h3>
    <div class="message__content">
      ${content}
    </div>
  `;
  messagesList.appendChild(message);
}

const sendMessage = (e) => {
  e.preventDefault();
  let messageContent = messageContentInput.value;

  if (!messageContent.length) {
    alert("Type your message");
  } else {
    addMessage(userName, messageContent);
    messageContentInput.value = "";
  }
};

loginForm.addEventListener("submit", (e) => {
  login(e);
});

addMessageForm.addEventListener("submit", (e) => {
  sendMessage(e);
});
