import { BaseService } from "./base-service";
import { Joke } from "../model/joke";

export class HomeService extends BaseService{

	private randomJokeUrl:string = "https://api.chucknorris.io/jokes/random";

	getRandomJokes(): any {
		return this.requestMethod(this.randomJokeUrl);
	}
}