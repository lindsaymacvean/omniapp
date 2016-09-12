var path = require('path');

module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-bumpup');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			dev: {
				options: {
					paths: ['css'],
					compress: false,
					ieCompat: true,
				},
				files: {
					'assets/css/styles.css': 'assets/less/colors.less'
				}
			},
			prod: {
				options: {
					paths: ['css'],
					compress: true,
					ieCompat: true,
				},
				files: {
					'assets/css/styles.min.css': 'assets/less/styles.less'
				}
			}
		},
		jslint: { // configure the task
	      // lint your project's server code
	      server: {
	        src: [ // some example files
	          'assets/js/scripts.js'
	        ],
	        options: {
		        edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path
		        errorsOnly: true, // only display errors
		        failOnError: false // defaults to true
		    }
	      }
	    },
	    uglify: {
		    static_mappings: {
		        // Because these src-dest file mappings are manually specified, every
		        // time a new file is added or removed, the Gruntfile has to be updated.
		      	files: [
		        	{src: 'assets/js/scripts.js', dest: 'dist/scripts.min.js'}
		      	]
		  	}   
		},
	    watch: {
	    	options: { livereload: true },
	      	less: {
	        	files: ['assets/**/*.less'],
	        	tasks: ['newer:less:dev'],
	      	},
	      	scripts: {
	      		files: ['**/*.js', '*.html'],
	      		tasks: ['jslint', 'uglify']
	      	}
	    },
	    bumpup: {
	        file: 'package.json'
	    },
		connect: {
			server: {
				options: {
					port: 9005,
					base: '',
					hostname: '*',
					livereload:true
				}
			}
		}
	});
	grunt.task.registerTask('default', ['connect','watch']);

};