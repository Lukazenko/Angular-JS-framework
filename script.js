// create the module and name it scotchApp
var App = angular.module('angApp', ['ngRoute']);



App.config(function($routeProvider, $locationProvider) {
    $routeProvider
     
     .when('/', {
        templateUrl : 'pages/main.html',
        controller  : 'mainController'
    })
    .when('/avaleht', {
        templateUrl : 'pages/avaleht.html',
        controller  : 'avalehtController'
    })
    .when('/todo', {
        templateUrl : 'pages/todo.html',
        controller  : 'todoController'
    })  
    .when('/naited', {
        templateUrl : 'pages/naited.html',
        controller  : 'naitedController' 
    })
    .when('/naited/one', {
        templateUrl : 'pages/naited_one.html',
        controller  : 'naitedController' 
    })
    .when('/naited/two', {
        templateUrl : 'pages/naited_two.html',
        controller  : 'naitedController' 
    })
    .when('/naited/three', {
        templateUrl : 'pages/naited_three.html',
        controller  : 'naitedController' 
    })
    .when('/naited/four', {
        templateUrl : 'pages/naited_four.html',
        controller  : 'naitedController' 
    })
    .when('/naited/five', {
        templateUrl : 'pages/naited_five.html',
        controller  : 'naitedController' 
    })
    .when('/materjalid', {
        templateUrl : 'pages/materjalid.html',
        controller  : 'materjalidController'
    })
    .when('/mang', {
        templateUrl : 'pages/mang.html',
        controller  : 'mangController'
    })
    .when('/tagasiside', {
        templateUrl : 'pages/tagasiside.html',
        controller  : 'tagasisideController'
    })
    
    
    $locationProvider.html5Mode(true);
});


App.directive("minudirective", function() {

    return {
        restrict: 'AE',
          scope: {
            name: '@'
        },
        template: '<h3>{{name}}</h3>'
      };
});


App.controller('mainController', function($scope) {

    $scope.pealkiri = 'Welcome';
    $scope.framework = 'Angular JS Framework';
    $scope.button = 'EXPLORE';

});


App.controller('avalehtController', function($scope) {

    $scope.mvc_img = 'images/mvc.png';
    $scope.angular = 'images/angular.png';
  
});




App.controller('todoController', function($scope) {
    $scope.ylesanded = 'Ülesanded: ';
    $scope.pealkiri = 'To do list';

    $scope.todos = [
        {text:'Todo 1', done:false},         
        {text: 'Todo 2', done:false}
      ];
      
      $scope.getTotalTodos = function () {
        return $scope.todos.length;
      };
      
      
      $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
      };
      
        $scope.clearCompleted = function () {
            $scope.todos = _.filter($scope.todos, function(todo){
                return !todo.done;
            });
        };

});


App.controller('naitedController', function($scope) {

    $scope.pealkiri = 'Näited';

});


App.controller('materjalidController', function($scope) {

    $scope.pealkiri = 'Materjalid';

    $scope.materjalid = [
        {
            name: 'W3Schools',
            info: 'Introduction to AngularJS',
            link: 'https://www.w3schools.com/angular/angular_intro.asp',
            pic: 'images/w3schools.png'
            
        },
        {
            name: 'AngularJS homepage',
            info: 'Developer guide',
            link: 'https://docs.angularjs.org/guide/introduction',
            pic: 'images/angular.png'
            
        },
        {
            name: 'Intellipaat',
            info: 'Full guide',
            link: 'https://intellipaat.com/blog/tutorial/angularjs-tutorial/angularjs-introduction/',
            pic: 'images/intellipaat.jpg'
            
        },
        {
            name: 'Geeksforgeeks',
            info: 'Full guide',
            link: 'https://www.geeksforgeeks.org/introduction-to-angularjs/',
            pic: 'images/geeks.png'
        },
        {
            name: 'guru99',
            info: 'Architecture & Features',
            link: 'https://www.guru99.com/angularjs-introduction.html',
            pic: 'images/guru.png'
        },
        {
            name: 'Sitepoint',
            info: 'AngularJS: What it is, and Why you should use it',
            link: 'https://www.sitepoint.com/angular-introduction/',
            pic: 'images/sitepoint.png'
        }
    ]

});


