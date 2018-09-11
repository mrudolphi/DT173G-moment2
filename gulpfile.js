const gulp = require("gulp");
const concatJS = require("gulp-concat");
const uglifyJS = require("gulp-uglify");
const concatCSS = require("gulp-concat-css");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const watch = require("gulp-watch");

/* Copy html-files to pub-folder */
gulp.task("copyhtml", function() {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("pub/"))
});

/* Concat, minimize js-files and copy to pub/js-folder */
gulp.task("conminjs", function() {
	return gulp.src("src/js/*.js")
		.pipe(concatJS("main.min.js"))
		.pipe(uglifyJS())
		.pipe(gulp.dest("pub/js"));
});

/* Concat, minimize css-files and copy to pub/css-folder */
gulp.task("conmincss", function() {
	return gulp.src("src/css/*.css")
		.pipe(concatCSS("style.min.css"))
		.pipe(cleanCSS())
		.pipe(gulp.dest("pub/css"));
});

/* Minimize images and copy to pub/images-folder */
gulp.task("minimages", function() {
	gulp.src("src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest("pub/images"));
});

/* Watch updates for html, js, css, images */
gulp.task("watcher", function() {
	watch("src/js/*.js", function() {
		gulp.start("conminjs");
	});
	watch("src/css/*.css", function() {
		gulp.start("conmincss");
	});
	watch("src/images/*", function() {
		gulp.start("minimages");
	});
	watch("src/*.html", function() {
		gulp.start("copyhtml");
	});
});

/* Run tasks and watcher when gulp starts */
gulp.task("default", ["copyhtml", "conminjs", "conmincss", "minimages", "watcher"]);