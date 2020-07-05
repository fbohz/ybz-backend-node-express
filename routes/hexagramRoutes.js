const express = require('express');
const router = express.Router();

const {
    getAllHexagrams,
    getHexagram,
    createHexagram
} = require('../controllers/hexagramController')

router.route('/')
    .get(getAllHexagrams)
    .post(createHexagram);

router.route('/:id').get(getHexagram)

module.exports = router