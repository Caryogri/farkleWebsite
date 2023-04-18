import React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "./farkle.css";

const faceSix = () => {
    return(
        <><div class="top">
            <span class="dot left"></span>
            <span class="dot right"></span>
        </div><div class="middle">
                <span class="dot left"></span>
                <span class="dot right"></span>
            </div><div class="bottom">
                <span class="dot left"></span>
                <span class="dot right"></span>
            </div></>
    );
};

const faceFive = () => {
    return(
        <><div class="top">
            <span class="dot left"></span>
            <span class="dot right"></span>
        </div>
        <div class="middle">
            <span class="dot center"></span>
        </div>
        <div class="bottom">
            <span class="dot left"></span>
            <span class="dot right"></span>
        </div></>
    );
};

const faceFour = () => {
    return(
        <><div class="top">
            <span class="dot left"></span>
            <span class="dot right"></span>
        </div>
        <div class="middle">
        </div>
        <div class="bottom">
            <span class="dot left"></span>
            <span class="dot right"></span>
        </div></>
    );
};

const faceThree = () => {
    return(
        <><div class="top">
            <span class="dot left"></span>
        </div>
        <div class="middle">
            <span class="dot center"></span>
        </div>
        <div class="bottom">
            <span class="dot right"></span>
        </div></>
    );
};

const faceTwo = () => {
    return(
        <><div class="top">
            <span class="dot left"></span>
        </div>
        <div class="middle">
        </div>
        <div class="bottom">
            <span class="dot right"></span>
        </div></>
    );
};


const faceOne = () => {
    return(
        <><div class="top">
        </div>
        <div class="middle">
            <span class="dot center"></span>
        </div>
        <div class="bottom">
        </div></>
    );
};


const Die = (props) => {
    const[face, updateFace] = React.useState(faceSix);
    const[dieValue, updateValue] = React.useState(6);
    const[selected, updatedSelected] = React.useState(false);
    
    function onChange({value}) {
        switch(value.value) {
            case 6:
                updateFace(faceSix);
                updateValue(6);
                break;
            case 5:
                updateFace(faceFive);
                updateValue(5);
                break;
            case 4:
                updateFace(faceFour);
                updateValue(4);
                break;
            case 3:
                updateFace(faceThree);
                updateValue(3);
                break;
            case 2:
                updateFace(faceTwo);
                updateValue(2);
                break;
            case 1:
                updateFace(faceOne);
                updateValue(1);
                break;
          }
    }


    return (
        <Button className="die" id= {props.dieNum} onClick={() => {
            updatedSelected(selected => !selected);
            props.dieClicked();}}
            style={{
                borderWidth: selected ? "thick" : "",
                borderColor: selected ? "red" : "",
            }}>
          {face}
        </Button>
      );
}


var selectedDice = [false, false, false, false , false, false]

function dieSelected(dieNum) {
    selectedDice[dieNum] = !selectedDice[dieNum];
}

async function rollDie() {
    
}

function rollDice() {
    var dieNum = 0;
    selectedDice.forEach((die) => {
        if(die) {
            rollDie(dieNum);
            dieNum++;
        }
    });
}

export function Farkle() {
    
 
    const navigate = useNavigate();
    
  return (
    <main className="container-fluid farklePage">
            <div className="farkleSideBar"> 
                <div className="farkleScoreboard" 
                    style={{ 
                        backgroundImage: `url(${process.env.PUBLIC_URL + '/notepadCropped.png'})` 
                    }}
                >
                    <table className="table table-striped-columns">
                        <thead>
                            <tr>
                                <th>Player1</th>
                                <th>Player2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td>500</td>
                               <td>650</td>
                            </tr>
                            <tr>
                               <td>500</td>
                               <td>1200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Button id='leaveGameButton' variant='danger' onClick={() => navigate('/')}>
                    Leave Game
                </Button>
            </div>
            <div className="container-fluid farkleMain">
                <div className="container-fluid buttonHolder">
                    <Button id='farkleEndTurnButton' variant='warning' size="lg" onClick={() => navigate('/')}>
                        End Turn
                    </Button>
                </div>
                <div className="tabletop container-fluid">
                    <ol className="farkleDice">
                        <li>
                            <Die dieNum={"0"} dieClicked={() => dieSelected(0)}/>
                        </li>
                        <li>
                            <Die dieNum={"1"} dieClicked={() => dieSelected(1)}/>                        
                        </li>
                        <li>
                            <Die dieNum={"2"} dieClicked={() => dieSelected(2)}/>                        
                        </li>
                        <li>
                            <Die dieNum={"3"} dieClicked={() => dieSelected(3)}/>                       
                        </li>
                        <li>
                            <Die dieNum={"4"} dieClicked={() => dieSelected(4)}/>                        
                        </li>
                        <li>
                            <Die dieNum={"5"} dieClicked={() => dieSelected(5)}/>                        
                        </li>
                    </ol>
                </div>
                <div className="container-fluid buttonHolder">
                    <Button id='rollButton' variant='primary' size="lg" onClick={() => rollDice()}>
                        Roll
                    </Button>
                </div>
                
            </div>
        </main>
  );
}
