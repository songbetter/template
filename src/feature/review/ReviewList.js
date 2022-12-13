import ReviewItem from './ReviewItem';
import { useGetReviewList } from './useQueries';

const ReviewList = () => {
  const { data } = useGetReviewList();
  return data.map(review => <ReviewItem {...review} />);
};

export default ReviewList;
