import React from 'react';

const Header = (props) => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-dark ">
      <div className="header-container">
        <div>
          <a className=" text-light" href="/"><img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="learn to code javascript at freeCodeCamp logo" className="img-responsive nav-logo"/> </a>
        </div>
        <div>Leaderboard</div>
      </div>
      {/*
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" >Clear Input <span className="sr-only"></span></a>
          </li>
        </ul>
        <button className=" btn btn-secondary mr-5">Clear Input</button>
      */}
    </nav>
  </header>
);

export default Header;