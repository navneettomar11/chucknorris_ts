import $ from "jquery";


export class BaseService {


	protected requestMethod(url): any{
		return $.ajax({
			beforeSend: ()=>{ $('#loading').show() },
			method: 'get',
			url: url,
			complete: ()=> { $('#loading').hide()}		
		});
	}

}

export const enum CHUCKNORRIS_RESTAPI_URL {
	ALL_CATEGORIES_API="https://api.chucknorris.io/jokes/categories",
	GET_JOKE_BY_CATEGORY_API="https://api.chucknorris.io/jokes/random?category",
	RANDOM_JOKE_API="https://api.chucknorris.io/jokes/random",
	SEARCH_JOKE_API="https://api.chucknorris.io/jokes/search?query="
}