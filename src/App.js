import logo from './logo.svg';
import './App.css';
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  const apiUrl = 'http://localhost:3000';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  return (
    <Welcome name="Sara" />
  );
}

export default App;
