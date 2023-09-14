import EmberRouter from '@ember/routing/router';
import config from 'universlogique-pg/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	// engine blog
	this.mount('blog');
	this.mount('generative');
	this.route('ember');
});
