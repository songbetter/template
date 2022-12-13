import ErrorBoundary from 'common/layout/ErrorBoundary';
import { Suspense, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { CartItem, FinalPrice, useQueries, atomkeys } from '.';

const CartForm = () => {
  const {
    data: { data },
    isSuccess,
  } = useQueries.useGetCartList();

  const createOrder = (e) => {
    e.preventDefault();
  };
  const [cartList, setCartList] = useRecoilState(atomkeys.cartState);

  useEffect(() => {
    isSuccess && setCartList(data.filter((el) => el !== null));
  }, []);

  return (
    <ErrorBoundary fallback="cart error">
      <Suspense fallback="cart loading...">
        <form
          onSubmit={createOrder}
          className="flex-col border bg-white px-6 py-8 shadow-md rounded-[4px] h-auto w-full"
        >
          <h2 className="text-center text-2xl mb-4">장바구니</h2>
          <section id="query">
            {cartList.map((item) => (
              <ErrorBoundary key={item.id} fallback="cartItem error">
                <Suspense fallback="cartItem loading...">
                  <CartItem {...item} />
                </Suspense>
              </ErrorBoundary>
            ))}
          </section>
          <section id="client" className="pb-4">
            <ErrorBoundary fallback="finalprice error">
              <Suspense fallback="finalprice loading...">
                <FinalPrice />
              </Suspense>
            </ErrorBoundary>
          </section>
          <button className="btn-primary" type="submit">
            주문하기
          </button>
        </form>
      </Suspense>
    </ErrorBoundary>
  );
};

export default CartForm;
