#!/usr/bin/node
const request = require('request');

const doRequest = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response) => {
      if (!error && response.statusCode === 200) {
        resolve(response.body);
      } else {
        reject(error || new Error(`Failed to load ${url}, status code: ${response.statusCode}`));
      }
    });
  });
};

const fetchCharacterNames = async (filmId) => {
  try {
    const filmResponse = await doRequest(`https://swapi-api.hbtn.io/api/films/${filmId}`);
    const characterUrls = JSON.parse(filmResponse).characters;

    const promises = characterUrls.map(url =>
      doRequest(url).then(response => JSON.parse(response).name)
    );

    const characterNames = await Promise.all(promises);
    characterNames.forEach(name => console.log(name));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchCharacterNames(process.argv[2]);
