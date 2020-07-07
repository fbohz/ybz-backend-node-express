const Hexagram = require('./../models/HexagramModel');

// Route handlers

exports.getAllHexagrams = async (req, res) => {
  // here we cannot have blocking code

  try {
    const hexagrams = await Hexagram.find();
    res.status(200).json({
      status: 'success',
      results: hexagrams.length,
      hexagrams,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getHexagram = async (req, res) => {
  console.log(req.params.id)
  try {
    const hexagram = await Hexagram.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      hexagram
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
}

exports.createHexagram = async (req, res) => {
  try {
    const newHexagram = await Hexagram.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        hexagram: newHexagram,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};