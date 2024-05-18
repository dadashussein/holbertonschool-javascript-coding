#!/usr/bin/node
const request = require('request');
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(JSON.parse(response.body).title);
});
