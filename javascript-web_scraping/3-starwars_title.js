#!/usr/bin/node
const request = require('request');
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(response.body.title);
});
