/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const chatBox = document.getElementById("chatBoxContent");
const contactBox = document.getElementById("contactBoxContent");

function goToChat(viewChatRoom) {
    chatBox.className = "chatContent";
    chatBox.style.display = "block";
    contactBox.className = "contactContentHidden";
    viewChatRoom.selectThisChatRoom();
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

let currentUser = null;
function login(event, form) {
    event.preventDefault();
    serviceModal.hideAllModals();
    const name = form.elements["name"].value;
    currentUser = new User(name);
}

const input = document.createElement('input');
input.type = 'file';
input.addEventListener('change', function () {
    var message  = document.getElementById("chatTextInput");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            message.innerHTML += "<img src='" + e.target.result + "' width='100'>";
        };

        reader.readAsDataURL(input.files[0]);
    }
});

function addAsset() {
    input.click();
}

/// STARTUP
chatBox.style.display = "none";

setInterval(function () {
    if(currentSelectedChatRoom !== null) {
        currentSelectedChatRoom.updateMessages();
    }
}, 100);
