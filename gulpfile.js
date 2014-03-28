var gulp = require('gulp'),
  useref = require('gulp-useref');

gulp.task('default', function () {
  return gulp.src('index.html')
    .pipe(useref.assets())
    .pipe(useref.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['default'], function () {
  gulp.watch('js/**/*.js', ['default']);
});