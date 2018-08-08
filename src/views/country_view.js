const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container){
  this.container = container;
};


ContryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready' (evt) => {
    this.container.innerHTML = " ";
    const country = evt.detail;
    const countryHeader = document.createElement('h1');
    this.container.appendChild(countryHeader);
    countryHeader.textContent = country.name;

  });
}
