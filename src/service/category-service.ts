import  $ from 'jquery';

export class CategoryService {

	static getCategories(): any{
		let deferred = $.Deferred();
		$.ajax({
			method: 'get',
			url: 'https://api.chucknorris.io/jokes/categories',
			success: function(response){
				deferred.resolve(response);
			}, 
			error: function(error){
				deferred.reject(error)
			}
		});
		return deferred.promise();
	}

	static getJokeByCategory(category:string){
		let deferred = $.Deferred();
		$.ajax({
			method: 'get',
			url: `https://api.chucknorris.io/jokes/random?category=${category}`,
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