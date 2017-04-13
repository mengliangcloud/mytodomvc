(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module("myApp", []);
	app.controller("myController", ['$scope', function ($scope) {
		$scope.tasks = [{
				id: 1,
				name: '吃饭',
				completed: false,
			},
			{
				id: 2,
				name: '睡觉',
				completed: true,
			},
			{
				id: 3,
				name: '打球',
				completed: false,
			},
			{
				id: 4,
				name: '玩耍',
				completed: true,
			}
		]
		$scope.newTask = "";
		//添加任务
		$scope.add = function () {
			if ($scope.newTask == "" || $scope.newTask == undefined) {
				return;
			}
			var id;
			if ($scope.tasks.length == 0) {
				id = 1;
			} else {
				id = $scope.tasks[$scope.tasks.length - 1].id + 1;
			}
			$scope.tasks.push({
				id: id,
				name: $scope.newTask,
				completed: false
			});
			$scope.newTask = "";
			console.log($scope.tasks);
		}
		//移除任务
		$scope.remove = function (id) {
			for (var i = 0; i < $scope.tasks.length; i++) {
				var value = $scope.tasks[i];
				if (value.id == id) {
					$scope.tasks.splice(i, 1);
				}
			}
		}
		//编辑任务
		$scope.isEditing = -1;
		$scope.editing = function (id) {
			$scope.isEditing = id;
		}
		//编辑后添加到数组中
		$scope.save = function (e) {
			if (e.code == "Enter") {
				$scope.isEditing = -1;
			}
		}

		//全选
		$scope.isSelected = false;
		$scope.toggleAll = function () {
			for (var i = 0; i < $scope.tasks.length; i++) {
				$scope.tasks[i].completed = $scope.isSelected;
			}
		}
		//删除已完成的
		$scope.deleteC = function () {
			$scope.newTasks = [];
			console.log($scope.tasks)
			for (var i = 0; i < $scope.tasks.length; i++) {
				if ($scope.tasks[i].completed === false) {
					$scope.newTasks.push($scope.tasks[i]);
				}
			}
			$scope.tasks = $scope.newTasks;
			if ($scope.newTasks.length == 0) {
				$scope.isSelected = false;
			}
		}
		//控制删除按钮是否显示
		$scope.isShow = function () {
			for (var i = 0; i < $scope.tasks.length; i++) {
				if ($scope.tasks[i].completed) {
					return true;
				}
			}
			return false;
		}
		//显示未完成的
		$scope.unCompleted = function () {
			var count = 0;
			for (var i = 0; i < $scope.tasks.length; i++) {
				if (!$scope.tasks[i].completed) {
					count++;
				}
			}
			return count;
		}

		//显示全部
		$scope.isCompleted = {};
		$scope.All = function () {
			$scope.isCompleted={};
		}
		//显示未完成的
		$scope.active = function () {
			$scope.isCompleted={completed:false};
		}
		//显示已完成的
		$scope.Completed = function () {
			$scope.isCompleted={completed:true};
		}






	}])

})(angular);
