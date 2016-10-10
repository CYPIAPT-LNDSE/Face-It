module.exports = function(grunt){

  require("load-grunt-tasks")(grunt); 

  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks('grunt-sync');

  grunt.initConfig({

    watch:{
      files:['./test/**'],
      tasks:['default', 'sync']
    },

    sync:{
      copy_resources_to_www: {
        files: [
          { cwd: './', src: 'index.html', dest: './cordova/www' },
          { cwd: './', src: 'js/**/*', dest: './cordova/www' },
          { cwd: './', src: 'css/**/*', dest: './cordova/www' },
        ]
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets:['babel-preset-es2015']
      },
      dist: {
        files: [
          {
            expand: true,
            src: ['cordova/www/js/**/*.js']
          }
        ]
      }
    }
  });


  grunt.registerTask('default', ['sync','babel']);
};
