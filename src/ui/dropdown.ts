import { BaseElement } from "./base-element";

export class Dropdown extends BaseElement {
	private id:string;
	private items:Array<string>=[];

	constructor(id:string, items: Array<string>){
		super();
		this.id = id;
		this.items = items;
	}

	getElementByString():string{
		let itemList = this.items.map((item)=>{
			return `li><a href="${item}">${item}</a></li>`;
		});
		return(
			`<div class="dropdown">
				<button class="btn btn-default dropdown-toggle" type="button" id="${this.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				Dropdown
				<span class="caret"></span>
				</button>
				<ul class="dropdown-menu" aria-labelledby="${this.id}">
					${itemList}
				</ul>
		  	</div>`
		);
	}
}