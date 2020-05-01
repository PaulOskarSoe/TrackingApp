export const getAllDevices = async() => {
  return fetch(`/marker`, {
  })
  .then(res => {
      if (!res.ok) return null
      return res.json()
  })
  .catch(err => console.log(err))
};