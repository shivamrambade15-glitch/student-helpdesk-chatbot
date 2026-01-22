function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim().toLowerCase();
  if (msg === "") return;

  addMessage(msg, "user");
  input.value = "";

  showTyping();

  setTimeout(() => {
    hideTyping();
    botReply(msg);
  }, 800);
}

function quickAsk(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

function addMessage(text, sender) {
  const messages = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  document.getElementById("typing").style.display = "block";
}

function hideTyping() {
  document.getElementById("typing").style.display = "none";
}

function botReply(msg) {
  let reply = "Sorry, please ask about college timing, fees, courses or portal.";

  if (msg.includes("timing")) {
    reply = "College timing is from 9:00 AM to 5:00 PM, Monday to Friday.";
  }
  else if (msg.includes("fees")) {
    reply = "Fees depend on course. Average fees are ₹10,000 – ₹50,000 per year.";
  }
  else if (msg.includes("course")) {
    reply = "Courses offered: Arts, Commerce, Science, Computer Science and IT.";
  }
  else if (msg.includes("portal")) {
    reply = "Student portal is used for attendance, results and notices.";
  }
  else if (msg.includes("admission")) {
    reply = "Admissions are based on merit and document verification.";
  }
  else if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello 😊 How can I assist you?";
  }

  addMessage(reply, "bot");
}
