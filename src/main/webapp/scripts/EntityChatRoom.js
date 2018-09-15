class EntityChatRoom {
    constructor(id, name, password, removed) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.removed = removed;
        this.container = document.getElementById("ongoingChatView");
        this.input = document.getElementById("chatTextInput");
    }

    selectThisChatRoom() {
        document.getElementById("nameOfChatRoom").innerHTML = this.name;
        currentSelectedChatRoom = this;
        this.updateMessages();
    }

    updateMessages() {
        serviceREST.getAllMessagesInChatRoom(this);
    }

    displayMessages(messageList) {
        this.container.innerHTML = "";
        let messageListJSON = JSON.parse(messageList);
        for (let i = 0; i < messageListJSON.length; i++) {
            let JSONObject = messageListJSON[i];
            let entityMessage = new EntityMessage(JSONObject.message, JSONObject.userName);
            this.container.innerHTML +="<div class='chatBubble'>" + entityMessage.userName + "@role: > " + entityMessage.message + "</div>";
        }
    }

    addMessage() {
        if(this.input.innerHTML === "") {
            serviceREST.addNewMessageToChatRoom(this);
            this.input.innerHTML = "";
        }
    }

    close() {
        contactBox.className = "contactContent";
        contactBox.style.display = "block";
        chatBox.className = "chatContentHidden";
        currentSelectedChatRoom = null;
    }
}

let currentSelectedChatRoom = null;

document.getElementById("chatTextInput").addEventListener('keypress', function(e) {
    let key = e.which || e.keyCode;
    if (key === 13 && !e.shiftKey) {
        e.preventDefault();
        currentSelectedChatRoom.addMessage();
    }
});