import {writable} from 'svelte/store'
// API ID -> 00fecbbaff92238c81a8ba0f9658c1c7

export const weather = writable(undefined)
export const cityList = writable(undefined)

export async function fetchCities(termToSearch) {
    const url = `https://openweathermap.org/data/2.5/find?q=${termToSearch}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02`
    const res = await fetch(url)
    const data = await res.json()
    if (res.status === 200) {
        cityList.set(data.list)
    } else {
        data.hasError = true
        cityList.set(data)
    }
}
export async function fetchWeather (lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly&lang=pt&appid=00fecbbaff92238c81a8ba0f9658c1c7`
    const res = await fetch(url)
    const data = await res.json()
    if (res.status === 200) {
        // * DATA PARSERS
        const parsedCity = data.timezone.split('/')[1]
        const parsedContinent = data.timezone.split('/')[0]
        const parsedDatesData = data.daily.map((day) => {
            return {
                ...day,
                parsedDate: dateConverter(day.dt)
            }
        })
        data.city = parsedCity
        data.continent = parsedContinent
        data.daily = parsedDatesData
        weather.set(data)
    } else {
        data.hasError = true
        weather.set(data)
    }
}

const dateConverter = (unixDate) => {
    const date = new Date(unixDate * 1000)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const parsedDateObject = { weekday: weekdays[date.getDay()], day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear() }

    return parsedDateObject
}