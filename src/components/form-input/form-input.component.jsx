import React from 'react';
import PropTypes from 'prop-types';
import './form-input.style.scss';
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input onChange={handleChange} {...otherProps} className="form-input" />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string
};

export default FormInput;
