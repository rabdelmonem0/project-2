// const {Model, DataTypes} = require('sequelize');
// const sequelize = require('../config/connection');
// const express = require('express');
// const fileUpload = require('express-fileupload');
console.log('hello');
// const router = require('express').Router();


// const app = express();
// const port = process.env.PORT || 3001;

// app.use(fileUpload());

// //template engine
// app.engine('hbs', exphbs({ exname: '.hbs'}));
// app.set('view engine', 'hbs');


// app.get('', (req, res) => {
//     res.render('index')
// });


// router.get('/', (req, res) => {
//     res.render('homepage')
// });

// module.exports = router;

// app.post('', (req, res) => {
//     let person;
//     let fileUploadPath;

//     if(!req,files || Object.keys(req,files).length === 0){
//         return res.status(400).send('No files were uploaded.');
//     }

//     person = req.files.person;
//     fileUploadPath =__dirname + '/upload/' + person.name;

//     console.log(person);

//     person.mv(fileUploadPath, function(err) {
//         if(err) return res.status(500).send(err);

//         res.send('File uploaded!');

//     });
// });


// app.listen(port, ()=> console.log(`listening on port ${port}`));