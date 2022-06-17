import './App.css';
import ButtonComponent from './components/ButtonComponent';
import DropDownComponent from './components/DropDownComponent';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div className="App">
      <div className = "header">Header Row</div>
      <div className = "product-search">
        <DropDownComponent name="products"></DropDownComponent>
        <InputComponent type="text"></InputComponent>
        <ButtonComponent name="search"></ButtonComponent>
      </div>
      <body></body>
    </div>
  );
}

export default App;
