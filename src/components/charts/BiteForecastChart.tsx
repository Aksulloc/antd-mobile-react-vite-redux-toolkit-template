import * as echarts from 'echarts/core';
import { useEffect } from 'react';

function BiteForecastChart() {
    // prettier-ignore
    const hours = [
    ];

    // 添加数据
    // for (let index = 0; index < 3; index++) {
    for (let i = 0; i < 24 * 3; i++) {
        hours.push(i);
    }
    // }

    const singleAxis: any = [];
    const series: any = [];

    singleAxis.push({
        type: 'category',
        data: hours,
        height: 100 / 7 - 10 + '%',
        axisLabel: {
            // formatter: '{HH}',
        },
    });
    series.push({
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
    });

    const option = {
        title: {
            text: '合格分包商数量', //主标题文本
            subtext: '副标题文本', //副标题文本

            textStyle: {
                // 主标题样式
                fontSize: 14,
                color: '#fff',
            },
            subtextStyle: {
                // 副标题样式
                fontFamily: '微软雅黑',
                fontSize: 16,
                color: '#6c7a89',
            },
        },
        singleAxis: singleAxis,
        series: series,
        dataZoom: [
            {
                show: false,
                type: 'inside',
                filterMode: 'none',
                startValue: 0,
                endValue: 12,
            },
        ],
        graphic: [
            {
                // 一个图形元素，类型是 image。
                type: 'text',
                id: '4',
                style: {
                    text: 'This text',
                    x: 100,
                    y: 100,
                },
            },
        ],
    };

    useEffect(() => {
        const chartDom = document.getElementById('mainBait')!;
        const myChart = echarts.init(chartDom);
        option && myChart.setOption(option);
        myChart.on('dataZoom', function () {
            // series name 为 'uuu' 的系列中的图形元素被 'mouseover' 时，此方法被回调。
            console.log('Zoom');
        });
    });

    return (
        <>
            <div
                id="mainBait"
                style={{ display: 'flex', width: '100%', height: '30vh' }}
                className="mainc"
            ></div>
        </>
    );
}

export default BiteForecastChart;
