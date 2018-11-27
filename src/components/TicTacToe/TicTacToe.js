import React, { Component } from 'react';

class TicTacToe extends Component {
    render() {
        return (
            <div>
                <h4>"Hello TicTacToe"</h4>
            </div>
            <div>
                <table border="1">
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr> 
                </table>
            </div>
        );
    }
}


export default TicTacToe;