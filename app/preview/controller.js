angular.module('myapp', []).controller('Controller', ['$scope', function($scope) {
  $scope.form = {
    pledged: '0',
    funded: '0',
    percent: 0,
    amountLeft: 0,
    text: new Date().toLocaleDateString("de-DE", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    })
  };

  $scope.$watch('form.pledged', function(newValue, oldValue) {
    $scope.updateValues();
  });
  $scope.$watch('form.funded', function(newValue, oldValue) {
    $scope.updateValues();
  });


  $scope.updateValues = function() {

      $scope.form.pledged = $scope.form.pledged.replace(',', '');
      $scope.form.funded = $scope.form.funded.replace(',', '');

      if($scope.form.pledged == 0) {
        $scope.form.percent = 0;
      } else {
        $scope.form.percent = (($scope.form.funded * 100) / $scope.form.pledged).toFixed(2);
      }

      // must cast to float for comparison
      var pledged = parseFloat($scope.form.pledged)
      var funded = parseFloat($scope.form.funded)

      if(pledged <= funded) {
        $scope.form.amountLeft = 0;
      } else {
        $scope.form.amountLeft = $scope.form.pledged - $scope.form.funded;
      }

  }

}]);
