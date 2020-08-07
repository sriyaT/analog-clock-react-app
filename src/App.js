import React, { Component } from 'react';
import HandComponent from './component/handComponent';
import Time from './component/time/Time';
import InnerClock from './component/innerClock/InnerClock';
import DateComponent from './component/dateDay/Date';
import './App.css';

class App extends Component {
  state = {
    hDeg: 0,
    mDeg: 0,
    sDeg: 0,
  };

  componentDidMount() {
    setInterval(() => {
      let d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      this.setState({
        hDeg: h * 30 + m * (360 / 720),
        mDeg: m * 6,
        sDeg: s * 6,
      });
    }, 100);
  }

  render() {
    return (
      <div className='App'>
        <div className='clock'>
          <div className='dot'></div>
          <HandComponent
            type='hour'
            style={{ transform: `rotate(${this.state.hDeg}deg)` }}
          />
          <HandComponent
            type='minute'
            style={{ transform: `rotate(${this.state.mDeg}deg)` }}
          />
          <HandComponent
            type='second'
            style={{ transform: `rotate(${this.state.sDeg}deg)` }}
          />
          <Time />
          {[...new Array(60)].map((item, index) => (
            <InnerClock key={index} rotate={6 * index} />
          ))}
          <DateComponent />
        </div>
      </div>
    );
  }
}

export default App;
