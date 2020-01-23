/* eslint-disable import/prefer-default-export */
import {settingsPopup} from "./settings";

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
			label: "<span class='label_color'>Your Dictionary</span>"
		},
		{},
		{
			view: "button",
			type: "icon",
			icon: "mdi mdi-cogs",
			label: "Settings",
			width: 100,
			css: "webix_transparent",
			click() {
				settingsPopup.show();
			}
		},
		{
			view: "button",
			label: "Logout",
			css: "webix_primary",
			width: 100,
			click() {
				$$("windowAutorization").show();
				$$("authorization").show();
			}
		}
	]
};
