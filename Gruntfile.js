"use strict";

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  // Project configuration.
  grunt.initConfig({

    browserify: {
      build: {
        src: [
          "app/**/*.js",
          "app/**/*.jsx"
        ],
        dest: "public/scripts/app.js",
        options: {
          transform: ['reactify']
        }
      }
    },

    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    watch: {
      scripts: {
        files: 'app/**/*.js',
        tasks: ['build'],
        options: {
          debounceDelay: 250,
        },
      },
    }

  });

  // Default task(s).
  grunt.registerTask('build', ['browserify:build']);
  grunt.registerTask('default', ['build', 'concurrent']);

};
