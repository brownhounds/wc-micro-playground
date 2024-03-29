const gulp = require('gulp');
const shell = require('gulp-shell');

const { task, parallel, watch, series } = gulp;

task('pack-micro', shell.task('npm run pack-micro'));
task('start-dev', shell.task('npm run dev'));

task('watch-micro', () =>
    watch(
        [
            '../wc-micro/packages/wc-micro/**/*.ts',
            '!../wc-micro/packages/wc-micro/dist/**/*',
        ],
        series('pack-micro')
    )
);

task('default', parallel('start-dev', 'watch-micro'));
