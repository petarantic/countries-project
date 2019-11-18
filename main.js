fetch("https://restcountries-v1.p.rapidapi.com/all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "c5ce38b518msh74369a3a3425dc6p1b7f01jsn246f0fd6c1bb"
	}
})
.then(response => response.json())
.then(response => {
  let countryNames = [];
  for (let i = 0; i < response.length; i++) {
    countryNames.push(response[i].name);
  };
  
  const ul =  document.getElementById("listOfCountries")
  
  for (let i=0; i < countryNames.length; i++){
    let li = document.createElement('li');
    li.innerHTML = countryNames[i];
    ul.appendChild(li); 
    };

 document.getElementById("countriesSearch").addEventListener("input", myFunction);

  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('countriesSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listOfCountries");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

 })
.catch(err => {
	console.log(err);
});

    