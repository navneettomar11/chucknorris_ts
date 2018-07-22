import { BaseElement } from "./base-element";
import { Header } from "./header";
import { Page } from "../pages/page";
import { Footer } from "./footer";


export class Container extends BaseElement{

	private routes:Array<any> = [];
	
	getElementByString():string{
		return(
		`<div class="container-fluid">
			<header id='app-header'></header>
			<main id="app-content"></main>
			<footer id="app-footer"></footer>
		</div>`);
	}

	addHeaderElement(header: Header){
		const headerElement = this.element.find("header#app-header");
		header.appendToElement(headerElement);
	}

	addRoute(routeLink:string, routePage:Page, activeLink:boolean = false, defaultPage: boolean = false){
		this.routes.push({routeLink,routePage,activeLink, defaultPage});
	}

	activeRoute(){
		const mainElement = this.element.find("main#app-content");
		mainElement.empty();
		let selectedRouteLink = this.routes.find((route)=> route.activeLink === true);
		if(selectedRouteLink !== undefined){
			selectedRouteLink.routePage.appendToElement(mainElement);
			selectedRouteLink.routePage.render();
		}else{
			let defaultPage = this.routes.find((route) => route.defaultPage === true);
			defaultPage.routePage.appendToElement(mainElement);
		}
	}

	changeRoute(changeRouteLink: string){
		let selectedRouteLink = this.routes.find((route)=> route.routeLink === changeRouteLink);
		if(selectedRouteLink !== undefined){
			this.routes.forEach((route)=> route.activeLink = false);
			selectedRouteLink.activeLink=true;
			this.activeRoute();
		}
	}

	addFooterElement(footerElement: Footer){
		footerElement.appendToElement(this.element.find("footer#app-footer"))
	}

}

