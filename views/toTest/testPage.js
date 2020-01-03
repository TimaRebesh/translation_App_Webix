import {mixedWords, setLabelsForTest, currentWordInArr} from "../groups/allGroups";


const word = {
	view: "label",
	id: "wordTest",
	label: "<span class='word_test'>Word</span>",
	align: "center"
};

const partOfSpeech = {
	view: "label",
	id: "partOfSpeechTest",
	label: "<span class='partOfSpeech_test'>partOfSpeech</span>",
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

function checkChoice() {
	let currentWord = currentWordInArr - 1;
	if (mixedWords[currentWord].wordEn === this.config.label) {
		webix.html.addCss(this.$view, "button_right");
		this.refresh();
	}
	else {
		webix.html.addCss(this.$view, "button_lose");
		this.refresh();

		$$("button_1").config.label == mixedWords[currentWord].wordEn ? webix.html.addCss($$("button_1").$view, "button_right") :
			$$("button_2").config.label == mixedWords[currentWord].wordEn ? webix.html.addCss($$("button_2").$view, "button_right") :
				$$("button_3").config.label == mixedWords[currentWord].wordEn ? webix.html.addCss($$("button_3").$view, "button_right") :
					webix.html.addCss($$("button_4").$view, "button_right");
	}
	$$("buttonNext").show();
}

function cleanButtonColor(buttonId) {
	webix.html.removeCss(buttonId.$view, "button_right");
	webix.html.removeCss(buttonId.$view, "button_lose");
}

const buttonleftUp = {
	view: "button",
	id: "button_1",
	label: "buttonleftUp",
	height: 300,
	css: "webix_primary",
	click: checkChoice
};

const buttonRightUp = {
	view: "button",
	id: "button_2",
	label: "buttonRightUp",
	css: "webix_primary",
	click: checkChoice
};

const buttonleftDown = {
	view: "button",
	id: "button_3",
	label: "buttonleftDown",
	height: 300,
	css: "webix_primary",
	click: checkChoice
};

const buttonRightDown = {
	view: "button",
	id: "button_4",
	label: "buttonRightDown",
	css: "webix_primary",
	click: checkChoice
};

const nextWord = {
	view: "button",
	id: "buttonNext",
	label: "next ->",
	css: "webix_primary",
	hotkey: "enter",
	click() {
		cleanButtonColor($$("button_1"));
		cleanButtonColor($$("button_2"));
		cleanButtonColor($$("button_3"));
		cleanButtonColor($$("button_4"));
		setLabelsForTest();
		this.hide();
	},
	hidden: true
};

// eslint-disable-next-line import/prefer-default-export
export const testPage = {
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
