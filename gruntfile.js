
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  		sass: {
      			options: {
        				sourceMap: true
      			},
      			dist: {
        				files: {
          						'css/style.css': 'sass/style.sass'
        				}
      			}
    	},

      imagemin: {
              dynamic: {
                      files: [{
                              expand: true,
                              cwd: 'images/',
                              src: ['**/*.{png,jpg,gif}'],
                              dest: 'images/build/'
                      }]
              }
      },
      watch: {
            scripts: {
                    files: ['sass/*.sass'],
                    tasks: ['sass'],
                    options: {
                        spawn: false,
                    },
            } 
      },
      browserSync: {
                  bsFiles: {
                          src : 'assets/css/*.css' //assets/css/*.css' - * - jakikolwiek plik css szuka ze zbioru wszystkich
                  },                                   // kiedy jest określony 'assets/css/style.css - szuka wtedy konkretny plik css
                  options: {
                          server: {
                                baseDir: "./"
                          }
                  }
      }
  
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync'); 
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'watch', 'browserSync']);
};