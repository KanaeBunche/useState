import React from 'react'
import './Home.css'

export default function Home({ user, followers, toggleFollowers, isFollowing }) {
    return (
      <div className="container">
        <h1>{user.name}</h1>
        <img src={user.image} alt="Head Shot" className="image" />
  
        <h3>Followers: {followers}</h3>
        <h3>Likes: {user.likes}</h3>
        <button onClick={toggleFollowers}>
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    );
}

