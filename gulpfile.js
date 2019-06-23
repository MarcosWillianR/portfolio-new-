// Adiciona os módulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Função para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp.src('css/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

// Tarefa de gulp para função de SASS
gulp.task('sass', compilaSass);

// Função para juntar o JS
function gulpJS() {
  return gulp.src('js/main/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('mainjs', gulpJS);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);


// Função de watch do gulp 
function watch() {
  gulp.watch(['css/scss/**/*.scss'], compilaSass);
  gulp.watch(['js/main/**/*.js'], gulpJS);
  gulp.watch(['*.html']).on('change', browserSync.reload);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs'));