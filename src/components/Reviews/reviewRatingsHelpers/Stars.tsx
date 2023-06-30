import React from 'react';
//@ts-ignore
import Ratings from 'react-ratings-declarative';

type StarProps = {
  rating: 1 | 2 | 3 | 4 | 5;
};

const Stars: React.FC<StarProps> = ({ rating }) => (
  <Ratings rating={rating} widgetRatedColors="black">
    <Ratings.Widget widgetDimension="15px" />
    <Ratings.Widget widgetDimension="15px" />
    <Ratings.Widget widgetDimension="15px" />
    <Ratings.Widget widgetDimension="15px" />
    <Ratings.Widget widgetDimension="15px" />
  </Ratings>
);

export default Stars;
