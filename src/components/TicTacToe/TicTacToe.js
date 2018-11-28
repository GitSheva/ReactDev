import React, { Component } from 'react';
import './TicTacToe.css';
import Square from '../Square/Square.js';

class TicTacToe extends Component {
    constructor (props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    
    render() {
        return (
        <div>
            <div className="board-row">
                <Square value={this.state.squares[0]} />
                <Square value={this.state.squares[1]} />
                <Square value={this.state.squares[2]}/>
            </div> 
            <div className="board-row">
                <Square value={this.state.squares[3]} />
                <Square value={this.state.squares[4]} />
                <Square value={this.state.squares[5]} />
            </div> 
            <div className="board-row">
                <Square value={this.state.squares[6]} />
                <Square value={this.state.squares[7]} />
                <Square value={this.state.squares[8]} />
            </div>
        </div>
        );
    }
}

export default TicTacToe;