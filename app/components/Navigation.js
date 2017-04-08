import React from 'react';
import NavLink from './NavLink';


export default () => (
  <ul className="nav nav-pills">
    <NavLink to="/" role="presentation">Home</NavLink>
    <NavLink to="/newBattle" role="presentation">New Battle</NavLink>
    <NavLink to="/battle" role="presentation">Battle</NavLink>
  </ul>
);
