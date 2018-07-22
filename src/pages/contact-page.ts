import { Page } from "./page";

export class ContactPage extends Page{

	constructor(){
		super("Contact Me");
	}

	render(){

		let elementString = `
			<div class="jumbotron container">
				<div class="col-xs-4 text-center">
					<a class=""><i class="glyphicon glyphicon-envelope"></i></a>
					<p>navneet_tomar11@hotmail.com</p>
				</div>
				<div class="col-xs-4 text-center">
					<a class=""><i class="glyphicon glyphicon-earphone"></i></a>
					<p>1800-234-568</p>
				</div>
				<div class="col-xs-4 text-center">
					<a class=""><i class="glyphicon glyphicon-map-marker"></i></a>
					<p>Whitefield,Bengaluru-56006<br> India</p>
				</div>
			</div>
		`;
		this.addContent(elementString);
	}
}