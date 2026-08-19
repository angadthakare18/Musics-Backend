const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");

async function getAllMusics(req, res) {
  // const music = await musicModel.find() // This code just give music details and artist id
  // const music = await musicModel.find().populate('artist') // Here populate also give details of artist(username, email, id, role, password(hash))
  const music = await musicModel
    .find()
    .limit(10)  // get atmost 10 songs at a time for load balancing
    .skip(1)  // to get musics after skiping the first one
    .populate("artist", "username email"); // in tis populate() we just get the username, email

  res.status(200).json({
    message: "Musics fetched successfully",
    musics: musics,
  });
}

module.exports = { getAllMusics };
