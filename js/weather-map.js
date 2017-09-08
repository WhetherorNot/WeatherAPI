(function () {
    "use strict";

    var place = {
        lat: 29.423017,
        lon: -98.48527
    };


    function start(lat, lon) {
        var request = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast",
            type: "GET",
            data: {
                APPID: "2551290df502c3718db65b75d1ba26cf",
                lat: lat,
                lon: lon,
                units: "imperial",
                cnt: 3
            }
        });
        request.done(success);
        request.fail(failure);
    }

    start(place.lat, place.lon);
    googleAPI(place.lat, place.lon);


    function success(data, status, jqXhr) {
        // console.log(data);
        $('#info-dump').html("");
        $('#city').html('');
        weatherInfo(data.list, data);
    }

    function failure(jqXhr, status, error) {
        alert("Request failed");
    }

    function weatherInfo(day, data) {
        var location = data.city.name;
        $('#city').append(location);

        day.forEach(function (day) {

            var url = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
            var img = "<img src='" + url + "'>";

            var degree =
                "<div class='day col-md-4 box'>"
                + "<ul>"
                + "<li>" + "<span class=temp><strong>" + Math.round(day.main.temp_max) + "</strong>" + "<strong>ºF</strong>" + "<strong>/</strong>" + "<strong>" + Math.round(day.main.temp_min) + "</strong>" + '<strong>ºF</strong>' + "</span></li>"
                + "<li>" + img + "</li>"
                + "<li>" + "<strong>Clouds:</strong>" + day.weather[0].description + "</li>"
                + "<li>" + "<strong>Humidity:</strong>" + day.main.humidity + "</li>"
                + "<li>" + "<strong>Wind:</strong>" + day.wind.speed + "</li>"
                + "<li>" + "<strong>Pressure:</strong>" + day.main.pressure + "</li>"
                + "</ul>" +
                "</div>";

            $('#info-dump').append(degree);


        });

    }

    $('button').click(function () {
        var lat = Number($('#latitude').val());
        var lon = Number($('#longitude').val() * -1);
    console.log(lat);
    console.log(lon);

        start(lat, lon);
        googleAPI(lat,lon);

    });


    function googleAPI(lat, lng) {
        var mapPlace={
            lat:lat,
            lng:lng
        };

    var mapOptions = {
        zoom: 19,
        center: mapPlace

    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    var marker = new google.maps.Marker({
        position: mapPlace,
        map: map
    });
}

})();