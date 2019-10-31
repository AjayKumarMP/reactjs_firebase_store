import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './login.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  submitLogin = (event) => {
    event.preventDefault();
    const {userName, password} = this.state;
    if(userName === 'root' && password === 'root'){
      this.props.history.push('/home')
    } else {
      NotificationManager.error('Invalid username/password', 'Un-Authorised', 4000, () => {
        
      }, true);
    }
    this.setState({
      userName: '',
      password: ''
    });
  }

  handleInput = (val, input) => {
    this.setState({
      input: val
    });
  }

  render() {
    return (
      <div>
      <div className="login">
        <form className="loginForm" onSubmit={(event) => this.submitLogin(event)}>
          <div className="form-group">
            <label>
              UserName:
              <input type="text" value={this.state.userName} name="name" onChange={(event)=>this.setState({userName: event.target.value})} className="form-control" required="required" title="" placeholder="Enter Username" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input type="password" value={this.state.password} name="name" onChange={(event)=>this.setState({password: event.target.value})} id="inputname" className="form-control" required="required" title="" placeholder="Enter Password" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary submitButton">Login</button>
        </form>
      </div>
        <NotificationContainer/>
      </div>
    )
  }
}
