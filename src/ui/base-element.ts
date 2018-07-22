import  $ from 'jquery';

export abstract class BaseElement {
	protected element: any;

	abstract getElementByString(): string;

	createElement(): void{
		this.element = $(this.getElementByString());
	}

	appendToElement(parent: any){
		this.createElement();
		parent.append(this.element);
	}
}