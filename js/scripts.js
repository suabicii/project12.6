var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var url2 = 'https://restcountries.eu/rest/v2/capital/';
var citiesList = $('#cities');

$('#search').click(searchCountries);
$('#search2').click(searchCountriesByCity);

function searchCountries() {
  	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
	});
}

function searchCountriesByCity() {
  	var cityName = $('#city-name').val();
	if(!cityName.length) cityName = 'Warsaw';
	
	$.ajax({
  		url: url2 + cityName,
  		method: 'GET',
  		success: showCountriesByCityList
  	});
}

function showCountriesByCityList(resp) {
  citiesList.empty();
  resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(citiesList);
	});
}