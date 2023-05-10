const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes/", JokeController.findJokesAll);
  app.get("/api/jokes/random", JokeController.findJokeRandom);
  app.post("/api/jokes/new", JokeController.createJoke);
  app.get("/api/jokes/:id", JokeController.findJoke);
  app.put("/api/jokes/update/:id", JokeController.updateJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};
