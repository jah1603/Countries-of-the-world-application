const CountryView = require('./views/country_view.js');
const SelectView = require('./views/select_view.js');
const Country = require('./models/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

 const container = document.querySelector('#country');
  const countryView = new CountryView(container);
  countryView.bindEvents();

  const element = document.querySelector('select#countries');
  const selectView = new SelectView(element);
  selectView.bindEvents();

  const country = new Country()
  country.getData();

});
