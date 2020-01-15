/* eslint-disable import/prefer-default-export */
import {cleanTest} from "../toTest/testPage";

export const winowOfLastResult = webix.ui({
	view: "window",
	id: "winowOfLastResult",
	modal: true,
	position: "center",
	head: {
		view: "toolbar",
		id: "windowHead",
		cols: [
			{view: "label", template: "Your result", css: "label_window_last_result"},
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					cleanTest();
					$$("winowOfLastResult").hide();
				}
			}
		]
	},
	body: {
		view: "form",
		id: "formInWindow",
		width: 300,
		elements: [
			{
				view: "label",
				id: "labelCorrectAnswer",
				correctAnswers: 0,
				template: (obj, view) => `<span class='last_result_info'>Correct answers:<span class='correct_answer'> ${view.config.correctAnswers}</span></span>`
			},
			{
				view: "label",
				id: "labelWrongtAnswer",
				wrongAnswers: 0,
				template: (obj, view) => `<span class='last_result_info'>Wrong answers: <span class='wrong_answer'>${view.config.wrongAnswers}</span></span>`
			},
			{
				view: "label",
				id: "scoredPoints",
				scoredPoints: 0,
				template: (obj, view) => `<span class='last_result_info'>Scored points: <span class='scored_points'>${view.config.scoredPoints}</span></span>`
			}
		]
	}
});
