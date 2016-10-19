module.exports = function(grunt){
  require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks('grunt-autopolyfiller');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-sync');

  grunt.initConfig({

    autopolyfiller: {
      options: {
        browsers: ['Android']
      },
      your_target: {
        'polyfill.js': ['./js/controllers/initGameFlow.js']
      }
    },

    sync:{
      copy_resources_to_www: {
        files: [
          { cwd: './', src: 'index.html', dest: './cordova/www' },
          { cwd: './node_modules/babel-polyfill/dist/', src: 'polyfill.js', dest: './cordova/www/js' },
          { cwd: './', src: 'js/**/*', dest: './cordova/www' },
          { cwd: './', src: 'css/**/*', dest: './cordova/www' },
          { cwd: './', src: 'assets/**/*', dest: './cordova/www' },
        ]
      }
    },

    babel: {
      options: {
        sourceMap: false,
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

  grunt.registerTask('default', ['sync','babel', 'autopolyfiller']);
};
