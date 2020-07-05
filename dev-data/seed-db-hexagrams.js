/* eslint-disable prefer-destructuring */
const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Hexagram = require('../models/HexagramModel');

// read config.env file and save as env variables
dotenv.config({
    path: './config.env',
});

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PSW);
// console.log(process.env)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('DB CONNECTED!');
})

// READ JSON FILE

const hexagrams = JSON.parse(fs.readFileSync(`${__dirname}/hexagrams-all.json`, 'utf-8'))

// IMPORT DATA INTO DB

const importData = async () => {
    try {
        await Hexagram.create(hexagrams)
        console.log('DB Successfully Seeded!🌱')
    } catch (error) {
        console.log(error)
    }
    process.exit()
}

// DELETE CURRENT DATA TO AVOID DUPS

const deleteData = async () => {
    try {
        await Hexagram.deleteMany()
        console.log('DB Successfully Deleted!')
    } catch (error) {
        console.log(error)
    }
    process.exit()
}

// SETUP CLI WHEN RUNNING FILE ON TERMINAL

// console.log(process.argv)

// when running the file on terminal either pass the --import or --delete flags
if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}