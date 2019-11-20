import Validator from "validator";
import isEmpty from "./isEmpty";

const checkPhone = value => {
  const usFormat = new RegExp(
    /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/g
  );
  return usFormat.test(value);
};

const validateEmailInput = data => {
  let errors = {};

  console.log(data);

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.nameOfFacility = !isEmpty(data.nameOfFacility)
    ? data.nameOfFacility
    : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state : "";

  if (!Validator.isEmail(data.email)) errors.email = "Email is invalid";

  if (Validator.isEmpty(data.email)) errors.email = "Email field is required";
  if (Validator.isEmpty(data.firstName))
    errors.firstName = "First Name field is required";

  if (Validator.isEmpty(data.lastName))
    errors.lastName = "Last Name field is required";
  if (Validator.isEmpty(data.phone)) errors.phone = "Phone  field is required";

  if (!checkPhone(data.phone)) errors.phone = "Phone Number is not valid";
  if (Validator.isEmpty(data.nameOfFacility))
    errors.nameOfFacility = "Name of facility field is required";
  if (Validator.isEmpty(data.address))
    errors.address = "Address field is required";

  if (Validator.isEmpty(data.city)) errors.city = "City field is required";
  if (Validator.isEmpty(data.state)) errors.state = "state field is required";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateEmailInput;
