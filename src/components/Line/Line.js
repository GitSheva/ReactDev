import React, { Component } from 'react';
import Card from '../Card/Card.js';
import './Line.css';

class Line extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.lineType} Line Component</div>
        <ul className="cardList">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    );
  }
}

export default Line;
