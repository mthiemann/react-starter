import React from 'react';


const propTypes = {
  header: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
  routeParams: React.PropTypes.shape({
    playerOne: React.PropTypes.string,
  }).isRequired,
};

const contextTypes = {
  router: React.PropTypes.object.isRequired,
};

class PromptContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleUpdateUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;

    this.setState({
      username: '',
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        },
      });
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        {this.props.children}
      </div>
    );
  }
}

PromptContainer.propTypes = propTypes;
PromptContainer.contextTypes = contextTypes;

export default PromptContainer;
