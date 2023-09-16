import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
	async getData(folder, params) {
		const pageUrl = '/data/' + folder + '/data-' + params.id + '.json ';
		const response = await fetch(pageUrl);
		const data = await response.json();

		console.log(data);
		return data;
	}
})
