import  $ from 'jquery';
import {CHUCKNORRIS_RESTAPI_URL, BaseService} from './base-service';

export class CategoryService extends BaseService{

	getCategories(): any{
		return this.requestMethod(CHUCKNORRIS_RESTAPI_URL.ALL_CATEGORIES_API);
		
	}

	getJokeByCategory(category:string){
		return this.requestMethod(`${CHUCKNORRIS_RESTAPI_URL.GET_JOKE_BY_CATEGORY_API}=${category}`)
	}
}