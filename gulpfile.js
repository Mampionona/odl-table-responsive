const { src, dest, watch, series } = require("gulp");
const less = require("gulp-less");

function defaultTask() {
	return src(["src/index.less"])
		.pipe(less())
		.pipe(dest("dist"));
}

defaultTask.displayName = "default";

function watchTask() {
	watch(["src/*"], series(defaultTask));
}

exports.watch = watchTask;
exports.default = defaultTask;
