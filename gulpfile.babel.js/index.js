import gulp from 'gulp';

import watch from './watch';
import sfCache from './sf-cache';
import retrieve from './retrieve';

gulp.task('sfCache', sfCache);
gulp.task('watch', watch);
gulp.task('retrieve', gulp.series(sfCache, retrieve));
gulp.task('default', gulp.series(retrieve, watch));