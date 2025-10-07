const modal = document.getElementById("chatModal");

document.getElementById("openChatBtn").onclick = () => {
    modal.style.display = "block";
    addMessage("Olá! Sou o Caquinho, seu assistente virtual! Como posso ajudar você hoje?", "bot");
    addMessage("Caso não precisar mais da minha ajuda, digite 'sair' para finalizar.", "bot")
};

let inactivityTimeout;
function startInactivityTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        showIncactivityMessage();
    }, 5000);    
}

function showIncactivityMessage() {
    document.getElementById("inactivityMessage").style.display = "block";
}

function closeInactivityMessage() {
    document.getElementById("inactivityMessage").style.display = "none";
}

function closeChat () {
    console.log("Chat fechado por tempo de inatividade.");
    const chat = document.getElementById("chatmodal");
    document.getElementById("chatmodal").style.display = "none";
}

document.getElementById('user-input').addEventListener("keydown", function(event) {
        if (event.key === "Enter"){ 
            sendMessage();
        }
        startInactivityTimer();
    }
);

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    const typingIndicator = document.getElementById("typingIndicator");
    typingIndicator.style.display = "block"; 

    setTimeout(() => {
        const reply = generateBotReply(message);
        typingIndicator.style.display = "none"; 
        addMessage(reply, "bot");
    }, 500);
    
    if (message.toLowerCase().includes("sair")) {
        setTimeout(() => {
            closeChat();
        }, 2000);
    }
}

function addMessage(text, sender) {
    const messages = document.getElementById("messages");
    const div = document.createElement("div");
    div.className = "message " + sender;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}



function generateBotReply(userMessage) {
    if (userMessage.toLowerCase().includes("ajuda")) return "Claro! Estou aqui para ajudar. O que você precisa?";
    if (userMessage.toLowerCase().includes("sair")) return "Até mais! Foi bom conversar com você.";
    return "Desculpe, ainda estou aprendendo a responder isso.";
}

function closeChat() {
    const modal = document.getElementById("chatModal");
    const messages = document.getElementById("messages");
    const input = document.getElementById("user-input");

    modal.style.display = "none";       
    messages.innerHTML = "";            
    input.value = "";                   
}