/* eslint-disable import/prefer-default-export */
import {currentUserGroups} from "../../data/currentUser";
import {selectedGroup} from "./selectedGroup";
import {englishPartsOfSpeechServer} from "../../data/partsOfSpeech";
import {testResultsPage} from "../testResults/testResultsPage";
import {checkChoice} from "../toTest/testPage";

let mixedWords = [];
let currentWordInArr = 0;

function shuffleArray(arr) {
	let array = arr;
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return arr;
}

function setLabelsForTest() {
	if (currentWordInArr === mixedWords.length) { return false; }

	const buttonNumRightAnswer = Math.round(0.5 + Math.random() * 4);

	$$("wordTest").config.currentValue = mixedWords[currentWordInArr].wordRu;
	$$("wordTest").refresh();

	const currentPartOfSpeech = mixedWords[currentWordInArr].psEn;
	$$("partOfSpeechTest").config.currentValue = currentPartOfSpeech;
	$$("partOfSpeechTest").refresh();


	let arrCurrentSpeechPart = englishPartsOfSpeechServer[currentPartOfSpeech];
	let mixedArrCurrentSpeechPart = shuffleArray(arrCurrentSpeechPart);

	$$("button_1").config.label = mixedArrCurrentSpeechPart[1];
	$$("button_1").refresh();
	$$("button_2").config.label = mixedArrCurrentSpeechPart[2];
	$$("button_2").refresh();
	$$("button_3").config.label = mixedArrCurrentSpeechPart[3];
	$$("button_3").refresh();
	$$("button_4").config.label = mixedArrCurrentSpeechPart[4];
	$$("button_4").refresh();

	$$(`button_${buttonNumRightAnswer}`).config.label = mixedWords[currentWordInArr].wordEn;
	$$(`button_${buttonNumRightAnswer}`).refresh();

	$$("button_1").attachEvent("onItemClick", (id) => {
		const idButton = id;
		checkChoice(idButton);
	});
	$$("button_2").attachEvent("onItemClick", (id) => {
		const idButton = id;
		checkChoice(idButton);
	});
	$$("button_3").attachEvent("onItemClick", (id) => {
		const idButton = id;
		checkChoice(idButton);
	});
	$$("button_4").attachEvent("onItemClick", (id) => {
		const idButton = id;
		checkChoice(idButton);
	});

	currentWordInArr++;
	return true;
}

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
			fillspace: 1,
			template: (obj) => {
				if (obj.amount === 0) {
					return "";
				}
				return "<button type='button' class='button_to_test'>Test</button>";
			}
		},
		{
			id: "",
			template: "{common.trashIcon()}",
			width: 40
		}
	],
	// type: {
	// 	toTest() {
	// 		return "<button type='button' class='button_to_test'>Test</button>";
	// 	}
	// },
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
		button_to_test: (event, column) => {
			const selGroup = $$("groupsListTable").getItem(column.row).words;
			mixedWords = shuffleArray(selGroup);
			currentWordInArr = 0;
			setLabelsForTest();
			$$("testPage").show();
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
export {groups, mixedWords, currentWordInArr, setLabelsForTest};
