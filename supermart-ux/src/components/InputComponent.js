import './components.css';

const InputComponent = (props) => {
  return (
      <input type = {props.type} value="" className='input'></input>
  );
};

export default InputComponent;