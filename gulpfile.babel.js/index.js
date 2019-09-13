/* 
    ------------------------------------------------------------------------------
    index.js
    author: Kenny Soetjipto
    ------------------------------------------------------------------------------    
    purpose: Define tasks and invoke related functions
*/
import gulp from 'gulp';
import watch from './watch';
import retrieve from './retrieve';

gulp.task('watch', watch);
gulp.task('retrieve', retrieve);

gulp.task('default', gulp.series(retrieve, watch));