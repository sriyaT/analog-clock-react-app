import React, { Component } from 'react';
import './style.css';

class DateComponent extends Component {
  render() {
    let WeekDay = new Array(7);
    WeekDay = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    console.log('====', hour);
    console.log(minutes);
    console.log(seconds);

    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    let day = WeekDay[d.getDay()];

    return (
      <div>
        <div className='date'>{date + '/' + month + '/' + year}</div>
        <div className='day'>{day}</div>
      </div>
    );
  }
}

export default DateComponent;
