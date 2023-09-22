let url = "https://kontests.net/api/v1/all"
let response = fetch(url)

response.then((v) => {
  return v.json()
}).then((v) => {
 console.log(v)

})
cardContainer.innerHTL = "allcards"