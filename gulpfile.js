const {src, dest} = require('gulp')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cssBeautify = require('gulp-cssbeautify')
const removeComments = require('gulp-strip-css-comments')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const rigger = require('gulp-rigger')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const del = require('del')
const pug = require('gulp-pug');
const notify = require('gulp-notify')
const browserSync = require('browser-sync').create()

const srcPath = "src/"
const distPath = "dist/"

const path = {
  build: {
    html: distPath,
    css: distPath + "assets/css/",
    js: distPath + "assets/js/",
    images: distPath + "assets/images/",
    fonts: distPath + "assets/fonts/",
  },
  src: {
    html: srcPath + "*.pug",
    css: srcPath + "assets/scss/style.scss",
    js: [srcPath + "assets/js/main.js",  srcPath + "assets/js/sphere.js"],
    images: srcPath + "assets/images/**/*.{jpeg,jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: srcPath + "assets/fonts/**/*.{eot, woff, woff2,ttf,svg}",
  },
  watch: {
    html: srcPath + "**/*.pug",
    css: srcPath + "assets/scss/**/*.scss",
    js: srcPath + "assets/js/**/*.js",
    images: srcPath + "assets/images/**/*.{jpeg,jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    fonts: srcPath + "assets/fonts/**/*.{eot, woff, woff2,ttf,svg}",
  },
  clean: './' + distPath
}

function html() {
  return src(path.src.html, {base: srcPath})
    .pipe(pug())
    .pipe(plumber())
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({stream: true}))
}

function css() {
  return src(path.src.css, {base: srcPath + 'assets/scss/'})
    .pipe(plumber({
        errorHandler: notify.onError({
          title: 'SCSS',
          message: "Error: <%= error.message %>"
        })
      }
    ))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssBeautify())
    .pipe(cssnano({
      zIndex: false,
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(removeComments())
    .pipe(rename({
      suffix: '.min',
      extname: '.css',
    }))
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({stream: true}))
}

function js() {
  return src(path.src.js, {base: srcPath + 'assets/js/'})
    .pipe(plumber({
        errorHandler: notify.onError({
          title: 'JS',
          message: "Error: <%= error.message %>"
        })
      }
    ))
    .pipe(rigger())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
      extname: '.js',
    }))
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({stream: true}))
}

function images() {
  return src(path.src.images, {base: srcPath + 'assets/images/'})
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({stream: true}))
}

function fonts() {
  return src(path.src.fonts, {base: srcPath + 'assets/fonts/'})
    .pipe(browserSync.reload({stream: true}))
}

function clean() {
  return del(path.clean)
}

function vendorsCss () {
  return src('node_modules/swiper/swiper-bundle.min.css')
      .pipe(dest(path.build.css));
}

function watchFiles() {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.css], css)
  gulp.watch([path.watch.js], js)
  gulp.watch([path.watch.images], images)
  gulp.watch([path.watch.fonts], fonts)
}

function server() {
  browserSync.init({
    server: {
      baseDir: './' + distPath
    }
  });
}

const build = gulp.series(clean, gulp.parallel(html, css, vendorsCss, js, images, fonts))

const watch = gulp.parallel(build, watchFiles, server)

exports.html = html
exports.css = css
exports.js = js
exports.fonts = fonts
exports.images = images
exports.clean = clean
exports.build = build
exports.watch = watch
exports.default = watch
