import PageRoute from 'universlogique-pg/routes/page';

export default PageRoute.extend({
	async model(params) {
		// return data
		return this.getData('newton-fractal', params, 'newton-fractal.page');
	}
})