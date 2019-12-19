/* eslint-disable import/prefer-default-export */
import {toolbar} from "./header";
import {groups} from "../groups/groups";


const tabbar = {
	type: "space",
	rows: [
		{
			type: "clean",
			rows: [
				{
					view: "segmented",
					id: "tabbar",
					value: "groupsId",
					multiview: true,
					options: [
						{value: "List", id: "groupsId"},
						{value: "Test", id: "emptyView"}
					]
				},
				{
					cells: [
						groups,
						{id: "emptyView", template: "dfdfdd "}
					]
				}
			]
		}
	]
};

export const appPage = {
	id: "appPage",
	rows: [
		toolbar,
		tabbar
	]
};
