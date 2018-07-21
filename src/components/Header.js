import React from 'react';

const Header = (props) => (
  <header className="header section container">
    <h1 className="title has-text-centered">
      { props.title }
    </h1>
  </header>
);

export default Header;