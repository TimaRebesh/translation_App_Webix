/* eslint-disable no-constant-condition */
import {mixedWords, setLabelsForTest, currentWordInArr} from "../groups/allGroups";
import {winowOfLastResult} from "../testResults/windowOfLastResult";
import {testsResults, currentUserFromServer, currentUser} from "../../data/currentUser";

const checkChoice = (id) => {
	const idButton = $$(id);
	let currentWord = currentWordInArr - 1;
	if (mixedWords[currentWord].wordEn === idButton.config.label) {
		webix.html.addCss(idButton.$view, "button_right");
		idButton.refresh();

		$$("labelCorrectAnswer").config.correctAnswers++;

		let partOfSpeec = $$("partOfSpeechTest").config.currentValue;

		if (partOfSpeec === "noun" || partOfSpeec === "verb") {
			$$("scoredPoints").config.scoredPoints += 2;
			$$("point").config.currentValue = 2;
			$$("point").refresh();
		}
		else {
			$$("scoredPoints").config.scoredPoints += 1;
			$$("point").config.currentValue = 1;
			$$("point").refresh();
		}

		$$("point").show();
		webix.html.addCss($$("point").$view, "animated flash");
		webix.delay(() => {
			webix.html.removeCss($$("point").$view, "animated flash");
			$$("point").hide();
		}, null, null, 1000);
	}
	else {
		webix.html.addCss(idButton.$view, "button_lose");
		idButton.refresh();

		if ($$("button_1").config.label === mixedWords[currentWord].wordEn) {
			webix.html.addCss($$("button_1").$view, "button_right");
		}
		else if ($$("button_2").config.label === mixedWords[currentWord].wordEn) {
			webix.html.addCss($$("button_2").$view, "button_right");
		}
		else if ($$("button_3").config.label === mixedWords[currentWord].wordEn) {
			webix.html.addCss($$("button_3").$view, "button_right");
		}
		else { webix.html.addCss($$("button_4").$view, "button_right"); }

		$$("labelWrongtAnswer").config.wrongAnswers++;
	}
	$$("buttonNext").show();
	$$("button_1").detachEvent("onItemClick");
	$$("button_2").detachEvent("onItemClick");
	$$("button_3").detachEvent("onItemClick");
	$$("button_4").detachEvent("onItemClick");
};

function cleanButtonColor(buttonId) {
	webix.html.removeCss(buttonId.$view, "button_right");
	webix.html.removeCss(buttonId.$view, "button_lose");
}

const cleanTest = () => {
	cleanButtonColor($$("button_1"));
	cleanButtonColor($$("button_2"));
	cleanButtonColor($$("button_3"));
	cleanButtonColor($$("button_4"));

	$$("labelCorrectAnswer").config.correctAnswers = 0;
	$$("labelWrongtAnswer").config.wrongAnswers = 0;
	$$("scoredPoints").config.scoredPoints = 0;

	$$("buttonNext").hide();
};

const buttonBack = 	{
	view: "button",
	type: "icon",
	icon: "wxi-angle-double-left",
	label: "Leave the test",
	width: 250,
	hotkey: "backspace",
	css: "webix_transparent",
	click() {
		cleanTest();
		$$("tabbarApp").show();
	}
};

const word = {
	view: "label",
	id: "wordTest",
	align: "center",
	height: 70,
	currentValue: "",
	template: (obj, view) => `<span class='word_test'>${view.config.currentValue}</span>`
};

const partOfSpeech = {
	view: "label",
	id: "partOfSpeechTest",
	align: "center",
	height: 40,
	currentValue: "",
	template: (obj, view) => `<span class='partOfSpeech_test'>${view.config.currentValue}</span>`
};

const buttonleftUp = {
	view: "button",
	id: "button_1",
	label: "buttonleftUp",
	height: 300,
	css: "webix_primary"
};

const buttonRightUp = {
	view: "button",
	id: "button_2",
	label: "buttonRightUp",
	css: "webix_primary"
};

const buttonleftDown = {
	view: "button",
	id: "button_3",
	label: "buttonleftDown",
	height: 300,
	css: "webix_primary"
};

const buttonRightDown = {
	view: "button",
	id: "button_4",
	label: "buttonRightDown",
	css: "webix_primary"
};

const nextWord = {
	view: "button",
	id: "buttonNext",
	label: "next ->",
	css: "button_next_test",
	height: 60,
	hotkey: "enter",
	click() {
		cleanButtonColor($$("button_1"));
		cleanButtonColor($$("button_2"));
		cleanButtonColor($$("button_3"));
		cleanButtonColor($$("button_4"));

		if (mixedWords.length === currentWordInArr) {
			$$("score").config.currentValue = Number($$("score").config.currentValue) + Number($$("scoredPoints").config.scoredPoints);
			$$("score").refresh();

			testsResults.add({
				num: currentUserFromServer.lastNum += 1,
				date: new Date(),
				result: $$("scoredPoints").config.scoredPoints
			}, 0);

			$$("testResultList").refresh();


			$$("tabbar").config.value = "testResultsPage";
			$$("tabbar").refresh();
			$$("tabbarApp").show();
			$$("testResultsPage").show();
			$$("labelCorrectAnswer").refresh();
			$$("labelWrongtAnswer").refresh();
			$$("winowOfLastResult").show();

			$$("labelCorrectAnswer").config.correctAnswers = 0;
			$$("labelWrongtAnswer").config.wrongAnswers = 0;
		}

		setLabelsForTest();
		this.hide();
	},
	hidden: true
};

const point = {
	view: "label",
	id: "point",
	currentValue: "",
	align: "left",
	height: 100,
	hidden: true,
	template: (obj, view) => `<span class='point_test'>+${view.config.currentValue}</span>`

};

const testPage = {
	id: "testPage",
	css: "testPage",
	rows: [
		{cols: [
			buttonBack,
			{view: "label", height: 40, template: "<p class='label_test'>Test</p>"},
			{}
		]},
		{
			cols: [
				{gravity: 1},
				{
					gravity: 2,
					rows: [
						word,
						partOfSpeech,
						{gravity: 0.1},
						{
							rows: [
								{cols: [buttonleftUp, buttonRightUp]},
								{cols: [buttonleftDown, buttonRightDown]}
							]
						},
						nextWord,
						{}
					]
				},
				{gravity: 1,
					rows: [{}, point, {}]
				}
			]
		}
	]

};

export {checkChoice, testPage, cleanTest};
