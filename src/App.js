import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'


let defaultStyle = {
  'fontFamily' : "'Proxima Nova', sans-serif",
  'color' : '#183851',
}

let fakeData = {
  users: {
    user1: {
      firstName: 'Jacob',
      lastNane: 'Anderson',
      billable: 16,
      nonBillable: 12,
    },
    user2: {
      firstName: 'Ben',
      lastNane: 'Cartwright',
      billable: 7,
      nonBillable: 21,
    },
  }
}

let settings=  {
  statCards: {
    card1: {
      statName: 'Total Hours',
      stat: 'test' 
    },
    card2: {
      statName: 'Total Hours',
      stat: 'test' 
    },
  }
}

class App extends Component {
  constructor() {
    super()
    //Binding the data to the state
    this.state = {data: {}}
  }
  componentDidMount() {
    //Using timeout to immitate loading times
    setTimeout(() => {
      this.setState({
        fakeData: fakeData,
        settings: settings
      })
    }, 1000)
  }
  render() {
    return ( 
      <div style={defaultStyle} className="App">
      {(this.state.fakeData && this.state.settings) ?
      <div>
        <nav className="app-nav">
          <h1>Time Report</h1>
          <UserTab/>
          <UserTab/>
        </nav>
          <section className="stat-card-sect">
              {Object.keys(this.state.settings.statCards).map(card => {
                {console.log('Card: ' +card)}
                return (
                <StatCard name={settings.statCards[card].statName} stat={settings.statCards[card].stat}/>)
              })}
              <StatCard 
                name='Total Hours'
                stat={this.state.fakeData.users.user1.billable + this.state.fakeData.users.user1.nonBillable }
              />
              <StatCard 
                name='Billable Hours'
                stat={this.state.fakeData.users.user1.billable}
              />
              <StatCard 
                name='Non-Billable Hours'
                stat={this.state.fakeData.users.user1.nonBillable}
              />
          </section>
          </div>:<div className="loader"><h1>Loading...</h1></div>}
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

class StatCard extends Component {
  render () {
    // let statValue = '17 hours 3 minutes'
    // let statName = 'Total Hours'
    {console.log(this.props)}
    return (
      <div style={defaultStyle} className="stat-card">
        <p className="stat-value">{this.props.stat}</p>
        <p className="stat-name">{this.props.name}</p>
      </div>
    )
  }
}

//https://www.teamwork.com/launchpad/login?redirect_uri=http%3A%2F%2Flocalhost%3A3000
export default App;
