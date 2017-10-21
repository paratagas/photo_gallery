const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('build', () => {
    return gulp.src('client_js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', () => {
    gulp.watch('client_js/**/*.js', ['build']);
});


gulp.task('default', ['build']);
