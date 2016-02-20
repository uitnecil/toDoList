var appX = angular.module('mainApp', ['ngMaterial']);

appX.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('green');
});
appX.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('my-blue')
        .primaryPalette('red')
        .accentPalette('green');
});


appX.controller('app', function ($scope) {
    $scope.tasks = [];

    //contact local storage;
    var taskData = localStorage['taskslistAll'];
    console.log(taskData);
    console.log(typeof taskData)

    if(angular.isDefined(taskData)) {
        $scope.tasks = JSON.parse(taskData);
    }

    $scope.searchEnter = function () {
        //console.log(event.which || event.keyCode)
        if (angular.isDefined($scope.task)) {
            if (event.keyCode == 13 && $scope.task) {
                $scope.addTask();
            }
        }
    };
    $scope.addTask = function () {
        $scope.tasks.push({'taskMessage': $scope.task, 'status': false});
        $scope.task = '';
    };
    $scope.contentEdit = function (msg) {
        if (!msg.status) {
            $scope.truefalse = !$scope.truefalse;
        }
    };

    $scope.endReEdit = function (msg) {
            if (event.keyCode == 13 && msg !== undefined) {
                $scope.truefalse = !$scope.truefalse;
                $scope.contentEdit(msg);
            }
    };

    $scope.$watch('tasks', function(nv){
        console.log(nv)
        localStorage['taskslistAll'] = JSON.stringify(nv);

    })

});