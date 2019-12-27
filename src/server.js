const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./graphql/resolvers/Movie");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Successfully connected to the database🚀");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "graphql", "schemas", "Movie.graphql"),
  resolvers
});

const options = { port: 4000 };
server.start(options, () =>
  console.log(`💻 Server is running on localhost: ${options.port}`)
);
