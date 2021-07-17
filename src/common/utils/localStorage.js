const fetchLocalStorage = {
  set(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  },
  remove(key) {
    return localStorage.removeItem(key)
  },
}

export default fetchLocalStorage
