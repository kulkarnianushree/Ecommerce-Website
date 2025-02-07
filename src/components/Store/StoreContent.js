import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import Display from "../Display/Display";
import CartButton from "./CartButton";

const StoreContent = () => {
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
    setUserData((prevUserData) => {
      const existingProductIndex = prevUserData.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedUserData = [...prevUserData];
        updatedUserData[existingProductIndex].quantity += 1;
        alert('Your Product is already in the cart');
        setCount(count + 1);
        return updatedUserData;
      } else {
        setCount(count + 1);
        return [...prevUserData, { ...product, quantity: 1 }];
      }
    });
  };

  const CartButtonHandler = async () => {
    setShow(true);
    try {
      const response = await fetch('https://crudcrud.com/api/abc73fe04f3745fdb2557221439c7554/cartItems');
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      setUserData(data);
      setCount(data.length); // update the count based on fetched data
      console.log('Cart items fetched successfully:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const SeeCartButtonHandler = () => {
    setShow(true);
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

  const CancelButtonHandler = () => {
    setShow(false);
  };

  const PurchaseButtonHandler = () => {
    alert('Thanks for purchasing the product. Happy shopping!');
  };

  return (
    <div>
      <Product productlist={ProductArr} onsetData={setDataHandler} onClick={SeeCartButtonHandler} />
      <CartButton onClick={CartButtonHandler} count={count} />
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
};

export default StoreContent;
