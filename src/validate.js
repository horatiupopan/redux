import {useTranslation} from "react-i18next";

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'required';
    } else if (values.firstName.length > 10) {
      errors.firstName = 'fnlength';
    }
    if (!values.lastName) {
      errors.lastName = 'required';
    }
    return errors;
  }

  export default validate;