const socket = io();

const messageContainer = document.getElementById("message-container");

const nameInput = document.getElementById("name-input");

const messageForm = document.getElementById("message-form");

const messageInput = document.getElementById("message-input");

const senderId=document.getElementById("sender");

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
    sender_id: sender.value,
    receiver_id:'6473bed00f4f61858f1cc898',
    message: messageInput.value,
    dateTime: new Date(),
  };

  $.ajax({
    url: "chat/saveChat",
    method: "POST",
    data: {  sender_id: sender.value,
      receiver_id:'6473bed00f4f61858f1cc898',
      message: messageInput.value,
      dateTime: new Date(),  },

    success: function (data) {
      if(data.success){
        messageInput.value = "";
      }
      else{
        alert(data.msg)
      }
    },

  });
  socket.emit("message", data);
  addMessagetoUI(true, data);
  
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
