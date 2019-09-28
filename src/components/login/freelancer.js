import React from "react";
import loginImg from "../../login.svg";

export class Freelancer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login as Freelancer
          </button>
        </div>
      </div>
    );
  }
}