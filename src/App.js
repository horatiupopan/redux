import logo from './logo.svg';
import './App.css';
import ContactForm from './form.js'

function App() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const submit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }
  return (
    <div className="App">
      <ContactForm onSubmit={submit}/>
    </div>
  );
}

export default App;
