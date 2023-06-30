// import Home from './Home';
// import Product from './Product';
// import Questions from './questions/Questions';
// import ProductInfo from './overviewComponents/productInfo';
// import RatingsAndReviews from './Reviews/RatingsAndReviews';
import React from 'react';
import RatingsAndReviews from './Reviews/RatingsAndReviews';

const App: React.FC = () => (
  <div>
    <h1>Hi there!</h1>
    <RatingsAndReviews name={'test'} productId={1} />
  </div>
);

export default App;
