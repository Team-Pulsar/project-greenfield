import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../reviewsStyle.css';

type StarBreakdownProps = {
  ratings: number[];
  numOfRatings: number;
  filtered: boolean;
  stars: number[];
  changeView: () => void;
  handleClick: (e: React.SyntheticEvent) => void;
};

const StarBreakdown: React.FC<StarBreakdownProps> = ({
  ratings,
  numOfRatings,
  filtered,
  stars,
  changeView,
  handleClick,
}) => {
  return (
    <>
      <div className="starBarContainer">
        {[5, 4, 3, 2, 1].map((star, i) => {
          let amount = ratings[star] || 0;
          let totalReviews = numOfRatings || 0;
          let percentage = (amount / totalReviews) * 100;
          return (
            <React.Fragment key={i}>
              <span
                className="progress-label-left"
                onClick={(e) => handleClick(e)}
              >
                {star} stars
              </span>
              <span className="progress-label-right">{amount}</span>
              <ProgressBar now={percentage} variant="success" />
              <br />
            </React.Fragment>
          );
        })}
      </div>
      {filtered && (
        <>
          <p>
            Current filters applied:{' '}
            {stars.map((star, i) => (
              <span key={i}>"{star} stars", </span>
            ))}
          </p>
          <p className="remove-filter" onClick={changeView}>
            Remove All Filters
          </p>
        </>
      )}
    </>
  );
};

export default StarBreakdown;
