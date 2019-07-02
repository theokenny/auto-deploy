import gulp from 'gulp';
import watch from './watch';

//gulp.series is the same as gulp-sequence. New feature of version 4.0
gulp.task('default', gulp.series(watch));
