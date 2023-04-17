async function join(room) {
    return new Promise((resolve, reject) => {

    })
}


function selectRoom(room) {
    if (room.maxPlayers === room.playerNum) {
        //Max players reached
    }

    if (room.password.match("/.+/")) {
        const passwordBox = document.querySelector(".joinPopup");
        passwordBox.style.visibility = "visibile"

    }
}



function loadRooms() {
    let rooms = [];
    const roomsList = localStorage.getItem("rooms");
    if (roomsList) {
        rooms = JSON.parse(roomsList);
    }
    const tableBodyElement = document.querySelector("#farkleRoomList");

    if (rooms.length) {
        for (const [i, room] of room.entries()) {
            const roomNameTdElement = document.createElement('td');
            const playersTdElement = document.createElement('td');
            const passwordTdElement = document.createElement('td');s
           
            roomNameTdElement = room.name;
            playersTdElement = room.playerNum + "/" + room.maxPlayers;
            if (room.password.match("/.+/")) {
                passwordTdElement = "Yes";
            } else {
                passwordTdElement = "No";
            }

            const rowElement = document.createElement("tr");
            rowElement.appendChild(roomNameTdElement);
            rowElement.appendChild(playersTdElement);
            rowElement.appendChild(passwordTdElement);
            
            rowElement.addEventListener("click", selectRoom(room));

            tableBodyElement.appendChild(rowElement);
        }
    } else {
        tableBodyElement.innerHTML = '<tr><td colSpan=4>No games found.</td></tr>'
    }
}

loadRooms();