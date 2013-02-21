module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    clean: {
      build: ['build/', 'dist/']
	  //dist: ['build/**/*.js', '!build/**/*.min.js', '!build/**/persistence/**', '!build/**/iscroll/**']
    },
    copy: {
      build: {
        files: [{expand:true, cwd: 'app/', src: ['**'], dest: 'build/'}]
      }
    },
    version: {
      build: {
        file:'/build/config.xml'        
      }
    },
    change: {
      build: {
        file:'/build/index.html'
      }
    },
	'closure-compiler': {
		build: {
		  closurePath: '../scripts/compiler.jar',
		  js: ['build/js/**/*.js'],
		  jsOutputFile: 'build/js/frontend.min.js',
		  maxBuffer: 500,
		  options: {
			compilation_level: 'SIMPLE_OPTIMIZATIONS',
			language_in: 'ECMASCRIPT5_STRICT'
		  }
		}
	},  
    compress: {
      dist: {
        files: [{expand:true,cwd: 'build/', src: ['**']}],
		options: { archive: 'dist/phonegap.zip' }
      }
    }    
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-closure-compiler');
  grunt.loadTasks('tasks');
  grunt.registerTask('build', ['version','clean:build','copy','change','closure-compiler','compress']);
  grunt.registerTask('dist', ['compress']);
  grunt.registerTask('default', ['build','dist']);
};