/* eslint-disable import/prefer-default-export */
import {currentUser} from "../../data/currentUser";
import {selectedGroup} from "./selectedGroup";

const groupsListTable = {
	view: "datatable",
	fixedRowHeight: false,
	rowHeight: 60,
	hover: "hover_list",
	data: currentUser,
	columns: [
		{
			id: "name",
			header: [{text: "Groups names"}, {content: "textFilter"}],
			fillspace: 2
		},
		{fillspace: 0.2},
		{
			id: "amount",
			header: "amount of words",
			fillspace: 1
		},
		{
			id: "created",
			header: "created",
			format: webix.i18n.longDateFormatStr,
			fillspace: 1
		},
		{
			template: "{common.toTest()}",
			fillspace: 1
		},
		{
			id: "",
			template: "{common.trashIcon()}",
			width: 40
		}
	],
	type: {
		toTest() {
			return "<button type='button' class='button_to_test'>Test</button>";
		}
	},
	on: {
		onItemDblClick() {
			$$("tableOfSelectedGroup").refresh();
			$$("selectedGroup").show();
		}
	},
	onClick: {
		"wxi-trash": (e, id) => {
			webix
				.confirm({
					text: "Are you sure?",
					ok: "Delete",
					cancel: "Cancel"
				})
				.then(() => {

				});
			return false;
		},
		button_to_test: () => {
			webix.message("test");
		}
	}
};

const groupsListButton = {
	view: "button",
	css: "webix_primary",
	value: "+ add new group",
	width: 230,
	click() {}
};

const groupsList = {
	id: "groupsListId",
	rows: [
		groupsListTable,
		groupsListButton
	]
};

const groups = {
	id: "groupsId",
	animate: false,
	cells: [groupsList, selectedGroup]


};

export {groups};
