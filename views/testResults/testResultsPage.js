import {correctAnswers, wrongAnswers} from "../toTest/testPage";
import {currentUserFromServer, testsResults} from "../../data/currentUser";


const score = {
	view: "label",
	id: "score",
	height: 70,
	currentValue: currentUserFromServer.score,
	template: (obj, view) => `<spsan class='score_label'>Score:</span><span class='score_result'>${view.config.currentValue}</span>`
};

const testResultList = {
	view: "list",
	id: "testResultList",
	type: {
		height: 57
	},
	template: "<div class='results_info'>#num#.<b class='results_info_lab'>date:</b>#date#<b class='results_info_lab'>result:</b>#result#</div>",
	data: testsResults
};

const testResultsPage = {
	id: "testResultsPage",
	rows: [
		score,
		testResultList
	]
};


export {testResultsPage};
