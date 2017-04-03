import React from 'react';
import { Link } from 'react-router';

/**
 * Custom navigation link component that supports styling
 * of the wrapper element for active links
 */
export default class NavLink extends React.Component {
  
  static propTypes = {
    to: React.PropTypes.string.isRequired
  };
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  render () {
    
    let isActive = this.context.router.isActive(this.props.to, true);
    let activeClassName = isActive ? 'active' : '';
    
    return (
      <li className={activeClassName}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    )
  }
}