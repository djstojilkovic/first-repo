const messagesDiv = document.getElementById("showtxt");
const messageInput = document.getElementById("txt");
const sendButton = document.getElementById("btn");

function sendMsg(event) {
  let newDiv = document.createElement("p");
  let a = messageInput.value;
  newDiv.append(a);
  messagesDiv.append(newDiv);
  messageInput.value = "";
}
