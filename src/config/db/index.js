const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function connect() {
  try {
    mongoose
      .connect(
        'mongodb+srv://diii:123@diii.tyfbc5i.mongodb.net/blog?retryWrites=true&w=majority&appName=diii',
      )
      .then(() => console.log('connection established'));
  } catch (error) {
    console.log('connection error: ' + error);
  }
}
module.exports = { connect };
