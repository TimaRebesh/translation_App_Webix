/* eslint-disable import/prefer-default-export */
import {toolbar} from "./header";
import {groups} from "../groups/allGroups";


const tabbar = {

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
						{value: "My groups", id: "groupsId"},
						{value: "Test results", id: "emptyView"}
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
