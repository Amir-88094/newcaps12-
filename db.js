const mongoose = require('mongoose');

function mongoDB() {
  // Define the database connection URI
  const dbURI = 'mongodb+srv://2021ugcs022:2021ugcs022@cluster1.nrwu2hv.mongodb.net/test'; // Replace with your database URI

  // Connect to the MongoDB database
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Error handler for MongoDB connection
  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to the database:', error);
  });

  // Successful connection handler
  mongoose.connection.once('open', () => {
    console.log('Connected to the database');

    // Access the "amir" collection using Mongoose model or connection
    const Amir = mongoose.connection.db.collection("amir");

    // Fetch and log the data from the "amir" collection
    Amir.find({}).toArray(function(err, data) {
      if (err) {
        console.error('Error fetching data:', err);
      } else {
        console.log('Fetched data:', data);
      }

      // Close the database connection
      mongoose.connection.close();
    });
  });
}

// Call the mongoDB function to initiate the connection and fetch data
// mongoDB();
module.exports = mongoDB;
