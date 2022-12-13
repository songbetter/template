import { Suspense } from 'react'

import { Layout } from 'common/layout'
import ErrorBoundary from 'common/layout/ErrorBoundary'
import { CartForm, Error, Loading } from 'feature/cart'

const MainPage = () => {
  return (
    <Layout>
      <section className=" border my-4 h-11 text-center">
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <CartForm />
          </Suspense>
        </ErrorBoundary>
        <div className=" border my-4 h-11 text-center">아무거나</div>
      </section>
    </Layout>
  )
}

export default MainPage
