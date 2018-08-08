const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
  this.countries = null;
}

Country.prototype.bindEvents = function(){
  this.getData();

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.displayCountryInfo(selectedIndex);
})
};

Country.prototype.getData = function () {

  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.countries = data;
    PubSub.publish('Country:country-data-loaded', this.countries);
  });
};

Country.prototype.displayCountryInfo = function(countryIndex){
  const countrySelected = this.countries[countryIndex];
  console.log(countrySelected);
  PubSub.publish('Country:selected-country-ready', countrySelected)
};

module.exports = Country;
