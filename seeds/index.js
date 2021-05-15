const seedUserjj = require('./user-seeds.json');
const Userjj = require('../models/userJJ')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});

    // await seedUserjj();
    await Userjj.bulkCreate(seedUserjj, {
        individualHooks: true,
        returning: true,
    })

    process.exit(0);
};

seedAll();