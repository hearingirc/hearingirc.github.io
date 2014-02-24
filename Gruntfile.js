module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-uncss');
  grunt.initConfig({
    uncss: {
      dist: {
        files: {
          'out/css/app.css': ['out/index.html']
        }
      }
    }
  });
};
