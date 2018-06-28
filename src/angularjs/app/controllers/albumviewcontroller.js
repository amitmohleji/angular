(function() {

	function AlbumViewController($scope, $routeParams) {
		$scope.album_name = $routeParams.album_name;


		var photos = { 
			"madrid1309" : [ 
			{ filename: "madrid1309-001.png",
			date: "2013/09/05",
			description: "I love this place" },
			{ filename: "madrid1309-002.png",
			date: "2013/09/05",
			description: "so much winning!!!" } 
			],
			"australia1207" : [
			{ filename: "australia1207-001.png",
			date: "2013/09/05",
			description: "I love this place" },
			{ filename: "australia1207-002.png",
			date: "2013/09/05",
			description: "so much winning!!!" } 
			]
		};

		if (photos[$scope.album_name]) {
			$scope.photos = photos[$scope.album_name];
		}else {
			$scope.load_error_text =  "I can't find the album of that name";
		}    
	}
	photoApp.controller("AlbumViewController", AlbumViewController)

})();