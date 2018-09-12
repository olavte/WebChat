class ServiceREST {
    get getAndUpdateAllChatRooms() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

        };
        xhttp.open("GET", "api/getAndUpdateAllChatRooms", true);
        xhttp.send();
    }

    get addNewUser() {
        var xhttp = new XMLHttpRequest();
        var url = "api/addNewUser";
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
        };
        var body = JSON.stringify({"name":"olav"});
        xhttp.send(body);
    }
}

var serviceREST = new ServiceREST();
