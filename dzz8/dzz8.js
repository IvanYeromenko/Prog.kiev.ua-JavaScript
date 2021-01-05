$('input[type=text]').on('keydown', e => {
    let name = $(e.currentTarget).val().trim();
    let skipSymbols = [',', '.', '$'];
    let result = '';
    for(let item of skipSymbols) {
        result = name.replace(item, '');
    }
    if(name !== result) {
        $(e.target).val(result);
    }
})

let countries = [];
let a;
let b;

const renderCountries = countries => {
    let result = '';
    for(let item in countries) {
        let country = countries[item];
        result += `<tr><td>${+item+1}</td>
            <td>${country.name}</td>
            <td>${country.capital}</td>
            <td>${country.population}</td>
            <td><img src="${country.flag}" width="50px;"></td>
            <td>${country.currencies.join(', ')}</td>
            <td>${country.languages.join(', ')}</td>
        </tr>`;
    }
    $('table tbody').html(result);
}

const buildSelect = countries => {
    let result = '';
    for(let countryName of countries) {
        result += `<option>${countryName}</option>`;
    }
    $('.select-countries').append(result);

    $('.select-countries').removeAttr('disabled');
    b = new Date().getTime();
    console.log(b - a);
}

const processCountries = res => { //здесь хранится вся наша информация с таблицы
    countries = res.map(country => {
        return {
            name: country.name,
            capital: country.capital,
            population: country.population,
            flag: country.flag,
            currencies: country.currencies.map(el => {
                if(el && el.name) {
                    return el.name;
                } else {
                    return '';
                }

            }),
            languages: country.languages.map(el => {
                if(el && el.name) {
                    return el.name;
                } else {
                    return '';
                }
            })
        }
    });
    localStorage.setItem('countries', JSON.stringify(countries)); //принимает элементы countries в строковой форме
    let countriesForSelect = res.map(country => {
        return country.name;
    });
    renderCountries(countries);
    buildSelect(countriesForSelect);
}

$('#countries-btn').on('click', e => {
    a = new Date().getTime();
    let storedCountries = localStorage.getItem('countries'); //достает эти элементы
    if(storedCountries) { //если есть что-то сохраненное
        processCountries(JSON.parse(storedCountries)); //вызываем нашу функцию с информацией с таблицы
        $('#countries-btn').hide(); //кнопка пропадает
    }

    $('#countries-btn').attr('disabled', '');
    $('#countries-btn .spinner').removeClass('hidden');
    $.ajax('https://restcountries.eu/rest/v2/all').then(res => {
        $('#countries-btn').removeAttr('disabled');
        $('#countries-btn .spinner').addClass('hidden');
        console.log(res);
        processCountries(res);
        $('#countries-btn').hide();
    }).catch(err => {
        console.log(err);
        $('#countries-btn').removeAttr('disabled');
        $('#countries-btn .spinner').addClass('hidden');
    })
});



const sortCountries = field => {
     console.log(field);

    let sortedCountries = countries.sort((countryA, countryB) => {
        if(field === 'population') {
            if(countryA[field] < countryB[field]) {
                return 1;
            } else {
                return -1;
            }
        } else {
            if(countryA[field] > countryB[field]) {
                return 1;
            } else {
                return -1;
            }
        }
    })
    localStorage.setItem('sortedCountries', JSON.stringify(sortedCountries));
    renderCountries(sortedCountries);
}



$('thead td[data-sort]').on('click', e => {
    let receivedCountries = localStorage.getItem('sortedCountries'); //достает эти элементы
    if(receivedCountries) { //если есть что-то сохраненное
        sortCountries(JSON.parse(receivedCountries)); //вызываем нашу функцию с отсортированными странами   
    }
    sortCountries($(e.currentTarget).attr('data-sort'));
    $('#search').val('');
})

$('#search').on('keyup', e => {
    if(!countries.length) { return; }
    let search = $(e.currentTarget).val().trim().toLowerCase();

    if(search.length >= 3) {
        setTimeout(() => {
            let filteredCountries = countries.filter(country => {
                return country.name.toLowerCase().indexOf(search) >= 0
                    || country.capital.toLowerCase().indexOf(search) >= 0;
            });
            console.log(1);
            renderCountries(filteredCountries);
        }, 500);
    } else {
        renderCountries(countries);
    }


})