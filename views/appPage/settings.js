// eslint-disable-next-line import/prefer-default-export
export const settingsPopup = webix.ui({
	view: "popup",
	id: "settingsPopup",
	height: 250,
	width: 200,
	head: false,
	position: "top",
	body: {
		view: "form",
		elements: [
			{
				view: "switch",
				label: "Languge",
				labelWidth: 100,
				value: 1,
				onLabel: "En",
				offLabel: "Ru"
			}
		]
	}
});
