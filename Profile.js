import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  render() {
    const isLoading = true;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture"></div>
        <div className="profile-body">
          <h2>Name goes here</h2>
          <h3>@{this.props.username}</h3>
          <p>Bio goes here</p>
          <h3>My friends</h3>
          <Userlist usernames={[]} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}