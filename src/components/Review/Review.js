import React, { useState } from "react";

const Review = (props) => {
  const [review, setReview] = useState({
    name:'',
    review: ''
  });

  const reviewHandler = (event) => {
    setReview((prevReview) => ({
      ...prevReview,
      review: event.target.value
    }));
  };
  const nameChangeHandler = (event)=>{
    setReview((prevReview)=>({
        ...prevReview,
        name:event.target.value
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onReview(review);
    setReview({ 
        review: '' ,
        name:''
    }); 
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>name</label>
        <input 
            type="text"
            onChange={nameChangeHandler}
            value={review.name}
        />
        <label>Write Review</label>
        <input
          type="text"
          value={review.review}
          onChange={reviewHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Review;
