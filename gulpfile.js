const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imagemin2 = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const htmlminify = require("gulp-html-minify");


gulp.task('default', ['imgmin', 'htmlmin', 'cssmin', 'jsmin', 'video'], () = > {
    // gulp.src(['./src/**/*.{jpg,png}'])
    //     .pipe(imagemin())
    //     .pipe(gulp.dest('./dist'))

    // imagemin2(['./src/**/*.{jpg,png,jpeg}'], './dist',{
    //     plugins: [
    //         imageminJpegtran(),
    //         imageminPngquant({quality: '65-80'})
    //     ]
    // }).
    // then(files => {
    // 	console.log(files);    
    // })
});


gulp.task('htmlmin', function () {
    return gulp.src("./src/**/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("./build"))
});

// ok
gulp.task('cssmin', () = > {
    gulp.src('./src/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./build'));
})

gulp.task('test-css-prefixer', () = > {
    gulp.src('./test.css')
    .pipe(autoprefixer({
        browsers: ['>1%']
    }))
    .pipe(gulp.dest('./test-build'));
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
gulp.task('imgmin', () = > {
    gulp.src(['./src/**/*.{jpg,png,jpeg}'])
    .pipe(imagemin())
    .pipe(gulp.dest('./build'))
})

gulp.task('video', () = > {
    gulp.src(["./src/video/*.mp4"])
    .pipe(gulp.dest('./build/video'))
})