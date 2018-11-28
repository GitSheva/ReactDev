import React, { Component } from 'react';
import './TicTacToe.css';
import Square from '../Square/Square.js';

class TicTacToe extends Component {
    render() {
        return (
        <div>
            <div>
                <Square/><Square/><Square/>
            </div> 
            <div>
                <Square/><Square/><Square/>
            </div> 
            <div>
                <Square/><Square/><Square/>
            </div>
        </div>
        );
    }
}

export default TicTacToe;