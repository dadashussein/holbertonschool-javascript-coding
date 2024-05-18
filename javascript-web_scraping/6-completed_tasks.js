#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(response.body);
  const completedTasks = {};
  for (const todo of data) {
    if (todo.completed) {
      if (todo.userId in completedTasks) {
        completedTasks[todo.userId]++;
      } else {
        completedTasks[todo.userId] = 1;
      }
    }
  }
  console.log(completedTasks);
});
