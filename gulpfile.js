global.hostname = "localhost";

var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
browserSync = require('browser-sync'),
reload = browserSync.reload;



gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./app/"
    },
    port: 8080,
    open: true,
    notify: false
  });
});


gulp.task('styles', function () {
	gulp.src('sass/*.scss')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app'))
	.pipe(reload({stream:true}));
});

gulp.task('html',function(){
	gulp.src('app/index.html')
	.pipe(reload({stream:true}));
});

gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('app/*.html', ['html']);
});

gulp.task('default', ['browserSync', 'watch'], function() {

});
