const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
document.cities = cities;

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

const inputEl = document.querySelector('.cities-list__input');
const suggestionsEl = document.querySelector('.cities-list__suggestions');

const filterCities = (value, citiesArr) => {
  const regex = new RegExp(value, 'gi');
  return citiesArr.filter(item => item.city.match(regex) || item.state.match(regex));
};

const highlightText = (text, value) => {
  const regex = new RegExp(value, 'gi');
  return text.replace(regex, match => `<mark class="cities-list__highlight">${match}</mark>`);
};

const populationWithCommas = str => str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

inputEl.addEventListener('input', ({ target: { value } }) => {
  const filtred = filterCities(value, cities);
  const filtredData = filtred.map(
    item => `
      <li class="cities-list__suggestion">
          <span class="cities-list__city-name">${highlightText(item.city, value)}, ${highlightText(
      item.state,
      value
    )}</span>
          <span class="cities-list__city-population">${populationWithCommas(item.population)}</span>
      </li>
    `
  );
  suggestionsEl.innerHTML = filtredData.join('');
});
