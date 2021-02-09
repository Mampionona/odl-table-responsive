const { src, dest, watch, series } = require("gulp");
const less = require("gulp-less");
const clean = require("gulp-clean");

function cleanTask() {
	return src("dist/*", { read: false })
	.pipe(clean());
}

function defaultTask(callback) {
	src(["src/index.less"], {
		allowEmpty: true
	})
		.pipe(less())
		.pipe(dest("dist"));

	src(["src/index.js"], {
		allowEmpty: true
	})
		.pipe(dest("dist"));

	callback();
}

defaultTask.displayName = "default";

function watchTask() {
	watch(["src/*"], series(defaultTask));
}

exports.watch = watchTask;
exports.default = series(cleanTask, defaultTask);
