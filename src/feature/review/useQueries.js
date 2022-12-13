import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigation, useParams } from 'react-router-dom';
import { apis, keys } from '.';

export const useGetReviewList = () =>
  useQuery(keys.all, apis.getList, {
    retry: 0,
  });

export const useGetReviewItem = () => {
  const { id } = useParams();

  useQuery(keys.detail, () => apis.getItem(id));
};
