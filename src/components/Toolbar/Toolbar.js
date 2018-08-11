import React from 'react';
import './Toolbar.css';

const toolbar = props => (
  <header className='toolbar'>
    <nav className ='toolbar_navigation'>
      <div></div>
      <div className='toolbar_logo'><a href='/'>Reddit Clone</a></div>
      </nav>
    </header>
);

export default toolbar;