import React from 'react';

/**
 * A Countdown component that passes its state in seconds to all of its children
 */
export default class Countdown {
  
  static propTypes = {
    seconds: React.PropTypes.number.isRequired
  };
  
  constructor (seconds) {
    this.seconds = seconds;
    this.startCountdown();
  }
  
  startCountdown () {
    
  }
  
  componentDidMount () {
    this.timerID = setInterval(() => this.countDown(), 1000);
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  
  countDown () {
    this.setState({
      seconds: this.state.seconds - 1
    })
  }
  
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        seconds: this.state.seconds
      }));
    
    return (
      <div>
        {childrenWithProps}
      </div>
  )
  }
};