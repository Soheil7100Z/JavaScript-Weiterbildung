'use strict';

      (() => {
        // === DOM & VARS =======
        const DOM = {};
        DOM.container = document.querySelector('.app')
        DOM.icon = DOM.container.querySelector('img')
        DOM.status = DOM.container.querySelector('.status')
        DOM.description = DOM.container.querySelector('.description')
        DOM.temp = DOM.container.querySelector('.temp')
        DOM.minMax = DOM.container.querySelector('.min-max-temp')
        DOM.windSpeed = DOM.container.querySelector('.wind-speed')
        DOM.windDeg = DOM.container.querySelector('.wind-deg')
        // console.log(DOM)

        const lat = 51.538521;
        const lon = 7.219260;
        const API_key = '7baf68761c0943ca333226cd128445b9';


        // === INIT =============
        const init = () => {
          getWeatherData().then((data) => CreateWeatherApp(data))
        };

        // === XHR/FETCH ========
        const getWeatherData = async() => {
          try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
            if (!res.ok) {
              throw new Error ('Data laoding error')
            }
            const data = await res.json()
            return data

          } catch (error) {
            console.log(error)
          }

        }
        // === FUNCTIONS ========
        const CreateWeatherApp = (weatherDatail) => {
          console.log(weatherDatail)
          for (const prop in weatherDatail){
            // console.log(prop)
            switch(prop) {

              case 'weather':
                DOM.status.textContent = weatherDatail[prop][0].main
                DOM.description.textContent = weatherDatail[prop][0].description
                let iconID = weatherDatail[prop][0].icon
                DOM.icon.src = `https://openweathermap.org/img/wn/${iconID}@2x.png`
                DOM.icon.alt = iconID

              case 'main':
                DOM.temp.textContent = weatherDatail[prop].temp + ' °C'
                DOM.minMax.textContent = Math.floor(weatherDatail[prop].temp_min) + ' - ' + Math.floor(weatherDatail[prop].temp_max)  + ' °C'

              case 'wind':
                DOM.windSpeed.textContent = weatherDatail[prop].speed * 10 + ' km/h'
                DOM.windDeg.textContent = weatherDatail[prop].deg + ' °'
                console.log(weatherDatail[prop].speed)

              }
            }
        }
        init();
      })();
