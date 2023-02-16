import React from "react";
import "./formInput.scss";

// Creating a form Component
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* If label exists, then css will run */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
