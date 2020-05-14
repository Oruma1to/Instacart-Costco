const bcrypt = require('bcrypt');
const db = require('../db');
const User = require('../models/user');

db.on('error', console.error.bind(console, "MongoDB connection error:"));
const SALT_ROUNDS = 11

const createUsers = async () => {
  const users = [
    {
      username: "jay",
      email: "jay@jay.com",
      password_digest: bcrypt.hashSync('123ga', SALT_ROUNDS)
    }
  ]
  await User.insertMany(users);
  console.log('Successfully created 1 user!');
}

const run = async () => {
  await createUsers();
  db.close();
}

run();

