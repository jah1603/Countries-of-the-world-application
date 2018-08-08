const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container){
  this.container = container;
};


CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready' ,(evt) => {
    this.container.innerHTML = " ";
    const country = evt.detail;
    this.renderCountryHeader(country);
    this.renderRegionHeader();
    this.renderRegionContent(country);
    this.renderLanguages(country);
  });
}

CountryView.prototype.renderCountryHeader = function (country) {
  const countryHeader = document.createElement('h1');
  countryHeader.textContent = country.name;
  this.container.appendChild(countryHeader);
};

CountryView.prototype.renderRegionHeader = function () {
  const regionHeader = document.createElement('h2');
  regionHeader.textContent = "Region:";
  this.container.appendChild(regionHeader);
};

CountryView.prototype.renderRegionContent = function (country) {
  const regionContent = document.createElement('h3');
  regionContent.textContent = `${country.subregion}`;
  this.container.appendChild(regionContent);
};

CountryView.prototype.renderLanguages = function (country){
  const languageList = document.createElement('ol');
  languageList.style = "list-style-type:square";
  country.languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language['name'];
    languageList.appendChild(listItem);
    this.container.appendChild(languageList);
  });
}


module.exports = CountryView;
