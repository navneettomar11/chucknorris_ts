import { Joke } from "../model/joke";


export interface SearchResult {
	total: number;
	result: Array<Joke>;
}

export class SearchService {

	private searchJokeUrl = "https://api.chucknorris.io/jokes/search?query=";
	
	getSearchResult(searchQuery:string){
		let deferred = $.Deferred();
		$.ajax({
			method: 'get',
			url: `${this.searchJokeUrl+searchQuery}`,
			success: function(response){
				deferred.resolve(response);
			}, 
			error: function(error){
				deferred.reject(error)
			}
		});
		return deferred.promise();
	}

	
}