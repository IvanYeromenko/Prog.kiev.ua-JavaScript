function renderCountries(countries) { //залив информации в таблицу
    //var getImg = document.getElementById('#image').src = "${country.flag}";
    var result = '';
    for(var item in countries) {
        var country = countries[item];
        result += `<tr><td>${+item+1}</td><td>${country.name}</td><td>${country.capital}</td><td>${country.population}</td><td><img width= 30 higth = 30 src="${country.flag}"></td><td>${country.currencies[0].name}</td><td>${country.languages[0].name}</td></tr>`;
    }
    $('table tbody').html(result);
}

$('#countries-btn').on('click', function(e) { //запрос
    $.ajax('https://restcountries.eu/rest/v2/all').then(function(res) { //response(res)-ответ который я получил
        countries = res;
        renderCountries(countries); //вызов
    })
})