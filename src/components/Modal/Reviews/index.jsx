import React from "react";

import BookForm from "components/Modal/BookForm";

import {
  BookFormContainer,
  PersonContainer,
  PersonIcon,
  Review,
  ReviewContent,
  ReviewHeader,
  ReviewList,
  ReviewName,
  ReviewText,
  ReviewsContainer,
  StarContainer,
  StarFilled,
  StarOutlined,
} from "./styled";

const Reviews = ({ reviews }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarFilled key={i} />);
      } else {
        stars.push(<StarOutlined key={i} />);
      }
    }
    return stars;
  };

  return (
    <ReviewsContainer>
      <ReviewList>
        {reviews.map((review) => (
          <Review key={review.reviewer_name}>
            <PersonContainer>
              <PersonIcon>{review.reviewer_name.charAt(0)}</PersonIcon>
              <ReviewHeader>
                <ReviewName>{review.reviewer_name}</ReviewName>
                <StarContainer>
                  {renderStars(review.reviewer_rating)}
                </StarContainer>
              </ReviewHeader>
            </PersonContainer>

            <ReviewContent>
              <ReviewText>{review.comment}</ReviewText>
            </ReviewContent>
          </Review>
        ))}
      </ReviewList>
      <BookFormContainer>
        <BookForm />
      </BookFormContainer>
    </ReviewsContainer>
  );
};

export default Reviews;
