const queryClientOptions = {
  defaultOptions: {
    queries: {
      retry: 0,
      /* retry
      - API가 실패하면 설정한 값만큼 재시도 하는 옵션
      - 특정 쿼리에 대해 변경이 필요한 경우 setQueryDefaults 사용
      - 예시) queryClient.setQueryDefaults('reviews', { retry: 5 })
      */
      suspense: true,
      /* suspense & useErrorBoundary
      - Fallback UI 설정에 대한 옵션
      - suspense를 true로 설정할 경우, useErrorBoundary 옵션도 true가 된다.
      */
    },
    mutations: {
      suspense: true,
    },
  },
}

export default queryClientOptions
