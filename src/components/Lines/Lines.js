import React, { Component } from 'react';
import Line from '../Line/Line.js';
import './Lines.css';

class Lines extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="linesList">
          <li>
            <Line lineType="Received" />
          </li>
          <li>
            <Line lineType="Sent" />
          </li>
          <li>
            <Line lineType="Archived" />
          </li>
          <li>
            <Line lineType="Closed" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Lines;
