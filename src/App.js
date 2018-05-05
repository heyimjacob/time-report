import React, { Component } from 'react';
import './App.css';
let defaultStyle = {
  'font-family' : "'Proxima Nova', sans-serif",
  'color' : '#183851',
}
class App extends Component {
  render () {
    let name = 'Jacob'
    let headerStyle ={
      'color': '#0099ff',
    }

    return (
      <div style={defaultStyle} className="App">
        <nav className="app-nav">
          <h1>Time Report</h1>
          <UserTab/>
          <UserTab/>
          <UserTab/>
        </nav>
        <section className="stat-card-sect">
          <StatisticCard/>
          <StatisticCard/>
          <StatisticCard/>
        </section>
      </div>
    )
  }
}

class UserTab extends Component {
  render () {
    let userName = "Jacob Anderson"
    let userImage = ""
    return (
      <div style={defaultStyle} className="user-tab">
        <div className="user-image">
          <img src={userImage}/>
        </div>
        <p>{userName}</p>
      </div>
    )
  }
}

class StatisticCard extends Component {
  render () {
    let statValue = '17 hours 3 minutes'
    let statName = 'Total Hours'
    return (
      <div style={defaultStyle} className="stat-card">
        <p className="stat-value">{statValue}</p>
        <p className="stat-name">{statName}</p>
      </div>
    )
  }
}

export default App;
