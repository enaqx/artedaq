'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://torid-fire-561.firebaseio.com/posts/:id.json');
});

