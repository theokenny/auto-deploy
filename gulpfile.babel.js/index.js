import gulp from 'gulp';
import watch from './watch';

gulp.task('watch', watch);
gulp.task('default', gulp.series(watch));