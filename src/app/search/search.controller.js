class searchController {
  constructor($scope, searchService) {
    $scope.data = {};
    $scope.search = () => {
      return searchService.queryYoutube($scope.data.searchString)
        .then(function(results) {
          $scope.data.results = results;
        })
        .catch(function(err) {
          console.log(err);
        })
    }
  }
}

export default searchController;
