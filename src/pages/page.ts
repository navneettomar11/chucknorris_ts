import { BaseElement } from "../ui/base-element";

export class Page extends BaseElement{
	private pageTitle:string;

	constructor(pageTitle: string){
		super();
		this.pageTitle = pageTitle;
	}

	getElementByString(): string{
		return(
			`<div class="container-fluid">
				<div class="page-header">
					<h1>${this.pageTitle}</h1>
				</div> 
				<div class="container-fluid page-container">
						Loading...
				</div>  
			</div>`
		);
	}

	protected addContent(content: string){
		let panelBody = this.element.find(".page-container");
		panelBody.empty();
		panelBody.html(content);
	}

}