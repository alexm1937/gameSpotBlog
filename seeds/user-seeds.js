const { User } = require('../models');

const userdata = [
  {
    username: 'allen',
    email: 'all_in33@gmail.com',
    password: 'password123'
  },
  {
    username: 'jillwill1',
    email: 'jillianw@gmail.com',
    password: 'password123'
  },
  {
    username: 'brainbrian2',
    email: 'brainyb@gmail.com',
    password: 'password123'
  },
  {
    username: 'scoops3',
    email: 'frankeee@gmail.com',
    password: 'password123'
  },
  {
    username: 'annperkins4',
    email: 'nurseann@gmail.com',
    password: 'password123'
  },
  {
    username: 'jonnykarate5',
    email: 'ratmouse@gmail.com',
    password: 'password123'
  },
  {
    username: 'gary6',
    email: 'gergich@gmail.com',
    password: 'password123'
  },
  {
    username: 'bestboss7',
    email: 'mscott@gmail.com',
    password: 'password123'
  },
  {
    username: 'strangler8',
    email: 'tflenderson@gmail.com',
    password: 'password123'
  },
  {
    username: 'taco9',
    email: 'ebdbbnd@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
