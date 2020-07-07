const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {

    try {
        const users = await User.find();
        res.status(200).json({
            status: 'success',
            results: users.length,
            users,
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error,
        });
    }
};

exports.getUser = async (req, res) => {
    // console.log(req.params.id)
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            user
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error,
        });
    }
}

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,
        });
    }
};