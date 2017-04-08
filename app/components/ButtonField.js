import React from 'react';

const PropTypes = React.PropTypes;


const propTypes = {
  id: PropTypes.number.isRequired,
  showButton: PropTypes.bool.isRequired,
  buttonText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const defaultProps = {
  buttonText: 'x',
};

const ButtonField = (props) => {
  const group = (props.showButton) ? 'input-group' : 'form-group';

  const groupStyle = {};
  groupStyle.spacing = (group === 'input-group') ? { marginBottom: '12px' } : {};

  return (
    <div className={group} style={groupStyle.spacing}>
      <input
        className="form-control" type="text" placeholder={`Username ${props.id + 1}`}
        onChange={props.onChange}
      />
      { props.showButton &&
        <span className="input-group-btn">
          <button
            onClick={() => props.onButtonClick()}
            className="btn btn-danger"
            type="button"
          >
            {props.buttonText}
          </button>
        </span>
      }
    </div>
  );
};

ButtonField.propTypes = propTypes;
ButtonField.defaultProps = defaultProps;

export default ButtonField;
