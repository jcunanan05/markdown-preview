import React from 'react';

const Header = (props) => (
  <header className="header section container is-fluid">
    <h1 className="title has-text-centered has-text-white header__title">
      <i class="fab fa-react" alt="react icon"></i> { props.title }
    </h1>
  </header>
);

export default Header;