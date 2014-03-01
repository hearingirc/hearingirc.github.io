module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    uncss: {
      options: {
        htmlroot: 'out'
      },
      dist: {
        src: "out/**/*.html",
        dest: "out/css/app.css"
      }
    },
    cssmin: {
      minify: {
        options: {
          keepSpecialComments: 0,
          report: "min",
          compatibility: "ie8"
        },
        files: {
          "out/css/app.css": "out/css/app.css",
          "out/css/wufoo.css": "out/css/wufoo.css"
        }
      }
    }
  });
};
