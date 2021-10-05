const express = require("express");

const router = express.Router();

const books = [
  {
    id: 1,
    title: "1984",
    type: "fiction",
    author: "George Orwell",
  },
  {
    id: 2,
    title: "Life of Pi",
    type: "fiction",
    author: "Yann Martel",
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    type: "non-fiction",
    author: "Dale Carnegie",
  },
  {
    id: 4,
    title: "The Lean Startup",
    type: "non-fiction",
    author: "Eric Reis",
  },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundBook = books.find((book) => book.id === parseInt(id));

  res.json(foundBook);
});

module.exports = router;
