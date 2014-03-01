module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-uncss');
  grunt.initConfig({
    uncss: {
      options: {
        htmlroot: 'out'
      },
      dist: {
        src: "out/**/*.html",
        dest: "out/css/app.css"
      }
    }
  });
};
