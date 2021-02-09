// Polyfill
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('prepend')) {
			return;
		}
		Object.defineProperty(item, 'prepend', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function prepend() {
				var argArr = Array.prototype.slice.call(arguments),
					docFrag = document.createDocumentFragment();

				argArr.forEach(function (argItem) {
					var isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.insertBefore(docFrag, this.firstChild);
			}
		});
	});
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

class Table {
	constructor(options) {
		this.table = null;
		this.options = options;
	}

	render(id) {
		this.table = document.getElementById(id);
		const tBodies = this.table.tBodies;

		if (!this.table || !tBodies.length) {
			return;
		}

		Array.from(tBodies[0].rows).forEach((row) => {
			Array.from(row.cells).forEach((cell, index) => {
				const { columns } = this.options;
				const columnName = document.createElement("span");

				columnName.classList.add("column-name");

				if (columns[index]) {
					columnName.innerHTML = columns[index];
				}
				cell.prepend(columnName);
			});
		});
	}
}

// Init
new Table({
	columns: [
		"ID",
		"Nom",
		"Prénom",
		"Email",
		"Téléphone"
	]
})
	.render("my-table");
