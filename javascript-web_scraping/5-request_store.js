#!/usr/bin/node
const request = require('request');
const fs = require('fs');
request(process.argv[2], (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = response.body;
  fs.writeFile(process.argv[3], data, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
