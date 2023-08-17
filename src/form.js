import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import asyncValidate from './asyncValidate';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";

const ErrorMessage = styled.span`
  color: red;
`;

const AsyncField = styled(Field)`
  ${ErrorMessage} {
    color: #BF4F74;
  }
`;

let ContactForm = props => {
  const { handleSubmit, asyncValidating } = props;
  const {t, i18n} = useTranslation('common');
  const renderField = (
    { className, input, label, type, meta: { asyncValidating, touched, error } },
  ) => (
    <div className={className}>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <ErrorMessage>{t(error)}</ErrorMessage>}
        {asyncValidating && <ErrorMessage>{t('loading')}</ErrorMessage>}
      </div>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label={t('firstname')}
        />
      </div>
      <div>
        <AsyncField
          name="lastName"
          type="text"
          component={renderField}
          label={t('lastname')}
        />
      </div>
      <button type="submit" disabled={asyncValidating}>{t('submit')}</button>
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
