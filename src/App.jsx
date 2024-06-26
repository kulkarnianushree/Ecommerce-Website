import Heading from './components/Heading/Heading';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import SubHeading from './components/Heading/SubHeading';
import Product from './components/Product/Product';
import React, { useState } from 'react';
import Display from './components/Display/Display';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState([]);
  const ProductArr = [
    { id: 1, title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
    { id: 2, title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
    { id: 3, title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
    { id: 4, title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' }
  ];

  const setDataHandler = (product) => {
    setCount(count + 1);
    setUserData((prevUserData) => [...prevUserData, { ...product, quantity: 1 }]);
  };

  const DeleteDataHandler = (id) => {
    setCount(count - 1);
    setUserData((prevUserData) => prevUserData.filter(item => item.id !== id));
  };

  const UpdateQuantityHandler = (id, quantity) => {
    setUserData((prevUserData) =>
      prevUserData.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const CartButtonHandler = () => {
    setShow(true);
  };
  const CancelButtonHandler = () =>{
    setShow(false)
  }
  const PurchaseButtonHandler = () =>{
    alert('Thanks for Purchasing the Product Happy Shopping')
  }
  return (
    <div>
      <Navbar bg="info" expand='lg' variant="dark">
        <Container>
          <Navbar.Brand>
            <Heading onChoose={CartButtonHandler} count={count} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <SubHeading />
      <Product productlist={ProductArr} onsetData={setDataHandler} />
      {show && (
        <Display
          data={userData}
          ondeleteData={DeleteDataHandler}
          onUpdateQuantity={UpdateQuantityHandler}
          onCancel={CancelButtonHandler}
          onDone={PurchaseButtonHandler}
        />
      )}
    </div>
  );
}

export default App;
