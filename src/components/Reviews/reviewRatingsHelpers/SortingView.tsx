import React from 'react';
// import { connect } from 'react-redux';
// import { getReviews } from '../../../actions/ReviewActions/actions';

type SortingViewProps = {
  productId: number;
  reviews: number[];
};

const SortingView: React.FC<SortingViewProps> = ({ productId, reviews }) => {
  let sort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    fetch(
      `http://18.224.200.47/reviews/${productId}/list?count=30&sort=${e.target.value}`
    );
  };

  return (
    <h6 className="sorting">
      {reviews.length} reviews, sorted by:
      <select style={{ textDecoration: 'underline' }} onChange={(e) => sort(e)}>
        <option value={'relevant'}>relevance</option>
        <option value={'helpful'}>helpful</option>
        <option value={'newest'}>newest</option>
      </select>
    </h6>
  );
};

export default SortingView;

// const mapStateToProps = (state) => {
//   return {
//     reviews: state.reviews.reviewsData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData: (url) => dispatch(getReviews(url)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SortingView);
