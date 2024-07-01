import React from 'react';
import { NavLink} from 'react-router-dom';
import './Heading.css';

const Heading = (props) => {

  return (
    <div className=''>
      <nav>
        <ul>
          <li>
            <NavLink to="/Home" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Store" activeClassName="active">Store</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeClassName='active'>Contact Us</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Heading;
