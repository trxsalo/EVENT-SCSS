const { src, dest } = require('gulp')
const gul = require('gulp')
const {parallel} = require('gulp')

//css
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
//webp
const webp = require('gulp-webp')
//IMAGEMIN
const image = require('gulp-imagemin')
const cache = require('gulp-cache')

//avif

const avif = require('gulp-avif')

//css gulp
function css(done){
    gul.src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gul.dest('./build/css'))
    done()
}

//arranca para desarrollo conpilar
function dev(done){
    gul.watch('./src/sass/**/*.scss', css);
    gul.watch('./src/js/**/*.js', js);
    done();
}


//webp


function webp1(done){
    const calidad = {
        quality:50
    };
    
    src('./src/img/**/*.{png,jpg}')
        .pipe(webp(calidad))
        .pipe(dest('./build/img'))
    done();
}

//avif similar a webp

function avifv(done){
    const calidad = {
        quality:50
    };
    
    src('./src/img/**/*.{png,jpg}')
        .pipe(avif(calidad))
        .pipe(dest('./build/img'))
    done();
}


//imagemin

function imagenes(done){
    const opciones={
        optimizationLevel:3
    }

    src('./src/img/**/*.{png,jpg}')
        .pipe(cache(image(opciones)))
        .pipe(dest('./build/img'))
    done();
}

function js(done){

    src('./src/js/**/*.js')
        .pipe(dest('./build/js'));
    done();
}

exports.js=js;
exports.dev=dev;
exports.css=css;
exports.webp1= webp1;
exports.avifv= avifv;
exports.imagenes=imagenes;

exports.imagenesc=parallel(imagenes,webp1,avifv)
