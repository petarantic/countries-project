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
    clickFunction(li, i);
    };



function clickFunction(li, i) { 
      li.onclick = function() {
      $(".box").addClass("hide");
      $(".box2").removeClass("hide"); 
      var capital = "Capital: " + response[i].capital;
      var population = "Population: " + response[i].population;
      $("#capital").html(capital);
      $("#population").html(population);
      var urlbeg="https://www.google.com/maps/embed/v1/place?key=AIzaSyAMUhZJImC93BePVKuTu17GN1En2mXhxS0&q=";
      $('#map').attr( "src",urlbeg+response[i].name);
      var fetchURL = 'https://restcountries-v1.p.rapidapi.com/name/'+response[i].name;
      getQuote(fetchURL);
    }
}
  

function getQuote(fetchURL) {
  fetch(fetchURL, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "c5ce38b518msh74369a3a3425dc6p1b7f01jsn246f0fd6c1bb"
  }
})
.then(response => response.json())
.then(response => {
  var natName = "Native name: " + response[0].nativeName;
  $("#nativeName").html(natName);
  var found = response.find(function(obj, index){ 
    return index > 0
   });
  var USAnname = "Native name: " + found.nativeName ;
  $("#nativeName").html(USAnname);
})
.catch(err => {           
  console.log("error");
});
};

$("#back").click(function back(){
    $(".box").removeClass("hide");
    $(".box2").addClass("hide");
});

 document.getElementById("countriesSearch").addEventListener("input", myFunction);

  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('countriesSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listOfCountries");
  li = ul.getElementsByTagName('li');
   
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
})


.catch(err => {
  console.log("err");
});


