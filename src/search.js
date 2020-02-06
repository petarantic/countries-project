

export default function search() {
  const input = document.getElementById('countriesSearch');
  const filter = input.value.toUpperCase();
  let li = document.getElementsByTagName('li');
   
  for (let i=0; i < li.length; i++) {
    let countryEl = li[i];
    const txtValue = countryEl.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
};
