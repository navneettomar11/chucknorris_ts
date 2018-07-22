import { BaseElement } from "./base-element";

export class Footer extends BaseElement{

	getElementByString():string{
		return `
		<nav class="navbar navbar-default navbar-fixed-bottom">
			<div class="container text-center">
				&copy; Copyright - 2018
			</div>
		</nav>
		`;
	}

}