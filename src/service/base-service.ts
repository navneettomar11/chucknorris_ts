import $ from "jquery";


export class BaseService {


	protected requestMethod(url): any{
		return $.ajax({
			method: 'get',
			url: url		
		});
	}

}