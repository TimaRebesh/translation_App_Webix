/* eslint-disable import/prefer-default-export */
import {toolbar} from "./header";
import {groups} from "../groups/allGroups";
import {testResultsPage} from "../testResults/testResultsPage";
import {testPage} from "../toTest/testPage";


const tabbar = {
	id: "tabbarApp",
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
						{value: "Test results", id: "testResultsPage"}
					]
				},
				{
					cells: [groups, testResultsPage]
				}
			]
		}
	]
};

export const appPage = {
	id: "appPage",
	rows: [
		toolbar,
		{animate: false,
			cells: [tabbar, testPage]
		}
	]
};
