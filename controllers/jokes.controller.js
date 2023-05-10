const Joke = require("../models/jokes.model");


module.exports.findJokesAll = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findJokeRandom = (req, res) => {
  Joke.findRandom({ _id: req.params.id })
    .then((allJokes) => {
      let oneRandomJoke =
        allJokes[Math.floor(Math.random() * allJokes.length)];
      res.json({ joke: oneRandomJoke });
    })
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne(req.params.id)
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
