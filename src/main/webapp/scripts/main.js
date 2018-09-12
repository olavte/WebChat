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

var message = document.getElementById("chatTextInput");
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
            message.innerHTML += "<img src='" + e.target.result + "' width='100'>";
        };

        reader.readAsDataURL(input.files[0]);
    }
});

function addAsset() {
    input.click();
}

function addChatRoom() {
    var chatRooms = document.getElementById("activeChatRooms");
    chatRooms.innerHTML += "<button class=\"chatRoom\" onclick=\"goToChat()\">Open Modal</button>";
}

var selectedMemberList = [];

function checkMemberToChatRoom(memberElement, name) {
    if(memberElement.innerHTML === "[x]") {
        memberElement.innerHTML = "[ ]";
        for(var i = 0; i < selectedMemberList.length; i++){
            if(selectedMemberList[i] === name) {
                selectedMemberList.splice(i, 1);
            }
        }
    } else {
        memberElement.innerHTML = "[x]";
        selectedMemberList.push(name);
    }
}

function addMemberToChatRoom() {
    var memberList = document.getElementById("chatRoomMembersList");
    for (var i = 0; i < selectedMemberList.length; i++) {
        memberList.innerHTML += "<p>" + selectedMemberList[i] +"</p>";
    }
    serviceModal.hideAllModals();
}

class ChatRoom {
    constructor(id, name, members) {
        this.id = id;
        this.name = name;
        this.members = members;
    }
}

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/// STARTUP
chatBox.style.display = "none";
serviceModal.loginUserModal.style.display = "block";
