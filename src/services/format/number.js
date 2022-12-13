import { currency } from 'feature/locales'

const { language } = navigator

const number = {
  currency: (price) =>
    Intl.NumberFormat(language, {
      style: 'currency',
      currency: currency[language],
    }).format(price),
}

export default number
