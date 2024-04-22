const gulp = require('gulp');
const shell = require('gulp-shell');

const { task, parallel, watch, series } = gulp;

task('pack-micro', shell.task('npm run pack-micro'));
task('pack-router', shell.task('npm run pack-router'));
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

task('watch-router', () =>
    watch(
        [
            '../wc-micro/packages/wc-micro-router/**/*.ts',
            '!../wc-micro/packages/wc-micro-router/dist/**/*',
        ],
        series('pack-router')
    )
);

task('default', parallel('start-dev', 'watch-micro', 'watch-router'));
