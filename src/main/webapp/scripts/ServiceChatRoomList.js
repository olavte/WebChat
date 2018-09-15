class ServiceChatRoomList {
    constructor() {
        this.chatRoomContainer = document.getElementById("activeChatRooms");
        this.chatRoomList = [];
    }

    displayChatRoomList(chatRoomList) {
        this.chatRoomList = [];
        this.chatRoomContainer.innerHTML = "";
        let chatRoomListJSON = JSON.parse(chatRoomList);
        for (let i = 0; i < chatRoomListJSON.length; i++) {
            let JSONObject = chatRoomListJSON[i];
            let viewChatRoom = new EntityChatRoom(JSONObject.id, JSONObject.name, JSONObject.password, JSONObject.removed);
            if(viewChatRoom.removed === false) {
                this.chatRoomList.push(viewChatRoom);
                let btn = document.createElement("button");
                btn.className = "chatRoom";
                btn.innerHTML = viewChatRoom.name;
                btn.onclick = function (e) {
                    goToChat(viewChatRoom);
                };
                this.chatRoomContainer.appendChild(btn);
            }
        }
    }

    addNewChatRoom(event, form) {
        event.preventDefault();
        serviceModal.hideAllModals();
        const name = form.elements["name"].value;
        const password = form.elements["password"].value;
        serviceREST.addNewChatRoom(name, password);
    }

    updateChatRoomList() {
        serviceREST.getAllChatRooms();
    }

    filterChatRoomList(event) {
        event.preventDefault();
        var input, filter, div, button, i;
        input = document.getElementById("chatRoomSearchInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("activeChatRooms");
        button = div.getElementsByTagName("button");
        for (i = 0; i < button.length; i++) {
            if (button[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                button[i].style.display = "";
            } else {
                button[i].style.display = "none";
            }
        }
    }
}

const viewChatRoomList = new ServiceChatRoomList();
serviceREST.getAllChatRooms();