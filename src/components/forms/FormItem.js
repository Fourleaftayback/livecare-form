import React from "react";
import classnames from "classnames";

import { FormGroup, Input, Label } from "reactstrap";

const FormItem = ({
  label,
  type,
  error,
  placeholder,
  name,
  value,
  onChange,
  info
}) => {
  return (
    <FormGroup>
      {label && <p className="text-left">{label}</p>}
      <Input
        type={type}
        className={classnames("form-control", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </FormGroup>
  );
};

export default FormItem;
