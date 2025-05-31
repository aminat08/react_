import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import axios from 'axios'
const WeatherApp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=6.5244&lon=3.3792&appid=58ccab1ec38bae4e715ed2f9d19dff85&units=metric');
                setData(res.data);
                console.log(res.data)
            } catch (error) {
                console.error('error', error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="p-4 text-white bg-blue-500 rounded-lg">
            {loading && <Loader />}
            {!loading && data && (
                <div>
                    <h2 className="text-xl font-bold">Weather in {data.name}</h2>
                    <p><strong>Country:</strong> {data.sys?.country}</p>
                    <p><strong>Temperature:</strong> {data.main?.temp}°C</p>
                    <p><strong>Feels Like:</strong> {data.main?.feels_like}°C</p>
                    <p><strong>Weather:</strong> {data.weather[0]?.description}</p>
                    <p><strong>Wind Speed:</strong> {data.wind?.speed} m/s</p>
                    <p><strong>Cloudiness:</strong> {data.clouds?.all}%</p>
                    <p><strong>Visibility:</strong> {data.visibility} meters</p>
                    <p><strong>Coordinates:</strong> ({data.coord?.lat}, {data.coord?.lon})</p>
                </div>
            )}
        </div>

    )
}

export default WeatherApp