#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(response.body).results;
  let count = 0;
  for (const film of data) {
    for (const character of film.characters) {
      if (character.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
