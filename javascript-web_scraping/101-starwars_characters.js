#!/usr/bin/node
const request = require('request');
const doRequest = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response) => {
      if (!error && response.statusCode === 200) {
        resolve(response.body);
      } else {
        reject(error);
      }
    });
  });
};
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, async (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(response.body).characters;
  for (const charackter of data) {
    async function fetchName () {
      try {
        const response = await doRequest(charackter);
        console.log(JSON.parse(response).name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchName();
  }
});
