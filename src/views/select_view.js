const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

this.element.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('SelectView:change', selectedIndex);
});
};

SelectView.prototype.populate = function(countriesData){
countriesData.forEach((country, index) => {
  const option = document.createElement('option');
  option.textContent = country.name;
  this.element.appendChild(option);


})
}

module.exports = SelectView;
