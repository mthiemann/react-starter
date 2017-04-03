import React from 'react';

const PropTypes = React.PropTypes;

class Loading extends React.Component {
  
  static propTypes = {
    text: PropTypes.string, // The text of the component
    speed: PropTypes.number // The punctuation speed in ms
  };
  
  static defaultProps = {
    text: 'Loading',
    speed: 300
  };
  
  constructor (props) {
    super(props);
    
    this.state = { text: this.props.text };
  }
  
  componentDidMount () {
    let stopper = this.props.text + '...';
    
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({ text: this.props.text })
      } else {
        this.setState({ text: this.state.text + '.'})
      }
    }, this.props.speed)
  }
  
  componentWillUnmount () {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}

export default Loading;