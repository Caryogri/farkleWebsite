import React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "./start.css";

export function Start(props) {
    const navigate = useNavigate();
  return (
    <main className="container-fluid tablePage">
            <div className="roomlist">
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className='text-center'>Room Name</th>
                            <th className='text-center'>Players</th>
                            <th className='text-center'>Password Required?</th>
                        </tr>
                    </thead>
                    <tbody id="farkleRoomList">
                    </tbody>
                </table>
            </div>
            <div className="text-center joinButtons">
                <Button id='startCancelButton' variant='danger' onClick={() => navigate('/')}>
                    Cancel
                </Button>
                <Button id='startJoinButton' variant='primary' onClick={() => navigate('/')}>
                    Join
                </Button>
                <Button id='startHostButton' variant='success' onClick={() => navigate('/host')}>
                    Host
                </Button>
            </div>
        </main>
  );
}
