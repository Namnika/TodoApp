const router = require("express").Router();
const bodyParser = require("body-parser");
let TodoList = require("../models/todolist.model");

router.use(bodyParser.urlencoded({extended: true}));

router.route("/").get((req, res) => {
  TodoList.find()
  .then(todos => res.json(todos))
  .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const newTodo = new TodoList({
    text: req.body.text
  });

  newTodo.save()
  .then(() => res.send("TodoList Item added!!"))
  .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id")
  .delete((req, res) => {
    TodoList.findByIdAndDelete(req.params.id)
    .then(() => res.send("TodoList Item deleted!!"))
    .catch(err => res.status(400).json("Error: " + err));
  });

module.exports = router;
