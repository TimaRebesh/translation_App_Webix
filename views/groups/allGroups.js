/* eslint-disable import/prefer-default-export */
import {currentUserGroups} from "../../data/currentUser";
import {selectedGroup} from "./selectedGroup";

const groupsListTable = {
	view: "datatable",
	id: "groupsListTable",
	fixedRowHeight: false,
	rowHeight: 60,
	hover: "hover_list",
	data: currentUserGroups,
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
		onItemDblClick(item) {
			const wordsOfGroup = this.getItem(item);
			$$("editableLabelID").config.label = wordsOfGroup.name;
			$$("editableLabelID").refresh();
			$$("tableOfSelectedGroup").parse(wordsOfGroup.words);
			$$("tableOfSelectedGroup").refresh();

			$$("labelWithIdOfCurrentProup").config.label = wordsOfGroup.groupID;

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
					currentUserGroups.remove(id);
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
	click() {
		currentUserGroups.add({
			groupID: webix.uid(),
			name: "New",
			created: new Date(),
			words: []
		}, -1);
	}
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
	// cells: [selectedGroup]


};
export {groups};
