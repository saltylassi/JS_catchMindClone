import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import browserify from "gulp-browserify";
import babel from "babelify";

sass.compiler = require("node-sass");

const path = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss",
    },
    js: {
        src: "assets/js/main.js",
        dest: "src/static/js",
        watch: "assets/js/**/*.js",
    },
};

const clean = () => {
    return del("src/static");
};

const styles = () => {
    return gulp
        .src(path.styles.src)
        .pipe(sass())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.styles.dest));
};

const js = () =>
    gulp
        .src(path.js.src)
        .pipe(
            browserify({
                transform: [
                    babel.configure({
                        presets: ["@babel/preset-env"],
                    }),
                ],
            })
        )
        .pipe(gulp.dest(path.js.dest));

const watchFiles = () => {
    gulp.watch(path.styles.watch, styles);
    gulp.watch(path.js.watch, js);
};

const dev = gulp.series([clean, styles, js, watchFiles]);

export const build = gulp.series([clean, styles, js]);

export default dev;
