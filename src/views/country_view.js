const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container){
  this.container = container;
};


CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready' ,(evt) => {
    this.container.innerHTML = " ";
    const country = evt.detail;
    this.render(country);
  });
}

CountryView.prototype.render = function (country) {
  const countryHeader = document.createElement('h1');
  this.container.appendChild(countryHeader);
  countryHeader.textContent = country.name;
};
module.exports = CountryView;
