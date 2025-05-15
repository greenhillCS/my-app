'use client'
import { View, ScrollView, Text, StyleSheet} from 'react-native';
import { useState, useEffect } from "react"
import Period from "@/components/period"
// import './weather.css'

export default function WeatherPage(){
    let [weather, setWeather] = useState({
        properties: {
            periods: [{number:0}]
        }
    })
    let refreshData = async () => {
        let allWeather = await fetch('https://api.weather.gov/points/32.9376,-96.8454')
        let weatherData = await allWeather.json()
        let forecast = await fetch(weatherData.properties.forecast)
        let forecastData = await forecast.json()
        setWeather(forecastData)
        // console.log(forecastData)
        console.log(weather)
    }
    useEffect(() => {
        refreshData()
    }, [])


    return(
        <View style={{paddingTop: 64, width:'100%',height: '100%'}}>
            <Text style={{fontWeight: 700, textAlign: 'center', fontSize: 18}}>Weather in Addison, TX</Text>
            <ScrollView contentContainerStyle={{flexGrow:1,gap: 16, justifyContent: 'space-around', flexDirection:'column', margin:16}} >
            {
                weather.properties.periods.map((period) => {
//                     console.log(period);
                    return(
                        <Period key={period.number} period={period}  />
                    )
                })
            }
            </ScrollView>
        </View>

    )
}
