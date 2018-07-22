import { Page } from "./page";
import { CategoryService } from "../service/category-service";

export class CategoryPage extends Page{

	constructor(){
		super("Categories");

	}

	render(){
		
		let _self = this;
		CategoryService.getCategories().then(function(categories){
			let categoryHtml =  categories.map((category)=>{
				return `<a href="#" class="list-group-item category-link">${category}</a>`
			}).join('');
			let elementString=`
			<div class="container-fluid">
				<div class="col-xs-3">
				<div class="list-group">
					<a href="#" class="list-group-item list-group-item-info">
						Categories
					</a>
					${categoryHtml}
				</div>	
				</div>
				<div class="col-xs-9">
					<div class="panel panel-default category-panel hidden">
						<div class="panel-heading"></div>
						<div class="panel-body"></div>
					</div>
				</div>
			</div>`;
			_self.addContent(elementString);
			
			_self.element.on('click','a.category-link', function(event:Event){
				event.preventDefault();
				_self.element.find(".list-group-item").removeClass('active');
				$(this).addClass('active');
				let category = `${$(this).text()}`;
				CategoryService.getJokeByCategory(category).then(function(joke){
					let categoryPanel = _self.element.find("div.category-panel");
					categoryPanel.removeClass('hidden');
					categoryPanel.find(".panel-heading").html(category);
					categoryPanel.find(".panel-body").html(`<div class="jumbotron">
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
					</div>`);
				});
			});
		});

	}

}