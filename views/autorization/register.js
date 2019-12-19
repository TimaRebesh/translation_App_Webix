/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */

function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

export const windowRegister = webix.ui({
	view: "window",
	id: "windowRegister",
	modal: true,
	label: {
		width: 140
	},
	head: {
		view: "toolbar",
		type: "clean",
		cols: [
			{template: "Register", css: "window_toolbar_progress"},
			{
				view: "icon",
				icon: "mdi mdi-close",
				css: "alter",
				hotkey: "esc",
				click() {
					$$("windowRegister").hide();
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
				id: "formInWindowRegister",
				width: 500,
				elementsConfig: {
					labelWidth: 150
				},
				elements: [
					{
						view: "text",
						label: "Name",
						type: "text",
						name: "name",
						attributes: {
							required: "true",
							title: "Enter your name",
							maxlength: 22
						},
						on: {
							onBlur() {
								const curretnValue = this.config.value;
								this.config.value = curretnValue.trim();
								this.refresh();
							}
						}
					},
					{
						view: "text",
						type: "email",
						value: "newuser@gmail.com",
						label: "E-Mail Address",
						id: "email",
						name: "mail",
						attributes: {
							required: "true",
							title: "Enter your email"
						},
						invalidMessage: "",
						on: {
							onBlur() {
								const curretnValue = this.config.value;
								this.config.value = curretnValue.trim();
								this.refresh();
							}
						}
					},
					{
						view: "text",
						type: "password",
						id: "password",
						label: "Password",
						name: "password",
						attributes: {
							required: "true",
							title: "Create your password"
						},
						invalidMessage: "The password confirmation does not match"
					},
					{
						view: "text",
						type: "password",
						id: "comfPassword",
						label: "Confirm Password",
						name: "confPassword",
						attributes: {
							required: "true",
							title: "repeat password"
						},
						invalidMessage: ""
					},
					{
						cols: [
							{width: 150},
							{
								view: "button",
								value: "Register",
								css: "webix_primary",
								width: 150,
								click() {
									let form = $$("formInWindowRegister");
									if (form.validate()) {
										// create userInsfo
										const values = form.getValues();

										let newObj = {
											userId: webix.uid(),
											name: values.name,
											email: values.mail,
											password: values.password,
											created: new Date()
										};

										usersInfo.add(newObj, -1);
										currentUser.clearAll();
										currentUser.add(newObj);
										$$("labelShowName").refresh();
										//
										$$("formInWindowRegister").clear();
										$$("windowRegister").hide();
										$$("shopPage").show();
									}
								}
							},
							{}
						]
					}
				],
				rules: {
					name: webix.rules.isNotEmpty,
					mail(val) {
						let switcher = 0;
						const value = val.trim();
						usersInfo.find((obj) => {
							if (obj.email === value) {
								$$("email").config.invalidMessage = "The email has already been taken";
								switcher = 1;
							}
							else {
								$$("email").config.invalidMessage = "The email is not correct";
							}
						});


						return webix.rules.isEmail(value) && switcher !== 1 && ValidateEmail(value);
					},
					password(vp) {
						const value = vp.trim();
						return (
							webix.rules.isNotEmpty(value) &&
							value !== "" &&
							value === $$("comfPassword").getValue()
						);
					},
					confPassword(vp) {
						let password = $$("password").getValue();
						const value = vp.trim();
						if (value !== password) {
							$$("comfPassword").config.value = "";
						}
						return webix.rules.isNotEmpty(value) && value === password;
					}
				}
			},
			{width: 100}
		]
	},
	position(st) {
		const state = st;
		state.top = 250;
	}
});
