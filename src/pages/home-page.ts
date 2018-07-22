import { Page } from "./page";
import { HomeService } from "../service/home-service";
import { Joke } from "../model/joke";

export class HomePage extends Page{
	private homeService:HomeService;

	constructor(homeService: HomeService){
		super("Home");
		this.homeService = homeService;
	}
	render(){
		let _self = this;
		let joke:any = this.homeService.getRandomJokes().done((joke)=>{
			let elementString = `<div class="jumbotron">
			<div class="media" id="${joke.id}">
				<div class="media-left">
					<a href="${joke.url}">
						<img class="media-object" src="${joke.icon_url}" alt="...">
					</a>
				</div>
				<div class="media-body">
					<h4 class="media-heading">${joke.value}</h4>
				</div>
			</div>
			</div>`;
			_self.addContent(elementString);
		}).fail((error)=>{
			throw new Error("Failed to get random joke");
		});;
	}
}