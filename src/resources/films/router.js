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

module.exports = router;
