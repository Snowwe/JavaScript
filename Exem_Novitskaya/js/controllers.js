app.controller('StyleController', function ($scope) {
    $scope.color1 = "orange";
    $scope.DBcolors = [{
            id: 1,
            color: "red"
        },
        {
            id: 2,
            color: "yellow"
        },
        {
            id: 3,
            color: "gray"
        },
        {
            id: 4,
            color: "purple"
        },
        {
            id: 5,
            color: "blue"
        }
    ];
    // $scope.colors=["red","blue","yellow"];
    // $scope.countTry = 0;
    // $scope.guessNumber = null;
    // $scope.deviation = null;
    // //
    $scope.verify = function () {
        $scope.sizeHR = $scope.sizeHr;
        $scope.widthHR = $scope.widthHr;
        $scope.color = $scope.colorHR;
        document.write("<hr size='{{sizeHR}}px'>")
    }
});