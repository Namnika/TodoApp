const router = require("express").Router();
const bodyParser = require("body-parser");
let Todolist = require("../models/todolist.model");

router.use(bodyParser.urlencoded({extended: true}));

router.route("/").get((req, res) => {
  Todolist.find()
  .then(todos => res.json(todos))
  .catch(err => {res.status(400).json("Error:" + err)});
});

router.route("/").post((req, res) => {
  const newTodo = new Todolist({
    text: req.body.text
  });

  newTodo.save()
  .then(() => res.send("Todolist Item added!!"))
  .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id")
  .delete((req, res) => {
    Todolist.findByIdAndDelete(req.params.id)
    .then(() => {"Todolist Item deleted!!"})
    .catch(err => res.status(400).json("Error: " + err));
  });

module.exports = router;
