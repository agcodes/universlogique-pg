import PageRoute from 'universlogique-pg/routes/page';

export default PageRoute.extend({
	async model(params) {
		// return data
		return this.getData('mandelbrot', params, 'mandelbrot.page');
	}
})