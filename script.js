import {authorization} from "./views/autorization/autorization";
import {appPage} from "./views/appPage/appPage";

webix.ready(() => {
	webix.ui({
		animate: false,
		cells: [authorization, appPage]
	});
});
