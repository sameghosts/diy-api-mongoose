// Require and create instance of express app and mongoose
const EXPRESS = require('express');
const APP = EXPRESS();
const MONGOOSE = require('mongoose');

// declare Middleware
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

MONGOOSE.connect('mongodb://localhost/synthLibrary', {useNewUrlParser: true, useUnifiedTopology: true});
const DB = MONGOOSE.connection;

// connection methods
DB.once('open', () => {
  console.log(`🔗 Connected to MongoDB at ${DB.host}:${DB.port}`)
});

DB.on('error', err => {
  console.error(`🤬 Database Error:\n${err}`)
});

// Routes as json

APP.get('/', (req, res) => {
  res.json({ message: '🎹 👻 🎛 '})
});

// // //Create attempt prior to router
// const Synth = require('./models/synth');

// Synth.create({
//   name: 'TR-909',
//   manufacturer: 'Roland',
//   kind: 'Drum Machine',
//   releaseYear: 1983,
//   notableArtists: ['Jeff Mills', 'Mike Banks', 'Shawn Rudiman']
// }, (err, synth) => {
//   if (err) return console.error(`🤬 Troube in create:\n${err}`)
//     console.log(`${synth.name} has been created`)
// });

// Synth.create({
//   name: 'TR-808',
//   manufacturer: 'Roland',
//   kind: 'Drum Machine',
//   releaseYear: 1980,
//   notableArtists: ['Drexcyia', 'Egyptian Lover', 'Drexcyia']
// }, (err, synth) => {
//   if (err) return console.error(`🤬 Troube in create:\n${err}`)
//     console.log(`${synth.name} has been created`)
// });
// app.use /synths
APP.use('/synths', (require('./controllers/synths')));

//listen on port
APP.listen (3000 || process.env.PORT, () => console.log(`You're listening to the smooth sounds of port ${ 3000 || process.env.PORT}`));