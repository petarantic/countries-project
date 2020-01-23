const countriesList =  document.getElementById('listOfCountries');

function search() {
  const input = document.getElementById('countriesSearch');
  const filter = input.value.toUpperCase();
  let li = countriesList.getElementsByTagName('li');
   
  for (i=0; i < li.length; i++) {
    a = li[i];
    const txtValue = a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
};

document.getElementById('countriesSearch').addEventListener('input', search);
