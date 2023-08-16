import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'

const renderField = (
  { input, label, type, meta: { asyncValidating, touched, error } },
) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
      {asyncValidating && <span>Loading</span>}
    </div>
  </div>
);

let ContactForm = props => {
  const { handleSubmit, asyncValidating } = props;
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
      <button type="submit" disabled={asyncValidating}>Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  form: 'contact',
  validate,
  asyncValidate,
  asyncBlurFields: ['lastName']
})(ContactForm);

export default ContactForm;
