import './App.css';
import ContactForm from './form.js';
import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #BF4F74;
// `;

function App() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const submit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
  return (
    <div className="App">
      {/* <Title>Contact Form</Title> */}
      <ContactForm onSubmit={submit}/>
    </div>
  );
}

export default App;
