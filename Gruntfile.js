module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
		  scripts: {
		    files: ['src/bootstrap-columns2owl.js'],
		    tasks: ['copy'],
		  },
		},
		copy: {
		  main: {
		    files: [
		      // includes files within path
					{expand: true, flatten: true, src: ['src/*.js'], dest: 'dist/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['src/*.js'], dest: './', filter: 'isFile'},
		    ],
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['watch']);
};
