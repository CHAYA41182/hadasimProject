import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphActiveCases = ({ data }) => {
    const categories = data.map(item => item.date); 
    const seriesData = data.map(item => item.activeCases); 
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Active Cases by Day',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: categories,
        }
    };

    const series = [{
        name: "Active Cases",
        data: seriesData
    }];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
}

export default GraphActiveCases;