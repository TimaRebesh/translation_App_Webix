// eslint-disable-next-line import/prefer-default-export
export const tableOfSelectedGroup = {
	view: "datatable",
	id: "tableOfSelectedGroup",
	fixedRowHeight: false,
	rowHeight: 60,
	select: true,
	header: false,
	editable: true,
	editaction: "dblclick",
	autoConfig: true,
	columns: [
		{adjust: true},
		{
			id: "wordEn",
			adjust: true,
			editor: "text"
		},
		{
			template: "-",
			width: 20
		},
		{
			id: "wordRu",
			adjust: true,
			editor: "text"
		},
		{
			template: "-",
			width: 20
		},
		{
			id: "psEn",
			editor: "combo",
			collection: ["noun", "verb", "pronoun", "adverb", "article", "preposition", "conjunction", "adjective"],
			width: 100
		},
		{fillspace: 1},
		{
			id: "",
			template: "{common.trashIcon()}",
			width: 40
		}
	],
	onClick: {
		"wxi-trash": (e, id) => {
			webix
				.confirm({
					text: "Are you sure?",
					ok: "Delete",
					cancel: "Cancel"
				})
				.then(() => {
					let sel = $$("tableOfSelectedGroup").getSelectedId();
					if (!sel) return;
					$$("tableOfSelectedGroup").remove(sel);
				});
		}

	}
};
