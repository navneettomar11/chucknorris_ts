import { BaseService, CHUCKNORRIS_RESTAPI_URL } from "./base-service";
import { Joke } from "../model/joke";

export class HomeService extends BaseService{

	private randomJokeUrl:string = CHUCKNORRIS_RESTAPI_URL.RANDOM_JOKE_API;

	getRandomJokes(): any {
		return this.requestMethod(this.randomJokeUrl);
	}
}