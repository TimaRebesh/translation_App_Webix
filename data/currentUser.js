const currentUserFromServer =	{
	userId: 11,
	name: "Jack",
	password: "1",
	groups: [
		{
			name: "Vegetables",
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
			name: "Movement",
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
