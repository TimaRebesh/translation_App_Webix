/* eslint-disable import/prefer-default-export */
import {toolbar} from "./header";
import {groups} from "../groups/allGroups";
import {testResults} from "../testResults/testResults";
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
						{value: "Test results", id: "testResults"}
					]
				},
				{
					cells: [
						groups,
						testResults
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
		{animate: false,
			cells: [tabbar, testPage]
		}
	]
};
