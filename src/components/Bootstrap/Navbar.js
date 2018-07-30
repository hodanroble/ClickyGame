import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href=" ">Restart</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{}}
    >
      <span className="navbar-toggler-icon" />
    </button>

    <h1 className="text-center">Chinese Clicker</h1>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <p>Your Score:</p><p id="iCurrentScore">00</p>
      <p>High Score</p><p id="iTopScore">00</p>
    </div>
  </nav>

);

export default Navbar;