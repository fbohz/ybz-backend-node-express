const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUser,
    createUser
} = require('../controllers/userController')

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id').get(getUser)

module.exports = router