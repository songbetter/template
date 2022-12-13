const config = {
  determineOptions: {
    urlLocaleKey: 'lang',
    cookieLocaleKey: 'lang',
  },
  defaultLocale: 'en-US',
  translationUri: (currentLocale) => `locales/${currentLocale}.json`,
}

export default config
