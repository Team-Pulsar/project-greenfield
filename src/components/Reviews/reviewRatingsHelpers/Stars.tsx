import React from 'react';
//@ts-ignore
import Ratings from 'react-ratings-declarative';

type StarProps = {
  rating: number;
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
