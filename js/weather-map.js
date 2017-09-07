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
    start(29.423017,-98.48527);


    function success(data, status, jqXhr) {
        console.log(data);
        $('#info-dump').html("");
        $('#city').html('');
        weatherInfo(data.list,data);
    }

    function failure(jqXhr, status, error) {
        alert("Request failed");
    }

    function weatherInfo(day,data) {
        var location=data.city.name;
        $('#city').append(location);

        day.forEach(function(day){

            var url= "http://openweathermap.org/img/w/"+day.weather[0].icon+".png";
            var img="<img src='"+url+"'>";

            var degree =
                "<div class='day col-md-4 box'>"
                +"<ul>"
                +"<li>" +"<span class=temp><strong>"+Math.round(day.main.temp_max)+"</strong>" + "<strong>ºF</strong>" +"<strong>/</strong>" + "<strong>"+Math.round(day.main.temp_min)+"</strong>" + '<strong>ºF</strong>' +"</span></li>"
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

    $('button').click(function () {
        var lat=$('#latitude').val();
        var lon=$('#longitude').val();

        start(lat,lon)

    });
})();
