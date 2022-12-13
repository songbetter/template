import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { apis, keys, configs } from '.'

const useQueries = {
  useGetCartList: () => useQuery(keys.list, apis.getList, configs.list),

  useDeleteCartItem: () => {
    const queryClient = useQueryClient()

    return useMutation((id) => apis.deleteItem(id), {
      onSuccess: () => {
        queryClient.invalidateQueries(keys.list)
      },
    })
  },
}

export default useQueries
