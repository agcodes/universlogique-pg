import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  // Define your engine's route map here


	this.route('newton-fractal', function() {
		this.route('page', {
			path: '/:id'
		});
	});

	this.route('mandelbrot');
	this.route('mandelbrot', function() {
		this.route('page', {
			path: '/:id'
		});
	});
});
