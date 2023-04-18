import React from 'react';


import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

import "./host.css";



export function Host(props) {
    
    const navigate = useNavigate();

    const [roomName, setRoomName] = React.useState("");
const [password, setPassword] = React.useState('');
const [numPlayers, setNumPlayers] = React.useState(2);

async function createRoom() {
    console.log("host");
    const response = await fetch('/api/room/host', {
        method: "post",
        body: JSON.stringify({ roomName: roomName, password: password, numPlayers: numPlayers, currentPlayers: 0}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });
    if (response?.status === 200) {
        localStorage.setItem('roomID', response?.json().roomID);
        //localStorage.getItem('roomID')
        //join via websocket
      } else {
        const body = await response.json();
        //setDisplayError(`⚠ Error: ${body.msg}`);
      }
}

  return (
    <main className="container-fluid">
            <div id="hostFarklePage" className="hostPage boxDiv">
                <h2>Host Game - Farkle</h2>
                <hr/>
                <div>
                    <div className="form-group">
                        <label for="roomName">Room Name</label>
                        <input type="text" className="form-control" id="roomName" placeholder="Give the room a name" value={roomName} onChange={(e) => setRoomName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="roomPassword">Password</label>
                        <input type="password" className="form-control" id="roomPassword" aria-describedby="passwordHelp" placeholder="Room password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <small id="passwordHelp" className="form-text text-muted">Leave blank if you don't want to use a password.</small>
                    </div>
                    <div className="form-group">
                        <label for="numPlayers">Number of players</label>
                        <input type="number" className="form-control" id="numPlayers" aria-describedby="playerCountHelp" min="2" max="6" required value={numPlayers} onChange={(e) => setNumPlayers(e.target.value)}/>
                        <small id="playerCountHelp" className="form-text text-muted">Farkle can be played by 2 to 6 players.</small>
                    </div>
                    <div className="text-center hostButtons">
                        <Button id='hostStartButton' variant='success' onClick={() => createRoom()}>
                            Start
                        </Button>
                        <Button id='hostCancelButton' variant='danger' onClick={() => navigate('/start')}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </main>
  );
}
