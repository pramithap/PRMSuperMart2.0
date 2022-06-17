import './components.css';
import { Dropdown } from 'react-bootstrap';

const DropDownComponent = (props) => {
  return (
    <div className = "drop">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
    </div>
   );
};

export default DropDownComponent;