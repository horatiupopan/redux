import './App.css';
import ContactForm from './form.js';
import Title from './title';
import {ThemeProvider} from 'styled-components';
import {useTranslation} from "react-i18next";

function App() {
  const {t, i18n} = useTranslation('common');
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const submit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
  return (
    <div className="App">
      <Title>{t('contactform')}</Title>
      <ContactForm onSubmit={submit}/>
    </div>
  );
}

export default App;
