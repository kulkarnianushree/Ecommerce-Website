import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Review from '../components/Review/Review';
import './ProductDetails.css';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id.toString() === productId);
  const [userReviews, setUserReviews] = useState([]);

  const userReviewHandler = (review) => {
    setUserReviews((prevReviews) => [...prevReviews, review]);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.title} />
      <Review onReview={userReviewHandler} />
      {userReviews.length > 0 && (
        <div className="user-reviews">
          <h2>User Reviews</h2>
          {userReviews.map((review, index) => (
            <div className="user-review" key={index}>
              <h5>{review.name}</h5>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
