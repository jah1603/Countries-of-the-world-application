const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return;
    }

    const jsonString = xhr.responseText;
    console.log(jsonString);
    const data = JSON.parse(jsonString);
    onComplete(data);
});
};

module.exports = Request;
