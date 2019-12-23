const currentUserFromServer =	{
	userId: 11,
	name: "Jack",
	password: "1",
	groups: [
		{
			groupID: 123,
			name: "Vegetables",
			created: new Date(2005, 6, 2),
			words: [
				{
					wordEn: "Tomato",
					wordRu: "Помидор",
					partsOfSpeech: "noun"
				},
				{
					wordEn: "Cucumber",
					wordRu: "Огурец",
					partsOfSpeech: "noun"
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
					partsOfSpeech: "verb"
				},
				{
					wordEn: "to stay",
					wordRu: "Стоять",
					partsOfSpeech: "verb"
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


// const currentUserGroups = new webix.DataCollection({})

export {currentUserGroups, currentUser};

