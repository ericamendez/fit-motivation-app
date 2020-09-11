import React, { Component } from 'react'
import './SignIn.scss'

class SignIn extends Component {
  /** redux state for a form field may look like the following
   *
   * fieldName: {
   *   value: string,
   *   isValid: bool,
   *   errorMessage: string,
   * }
   * 
  **/

  state = {
    username: '',
    password: ''
  }

  // may convert this into an redux action to mutate values on state.
  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e: any) => {
    console.log(this.state.username);
    e.preventDefault()
  }

  render() {
    return (
      <section className="container">
        <section className="form">
          <h1>FITT</h1>

          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>

        <section className="collage">

        </section>
      </section>
    );
  }
}

export default SignIn;
