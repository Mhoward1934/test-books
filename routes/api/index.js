const router = require("express").Router();
const booksRoutes = require("./books");

router.use("/books", booksRoutes);

module.exports = router;