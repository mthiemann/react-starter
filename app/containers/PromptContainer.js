import React from 'react';

import UsernameFieldContainer from './UsernameFieldContainer';

class PromptContainer extends React.Component {
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  constructor (props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  
  handleUpdateUsername (e) {
    this.setState({
      username: e.target.value
    })
  }
  
  handleSubmit (e) {
    console.log(e.target);
    e.preventDefault();
    let username = this.state.username;
    
    this.setState({
      username: ''
    });
    
    if(this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username);
    }
    
  }
  
  render () {
    return (
      <div>
        <h2>{this.props.header}</h2>
        {this.props.children}
      </div>
    )
  }
}


export default PromptContainer;