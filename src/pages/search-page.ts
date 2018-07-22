import { Page } from "./page";
import { SearchService } from "../service/search-service";

export class Search extends Page{
	private searchService:SearchService;

	constructor(searchService:SearchService){
		super("Search Jokes");
		this.searchService = searchService;
	}

	render(){
		
		let searchForm = `
			<form role='form' class='form-inline' onsubmit="return false;">
				<div class="form-group">
					<label class="sr-only" for="searchText">Search</label>
					<input type="text" class="form-control" id="searchText" placeholder="Search...">
				</div>
				<button type="submit" class="btn btn-default btn-search">Search</button>
			</form>
			<div class="jumbotron hidden search-container">
				<h2>Search Result</h2>
				<div class="search-result"></div>
			</div>
		`;
		let _self = this;
		_self.addContent(searchForm);

		this.element.on('click','button.btn-search', function(){
			let searchContainer = _self.element.find("div.search-container");
			searchContainer.addClass("hidden");
			_self.searchService.getSearchResult(`${_self.element.find("#searchText").val()}`).then(function(searchResults){
				let table = _self.element.find("div.search-result");
				searchContainer.removeClass("hidden");
				table.empty();
				let tbodyHtml = searchResults.result.map((row)=>{
					return `<div class="media well well-lg" id="${row.id}">
					<div class="media-left">
						<a href="${row.url}">
							<img class="media-object" src="${row.icon_url}" alt="...">
						</a>
					</div>
					<div class="media-body">
						<h4 class="media-heading">${row.value}</h4>
					</div>
				  </div>`
				}).join('');
				table.html(tbodyHtml);
			});
		});
	}

}