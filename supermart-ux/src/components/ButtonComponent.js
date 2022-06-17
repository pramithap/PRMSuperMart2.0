import './components.css';
import {Button } from 'react-bootstrap';

const ButtonComponent = (props) => {
  return (
      <Button variant="primary" size="lg" active className = "button">
        {props.name}
      </Button>
  );
};

export default ButtonComponent;