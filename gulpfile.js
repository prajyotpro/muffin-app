var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');
var fs = require('fs');
var path = require('path');
var yaml = require('gulp-yaml');

gulp.task('nodeMon', function () {
	gutil.log(gutil.colors.yellow('=> Firing up node server + nodemon ...'));
	nodemon({
		script: './app/www/server.js',
		ext: 'js',
		env: { 'NODE_ENV': 'local' }
	})
});


gulp.task('default', ['nodeMon']);

gulp.task('developer', ['dev']);
