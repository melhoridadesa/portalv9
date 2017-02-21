//Carrega as tarefas
module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./resources/assets/css/**/*.css')
            .pipe(plugins.cssmin())
            .pipe(gulp.dest('./assets/css'));
    };
};