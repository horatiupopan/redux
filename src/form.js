import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import asyncValidate from './asyncValidate';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: red;
`;

const AsyncField = styled(Field)`
  ${ErrorMessage} {
    color: #BF4F74;
  }
`;

const renderField = (
  { className, input, label, type, meta: { asyncValidating, touched, error } },
) => (
  <div className={className}>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
      {asyncValidating && <ErrorMessage>Loading</ErrorMessage>}
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
        <AsyncField
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
