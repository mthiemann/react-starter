import React from 'react';
import { Link } from 'react-router';

/**
 * Custom navigation link component that supports styling
 * of the wrapper element for active links
 */

const propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
  to: React.PropTypes.string.isRequired,
};

const contextTypes = {
  router: React.PropTypes.object.isRequired,
};

const NavLink = (props, context) => {
  const isActive = context.router.isActive(props.to, true);
  const activeClassName = isActive ? 'active' : '';

  return (
    <li className={activeClassName}>
      <Link {...props}>
        {props.children}
      </Link>
    </li>
  );
};

NavLink.propTypes = propTypes;
NavLink.contextTypes = contextTypes;

export default NavLink;
