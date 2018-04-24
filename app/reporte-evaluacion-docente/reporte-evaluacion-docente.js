'use strict';

angular.module('evaluacionDocente.reporteEvaluacionDocente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reporte-evaluacion-docente', {
    templateUrl: 'reporte-evaluacion-docente/reporte-evaluacion-docente.html',
    controller: 'reporteEvaluacionDocenteCtrl'
  });
}])

.controller('reporteEvaluacionDocenteCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.listaEvaluacionDocente = [];
  $scope.listaEvaluacionDocenteConcatenada = [];
  $scope.listaCursosAgrupado = [];
  $scope.listaPreguntasAgrupada = [];
  $scope.listaEvaluacionConcatenadaAgrupada = [];
  $scope.porcentajeAnchoColumnas = 0;
  $scope.fechaReporte = new Date();
  
  /**
   * Obtener los datos generales de la evaluación docente
   */
  $http.get('../datos/evaluacion.json').success(function(data) {
    $scope.listaEvaluacionDocente = data;
    $scope.listarCursosAgrupados($scope.listaEvaluacionDocente);
    $scope.listarPreguntasAgrupados($scope.listaEvaluacionDocente);
  });
  
  /**
   * Agrupar por cursos
   */
  $scope.listarCursosAgrupados = function(listaEvaluacionDocente){
    
    var grupos = listaEvaluacionDocente.reduce(function(obj,item){
      obj[item.Codigo_Materia] = obj[item.Codigo_Materia] || [];
      obj[item.Codigo_Materia].push(item.Letra);
      obj[item.Codigo_Materia].push(item.Nombre);
      return obj;
    }, {});
    
    var arreglo = Object.keys(grupos).map(function(key){
        $scope.listaCursosAgrupado.push({ Codigo_Materia: key, Datos: grupos[key] });
    });  
    
   $scope.porcentajeAnchoColumnas = 75 / ($scope.listaCursosAgrupado.length + 2)
    
  }
  
  /**
   * Agrupar por preguntas
   */
  $scope.listarPreguntasAgrupados = function(listaEvaluacionDocente){
    
    var grupos = listaEvaluacionDocente.reduce(function(obj,item){
      obj[item.Pregunta] = obj[item.Pregunta] || [];
      obj[item.Pregunta].push(item.Letra);
      return obj;
    }, {});
    
    var arreglo = Object.keys(grupos).map(function(key){
        $scope.listaPreguntasAgrupada.push({ Pregunta: key, Letra: grupos[key] });
    }); 
    
  }
  
  $scope.obtenerTotalLetra = function(Letra, Codigo_Materia, Pregunta) {
    var totalLetra = 0;
    $scope.listaEvaluacionDocente.forEach(function(fila){
      if(fila.Letra == Letra && fila.Codigo_Materia == Codigo_Materia && fila.Pregunta == Pregunta)
        totalLetra = fila.Total;
    })
    return totalLetra;
  }
  
  $scope.obtenerTotalPreguntaLetra = function(Letra, Pregunta) {
    var totalLetra = 0;
    $scope.listaEvaluacionDocente.forEach(function(fila){
      if(fila.Letra == Letra  && fila.Pregunta == Pregunta)
        totalLetra += fila.Total;
    })
    return totalLetra;
  }
  
  $scope.imprimirReporte = function(idDivReporte){
    
    var contenido = document.getElementById(idDivReporte).innerHTML;
    var ventana = window.open('', 'Imprimir', 'height=600,width=800');

    ventana.document.write('<html><head><title>Reporte Evaluación Docente</title>');
    ventana.document.write('</head><body >');
    ventana.document.write(contenido);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus()
    ventana.print();
    ventana.close();
    return true;
    
  }
  

}]);