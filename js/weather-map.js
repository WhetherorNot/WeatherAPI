(function () {
    "use strict";
    var request = $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: "2551290df502c3718db65b75d1ba26cf",
            id: "4726206",
            units: "imperial",
            cnt:3
        }
    });
    request.done(success);
    request.fail(failure);

    function success(data, status, jqXhr) {
        // alert("Request established");

        console.log(data.list);
        weatherInfo(data.list);
    }

    function failure(jqXhr, status, error) {
        alert("Request failed");
    }

    function weatherInfo(day) {
        // var icon = data.weather.icon;
        // var sanAntonio = data.name;
        // var high = day.main.temp_max;
        // var low = day.main.temp_min;
        // var humidity = data.main.humidity;
        // var wind = data.wind.speed;
        // var pressure = data.main.pressure;

        day.forEach(function(day){
            var degree = day.main.temp_max + "ºF" + "/" + day.main.temp_min + "ºF";
            $("#day1").append(degree);
        });

    }

})();
