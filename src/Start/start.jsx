import React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "./start.css";



async function startJoin(room) {
    //join via websocket
}


export function Start(props) {
    const navigate = useNavigate();

    const[tableData, updateTable] = React.useState(<></>);
    const[selectedRoom, updatedSelectedRoom] = React.useState({});

    async function getRoomData() {
         await fetch('/api/room/all',  {
            method: "get",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                if (data.roomlist !== []) {
                const mapped = data.roomlist.array.forEach((room) => {
                    return(
                        <tr onClick={() => {
                            updatedSelectedRoom(room);
                            
                        }}>
                            <td>{room.roomName}</td>
                            <td>{room.numPlayers}</td>
                            if (room.password === "") {
                                <td>"No"</td>
                            } else {
                                <td>"Yes"</td>
                            }
                            
                        </tr>
                    );
                });
                updateTable(mapped);
    }});}

        getRoomData();
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
                        {tableData}
                    </tbody>
                </table>
            </div>
            <div className="text-center joinButtons">
                <Button id='startCancelButton' variant='danger' onClick={() => navigate('/')}>
                    Cancel
                </Button>
                <Button id='startJoinButton' variant='primary' onClick={() => {if (selectedRoom !== ""){startJoin(selectedRoom);}}}>
                    Join
                </Button>
                <Button id='startHostButton' variant='success' onClick={() => navigate('/host')}>
                    Host
                </Button>
            </div>
        </main>
  );
}
