import React from 'react';

import Countdown from '../utils/Countdown';
import MainWrapper from '../components/MainWrapper';
import NotFound from '../components/NotFound';


const propTypes = { displayTime: React.PropTypes.number.isRequired }; // in seconds
const defaultProps = { displayTime: 5 };
const contextTypes = { router: React.PropTypes.object.isRequired };

class NotFoundContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      second: this.props.displayTime,
    };
    this.countdown = new Countdown(this.props.displayTime);
  }

  componentDidMount() {
    this.countdown.start(second => this.updateCountdown(second), () => this.routeToHome());
  }

  componentWillUnmount() {
    this.countdown.stop();
  }

  updateCountdown(second) {
    this.setState({ second });
  }

  routeToHome() {
    this.context.router.push('/');
  }

  render() {
    return (
      <MainWrapper>
        <NotFound second={this.state.second} />
      </MainWrapper>
    );
  }
}

NotFoundContainer.propTypes = propTypes;
NotFoundContainer.defaultProps = defaultProps;
NotFoundContainer.contextTypes = contextTypes;

export default NotFoundContainer;
