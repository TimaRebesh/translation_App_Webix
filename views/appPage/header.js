/* eslint-disable import/prefer-default-export */
export const toolbar = {
	view: "toolbar",
	id: "toolbar",
	css: "toolbar",
	borderless: true,
	height: 60,
	padding: 3,
	elements: [
		{
			view: "template",
			width: 80,
			borderless: true,
			name: "ddf",
			template: "<img class='image_autorization' src='https://st2.depositphotos.com/1074452/5749/i/950/depositphotos_57498799-stock-photo-thesaurus-sign-represents-advertisement-information.jpg'/>"
		},
		{
			view: "label",
			width: 150,
			label: "<span class='label_color'>Your Dictionary</span>",
			click() {
				$$("shop").show();
				$$("myDatatable").show();
			}
		},
		{}
	]
};
