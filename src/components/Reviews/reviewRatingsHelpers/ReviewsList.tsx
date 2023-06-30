import React from 'react';
import ReviewTile from './ReviewTile';
import AddReview from './AddReview';
import SortingView from './SortingView';
import Button from 'react-bootstrap/Button';

type ReviewListProps = {
  productId: number;
  reviews: Review[];
  show: boolean;
  clickHandler: () => void;
  loadMoreReviews: () => void;
  name: string;
};

type Review = {
  rating: number;
  reviewer_name: string;
  date: string;
  summary: string;
  body: string;
  recommend: boolean;
  response: boolean;
  photos: Record<string, string>[];
  helpfulness: boolean;
};

const ReviewsList: React.FC<ReviewListProps> = ({
  productId,
  reviews,
  show,
  clickHandler,
  loadMoreReviews,
  name,
}) => {
  return (
    <div>
      <div>
        <SortingView productId={productId} reviews={reviews} />
        <br />
        <ReviewTile reviews={reviews} />
        <div className="button-container">
          {show && (
            <Button
              style={{ borderColor: 'black' }}
              variant="light"
              className="more-reviews-btn"
              onClick={clickHandler}
            >
              More Reviews
            </Button>
          )}
          <AddReview
            loadMoreReviews={loadMoreReviews}
            name={name}
            productId={productId}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
