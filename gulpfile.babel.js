import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

sass.compiler = require("node-sass");

const path = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss",
    },
};

const styles = () => {
    return gulp
        .src(path.styles.src)
        .pipe(sass())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.styles.dest));
};

const watchFiles = () => {
    gulp.watch(path.styles.watch, styles);
};

const dev = gulp.series([styles, watchFiles]);

export default dev;
