const gul = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')


function css(done){
    gul.src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gul.dest('./build/css'))
    done()
}

function dev(done){
    gul.watch('./src/sass/**/*.scss', css);
    done();
}
exports.dev=dev;
exports.css=css;