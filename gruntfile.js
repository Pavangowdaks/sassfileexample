module.exports = function(grunt) {
  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  

grunt.loadNpmTasks('grunt-contrib-sass')
grunt.loadNpmTasks('grunt-postcss')
grunt.loadNpmTasks('grunt-contrib-cssmin')
grunt.loadNpmTasks('grunt-contrib-uglify')
grunt.loadNpmTasks('grunt-contrib-watch')
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['copy', 'sass','concat']);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
	t1: {
		src:'file1/**',
		dest:'file2/'
		}
	},
sass: {
      // Begin Sass Plugin
      dist: {
        options: {
          sourcemap: 'none',
        },
        files: [
          {
            expand: true,
            cwd: 'public/src',
            src: ['**/*.scss'],
            dest: 'public/css',
            ext: '.css',
          },
        ],
      },
    },


    concat: {
      options: {
                separator: '\n/* --/////-- */\n',
                },
      dist: {
        src: ['**/homepage.css', '**/mixin.css','**/nesting.css'],
        dest: 'public/css/final.css',
        },
      }

  });


  
}
