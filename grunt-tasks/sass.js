"use strict";

module.exports = {
  dest: {
    options: {
      includePaths: require("node-neat").includePaths,
      outputStyle: "compressed"
    },
    files: [{
      expand: true,
      cwd: "<%= config.src %>",
      src: "**/*.scss",
      dest: "<%= config.dest %>",
      ext: ".css"
    }
    ]
  }
};