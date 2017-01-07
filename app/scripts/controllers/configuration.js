'use strict';
angular.module('morApp')
.controller('configueCntrl',['$scope',
	function($scope){
		console.log('this is configuration controller');
		$scope.placeOrder=[];
		$scope.placeOrder1=[];
    $scope.save = function(){

    	 	var place ={};
			place.riceType=$scope.riceType;
    	   	 place.quantity=$scope.quantity;
			console.log('place::::: ',place);	
    		$scope.placeOrder.push(place);

    		document.getElementById('textId').value = '';
    		}

    	$scope.save1=function(){
    		var place1 ={};
    		place1.quantity=$scope.quantity;
    		$scope.placeOrder1.push(place1);
    		document.getElementById('textId1').value = '';

    	}

      $scope.remove=function() {
         document.getElementById("myTable").deleteRow(1);
     }

     $scope.close=function(){
      	$('#confirmModal').modal('hide');
      }

	}]);