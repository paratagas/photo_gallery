module.exports = (grunt) => {

	// load plugins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint'
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { 
				src: 'tests/tests-*.js', 
				options: {ui: 'tdd'} 
			}
		},
		jshint: {
			app: [
				// files
				'app.js', 
				'Gruntfile.js', 
				'gulpfile.js', 
				'settings.js', 
				
				// folders
				'bin/**/*',
				'client_js/**/*.js', 
				'models/**/*.js',
				'routes/**/*.js'
			],
			tests: ['tests/**/*.js'],
			options: {
		        'esversion': 6,
		    }
		}
	});	

	// register tasks
	grunt.registerTask('default', [
		'jshint',
		'cafemocha'
	]);
};
