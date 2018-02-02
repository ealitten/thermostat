$(document).ready(function () {

  thermostat = new Thermostat()

  $("#user-location").submit(function(event){
    event.preventDefault();
    var city = $("#city").val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var apiKey = '&appid=76acf1fa5703886e3010c6631ef87b4b'
    var units = '&units=metric'
    $.get(url + city + units + apiKey, function(weatherResponse){
      $('#current-weather').text(weatherResponse.main.temp);
    });
    $("#current-location").text(city);
  };

  function updateTemp(){
    $("#current-temp").text(thermostat.getTemperature());
    $("#current-temp").attr('class',thermostat.energyUsage());
  };

  $("#temperature-up").click(function (event) {
    thermostat.turnUp();
    updateTemp();
  });

  $("#temperature-down").click(function (event) {
    thermostat.turnDown();
    updateTemp();
  });

  $("#temperature-reset").click(function (event) {
    thermostat.resetTemp();
    updateTemp();
  });

  $("#powersaving-on").click(function (event) {
    thermostat.turnPowerSavingOn();
    $("#power-saving-status").text('on');
    updateTemp();
  });

  $("#powersaving-off").click(function (event) {
    thermostat.turnPowerSavingOff();
    $("#power-saving-status").text('off');
  });
});
