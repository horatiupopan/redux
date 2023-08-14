const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length > 10) {
      errors.firstName = 'Must be 10 characters or less'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    }
    return errors
  }

  export default validate;