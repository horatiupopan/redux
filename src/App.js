import logo from './logo.svg';
import './App.css';
import ContactForm from './form.js'

function App() {
  const submit = values => {
    // print the form values to the console
    console.log(values)
  }
  return (
    <div className="App">
      <ContactForm onSubmit={submit}/>
    </div>
  );
}

export default App;
