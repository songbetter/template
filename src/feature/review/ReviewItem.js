import {
  useGetCartList,
  useGetReviewItem,
  useGetReviewList,
} from './useQueries';

const ReviewItem = () => {
  const { data } = useGetReviewItem();
  console.log(data);
  return <div>{data.id}</div>;
};

export default ReviewItem;
