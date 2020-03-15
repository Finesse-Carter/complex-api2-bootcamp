
let button =  document.getElementById('btn')
let dictionKey="9893afff-ce34-44e9-bdac-0b6ea5c07848"
button.addEventListener("click",() =>{
  let search = document.getElementById('weed').value
  fetch(`http://strainapi.evanbusse.com/SjKO8um/strains/search/flavor/${search}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response);
    let race = response[0].race
    document.getElementById('flav1').textContent = response[0].name +" " + response[0].race
    document.getElementById('flav2').textContent = response[1].name +" " + response[0].race
    document.getElementById('flav3').textContent = response[2].name +" " + response[0].race
    document.getElementById('flav4').textContent = response[3].name +" " + response[0].race
    document.getElementById('flav5').textContent = response[4].name +" " + response[0].race

    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${race}?key=9893afff-ce34-44e9-bdac-0b6ea5c07848`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        console.log(response[0].shortdef[0]);
        document.getElementById('deff').textContent = response[0].shortdef[0]
      })
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    })
})
