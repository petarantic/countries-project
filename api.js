const { baseUrl, headers } = request;

function getCountry(fetchURL, name) {
  fetch(fetchURL + name, {
    'method': 'GET',
    headers
  })
  .then(response => response.json())
  .then(response => {
    const found = response.find(function (country, index) { 
      return country.name === name;
    });
    
    const capital = 'Capital: ' + found.capital;
    const population = 'Population: ' + found.population;
    const urlbeg= 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAMUhZJImC93BePVKuTu17GN1En2mXhxS0&q=';
    const natName = 'Native name: ' + found.nativeName;
  
    $('#capital').html(capital);
    $('#population').html(population);
    $('#map').attr('src', urlbeg + found.name);
    $('#nativeName').html(natName);
  })
  .catch(err => {           
    console.log('error');
  });
};

function chooseCountry(country) { 
  const fetchURL = `${baseUrl}name/`;
  $('.box').addClass('hide');
  $('.box2').removeClass('hide'); 
  getCountry(fetchURL, country);
}

function fetchCountries() {
	fetch(`${baseUrl}all`, {
  	'method': 'GET',
  	headers
	})
  .then(response => response.json())
  .then(response => {
    for (let i=0; i < response.length; i++) {
  	  const countryName = response[i].name;
  	  let li = document.createElement('li');
  	  li.innerHTML = countryName;
  	  countriesList.appendChild(li);
  	  li.onclick = () => chooseCountry(countryName);
    };
 	
 	  $('#back').click(function back(){
  	  $('.box').removeClass('hide'); 
 		  $('.box2').addClass('hide');
 	  });
  })
  .catch(err => {
    console.log('err');
  });
}

fetchCountries();