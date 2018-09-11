import React from 'react';
import { Link } from 'react-router-dom';

const LogWorkout = ({ user, exercisePlan, grit, time, intensity }) => {
  return(
    <article className="media">
      <figure className="media-left">
        <p className="image is-96x96">
          <img src={user.imageUrl}/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <Link to={`/profile/${user._id}`} className='title is-4 is-block' >{user.username}</Link>
          <Link to={`/tribe/${user.tribe}`} className='subtitle is-block'>{user.tribe} </Link>
          {/* CHANGEBLE CONTENT */}
          <p>Completed a {time} minutes long workout today at {intensity.toLowerCase()} intensity,
            bringing in {grit} grit points!</p>
          <Link to={`/exerciseplan/${exercisePlan._id}`}>Check out the plan here</Link>
          {/* CHANGEBLE CONTENT */}
        </div>

        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-reply"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-retweet"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default LogWorkout;
