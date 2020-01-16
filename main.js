fetch('https://restcountries-v1.p.rapidapi.com/all', {
  'method': 'GET',
  'headers': {
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
    'x-rapidapi-key': 'c5ce38b518msh74369a3a3425dc6p1b7f01jsn246f0fd6c1bb'
  }
})
.then(response => response.json())
.then(response => {
  let countryNames = [];
  for (let i = 0; i < response.length; i++) {
    countryNames.push(response[i].name);
  };
  
  const countriesList =  document.getElementById('listOfCountries')
  
  for (let i=0; i < countryNames.length; i++){
    let li = document.createElement('li');
    li.innerHTML = countryNames[i];
    countriesList.appendChild(li); 
    chooseCountry(li, i);
  };

  function chooseCountry(li, i) { 
    li.onclick = function () {
      const fetchURL = 'https://restcountries-v1.p.rapidapi.com/name/';
      $('.box').addClass('hide');
      $('.box2').removeClass('hide'); 
      getQuote(fetchURL, response[i].name);
    }
  }
    
  function getQuote(fetchURL, name) {
    fetch(fetchURL + name, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
        'x-rapidapi-key': 'c5ce38b518msh74369a3a3425dc6p1b7f01jsn246f0fd6c1bb'
      }
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

  $('#back').click(function back(){
    $('.box').removeClass('hide');
    $('.box2').addClass('hide');
  });

  document.getElementById('countriesSearch').addEventListener('input', search);

  function search() {
    const input = document.getElementById('countriesSearch');
    const filter = input.value.toUpperCase();
    let li = countriesList.getElementsByTagName('li');
     
    for (i = 0; i < li.length; i++) {
      a = li[i];
      let = a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  };
})
.catch(err => {
  console.log('err');
});