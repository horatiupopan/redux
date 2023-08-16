import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'

const renderField = (
  { input, label, type, meta: { asyncValidating, touched, error } },
) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
      </div>
      <div>
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  form: 'contact',
  validate,
  asyncValidate,
  asyncChangeFields: ['lastName']
})(ContactForm);

export default ContactForm;
