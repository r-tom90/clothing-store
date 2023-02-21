import React from "react";
import { FormInputLabel, Input, Group } from "./formInput.styles";

// Creating a form Component
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* If label exists, then css will run */}
      {label && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
