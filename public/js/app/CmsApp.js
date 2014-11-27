var CmsApp = angular.module('CmsApp', ['ngResource', 'ngRoute', 'ngTable', 'angularUtils.directives.dirPagination']);

CmsApp.config(['$locationProvider', 'paginationTemplateProvider', function ($locationProvider, paginationTemplateProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);