import React from 'react';

const PropTypes = React.PropTypes;


const propTypes = {
  text: PropTypes.string, // The text of the component
  speed: PropTypes.number, // The punctuation speed in ms
};

const defaultProps = {
  text: 'Loading',
  speed: 300,
};

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: this.props.text };
  }

  componentDidMount() {
    const stopper = `${this.props.text} ...`;

    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({ text: this.props.text });
      } else {
        this.setState({ text: `${this.state.text}.` });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
