import { Page } from "./page";

export class AboutPage extends Page{

	constructor(){
		super("About");
	}

	render(){
		let elementString = ``;
		this.addContent(elementString);
	}
}