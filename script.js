function sendMessage() {
  const username = document.getElementById("username").value;
  const messageText = document.getElementById("message").value;

  if (username && messageText) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const messageContainer = document.getElementById("messages");
    const newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.innerHTML = `<strong>${username} postou em ${formattedDate}</strong>: <br> ${messageText} <hr>`;
    
    messageContainer.appendChild(newMessage);

    // Limpar campos apÃ³s o envio da mensagem
    document.getElementById("username").value = "";
    document.getElementById("message").value = "";
  }
}