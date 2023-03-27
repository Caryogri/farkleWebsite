function hostGame() {
    let roomList = [];
    const roomListText = localStorage.getItem('roomList');
    if (roomListText) {
      roomList = JSON.parse(scoresText);
    }

    const roomNameElement = document.querySelector("#roomName");
    const passwordElement = document.querySelector("#roomPassword");
    const maxPlayersElement = document.querySelector("#numPlayers");

    let newRoom = {name: roomNameElement.value, password: passwordElement.value, maxPlayers: maxPlayersElement.value};


    roomList.push(newRoom);

    localStorage.setItem('roomList', JSON.stringify(roomList));
    
    window.location.href = "farkle.html";
    
}