import React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "./host.css";

export function Host(props) {
    const navigate = useNavigate();
  return (
    <main className="container-fluid">
            <div id="hostFarklePage" className="hostPage boxDiv">
                <h2>Host Game - Farkle</h2>
                <hr/>
                <div>
                    <div className="form-group">
                        <label for="roomName">Room Name</label>
                        <input type="text" className="form-control" id="roomName" placeholder="Give the room a name"/>
                    </div>
                    <div className="form-group">
                        <label for="roomPassword">Password</label>
                        <input type="password" className="form-control" id="roomPassword" aria-describedby="passwordHelp" placeholder="Room password"/>
                        <small id="passwordHelp" className="form-text text-muted">Leave blank if you don't want to use a password.</small>
                    </div>
                    <div className="form-group">
                        <label for="numPlayers">Number of players</label>
                        <input type="number" className="form-control" id="numPlayers" aria-describedby="playerCountHelp" value="2" min="2" max="6" required/>
                        <small id="playerCountHelp" className="form-text text-muted">Farkle can be played by 2 to 6 players.</small>
                    </div>
                    <div className="text-center hostButtons">
                        <Button id='hostStartButton' variant='success' onClick={() => navigate('/')}>
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
