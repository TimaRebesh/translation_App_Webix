/* eslint-disable import/prefer-default-export */
import {currentUser} from "../../data/currentUser";

const groupsList = {
	view: "list",
	id: "groupsListId",
	type: {
		height: 60
	},
	select: true,
	yCount: 200,
	data: currentUser,
	template: "#name#.#amount#.{common.trashIcon()}",

	on: {
		onItemDblClick() {
			$$("formView").show();
		}
	}
};

const gropeView = {
	view: "button",
	id: "formView",
	value: "Cancel",
	click() {
		$$("groupsId").back();
	}
};

const groups = {
	id: "groupsId",
	cells: [groupsList, gropeView]
};

export {groups};
