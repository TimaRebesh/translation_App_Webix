/* eslint-disable import/prefer-default-export */
import {tableOfSelectedGroup} from "./gridSelectedGroup";
import {currentUserGroups} from "../../data/currentUser";

webix.protoUI(
	{
		name: "editableLabel",
		$allowsClear: true,
		$cssName: "label",
		$init() {
			this.attachEvent("onAfterRender", () => {
				this.$view.firstChild.contentEditable = !this.config.readonly;
			});
			this.attachEvent("onKeyPress", function (code, e) {
				if (e.key === "Enter") {
					this._endEdit();
					return webix.html.preventEvent(e);
				}
				if (e.key === "Escape") {
					this.setValue(this.getValue());
					return webix.html.preventEvent(e);
				}
			});
			this.attachEvent("onBlur", this._endEdit);
		},
		readonly_setter(value) {
			if (this.$view.firstChild) { this.$view.firstChild.contentEditable = !value; }
			return value;
		},
		_endEdit() {
			this.setValue(this.$view.firstChild.innerHTML);
		},
		getValue() {
			return this.config.label;
		},
		value_setter(value) {
			this.setValue(value);
		},
		setValue(value) {
			const oldValue = this.getValue();
			webix.ui.label.prototype.setValue.apply(this, arguments);
			if (oldValue !== value) {
				this.callEvent("onChanged", [value, oldValue]);
			}
		}
	}, webix.ui.label
);

const buttonBack = 	{
	view: "button",
	type: "icon",
	icon: "wxi-angle-double-left",
	label: "back",
	width: 100,
	css: "webix_transparent",
	click() {
		$$("groupsId").back();
		$$("tableOfSelectedGroup").clearAll();
	}
};

const addNewWordsButton = {
	view: "button",
	css: "webix_primary",
	value: "+ add new word",
	width: 230,
	click() {
		$$("tableOfSelectedGroup").add({
			wordEn: "new",
			wordRu: "new"
		});
		// currentUserGroups.find((obj) => {
		// 	const currentGroup = obj.words;
		// 	if (obj.groupID === $$("labelWithIdOfCurrentProup").config.label) {
		// 		currentGroup.add({
		// 			wordEn: "new",
		// 			wordRu: "new"
		// 		}, -1);
		// 	}
		// });
	}
};

const buttonToExcel = {
	view: "button",
	label: "export to Excel",
	css: "webix_primary",
	width: 230,
	click() {
		webix.toExcel($$("tableOfSelectedGroup"), {
			filename: "my words",
			columns: {
				wordEn: {header: "English words", width: 200},
				wordRu: {header: "Russian words", width: 200},
				psEn: {header: "Parts of speach", width: 200}
			}
		});
	}
};

const selectedGroup = {
	id: "selectedGroup",
	rows: [
		{view: "label", id: "labelWithIdOfCurrentProup", hidden: true},
		buttonBack,
		{
			cols: [
				{width: 20},
				{
					view: "editableLabel",
					value: "new name",
					id: "editableLabelID",
					css: "label_name_of_group"
				},
				{height: 80},
				buttonToExcel
			]
		},
		tableOfSelectedGroup,
		addNewWordsButton

	]
};

export {selectedGroup};
