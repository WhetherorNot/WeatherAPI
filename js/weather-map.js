(function () {
    "use strict";

    function start(lat, lon) {
        var request = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast",
            type: "GET",
            data: {
                APPID: "2551290df502c3718db65b75d1ba26cf",
                lat: lat,
                lon: lon,
                units: "imperial",
                cnt:3
            }
        });
        request.done(success);
        request.fail(failure);
    }

   start(29.42,-98.485);

    function success(data, status, jqXhr) {
        // alert("Request established");

        console.log(data);
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

            var url= "http://openweathermap.org/img/w/"+day.weather[0].icon+".png";
            var img="<img src='"+url+"'>";
            var degree =
                "<div class='day col-md-4 box'>"
                +"<ul>"
                +"<li>" + "<strong>"+Math.round(day.main.temp_max)+"</strong>" + "<strong>ºF</strong>" +"<strong>/</strong>" + "<strong>"+Math.round(day.main.temp_min)+"</strong>" + '<strong>ºF</strong>' +"</li>"
                +"<li>"+img +"</li>"
                +"<li>"+"<strong>Clouds:</strong>"+ day.weather[0].description+"</li>"
                +"<li>"+"<strong>Humidity:</strong>"+day.main.humidity +"</li>"
                +"<li>"+"<strong>Wind:</strong>"+day.wind.speed +"</li>"
                +"<li>"+"<strong>Pressure:</strong>"+day.main.pressure +"</li>"
                +"</ul>"+
                "</div>";
            $('#info-dump').append(degree);



        });

    }

})();
