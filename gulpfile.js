var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
  });
  gulp.task('prefixer', () =>
  gulp.src('css/style.css')
    .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('public/css'))
);

//Задача, после запуска которой, gulp будет следить за изменениями файлов
gulp.task('start', function () {
  gulp.watch('sass/style.sass', gulp.series('sass'));
  gulp.watch('css/style.css', gulp.series('prefixer'));
});
