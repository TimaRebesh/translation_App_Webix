import {mixedWords, setLabelsForTest, currentWordInArr} from "../groups/allGroups";
import {winowOfLastResult} from "../testResults/testResultsPage";

const word = {
	view: "label",
	id: "wordTest",
	label: "<span class='word_test'>Word</span>",
	align: "center"
};

const partOfSpeech = {
	view: "label",
	id: "partOfSpeechTest",
	label: "",
	align: "center"
};

const buttonBack = 	{
	view: "button",
	type: "icon",
	icon: "wxi-angle-double-left",
	label: "back",
	width: 250,
	hotkey: "backspace",
	css: "webix_transparent",
	click() {
		$$("tabbarApp").show();
	}
};

// let correctAnswers = 0;
// let wrongAnswers = 0;

const checkChoice = function (id) {
	const idButton = $$(id);
	let currentWord = currentWordInArr - 1;
	if (mixedWords[currentWord].wordEn === idButton.config.label) {
		webix.html.addCss(idButton.$view, "button_right");
		idButton.refresh();

		$$("labelCorrectAnswer").config.correctAnswers++;

		if ($$("partOfSpeechTest").config.label === "noun" || "verb") {
			$$("scoredPoints").config.scoredPoints += 2;
		}
		else { $$("scoredPoints").config.scoredPoints += 1; }
	}
	else {
		webix.html.addCss(idButton.$view, "button_lose");
		idButton.refresh();

		$$("button_1").config.label == mixedWords[currentWord].wordEn ? webix.html.addCss($$("button_1").$view, "button_right") :
			$$("button_2").config.label == mixedWords[currentWord].wordEn ? webix.html.addCss($$("button_2").$view, "button_right") :
				$$("button_3").config.label == mixedWords[currentWord].wordEn ? webix.html.addCss($$("button_3").$view, "button_right") :
					webix.html.addCss($$("button_4").$view, "button_right");

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
	hotkey: "enter",
	click() {
		cleanButtonColor($$("button_1"));
		cleanButtonColor($$("button_2"));
		cleanButtonColor($$("button_3"));
		cleanButtonColor($$("button_4"));

		if (mixedWords.length === currentWordInArr) {
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


const testPage = {
	id: "testPage",
	css: "testPage",
	rows: [
		buttonBack,
		{view: "label", template: "<p class='label_test'>Test</p>"},
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
				{gravity: 1}
			]
		}
	]

};

export {checkChoice, testPage};
