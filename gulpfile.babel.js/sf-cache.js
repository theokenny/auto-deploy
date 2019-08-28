import gulp from 'gulp';
import cache from 'gulp-cached';
import remember from 'gulp-remember';
import retrieve from './retrieve';

export default function sfCache() {
    const filePath = 'force-app/main/default';
    return gulp.src(filePath, { since: lastRun(retrieve) }) //select all files that have changed since last run of retrieve
    .pipe(cache(retrieve)) //store those files in cache
    .pipe(remember(retrieve)) //restore files from cache
}