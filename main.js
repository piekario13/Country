$(function () {
    console.log('DOM podpięty');
});

const url = 'https://restcountries.eu/rest/v1/name/';
const countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    let countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    console.log(countryName);
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        $('<h1>').text('Kraj: ' + item.name).appendTo(countriesList);
        $('<li>').text('Stolica: ' + item.capital).appendTo(countriesList);
        $('<li>').text('Region: ' + item.region).appendTo(countriesList);
        $('<li>').text('Język: ' + item.languages).appendTo(countriesList);
        $('<li>').text('Populacja: ' + item.population).appendTo(countriesList);
    });
}