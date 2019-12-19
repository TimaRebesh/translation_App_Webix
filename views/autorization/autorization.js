/* eslint-disable import/prefer-default-export */
import {windowRegister} from "./register";
import {windowResetPass} from "./forgotPassword";

const windowAutorization = webix.ui({
	view: "window",
	id: "windowAutorization",
	modal: true,
	head: false,
	body: {
		type: "clean",
		cols: [
			{width: 20},
			{
				view: "form",
				id: "formWindowAutor",
				width: 400,
				elementsConfig: {
					labelWidth: 100
				},
				elements: [
					{
						view: "template",
						height: 100,
						borderless: true,
						name: "ddf",
						template: "<img class='image_autorization' src='https://st2.depositphotos.com/1074452/5749/i/950/depositphotos_57498799-stock-photo-thesaurus-sign-represents-advertisement-information.jpg'/>"
					},

					{
						view: "text",
						id: "emailLogin",
						label: "Login",
						value: "some",
						name: "login",
						attributes: {
							required: "true",
							title: "Enter your login"
						}
					},
					{
						view: "text",
						type: "password",
						id: "passwordLogin",
						value: 1,
						label: "Password",
						name: "password",
						attributes: {
							required: "true",
							title: "Enter your password"
						}
					},
					{
						cols: [
							{width: 100},
							{
								rows: [
									{
										view: "checkbox",
										id: "checkboxLogin",
										labelRight: "Remember me",
										labelWidth: 0
									},
									{
										cols: [
											{
												view: "button",
												value: "Login",
												css: "webix_primary",

												click() {	}
											},
											{width: 10},
											{
												view: "button",
												value: "Register",
												click() {
													$$("windowAutorization").hide();
													windowRegister.show();
												}
											}
										]
									},
									{
										view: "template",
										height: 80,
										template:
											"Forgot your Password?",
										borderless: true,
										css: "template_login",
										onClick: {
											template_login() {
												$$("windowAutorization").hide();
												windowResetPass.show();
											}
										}
									}
								]
							}
						]
					}
				]
			},
			{width: 20}
		]
	},
	position(st) {
		const state = st;
		state.top = 250;
	}
}).show();


export const authorization = {
	id: "authorization",
	rows: [
		{
			view: "template"
		}
		// windowAutorization.show()
	]
};
