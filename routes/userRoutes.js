const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUser,
    createUser
} = require('../controllers/hexagramController')

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id').get(getUser)

module.exports = router