const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articles');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'cannot connect to db'));
db.once('open', () => {
  console.log('db connected');
});

const Schema = new mongoose.Schema({
  by: String,
  descendants: Number,
  id: Number,
  kids: Array,
  score: Number,
  time: Date,
  title: String,
  type: String,
  url: String,
});

const Article = mongoose.model('Articles', Schema);

const save = (art) => {
  return new Article(art).save()
}

const all = () => {
  return Article.find().exec();
};

module.exports = { Article, db, save, all };

// TEST VALUE
/*
db.article.insert("by": "askjigga", "descendants": "0", "id": "9", "kids": "[454418]", "score": "4", "time": "1160421542",
 "title": "weekendr: social network for the weekend", "type": "story", "url": "http://www.weekendr.com/")
 */
