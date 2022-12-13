import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import intl from 'react-intl-universal'

import { config, locales } from '.'

const IntlWrapper = ({ children }) => {
  const [initDone, setInitDone] = useState(false)

  useEffect(() => {
    loadLocales()
  }, [])

  const loadLocales = () => {
    let currentLocale = intl.determineLocale(config.determineOptions)

    if (!locales.some((item) => item.value === currentLocale)) {
      currentLocale = config.defaultLocale
    }

    axios
      .get(config.translationUri(currentLocale))
      .then((response) => {
        intl.init({
          currentLocale,
          locales: {
            [currentLocale]: response.data,
          },
        })
      })
      .then(() => {
        setInitDone(true)
      })
  }

  return initDone && <Fragment>{children}</Fragment>
}

export default IntlWrapper
