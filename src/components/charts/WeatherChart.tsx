import svgStr from '@/assets/icons/qwether/301.svg';
// import * as echarts from 'echarts';
import { useEffect } from 'react';

import * as echarts from 'echarts/core';
import { LineChart, BarChart, ScatterChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import {
    GraphicComponent,
    SingleAxisComponent,
    DataZoomComponent,
    TitleComponent,
    GridComponent,
} from 'echarts/components';
echarts.use([
    TitleComponent,
    GridComponent,
    LineChart,
    BarChart,
    CanvasRenderer,
    UniversalTransition,
    GraphicComponent,
    SingleAxisComponent,
    DataZoomComponent,
    ScatterChart,
]);

function WeatherChart() {
    const imgStr = 'image://' + new URL(svgStr, import.meta.url).href;

    const weatherOption = {
        xAxis: [
            {
                type: 'category',
                offset: 25,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                },
            },
            {
                type: 'category',
                offset: 25,
                data: [
                    '4pm',
                    '5pm',
                    '6pm',
                    '7pm',
                    '8pm',
                    '9pm',
                    '10pm',
                    '11pm',
                ],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                position: 'left',
                alignTicks: true,
                axisLabel: {
                    formatter: '{value}°',
                },
            },
            {
                type: 'value',
                position: 'right',
                alignTicks: true,
            },
        ],
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                smooth: true,
                symbolOffset: [0, -20],
                symbolSize: 20,
                symbol: imgStr,
                lineStyle: {
                    normal: {
                        color: 'red',
                    },
                },
            },
            {
                data: [12, 20, 15, 8, 7, 11, 13],
                type: 'bar',
                barWidth: '20%',
                itemStyle: {
                    color: '#00aadf',
                },
            },
        ],
    };

    const airOption = {
        title: {
            text: 'Air pressure',
            left: 'auto',
            top: 'auto',
            textStyle: {
                fontSize: 16,
            },
        },
        grid: {
            width: '80%',
            height: '80%',
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                boundaryGap: false,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                position: 'left',
                alignTicks: true,
                axisLabel: {
                    formatter: '{value}',
                },
            },
        ],
        series: [
            {
                data: [170, 200, 150, 180, 170, 160, 156],
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted', //'dotted'虚线 'solid'实线
                        },
                    },
                },
            },
        ],
    };

    const phaseOption = {
        title: {
            text: 'Sun and moon phase',
            left: 'auto',
            top: 'auto',
            textStyle: {
                fontSize: 16,
            },
        },
        grid: {
            width: '80%',
            height: '80%',
            containLabel: false,
        },
        xAxis: [
            {
                type: 'time',
                boundaryGap: false, // false横坐标两边不需要留白
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                position: 'left',
                show: false,
                alignTicks: false,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            {
                type: 'value',
                position: 'left',
                show: false,
                alignTicks: false,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [
            {
                data: [
                    ['2020-10-1', -1],
                    ['2020-10-2', 3],
                    ['2020-10-3', 2],
                    ['2020-10-4', 3],
                    ['2020-10-5', 5],
                    ['2020-10-9', 3],
                    ['2020-10-10', 2],
                    ['2020-10-11', 3],
                    ['2020-10-12', 4],
                    ['2020-10-13', 3],
                ],
                type: 'line',
                smooth: true,
                symbol: 'none',
            },
            {
                data: [
                    ['2020-10-1', -2],
                    ['2020-10-2', 0],
                    ['2020-10-3', 2],
                    ['2020-10-4', 3],
                    ['2020-10-5', 2],
                    ['2020-10-9', 3],
                    ['2020-10-10', 2],
                    ['2020-10-11', 3],
                    ['2020-10-12', 1],
                    ['2020-10-13', 0],
                ],
                type: 'line',
                smooth: true,
                symbol: 'none',
            },
        ],
    };

    const tidesOption = {
        title: {
            text: 'Tides',
            left: 'auto',
            top: 'auto',
            textStyle: {
                fontSize: 16,
            },
        },
        grid: {
            width: '80%',
            height: '80%',
            containLabel: false,
        },
        tooltip: {
            // tooltip 用于控制鼠标滑过或点击时的提示框（下一章展开讲）
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器配置项。
                type: 'line', // 'line' 直线指示器  'shadow' 阴影指示器  'none' 无指示器  'cross' 十字准星指示器。
                axis: 'auto', // 指示器的坐标轴。
                snap: true, // 坐标轴指示器是否自动吸附到点上
            },
            showContent: true,
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                boundaryGap: false,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                position: 'left',
                show: false,
                alignTicks: false,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                smooth: true,
                symbolOffset: [0, -20],
                symbolSize: 20,
                symbol: 'none',
                areaStyle: {},
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'solid', //'dotted'虚线 'solid'实线
                        },
                    },
                },
            },
        ],
    };

    useEffect(() => {
        const weatherChart = echarts.init(
            document.getElementById('weatherChart')
        );
        weatherChart.setOption(weatherOption);

        const airChart = echarts.init(document.getElementById('mainAir'));
        airChart.setOption(airOption);

        const sunMoonChart = echarts.init(
            document.getElementById('sunMoonChart')
        );
        sunMoonChart.setOption(phaseOption);

        const tidesChart = echarts.init(document.getElementById('tidesChart'));
        tidesChart.setOption(tidesOption);
    });

    return (
        <>
            <div
                id="weatherChart"
                style={{ display: 'flex', width: '100%', height: '30vh' }}
                className="mainc"
            ></div>

            <div
                id="mainAir"
                style={{ display: 'flex', width: '100%', height: '30vh' }}
                className="mainc"
            ></div>

            <div
                id="sunMoonChart"
                style={{ display: 'flex', width: '100%', height: '30vh' }}
                className="mainc"
            ></div>

            <div
                id="tidesChart"
                style={{ display: 'flex', width: '100%', height: '30vh' }}
                className="mainc"
            ></div>
        </>
    );
}

export default WeatherChart;
