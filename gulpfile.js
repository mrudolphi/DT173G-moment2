const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const watch = require("gulp-watch");

gulp.task("copyhtml", function() {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("pub/"))
});

gulp.task("conminjs", function() {
	return gulp.src("src/js/*.js")
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("pub/js"));
});

/*gulp.task("watcher", function() {
	gulp.watch("src/js/*.js", ["conminjs"]);
	gulp.watch("src/*.html", ["copyhtml"]);
});*/

gulp.task("watcher", function() {
	watch("src/js/*.js", function() {
		gulp.start("conminjs");
	});
	watch("src/*.html", function() {
		gulp.start("copyhtml");
	});
});

gulp.task("default", ["copyhtml", "conminjs", "watcher"]);