import React from 'react';

const PropTypes = React.PropTypes;


class ButtonField extends React.Component {
  
  static propTypes = {
    id: PropTypes.number.isRequired,
    showButton: PropTypes.bool.isRequired,
    buttonText: PropTypes.string,
    onChange: PropTypes.func,
    onButtonClick: PropTypes.func
  };
  
  render() {
    
    let group = (this.props.showButton) ? 'input-group' : 'form-group';
    
    let groupStyle = {};
    groupStyle.spacing = (group === 'input-group') ? { marginBottom: '12px'} : {};
    
    return (
      <div className={group} style={groupStyle.spacing}>
        <input className="form-control" type="text" placeholder={'Username ' + (this.props.id + 1) }
               autoFocus
               onChange={this.props.onChange}
               value={this.props.username} />
        { this.props.showButton &&
          <span className="input-group-btn">
            <button onClick={() => this.props.onButtonClick()} className="btn btn-danger" type="button">{this.props.buttonText}</button>
          </span>
        }
      </div>
    )
  }
}

export default ButtonField;