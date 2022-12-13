const storage = {
  set: (key, value) => {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value,
    )
  },
  get: (key) => {
    localStorage.getItem(key)
    const result = localStorage.getItem(key)
    if (result && (result.startsWith('[') || result.startsWith('{'))) {
      return JSON.parse(result)
    } else {
      return result
    }
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
  setSession: (key, value) => {
    sessionStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value,
    )
  },
  getSession: (key) => {
    const result = sessionStorage.getItem(key)
    if (result && (result.startsWith('[') || result.startsWith('{'))) {
      return JSON.parse(result)
    } else {
      return result
    }
  },
}
export default storage
