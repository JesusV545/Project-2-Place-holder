const Comments = require('express').Router();
const { readFromFile, readAndAppend } = require('../utils/fsUtils.js');
const uuid = require('../utils/uuid');

Comments.get('/', (req, res) => {
  readFromFile('./db/PLACEHOLDER').then((data) => res.json(JSON.parse(data)));
});

Comments.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newComment = {
      username,
      tip,
      topic,
        comment_id: uuid(),
    };

    readAndAppend(newComment, './db/CHANGEME*********');
    res.json(`Comment added successfully 🚀`);
  } else {
    res.error('Error in adding comment');
  }
});

module.exports = Comments;