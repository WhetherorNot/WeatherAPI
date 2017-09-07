(function(){
    "use strict";
    var request=$.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: "2551290df502c3718db65b75d1ba26cf",
            id: "4726206",
            units:"imperial"
        }
    });
        request.done(success);
        request.fail(failure);

    function success(data,status,jqXhr) {
            alert("Request established");
            console.log(data);
        weatherInfo(data);

    }
    function failure(jqXhr, status, error){
        alert("Request failed");
    }
    function weatherInfo(data){
        var icon=data.weather.icon);

    }

})();
