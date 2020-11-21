import React from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import covidData from '../../owid-covid-data.json';

const Home = () => {
    const dataLineChart = covidData.ESP.data
        .filter(
            (day) => new Date(day.date) < new Date() && new Date(day.date) > new Date('2020-10-1'),
        )
        .map((day) => {
            const newCases = day.new_cases;
            const dayName = day.date;
            return {
                dayName,
                newCases,
            };
        });

    const dataBarChart = Object.keys(covidData)
        .filter(
            (country) =>
                covidData[country].continent === 'Europe' &&
                covidData[country].aged_65_older !== undefined,
        )
        .map((country) => {
            const aged65Older = covidData[country].aged_65_older;
            const { location } = covidData[country];
            return {
                name: location,
                aged65Older,
            };
        });
    return (
        <div>
            <h1>New cases in Spain</h1>
            <LineChart
                width={1350}
                height={300}
                data={dataLineChart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dayName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="newCases" stroke="#82ca9d" />
            </LineChart>
            <h1>% people older than 65 in Europe</h1>
            <BarChart
                width={1350}
                height={300}
                data={dataBarChart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="aged65Older" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Home;
