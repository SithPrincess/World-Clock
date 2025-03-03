function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");
  chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function cityUpdate(event) {
  let cityTimeZone = event.target.value;
        if(cityTimeZone === "current"){
            cityTimeZone = moment.tz.guess();
        }
  let cityName= cityTimeZone.replace("_"," ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
 `;
}
updateTime();
setInterval(updateTime, 1000);


let selectedCities = document.querySelector("#city");
selectedCities.addEventListener("change", cityUpdate);
