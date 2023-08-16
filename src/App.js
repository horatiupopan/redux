import './App.css';
import ContactForm from './form.js';
import Title from './title';
import {ThemeProvider} from 'styled-components';

function App() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const submit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
  return (
    <div className="App">
      {/* <ThemeProvider> */}
        <Title>Contact Form</Title>
        <ContactForm onSubmit={submit}/>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
