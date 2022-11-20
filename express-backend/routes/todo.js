const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { default: Todo } = require("../../frontend/src/Post/Todo");
const Post = require("../models/Todo");
const privateKey = "secret";
router.use(function (req, res, next) {
	if (req.header("Authorization")) {
		try {
			req.payload = jwt.verify(req.header("Authorization"), privateKey, {
				algorithms: ["RS256"],
			});
		} catch (error) {
			return res.status(401).json({ error: error.message });
		}
	} else {
		return res.status(401).json({ error: "Unauthorized" });
	}
	next();
});

router.post("/", async function (req, res) {
	const todo = new Todo({
title: req.body.title,
content: req.body.content,
	author: req.payload.id,
});
	return todo
		.save()
		.then((savedTodo) => {
			return res.status(201).json({
				id: savedTodo._id,
	title: savedTodo.title,
	content: savedTodo.content,
	author: savedTodo.author,
			});
		})
.catch((error) => {
	return res.status(500).json({ error: error.message });
});
});

router.get("/", async function (req, res, next) {
    const todos = await Todo.find().where("author").equals(req.payload.id).exec();
    return res.status(200).json({ todos: todos });
    });
    

router.delete("/delete", async function (req, res, next){
	const todos = await Todo.find().where("id").equals(req.payload.id).exec();
	todos.delete();
	return res.status(200).json({ todos: todos });
});


module.exports = router;