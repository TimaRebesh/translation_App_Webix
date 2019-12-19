/* eslint-disable import/prefer-default-export */
import {currentUser} from "../../data/currentUser";

const tableOfSelectedGroup = {
	view: "datatable",
	id: "tableOfSelectedGroup",
	fixedRowHeight: false,
	rowHeight: 60,
	header: false,
	editable: true,
	editaction: "dblclick",
	autoConfig: true,
	data: currentUser


};

const selectedGroup = {
	id: "selectedGroup",
	rows: [
		{view: "button",
			type: "icon",
			icon: "wxi-angle-double-left",
			label: "back",
			width: 100,
			css: "webix_transparent",
			click() {
				$$("groupsId").back();
			}},
		{
			cols: [
				{
					view: "text",
					value: "Rank",
					borderless: true,
					css: "name_group",
					height: 100,
					inputHeight: 90,
					inputWidth: 90,
					on: {
						onTouchEnd() {
							webix.message("work");
						}
					}
				}, {}
			]
		},
		{
			cols: [
				tableOfSelectedGroup, {}
			]
		}
	]
};

export {selectedGroup};
