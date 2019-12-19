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
					wordRu: "Помидор"
				},
				{
					wordEn: "Cucumber",
					wordRu: "Огурец"
				}
			]
		},
		{
			groupID: 124,
			name: "Movement",
			created: new Date(2015, 10, 22),
			words: [
				{
					wordEn: "to jupm",
					wordRu: "Прыгать"
				},
				{
					wordEn: "to stay",
					wordRu: "Стоять"
				}
			]
		}
	]
};
const currentUser = new webix.DataCollection({
	scheme: {
		$init(object) {
			const obj = object;
			obj.amount = obj.words.length;
		}
	},
	data: currentUserFromServer.groups
});

export {currentUser};
