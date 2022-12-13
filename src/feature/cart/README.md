## 장바구니
### 1. 기능 정의
![image](https://user-images.githubusercontent.com/75013112/207218930-421789ac-5002-4afc-93a8-1d17b305cf81.png)

- 장바구니 리스트 조회
    - 데이터를 요청한다.
        - option: 재시도 3회, suspense,
        - getList
            
            ```jsx
            const queryKey = ['cart']
            
            const getList = async () => await API.get(`/cart`),
            
            const useGetCartList = () =>
              useQuery(['cart'], apis.getList, {
                retry: 3,
            		suspense: true
              })
            
            const {
                data: { data },
              } = useQueries.useGetCartList()
            ```
            
    - 데이터를 fetch, refetch할 때 suspense에서 fallback으로 설정한 Loading 컴포넌트를 렌더링 한다.
    - 데이터를 성공적으로 받아오면 상태를 저장한다.
        - recoilState
            
            ```jsx
            const [cartList, setCartList] = useRecoilState(atomkeys.cartState)
            
            const cartState = atom({
                key: 'cartState',
                default: [
                  { id: 'product-1', name: '1번상품', quantity: 1, price: 1000 },
                  { id: 'product-2', name: '2번상품', quantity: 2, price: 2000 },
                ],
              }),
            ```
            
- 장바구니 아이템 수정
    - 수량은 늘리고 줄일 수 있다.
        - counter는 initialcount를 초기 상태값으로 받고 증감 기능만 한다.
        - counter에서 증감되는 value를 recoil state로 관리하고, cart selector에서 get 메소드로 가져와 업데이트 한다.
    - DB에 저장 되지 않고, 새로고침 시 DB값으로 초기화된다.
- 장바구니 아이템 삭제
    - deleteItem
        
        ```jsx
        const queryKey = ['cart', id]
        
        async (id) => await API.delete(`/cart/${id}`),
        
        const useDeleteCartItem = () => {
          const queryClient = useQueryClient()
        
          return useMutation((id) => apis.deleteItem(id), {
            onSuccess: () => {
              queryClient.invalidateQueries(keys.all)
            },
          })
        }
        
        const { mutate } = useDeleteCartItem()
        
          // 선언형
          const deleteItem = useCallback(
            async (id) => {
              mutate(id, {
                onSuccess: () => {},
                onError: () => {},
              })
            },
            [mutate],
          )
        ```
        
- 최종 수량 및 최종 결제 금액 조회
    - cartList에 있는 모든 아이템의 수량을 더한 값을 조회한다.
    - cartList에 있는 모든 아이템의 수량과 금액을 곱한 값의 합을 조회한다.
    - counter로 변화한 숫자를 반영한다.

### selector

cart selector에서 get 메소드로 countState를 가져와 업데이트 한다.

- atomkeys

### 2. 장바구니 조회, 수정, 삭제 기능
![Flow: 언어 변경 → 장바구니 아이템 삭제 / 장바구니 아이템 추가](https://user-images.githubusercontent.com/75013112/207219104-7b3b83e2-0ca9-454a-b0e3-f394c6c55c70.png)


https://user-images.githubusercontent.com/75013112/207219640-c0b216d4-ede9-49c6-8af2-2d74c70940c0.mov


### 3. 디렉토리 구조에 따른 구분
![image](https://user-images.githubusercontent.com/75013112/207219458-1d694920-6919-4734-a251-a280f53897a8.png)
