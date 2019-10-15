import React from 'react'

import { Navbar } from 'react-bootstrap';

// function PlayerSignIn()
// const user = 

export default function NavigationBar() {
    return (
        <div>
            <Navbar className='bsNavBar'>
                <Navbar.Brand href="#home" className="mx-auto">
                    <img
                        alt="Rock"
                        src={require("../../src/img/Rock.png")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> {`Rock`}
                    <img
                        alt="Paper"
                        src={require("../../src/img/Paper.png")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{`Paper`}
                    <img
                        alt="Scissors"
                        src={require("../../src/img/Scissors.png")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {'Scissors'}
                    
                       
                          
                </Navbar.Brand>
            </Navbar>
                
        </div>
            )
}