App.controller('mangController', function($scope) {

    $("input:checkbox").on('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
          // the name of the box is retrieved using the .attr() method
          // as it is assumed and expected to be immutable
          var group = "input:checkbox[name='" + $box.attr("name") + "']";
          // the checked state of the group/box on the other hand will change
          // and the current value is retrieved using .prop() method
          $(group).prop("checked", false);
          $box.prop("checked", true);
        } else {
          $box.prop("checked", false);
        }
      });
    $scope.alustaVisible = true;
    $scope.kysimusedVisible = false;
    $scope.vastused = 0;
    $scope.kysimused = 1;


    $scope.pealkiri = 'Mäng';

    

    $scope.alusta = function () {
        $scope.isVisible1 = true;
        $scope.showVastus = true;
        $scope.alustaVisible = false;
        $scope.kysimusedVisible = true;
    }

    $scope.vastus = function () {
        if($scope.a){
            
            $scope.resultf = "Vale vastus, õige vastus on D";
            $scope.showVastus = false;
        } else if($scope.b){
            
            $scope.resultf = "Vale vastus, õige vastus on D";
            $scope.showVastus = false;
        } else if($scope.c){
            
            $scope.resultf = "Vale vastus, õige vastus on D";
            $scope.showVastus = false;
        } else if($scope.d){
            
            $scope.result = "See vastus on õige!";
            $scope.showVastus = false;
            $scope.vastused += 1;
        }
        
    }

    $scope.ShowHide = function () {
        $scope.isVisible1 = false;
        $scope.isVisible2 = true;
        $scope.showVastus2 = true;
        $scope.kysimused += 1;
    }

    $scope.vastus2 = function () {
        if($scope.a){
            
            $scope.result2f = "Vale vastus, õige vastus on B";
            $scope.showVastus2 = false;
        } else if($scope.b){
            $scope.result2 = "See vastus on õige!";
            $scope.showVastus2 = false;
            $scope.vastused += 1;
            
        } else if($scope.c){
            
            $scope.result2f = "Vale vastus, õige vastus on B";
            $scope.showVastus2 = false;
        } else if($scope.d){
            
            $scope.result2f = "Vale vastus, õige vastus on B";
            $scope.showVastus2 = false;
        }
    }

    $scope.ShowHide2 = function () {
        
        $scope.isVisible2 = false;
        $scope.isVisible3 = true;
        $scope.showVastus3 = true;
        $scope.kysimused += 1;
    }

    $scope.vastus3 = function () {
        if($scope.a){
            
            $scope.result3f = "Vale vastus, õige vastus on B";
            $scope.showVastus3 = false;
        } else if($scope.b){
            $scope.result3 = "See vastus on õige!";
            $scope.showVastus3 = false;
            $scope.vastused += 1;
            
        } else if($scope.c){
            
            $scope.result3f = "Vale vastus, õige vastus on B";
            $scope.showVastus3 = false;
        } else if($scope.d){
            
            $scope.result3f = "Vale vastus, õige vastus on B";
            $scope.showVastus3 = false;
        }
    }

    $scope.ShowHide3 = function () {
        
        $scope.isVisible3 = false;
        $scope.isVisible4 = true;
        $scope.showVastus4 = true;
        $scope.kysimused += 1;
    }


    $scope.vastus4 = function () {
        if($scope.a){
            $scope.result4 = "See vastus on õige!";
            $scope.showVastus4 = false;
            $scope.vastused += 1;            
            
        } else if($scope.b){
            $scope.result4f = "Vale vastus, õige vastus on B";
            $scope.showVastus4 = false;
            
            
        
        }
    }

    $scope.ShowHide4 = function () {
        
        $scope.isVisible4 = false;
        $scope.isVisible5 = true;
        $scope.showVastus5 = true;
        $scope.kysimused += 1;
    }

    $scope.vastus5 = function () {
        if($scope.a){
            
            $scope.result5f = "Vale vastus, õige vastus on D";
            $scope.showVastus5 = false;
        } else if($scope.b){
            
            $scope.result5f = "Vale vastus, õige vastus on D";
            $scope.showVastus5 = false;
        } else if($scope.c){
            
            $scope.result5f = "Vale vastus, õige vastus on D";
            $scope.showVastus5 = false;
        } else if($scope.d){
            
            $scope.result5 = "See vastus on õige!";
            $scope.showVastus5 = false;
            $scope.vastused += 1;
        }
    }

    $scope.ShowHide5 = function () {
        $scope.isVisible5 = false;
        
        $scope.kysimusedVisible = false;
        $scope.lastVisible = true;
        
    }

    $scope.refresh = function (){
        location.reload();
    }





});

App.controller('tagasisideController', function($scope, $http) {

   $scope.formData = {};
   $scope.response = '';
   

   $scope.processForm = function () {
    $scope.response = '';

       $http({
            method: 'POST',
            url: 'email.php',
            data: $.param($scope.formData),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

       }).success(function (data) {

           console.log(data);
           $scope.response = 'Kiri saadetud'; 

       });
   };
    
});