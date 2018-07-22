
import  $ from 'jquery';
import {Container} from './ui/container';
import { Header, MenuItem } from "./ui/header";
import {CategoryService} from './service/category-service'
import { HomePage } from './pages/home-page';
import { HomeService } from './service/home-service';
import { Search } from './pages/search-page';
import { SearchService } from './service/search-service';
import { CategoryPage } from './pages/categories-page';
import { ContactPage } from './pages/contact-page';
import { AboutPage } from './pages/about-page';
import { Footer } from './ui/footer';

export const container = new Container();

export function main(el:HTMLElement) {
	const menus:Array<MenuItem> = [
		{'label':'Home','link':'', icon:'home'}, 
		{'label':'Search','link':'search', icon:'search'},
		{'label':'Categories','link':'categories', icon:'list-alt'},
		{'label':'About Us','link':'about', icon:'info-sign'},
		{'label':'Contact','link':'contact', icon:'earphone'},
	];
	container.appendToElement(el);
	container.addRoute("/", new HomePage(new HomeService()),true, true);
	container.addRoute("/search", new Search(new SearchService()));
	container.addRoute("/categories", new CategoryPage());
	container.addRoute("/about", new AboutPage());
	container.addRoute("/contact", new ContactPage());
	container.activeRoute();
	container.addHeaderElement(new Header('Chucknorris Joke',menus));
	container.addFooterElement(new Footer());
	//initalize ajax loader
	$( document ).ajaxStart(function() {
		$( "#loading" ).show();
	});

	$( document ).ajaxStop(function() {
		$( "#loading" ).hide();
	  });
	//CategoryService.getCategories().done(function(response){});
}


