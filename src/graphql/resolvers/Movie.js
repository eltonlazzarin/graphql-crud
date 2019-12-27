const Movie = require("../../models/Movie");

module.exports = {
  Query: {
    getMovies: () =>
      Movie.find()
        .sort({ getMovies: 1 })
        .skip(0)
        .limit(0),

    getMovie: (_, { id }) => {
      const result = Movie.findById(id);
      return result;
    }
  },

  Mutation: {
    addMovie: (_, { name, producer, rating }) => {
      const movie = new Movie({ name, producer, rating });
      movie.save();
      return movie;
    },

    updateMovie: (_, { id, name, producer, rating }) => {
      try {
        if (id) {
          return Movie.findByIdAndUpdate(
            {
              _id: id
            },
            {
              $set: {
                name,
                producer,
                rating
              }
            },
            { new: true }
          );
        }
      } catch (err) {
        console.log("Something went wrong..." + err);
      }
    },

    deleteMovie: (_, { id }) => Movie.findByIdAndRemove({ _id: id })
  }
};
