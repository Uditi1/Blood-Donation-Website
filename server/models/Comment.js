const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please provide email address"],
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
      },

      comment: {
        type: String,
        required: [true, "Please provide comment"]
      }


})

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment