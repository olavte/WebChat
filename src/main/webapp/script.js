/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

var message  = document.getElementById("chatTextInput");
message.innerHTML = "";
message.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13 && !e.shiftKey) {
        e.preventDefault();
        submitMessageToChat();
    }
});

function submitMessageToChat() {
    var chatView = document.getElementById("ongoingChatView");

    if(message.innerHTML !== "") {
        chatView.innerHTML += "<div class='chatBubble'>" + message.innerHTML + "</div>";
        message.innerHTML = "";
    }
}

var input = document.createElement('input');
input.type = 'file';
input.addEventListener('change', function () {
    var message  = document.getElementById("chatTextInput");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            alert(e.target.result);
            message.innerHTML += "<img src='" + e.target.result + "' width='100'>";
        };

        reader.readAsDataURL(input.files[0]);
    }
});

function addAsset() {
    input.click();
}

chatBox.style.display = "none";
document.getElementById("chatTextInput").contentEditable='true';

