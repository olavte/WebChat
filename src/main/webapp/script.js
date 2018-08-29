/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Get the modal
var modal = document.getElementById('Modal');

var chatBox = document.getElementById("chatBoxContent");
var contactBox = document.getElementById("contactBoxContent");

// Get the <span> element that closes the modal
var closeChat = document.getElementById("close");

closeChat.onclick = function () {
    contactBox.className = "contactContent";
    contactBox.style.display = "block";
    chatBox.className = "chatContentHidden";
};

function goToChat() {
    chatBox.className = "chatContent";
    chatBox.style.display = "block";
    contactBox.className = "contactContentHidden";
}

contactBox.addEventListener("animationend", function () {
        if(contactBox.className === "contactContentHidden") {
            contactBox.style.display = "none";
        }
    }, true);

chatBox.addEventListener("animationend", function () {
        if(chatBox.className === "chatContentHidden") {
            chatBox.style.display = "none";
        }
    }, true);

chatBox.style.display = "none";

function submitMessageToChat() {

    var message  = document.getElementById("ongoingChatTextInput");
    var chatView = document.getElementById("ongoingChatView");

    chatView.innerHTML += "<p>" + message.value + "</p>";
    message.innerText = "";
}

