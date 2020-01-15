const currentUserFromServer =	{
	userId: 11,
	name: "Jack",
	password: "1",
	score: "100",
	testsResults: [
		{date: new Date(2020, 1, 1), result: 12},
		{date: new Date(2019, 3, 2), result: 11},
		{date: new Date(2018, 5, 2), result: 10},
		{date: new Date(2017, 4, 2), result: 9}
	],
	groups: [
		{
			groupID: 123,
			name: "Vegetables",
			created: new Date(2005, 6, 2),
			words: [
				{
					wordEn: "Tomato",
					wordRu: "Помидор",
					psEn: "noun",
					psRu: "существительное"
				},
				{
					wordEn: "Cucumber",
					wordRu: "Огурец",
					psEn: "noun",
					psRu: "существительное"
				}
			]
		},
		{
			groupID: 124,
			name: "Movement",
			created: new Date(2015, 10, 22),
			words: [
				{
					wordEn: "jupm",
					wordRu: "Прыгать",
					psEn: "verb",
					psRu: "глагол"
				},
				{
					wordEn: "to stay",
					wordRu: "Стоять",
					psEn: "verb",
					psRu: "глагол"
				}
			]
		},
		{
			name: "Traveling",
			groupID: 125,
			created: new Date(2019, 12, 29),
			words: [
				{
					wordEn: "quickly",
					wordRu: "быстро",
					psEn: "adverb",
					psRu: "наречие"
				},
				{
					wordEn: "you ",
					wordRu: "ты",
					psEn: "pronoun",
					psRu: "местоимение"
				},
				{
					wordEn: "from ",
					wordRu: "из",
					psEn: "preposition",
					psRu: "предлог"
				},
				{
					wordEn: "now ",
					wordRu: "сейчас",
					psEn: "adverb",
					psRu: "наречие"
				},
				{
					wordEn: "name ",
					wordRu: "имя",
					psEn: "noun",
					psRu: "существительное"
				},
				{
					wordEn: "I",
					wordRu: "я",
					psEn: "pronoun",
					psRu: "местоимение"
				},
				{
					wordEn: "ask ",
					wordRu: "спрашивать",
					psEn: "verb",
					psRu: "глагол"
				},
				{
					wordEn: "city",
					wordRu: "город",
					psEn: "noun",
					psRu: "существительное"
				},
				{
					wordEn: "go",
					wordRu: "идти",
					psEn: "verb",
					psRu: "глагол"
				},
				{
					wordEn: "young ",
					wordRu: "молодой",
					psEn: "adjective",
					psRu: "прилагательное"
				}
			]
		}
	]
};

const currentUser = new webix.DataCollection({
	data: currentUserFromServer
});

const currentUserGroups = new webix.DataCollection({
	scheme: {
		$init(object) {
			const obj = object;
			obj.amount = obj.words.length;
		}
	},
	data: currentUserFromServer.groups
});

const testsResults = new webix.DataCollection({
	scheme: {
		$init(object) {
			const obj = object;
			obj.date = webix.i18n.dateFormatStr(obj.date);
		}
	},
	data: currentUserFromServer.testsResults
});


// const currentUserGroups = new webix.DataCollection({})

export {currentUserGroups, currentUser, currentUserFromServer, testsResults};

