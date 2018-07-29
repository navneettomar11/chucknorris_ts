import  $ from 'jquery';
import { BaseElement } from "./base-element";
import { container } from '..';

export interface MenuItem{
	label:string,
	icon:string,
	link: string
}

export class Header extends BaseElement {

	constructor(private brandText:string,private menuItems:Array<MenuItem>){
		super();
	}

	getElementByString():string{
		const menuItemHtml = this.menuItems.map((menuItem)=>{
			return `<li><a href="/${menuItem.link}"><i class="glyphicon glyphicon-${menuItem.icon}">&nbsp;</i>${menuItem.label}</a></li>`
		}).join('');
		return(
			`<nav class="navbar navbar-default navbar-fixed-top">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">${this.brandText}</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav app-menu">
							${menuItemHtml}
						</ul>
					</div>
				</div>
			</nav>`
		);
	}

	appendToElement(parent: any){
		super.appendToElement(parent);
		this.element.on('click', 'ul.app-menu> li > a', function(event:any){
			event.preventDefault();
			let hrefAttr = $(event.target).attr("href");
			container.changeRoute(`${hrefAttr}`);
		});
		
	}

	
}