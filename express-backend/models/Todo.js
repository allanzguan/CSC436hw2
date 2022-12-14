const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema(
{
title: {type: String, required: true},
content: {type: String, required: true,},
author: {type: Schema.Types.ObjectId, ref: 'User'}
}
);
//Export model
module.exports = mongoose.model('Todo', TodoSchema);
