const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// optimize images

gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('main/images'))
);

// minify js

gulp.task('minify', function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('main/js'))
});

// compile sass

gulp.task('sass',function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers:['last 3 versions']
      }))
      .pipe(gulp.dest('main/css'))
});

// scripts

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('main/js'))
});

// browser sync

gulp.task('browserSync', function(){
      browserSync.init({
        server: {
            baseDir: './'
        }
      });
});

gulp.task('watch', function(){
  gulp.watch('src/js/*.js',['scripts']).on('change', browserSync.reload);
  gulp.watch('src/images/*',['imageMin']).on('change', browserSync.reload);
  gulp.watch('src/sass/*.scss',['sass']).on('change', browserSync.reload);
  gulp.watch('./*.html',['browserSync']).on('change', browserSync.reload);
});

gulp.task('default',['imageMin', 'sass','scripts','browserSync','watch']);
