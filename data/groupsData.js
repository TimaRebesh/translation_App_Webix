/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-use-before-define


// const groupsData = new webix.DataCollection({
// 	url: "http://localhost:8096/api/v1/contacts/",
// 	save: "rest->http://localhost:8096/api/v1/contacts/"
// });

const userGroupsServer = [
	{
		userId: 12,
		name: "Lesha",
		password: "1",
		groups: [
			{
				name: "Animals",
				words: [
					{
						wordEn: "Cat",
						wordRu: "Кот"
					},
					{
						wordEn: "Dog",
						wordRu: "Собака"
					}
				]
			},
			{
				name: "Movement",
				words: [
					{
						wordEn: "Go",
						wordRu: "Идти"
					},
					{
						wordEn: "Stay",
						wordRu: "Стоять"
					}
				]
			}
		]
	},
	{
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
	}
];

const userGroups = new webix.DataCollection({
	data: userGroupsServer
});

export {userGroups};
