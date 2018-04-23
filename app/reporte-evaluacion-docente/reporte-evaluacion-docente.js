'use strict';

angular.module('evaluacionDocente.reporteEvaluacionDocente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reporte-evaluacion-docente', {
    templateUrl: 'reporte-evaluacion-docente/reporte-evaluacion-docente.html',
    controller: 'reporteEvaluacionDocenteCtrl'
  });
}])

.controller('reporteEvaluacionDocenteCtrl', [function() {

}]);