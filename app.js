// function showWeather() {
//     let cityNameOfWeatherMap = prompt("Введите город , погоду которого вы хотите узнать")
    
    let data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(response => response.json())
    .then(data => console.log(data))

    let nameOfPalce = prompt("Введите город , погоду которого вы хотите узнать");


class Weather {
    constructor ( data , parent  ) {
                this.place = nameOfPalce
                this.temp = data.main.temp;
                this.pressure = data.main.pressure ;
                this.humidity = data.main.humidity ;
                this.speed = data.wind.speed;
                this.deg = data.wind.deg;
                this.main = data.weather[0].main
                this.icon = data.weather[0].icon;
                this.parent = document.querySelector(".article")
            }
    render() {
        let article = document.createElement("article-box");
        article.classList.add("col-6");
        article.innerHTML = `
        <div class="article-box">
                    <div class="article-place">Weather for <span class="weather-place">${this.place}</span></div>
                    <hr>
                    <div class="article-temp">Tempereture :${Math.round(this.temp)}&degC</div>
                    <div class="article-pres">Pressure :  ${this.pressure} hPa</div>
                    <div class="article-hum">Humitity ${this.humidity}%</div>
                    <div class="article-sp">Speed : ${this.speed} m/s</div>
                    <div class="article-deg">Deg. : ${this.deg}&deg</div>
                    <div class="article-main">Sky : <span>${this.main}</span></div>
                    <div class="article-icon"><img src="https://openweathermap.org/img/wn/${this.icon}@2x.png"></img></div>
                </div>
        `;
        this.parent.append(article)
    }
}
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${nameOfPalce}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((response) => response.json())
    .then((data) => new Weather(data, parent).render());

