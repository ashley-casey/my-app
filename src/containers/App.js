import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Link from '../components/link/Link.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 204 204"
            className="App-logo"
          >
            <title>Coffee Cup</title>
            <circle
              cx="102"
              cy="102"
              r="100"
              fill="#bcbcbc"
              stroke="#9f9e9f"
              stroke-miterlimit="10"
              stroke-width="4"
            />
            <circle
              cx="120.08"
              cy="123.3"
              r="74.55"
              fill="#7d7c7c"
              opacity="0.33"
            />
            <path
              d="M189.43,91.21H178.12a10.7,10.7,0,0,0-3.13.47,73.73,73.73,0,1,0,0,20.65,10.7,10.7,0,0,0,3.13.47h11.31a10.79,10.79,0,0,0,0-21.58Z"
              fill="#fff"
            />
            <circle
              cx="102"
              cy="102"
              r="56.47"
              fill="#57391e"
              stroke="#99732d"
              stroke-miterlimit="10"
              stroke-width="3"
            />
            <path
              className="App-logo-bubbles"
              d="M54.93,121.06a3.06,3.06,0,1,0-1.24,0,3.06,3.06,0,1,0,1.24,0Z"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="61.67"
              cy="125.23"
              r="1.17"
              fill="#99732c"
            />
            <path
              className="App-logo-bubbles"
              d="M62.83,132.08a1.48,1.48,0,0,0,.67.17,1.5,1.5,0,0,0,0-3l-.16,0a3.07,3.07,0,1,0-.52,2.82Z"
              fill="#99732c"
            />
            <path
              className="App-logo-bubbles"
              d="M68.44,137.25s0-.09,0-.14a1,1,0,0,0,.89.52,1.06,1.06,0,0,0,0-2.12,1,1,0,0,0-1,.78,4,4,0,1,0,.13,1Z"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="58.55"
              cy="125.23"
              r="1.17"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="71.87"
              cy="123.74"
              r="1.49"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="79.81"
              cy="139.44"
              r="1.81"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="73.37"
              cy="130.75"
              r="1.5"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="57.96"
              cy="113.38"
              r="0.59"
              fill="#99732c"
            />
            <path
              className="App-logo-bubbles"
              d="M78.33,144a2.67,2.67,0,0,0-2.11,1,3,3,0,0,0-5.34-.73,2.5,2.5,0,1,0-.29,2.74,3,3,0,0,0,4.54,1.34,2.06,2.06,0,0,0-.26,1,2.08,2.08,0,1,0,4.17,0s0-.07,0-.1a2.68,2.68,0,0,0-.69-5.28Z"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="84.92"
              cy="153.25"
              r="1.75"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="84.3"
              cy="147.86"
              r="1.14"
              fill="#99732c"
            />
            <circle cx="50.79" cy="108.62" r="0.46" fill="#99732c" />
            <circle
              className="App-logo-bubbles"
              cx="75.91"
              cy="113.83"
              r="1.04"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="85.21"
              cy="123.16"
              r="0.91"
              fill="#99732c"
            />
            <circle
              className="App-logo-bubbles"
              cx="66.86"
              cy="115.57"
              r="0.7"
              fill="#99732c"
            />
          </svg>
          <h1 className="App-title">procaffeinate</h1>
          <p className="App-intro">[pro-kaf-uh-neyt]</p>
          <p className="App-intro">
            (v.) To delay or postpone action; put off doing something until
            you've had coffee.
          </p>
          <Link link="#">Link</Link>
        </header>
      </div>
    );
  }
}

export default App;
