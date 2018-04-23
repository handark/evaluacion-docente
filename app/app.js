'use strict';

angular.module('evaluacionDocente', [
  'ngRoute',
  'evaluacionDocente.reporteEvaluacionDocente'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/reporte-evaluacion-docente'});
}]);
