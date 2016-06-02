"use strict"
var app = angular.module("AddBook", [ngRoute])

app.config(function($routeProvider) {
	$routeProvider
		.when("/list", {
			templateURL: 'partials/list.html',
			controller: 'ListCtrl'
		})
		.when('/new', {
			templateURL: 'partials/new.html',
			controller: 'NewCtrl'
		}).
		otherwise('/')
})