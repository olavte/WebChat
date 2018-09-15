class ServiceREST {
    getAllChatRooms() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200)
                viewChatRoomList.displayChatRoomList(xhttp.responseText);
        };
        xhttp.open("GET", "api/getAllChatRooms", true);
        xhttp.send();
    }

    addNewChatRoom(name, password) {
        const xhttp = new XMLHttpRequest();
        const url = "api/addNewChatRoom";
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                serviceREST.getAllChatRooms();
            }
        };
        const body = JSON.stringify({"name":name, "password":password});
        xhttp.send(body);
    }

    getAllMessagesInChatRoom(viewChatRoom) {
        const xhttp = new XMLHttpRequest();
        let url = "api/getAllMessagesInChatRoom?roomNumber=" + viewChatRoom.id + "&password=" + viewChatRoom.password;
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                viewChatRoom.displayMessages(xhttp.responseText);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    addNewMessageToChatRoom(viewChatRoom) {
        let message = viewChatRoom.input.innerHTML;
        let xhttp = new XMLHttpRequest();
        let url = "api/addNewMessageToChatRoom";
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                viewChatRoom.updateMessages();
            }
        };
        const body = JSON.stringify({"message":message, "roomNumber":viewChatRoom.id, "userName":currentUser.name});
        xhttp.send(body);
    }
}

const serviceREST = new ServiceREST();
