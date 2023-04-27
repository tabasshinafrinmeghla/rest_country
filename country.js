const loadCountries = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data));
} 
  
const displayCountries = (countries) => {
const container = document.getElementById('countries');

console.log(countries[0]);
 countries.map(country => {
  const main = document.createElement('div');
  main.classList = 'country'
   const item = getCountryHtml(country)
   main.innerHTML = item

   container.appendChild(main)

})
}



const getCountryHtml = country =>{

  return`
    <h2>${country.name.common} </h2>
    <img src="${country.flags.png}" />
  `
}

loadCountries();