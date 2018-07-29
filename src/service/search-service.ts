import { Joke } from "../model/joke";
import { CHUCKNORRIS_RESTAPI_URL, BaseService } from "./base-service";


export interface SearchResult {
	total: number;
	result: Array<Joke>;
}

export class SearchService extends BaseService{

	private searchJokeUrl = CHUCKNORRIS_RESTAPI_URL.SEARCH_JOKE_API;
	
	getSearchResult(searchQuery:string){
		return this.requestMethod(`${this.searchJokeUrl+searchQuery}`);
	}

	
}