import React from 'react';
import ReactDOM from 'react-dom';
import './Display.css'; 
import { Button } from 'react-bootstrap';

const Display = (props) => {
  const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.onCancel}></div>;
  };

  const ModalOverlay = (props) => {
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
        <div className='total'>Total ${total}</div>
        <Button variant='info' className='btn align-items-center' onClick={props.onDone}>PURCHASE</Button>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onCancel={props.onCancel} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay {...props} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default Display;
