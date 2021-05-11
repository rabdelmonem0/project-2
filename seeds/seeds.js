const {userjj} = require('../models');
const Userjj = require('../models/userJJ');

const data = [
    {
        bio: 'A test bio going to change later',
    },
]

const seedUser = () => Userjj.bulkCreate(data);

module.exports = seedUser;