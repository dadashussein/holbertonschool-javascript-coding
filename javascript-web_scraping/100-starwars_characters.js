#!/usr/bin/node
const request = require('request');
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(response.body).characters;
  for (const charackter of data) {
    request(charackter, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(JSON.parse(response.body).name);
    });
  }
});
