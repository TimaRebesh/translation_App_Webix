/* eslint-disable import/prefer-default-export */
export const windowResetPass = webix.ui({
	view: "window",
	id: "windowResetPass",
	modal: true,
	head: {
		view: "toolbar",
		type: "clean",
		cols: [
			{template: "Reset Password", css: "window_toolbar_progress"},
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowResetPass").hide();
					$$("windowAutorization").show();
				}
			}
		]
	},
	body: {
		type: "clean",
		cols: [
			{width: 100},
			{
				view: "form",
				id: "formWindowResetPass",
				width: 500,
				elementsConfig: {
					labelWidth: 120
				},
				elements: [
					{
						view: "text",
						label: "E-Mail Address",
						name: "email",
						attributes: {
							required: "true",
							title: "Enter your email"
						}
					},
					{
						view: "button",
						value: "Send Password Reset Link",
						css: "webix_primary button_reset",
						width: 250,
						click() {
							$$("windowResetPass").hide();
							$$("windowAutorization").show();
						}
					}
				]
			},
			{width: 100}
		]
	},
	position(st) {
		const state = st;
		state.top = 350;
	}
});
