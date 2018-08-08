const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
  this.countries = null;
}

Country.prototype.getData = function () {

  const request = new Request('https://restcountries.eu/');
  request.get((data) => {
    this.countries = data.countries;
    console.log(data);
    PubSub.publish('Joke:joke-loaded', this.text);
  });
};

module.exports = Joke;
