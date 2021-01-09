const arrToObj = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return {}

  const obj = {}
  for (const a of arr) obj[a._id] = a
  return obj
}

export default arrToObj
