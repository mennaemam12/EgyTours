const socket = io();

const messageContainer = document.getElementById("message-container");

const nameInput = document.getElementById("name-input");

const messageForm = document.getElementById("message-form");

const messageInput = document.getElementById("message-input");

var type = document.getElementById("usertype");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

function sendMessage() {
  if (messageInput.value === "") return;
  console.log(messageInput.value);
  var name;
  if (type.value === "admin") {
    name = "admin";
  } else {
    name = nameInput.innerHTML;
  }
  const data = {
    name: nameInput.innerHTML,
    message: messageInput.value,
    dateTime: new Date(),
  };

  $.ajax({
    url: "chat/submit",
    method: "POST",
    data: { mydata: data },
    success: function (response) {},
  });
  socket.emit("message", data);
  addMessagetoUI(true, data);
  messageInput.value = "";
}

//for receiving a message
socket.on("chat-message", (data) => {
  console.log(data);
  addMessagetoUI(false, data);
});

function addMessagetoUI(isOwnMessage, data) {
  const element = `
                    <li class="${
                      isOwnMessage ? "message-right" : "message-left"
                    }">
                    <p class="message">
                        ${data.message}
                        <span>
                        ${data.name} ${moment(data.dateTime).fromNow()}
                        </span>
                    </p>
                    </li>
                `;
  messageContainer.innerHTML += element;
  scrollToBottom();
}

function scrollToBottom() {
  messageContainer.scrollTo(0, messageContainer.scrollHeight);
}
