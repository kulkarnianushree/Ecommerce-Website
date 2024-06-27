import React from 'react';
import './Display.css'; 
import { Button } from 'react-bootstrap';

const Display = (props) => {
  const RemoveButtonHandler = (id) => {
    props.ondeleteData(id);
  };

  const QuantityChangeHandler = (id, event) => {
    const quantity = Number(event.target.value);
    if (quantity > 0) {
      props.onUpdateQuantity(id, quantity);
    }
  };

  const total = props.data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="display-container">
        <div className='main'>
            <h2>Cart</h2>
            <button onClick={props.onCancel}>X</button>
        </div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="item-container">
                  <div>{item.title}</div>
                  <img src={item.imageUrl} alt={item.title} className="cart-image" />
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(event) => QuantityChangeHandler(item.id, event)}
                />
                <Button variant="danger" onClick={() => RemoveButtonHandler(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      <div className='h1'>Total ${total}</div>
      <Button variant='info' className='btn align-items-center' onClick={props.onDone}>PURCHASE</Button>
    </div>
  );
}

export default Display;
