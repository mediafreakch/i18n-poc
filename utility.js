var gulp = require('gulp'),
    merger = require('gulp-merge-json'),
    wrapper = require('gulp-wrap'),
    wrapperTemplate = 'window.APP = window.APP || {};\nwindow.APP.translations = <%= contents %>';

// merge DE
gulp.src('./src/**/locale/de.json')
    .pipe(merger('de.js'))
    .pipe(wrapper(wrapperTemplate, null, { parse: false }))
    .pipe(gulp.dest('./dist'));

// merge FR
gulp.src('src/**/locale/fr.json')
    .pipe(merger('fr.js'))
    .pipe(wrapper(wrapperTemplate, null, { parse: false }))
    .pipe(gulp.dest('dist'));
