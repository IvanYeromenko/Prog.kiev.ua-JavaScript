var countries = []; //вывод информации в консоль

function getCurrencieslist(currencies){ //через map
    return currencies.map(function(el){
        return el.name;
    }).join(", ");
}

function getLanguageslist(languages){
    let result = [];
    for(var language of languages){
        result.push(language.name);
    }
    result = result.join(" ,");
    return result;
}

function renderCountries(countries) { //залив информации в таблицу
    var result = '';
    for(var item in countries) {
        var country = countries[item];
        result += `<tr>
        <td>${+item+1}</td>
        <td>${country.name}</td>
        <td>${country.capital}</td>
        <td>${country.population}</td>
        <td><img width= 30 higth = 30 src="${country.flag}"></td>
        <td>${getCurrencieslist(country.currencies)}</td>
        <td>${getLanguageslist(country.languages)}</td></tr>`;
    }
    $('table tbody').html(result);
}

$('#countries-btn').on('click', function(e) { //запрос
    $.ajax('https://restcountries.eu/rest/v2/all').then(function(res) { //response(res)-ответ который я получил
        countries = res.map(function(country){
            return {
                name: country.name,
                capital: country.capital,
                population: country.population,
                flag: country.flag,
                currencies: country.currencies,
                languages: country.languages
            }
        });
        console.log(countries);
        renderCountries(countries); //вызов
        $('#select-country').prop('disabled', false); //разблокировка с элемента disabled
        selectCountries(countries);
    })
})

function sortCountries(field){ //сортировка полей по алфавиту и числам
    //console.log(field);
    var sortedCountries = countries.sort(function (countryA, countryB){
        if(countryA[field] > countryB[field]){
            return 1;
        } else {
            return-1;
        }
    })
    renderCountries(sortedCountries);
}

$('thead td[data-sort]').on("click", function(e) {
    console.log($(e.currentTarget).attr('data-sort')); //выводит только data-sort, text() выведет все
    sortCountries($(e.currentTarget).attr('data-sort'));
    $('#search').val('');  //записываю пустую строку если нажму на thead td[data-sort]
})

$('#search').on("keyup ", function(e){
    if(!countries.length){return;} //если мы не получили массив, мы не ищем
    var search = $(e.currentTarget).val().trim();
    //console.log(search);

    setTimeout(function(){ //задержка на 500 миллисекунд/1 секунду
        var filteredCountries = countries.filter(function(country){
            return country.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 || country.capital.toLowerCase().indexOf(search.toLowerCase()) >= 0;
        })
        renderCountries(filteredCountries);
    }, 500)
})

function selectCountries(countries) { //залив информации в таблицу
    var result = '';
    for(var item in countries) {
        var country = countries[item];
        result += `<option>${country.name}</option>`;
    }
    $('select').html(result);
}

$('#select-country').on("keyup ", function(e){
    if(!countries.length){return;} //если мы не получили массив, мы не ищем
    var selectCountry = $(e.currentTarget).val();
        alert(selectCountry);
})