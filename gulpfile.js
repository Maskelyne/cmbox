'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var svgstore = require('gulp-svgstore');
var pug = require('gulp-pug');
var del = require('del');
var server = require('browser-sync').create();

var path = {
  build: {
    html: 'build/',
    js: 'build/assets/js/',
    jsWorker: 'build',
    css: 'build/assets/css/',
    img: 'build/assets/img/',
    fonts: 'build/assets/fonts/'
  },
  source: {
    html: 'source/*.html',
    js: 'source/js/main.js',
    jsAdd: 'source/js/default.js',
    vendorJs: 'source/js/vendor.js',
    css: 'source/sass/style.scss',
    img: 'source/img/**/*.{png,jpg,svg,gif}',
    sprite: 'source/img/svg-sprite/*.svg',
    fonts: 'source/fonts/**/*.{woff,woff2}'
  },
  watch: {
    html: 'source/**/*.html',
    pug: 'source/pug/**/*.pug',
    js: 'source/js/**/*.js',
    css: 'source/sass/**/*.scss',
    img: 'source/img/**/*.{png,jpg,svg}',
    fonts: 'source/fonts/**/*.{woff,woff2}'
  },
  clean: 'build',
  pug: {
    views: 'source/pug/pages/*.pug',
  },
  fancybox: {
    source: 'source/css/*.css',
    build: 'build/css'
  }
};

var config = {
  server: {
    baseDir: 'build'
  }
};

gulp.task('clean:build', function () {
  return del(path.clean);
});

gulp.task('fancybox:build', function () {
  return gulp
    .src(path.fancybox.source)
    .pipe(gulp.dest(path.build.css));
});

gulp.task('html:build', function () {
  return gulp.src(path.source.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(server.stream());
});

gulp.task('pug:build', function () {
  return gulp.src(path.pug.views)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(server.stream());
});

gulp.task('js:build', function () {
  return gulp.src(path.source.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(server.stream());
});

gulp.task('jsAdd:build', function () {
  return gulp.src(path.source.jsAdd)
    .pipe(gulp.dest(path.build.js))
    .pipe(server.stream());
});

gulp.task('vendorJs:build', function () {
  return gulp.src(path.source.vendorJs)
    .pipe(rigger())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path.build.js))
    .pipe(server.stream());
});

gulp.task('css:build', function () {
  return gulp.src(path.source.css)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(path.build.css))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(server.stream());
});

gulp.task('image:build', function () {
  return gulp.src(path.source.img)
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.mozjpeg({progressive: true, quality: 90}),
      imagemin.svgo(),
    ]),
     pngquant({quality: '65-70', speed: 5}))
    .pipe(gulp.dest(path.build.img))
    .pipe(server.stream());
});

gulp.task('sprite:build', function () {
  return gulp.src(path.source.sprite)
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true},
          {removeAttrs:
            {attrs: 'fill'}
          }
        ]
      })
    ]))
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', function () {
  return gulp.src(path.source.fonts)
    .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build', gulp.series(
    'clean:build',
    'html:build',
    'fancybox:build',
    'pug:build',
    'js:build',
    'jsAdd:build',
    'vendorJs:build',
    'css:build',
    'fonts:build',
    'image:build',
    'sprite:build'
));

gulp.task('server', function () {
  server.init({
    server: config.server,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch([path.watch.html], gulp.series('html:build'));
  gulp.watch([path.watch.pug], gulp.series('pug:build'));
  gulp.watch([path.watch.css], gulp.series('css:build'));
  gulp.watch([path.watch.js], gulp.series('js:build'));
  gulp.watch([path.watch.img], gulp.series('image:build', 'sprite:build'));
});
