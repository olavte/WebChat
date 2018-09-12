class ServiceModal {
    constructor(addChatRoomModal, loginUserModal, addUsersToChatModal) {
        this.addChatRoomModal = addChatRoomModal;
        this.loginUserModal = loginUserModal;
        this.addUsersToChatModal = addUsersToChatModal;
    }

    displayAddNewMemberToChatModal() {
        this.hideAllModals();
        this.addUsersToChatModal.style.display = "block";
    }

    displayAddChatRoomModal() {
        this.hideAllModals();
        this.addChatRoomModal.style.display = "block";
    }

    displayLoginUserModal() {
        this.hideAllModals();
        this.loginUserModal.style.display = "block";
    }

    hideAllModals() {
        this.addChatRoomModal.style.display = "none";
        this.loginUserModal.style.display = "none";
        this.addUsersToChatModal.style.display = "none";
    }

    hideModalsOnClick(event) {
        if (event.target == addUsersToChatModal) {
            this.hideAllModals();
        } else if (event.target == addChatRoomModal) {
            this.hideAllModals();
        }
    }
}

var serviceModal = new ServiceModal(document.getElementById('addChatRoomModal'),
    document.getElementById('loginUserModal'), document.getElementById('addUsersToChatModal'));

window.onclick = function(event) {
    serviceModal.hideModalsOnClick(event);
};

