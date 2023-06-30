import React from 'react';
import Stars from './Stars';

type RatingSummaryProps = {
  avgRatings: number;
};

const RatingSummary: React.FC<RatingSummaryProps> = ({ avgRatings }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <span style={{ fontSize: 45, display: 'inline-block' }}>
          {avgRatings.toFixed(1)}{' '}
        </span>{' '}
        <span style={{ display: 'inline-block' }}>
          <Stars rating={avgRatings} />
        </span>
      </div>
    </div>
  );
};

export default RatingSummary;
