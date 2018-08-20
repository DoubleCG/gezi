const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imagemin2 = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const htmlminify = require("gulp-html-minify");


gulp.task('default', ['imgmin', 'htmlmin', 'cssmin', 'jsmin', 'video'], function(){
    console.log("Finish Build");
});


gulp.task('htmlmin', function () {
    return gulp.src("./src/**/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("./build"))
});



gulp.task('cssmin', function(){
    gulp.src('./src/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./build'));
})

gulp.task('jsmin', function (cb) {
    pump([
            gulp.src('./src/**.js'),
            uglify(),
            gulp.dest('./build')
        ],
    );
});


// ok
gulp.task('imgmin', function(){
    gulp.src(['./src/images/**/*'])
    // gulp.src(['./src/**/*.{jpg,png,jpeg}'])1
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
})

gulp.task('video', function() {
    gulp.src(["./src/video/*.mp4"])
    .pipe(gulp.dest('./build/video'))
})


// gulp.task('test-css-prefixer', () = > {
//     gulp.src('./test.css')
//     .pipe(autoprefixer({
//         browsers: ['>1%']
//     }))
//     .pipe(gulp.dest('./test-build'));
// })