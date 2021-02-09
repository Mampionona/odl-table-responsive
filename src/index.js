function makeTableResponsive(selector, options) {
	var d = document;
	var w = window;
	var tables = Array.from(d.querySelectorAll(selector));
	var columns = options.columns || [];
	var breakpoint = options.breakpoint || null;

	for (var i = 0, length = tables.length; i < length; i++) {
		var table = tables[i];
		var tBodies = table.tBodies;
		var rows = Array.from(tBodies[0].rows);

		for (var i$1 = 0, length$1 = rows.length; i$1 < length$1; i$1++) {
			var row = rows[i$1];
			var cells = Array.from(row.cells);

			for (var i$2 = 0, length$2 = cells.length; i$2 < length$2; i$2++) {
				var cell = cells[i$2];
				var columnName = d.createElement("span");

				columnName.classList.add("column-name");

				if (columns[i$2]) {
					columnName.innerHTML = columns[i$2];
				}

				cell.prepend(columnName);
			}
		}

		initialize();

		w.addEventListener("resize", function () {
			initialize();

			if (options.onResized) {
				options.onResized(table);
			}
		});

		function initialize() {
			var width = w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth;

			if (breakpoint && width <= breakpoint) {
				table.classList.add("responsive--breakpoint");
			} else {
				table.classList.remove("responsive--breakpoint");
			}
		}
	}
}
