/* global app:true */

'use strict';

var app = angular.module('artedaqApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
  'firebase'
])
.constant('FIREBASE_URL', 'https://torid-fire-561.firebaseio.com/');

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
