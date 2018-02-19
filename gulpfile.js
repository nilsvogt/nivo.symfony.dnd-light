const gulp       = require('gulp');
const concat     = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const minifyCSS  = require('gulp-csso');
const less       = require('gulp-less');
const babel      = require('gulp-babel');

const config = {
    core: {
        js: [

        ],
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    pages: {
        index: {
            less: [
                'assets/less/page-index.less'
            ],
            js: [
                'assets/js/page-index.js'
            ]
        }
    }
};

gulp.task('js', function(){
    return buildJs(config.pages.index.js, 'page-index.min.js');
});

gulp.task('css', function(){
    return gulp.src(config.core.css)
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/assets/css'))
});

gulp.task('less', function() {
   return buildLess(config.pages.index.less, 'page-index.min.css')
});

function buildLess(files, filename) {
    return gulp.src(files)
        .pipe(concat(filename))
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/assets/css'))
}

function buildJs(files, filename) {
    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat(filename))
        .pipe(sourcemaps.write())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('public/assets/js'))
}

gulp.task('default', [ 'css', 'less', 'js' ]);