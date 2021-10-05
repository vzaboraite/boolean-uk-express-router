const express = require("express");

const router = express.Router();

const films = [
  {
    id: 1,
    title: "Bonnie and Clyde",
    director: "Arthur Penn",
  },
  {
    id: 2,
    title: "Reservoir Dogs",
    director: "Quentin Tarantino",
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
  },
  {
    id: 4,
    title: "Django Unchained",
    director: "Quentin Tarantino",
  },
];

router.get("/", (req, res) => {
  res.json({ films });
});

router.get("/:id", (req, res) => {
  const { id } = req.params; // id returned as string

  const foundFilm = films.find((film) => film.id === parseInt(id));

  res.json(foundFilm);
});

router.get("/director/:director", (req, res) => {
  const { director } = req.params;

  const filteredFilms = films.filter((film) => film.director === director);

  res.json(filteredFilms);
});

router.post("/", (req, res) => {
  const filmToCreate = {
    ...req.body,
  };

  filmToCreate.id = films.length + 1;

  // const updatedFilms = [...films, filmToCreate];

  films.push(filmToCreate);
  console.log({ films });

  res.json({ film: filmToCreate });
});

module.exports = router;
