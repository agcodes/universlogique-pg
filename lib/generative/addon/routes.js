import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  // Define your engine's route map here
	this.route('mandelbrot');

	this.route('mandelbrot', function() {
		this.route('page', {
			path: '/:id'
		});
	});
});
