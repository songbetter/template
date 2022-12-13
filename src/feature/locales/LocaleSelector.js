import { locales } from '.'

const LocaleSelector = () => {
  const onSelectLocale = (e) => {
    let lang = e.target.value
    window.location.search = `?lang=${lang}`
  }
  return (
    <select onChange={onSelectLocale} defaultValue="">
      <option value="" disabled>
        Change Language
      </option>
      {locales.map((locale) => (
        <option key={locale.value} value={locale.value}>
          {locale.label}
        </option>
      ))}
    </select>
  )
}

export default LocaleSelector
