class ServiceModal {
    constructor(addChatRoomModal, loginUserModal, addUsersToChatModal) {
        this.addChatRoomModal = addChatRoomModal;
        this.loginUserModal = loginUserModal;
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
    }

    hideModalsOnClick(event) {
        if (event.target == this.addChatRoomModal) {
            this.hideAllModals();
        }
    }
}

const serviceModal = new ServiceModal(document.getElementById('addChatRoomModal'),
    document.getElementById('loginUserModal'));
serviceModal.displayLoginUserModal();

window.onclick = function(event) {
    serviceModal.hideModalsOnClick(event);
};

