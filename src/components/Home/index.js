// Write your code here

import {Component} from 'react'
import './index.css'

import Message from '../Message'
import LogInButton from '../Login'
import LogOutButton from '../Logout'

class Home extends Component {
  state = {isLogged: true}

  isButtonChange = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  changeButton = () => {
    const {isLogged} = this.state
    if (isLogged === true) {
      return <LogInButton onClick={this.isButtonChange} />
    }
    return <LogOutButton onClick={this.isButtonChange} />
  }

  render() {
    const button = this.changeButton()
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message />
          {button}
        </div>
      </div>
    )
  }
}

export default Home
