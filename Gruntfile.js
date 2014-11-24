module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.scss'], // which files to watch
        tasks: ['compass'],
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true,cwd: 'bower_components/jquery/dist/', src: '**', dest: 'js/vendor/'},
          {expand: true,cwd: 'bower_components/bootstrap-sass/dist/js/', src: '**', dest: 'js/vendor/'},
          {expand: true,cwd: 'bower_components/font-awesome/fonts/', src: '**', dest: 'fonts/'}
        ],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};