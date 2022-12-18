// assuming mongoose@6.x
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

async function connect() {
  //connecting to the database
  const mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // console.log("New connection");
}

//disconnect from the database.
async function disconnect() {
  await mongoose.connection.close();
  // await mongoose.connection.dropCollection()
  // console.log("Disconnected")
}

function convertDocToObj(doc) {
  doc.str;
  return doc;
}


const db = { connect, disconnect, convertDocToObj };
module.exports = { db };
