function useGive(array) {
  if(!array) return ''
  
  const who = Math.floor(Math.random() * array.length)
  
  const winner = array[who]
  console.log(winner)
  return winner
}

export default useGive