const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then((result) => {
//
// });

Todo.findByIdAndRemove('585b2bde5e69b10910ed3ba9').then((todo) => {
  console.log(todo);
});
