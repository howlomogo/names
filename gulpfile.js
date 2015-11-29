var gulp        = require('gulp');
var jade        = require('gulp-jade');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();


// Default
gulp.task('default', ['browser-sync', 'sass-watch', 'jade-watch']);

// Browser Sync
gulp.task('browser-sync', function() {
  console.log("Browser sync started");
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});

// Jade
gulp.task('jade', function() {
  gulp.src('jade/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// Jade Watch
gulp.task('jade-watch', function() {
  console.log("Watching for Jade changes");
  gulp.watch('jade/**/*.jade', ['jade']);
});

// SASS
gulp.task('sass', function() {
  console.log("Converting SASS to CSS")
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.stream());
});

// SASS - Watch
gulp.task('sass-watch', function() {
  console.log("Watching for CSS changes");
  gulp.watch('sass/**/*.scss', ['sass']);
});