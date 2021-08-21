import React, { Component } from "react";
import AgeSelection from "./AgeSelection";
import InterestSelection from "./InterestSelection";
import ImageSelection from "./ImageSelection";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    };
    this.progress = this.progress.bind(this);
  }
  progress() {
    this.setState({
      tab: this.state.tab + 1,
    });
  }
  render() {
    const { tab } = this.state;
    return (
      <div className="profile">
        <Link to="/">
          <i class="fas fa-chevron-left chevron"></i>
        </Link>
        <h1>Profile Setup</h1>
        <div className="profile__body">
          {tab === 1 && <AgeSelection />}
          {tab === 2 && <InterestSelection />}
          {tab === 3 && <ImageSelection />}
        </div>
        <div className="profile__navigation">
          <i
            class={`fas fa-circle profile__navigation-icon ${
              tab === 1 && "current"
            }`}
          ></i>
          <i
            class={`fas fa-circle profile__navigation-icon ${
              tab === 2 && "current"
            }`}
          ></i>
          <i
            class={`fas fa-circle profile__navigation-icon ${
              tab === 3 && "current"
            }`}
          ></i>
        </div>
        {(tab === 1 || tab === 2) && (
          <button
            onClick={this.progress}
            className="profile__button"
            id="continue-button"
          >
            Continue
          </button>
        )}
        {tab === 3 && (
          <Link to="/dashboard">
            <button className="profile__button">Register!</button>
          </Link>
        )}
      </div>
    );
  }
}

export default Profile;
