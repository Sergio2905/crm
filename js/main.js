var graphType = ["грн.", "грн.", "грн."];
var graphSeries = [
    [2484, 548, 2774, 104, 85],
    [2484, 8954, 744, 84, 965],
    [1458, 258, 17, 88, 17, 331, 0, 548, 10],
];
var newGraphSeries = [
    [484, 48, 774, 54, 25],
    [484, 954, 444, 84, 265],
    [558, 358, 170, 100, 13, 231, 50, 248, 100],
];

var bigGraph = [
    [1758, 658, 170, 880, 170, 431, 300, 148, 180],
    [458, 758, 470, 300, 132, 331, 500, 748, 400],
];

// Диаграммы карточек
// Карточка 1
var cartOptions1 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#83C5BD'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart1 = new ApexCharts(document.querySelector("#card-chart1"), cartOptions1);
cartChart1.render();

// Карточка 2
var cartOptions2 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#83C5BD'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart2 = new ApexCharts(document.querySelector("#card-chart2"), cartOptions2);
cartChart2.render();

// Карточка 3
var cartOptions3 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#83C5BD'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart3 = new ApexCharts(document.querySelector("#card-chart3"), cartOptions3);
cartChart3.render();

// Карточка 4
var cartOptions4 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#83C5BD'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart4 = new ApexCharts(document.querySelector("#card-chart4"), cartOptions4);
cartChart4.render();


// Карточка 5
var cartOptions5 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#818C88'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart5 = new ApexCharts(document.querySelector("#card-chart5"), cartOptions5);
cartChart5.render();


// Карточка 6
var cartOptions6 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#818C88'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart6 = new ApexCharts(document.querySelector("#card-chart6"), cartOptions6);
cartChart6.render();


// Карточка 7
var cartOptions7 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#818C88'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart7 = new ApexCharts(document.querySelector("#card-chart7"), cartOptions7);
cartChart7.render();


// Карточка 8
var cartOptions8 = {
    chart: {
        type: 'bar',
        height: 130,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 9,
            columnWidth: '60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: '1',
                y: [0, 5],
            },
            {
                x: '2',
                y: [0, 4],
            },
            {
                x: '3',
                y: [0, 2],
            },
            {
                x: '4',
                y: [0, 3],
            },
            {
                x: '5',
                y: [0, 4],
            },
        ],
    }],
    fill: {
        colors: ['#818C88'],
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
}
var cartChart8 = new ApexCharts(document.querySelector("#card-chart8"), cartOptions8);
cartChart8.render();

// Линейный график 1
var lineChartOptions1 = {
    series: [
        {
            name: 'Сумма заказов по дням',
            data: [4000, 3000, 10000, 22000, 29000, 19000, 22000, 40000, 45000, 7000, 19000, 28000],
        },
        {
            name: 'Сумма завершенных заказов',
            data: [3000, 12000, 4000, 5000, 50000, 22000, 13000, 35000, 11000, 22000, 19000, 48000],
        },
        {
            name: 'Чистая прибыль',
            data: [6000, 18000, 5000, 7000, 40000, 26000, 10000, 33000, 15000, 26000, 13000, 44000],
        },
        {
            name: 'Прибыль по завершенным заказам',
            data: [10000, 23000, 20000, 40000, 45000, 35000, 32000, 37000, 25000, 28000, 29000, 59000],
        },
    ],
    chart: {
        height: 580,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 4,
        curve: 'smooth',
        colors: ['#FDC300', '#64B6AC', '#EB6767', '#143127'],
    },
    xaxis: {
        type: 'category',
        categories: [
            '02.02.2022',
            '04.02.2022',
            '06.02.2022',
            '08.02.2022',
            '11.02.2022',
            '14.02.2022',
            '15.02.2022',
            '17.02.2022',
            '19.02.2022',
            '22.02.2022',
            '25.02.2022',
            '27.02.2022'],
        tickAmount: 10,
        labels: {
            style: {
                colors: ['#626F6A'],
                fontSize: '18px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            },
            offsetX: 5,
            offsetY: 7,
        }
    },
    fill: {
        type: 'solid',
    },
    yaxis: {
        min: 0,
        max: 70000,
        tickAmount: 7,
        labels: {
            style: {
                colors: ['#626F6A'],
                fontSize: '18px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            },
            align: 'left',
        },
    },
    legend: {
        position: 'top',
        markers: {
            width: 40,
            height: 5,
            fillColors: ['#FDC300', '#64B6AC', '#EB6767', '#143127'],
            offsetX: -13,
        },
        fontSize: '18px',
        fontFamily: 'FuturaNew, sans-serif',
        fontWeight: 400,
        itemMargin: {
            horizontal: 24,
        },
    },
    tooltip: {
        followCursor: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data = w.globals.initialSeries[seriesIndex].name;
            var date = w.globals.lastXAxis.categories[dataPointIndex];
            return '<div class="charts-tooltip">' +
                '<span class="charts-tooltip__name">' + data + '</span>' +
                '<span class="charts-tooltip__value">' + w.globals.series[seriesIndex][dataPointIndex] + '</span>' +
                '<span class="charts-tooltip__date">' + date + '</span>' +
                '</div>'
        },
    },
    grid: {
        strokeDashArray: 20,
    },
    markers: {
        colors: ['#FDC300', '#64B6AC', '#EB6767', '#143127'],
        strokeWidth: 5,
        hover: {
            size: 7,
        }
    },
    responsive: [
        {
            breakpoint: 1366,
            options: {
                xaxis: {
                    tickAmount: 4,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                xaxis: {
                    tickAmount: 2,
                    labels: {
                        style: {
                            fontSize: '14px',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '14px',
                        },
                    }
                },
            },
        },
    ],
};
var lineChart1 = new ApexCharts(document.querySelector("#line-chart1"), lineChartOptions1);
lineChart1.render();

// Линейный график 2
var lineChartOptions2 = {
    series: [
        {
            name: 'Кол-во заказов',
            data: [4000, 3000, 10000, 22000, 29000, 19000, 22000, 40000, 45000, 7000, 19000, 28000],
        },
        {
            name: 'Кол-во продаж',
            data: [3000, 12000, 4000, 5000, 50000, 22000, 13000, 35000, 11000, 22000, 19000, 48000],
        },
    ],
    chart: {
        height: 580,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 4,
        curve: 'smooth',
        colors: ['#FDC300', '#64B6AC'],
    },
    xaxis: {
        type: 'category',
        categories: [
            '02.02.2022',
            '04.02.2022',
            '06.02.2022',
            '08.02.2022',
            '11.02.2022',
            '14.02.2022',
            '15.02.2022',
            '17.02.2022',
            '19.02.2022',
            '22.02.2022',
            '25.02.2022',
            '27.02.2022'],
        tickAmount: 10,
        labels: {
            style: {
                colors: ['#626F6A'],
                fontSize: '18px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            },
            offsetX: 5,
            offsetY: 7,
        }
    },
    fill: {
        type: 'solid',
    },
    yaxis: {
        min: 0,
        max: 70000,
        tickAmount: 7,
        labels: {
            style: {
                colors: ['#626F6A'],
                fontSize: '18px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            },
            align: 'left',
        },
    },
    legend: {
        position: 'top',
        markers: {
            width: 40,
            height: 5,
            fillColors: ['#FDC300', '#64B6AC'],
            offsetX: -13,
        },
        fontSize: '18px',
        fontFamily: 'FuturaNew, sans-serif',
        fontWeight: 400,
        itemMargin: {
            horizontal: 24,
        },
    },
    tooltip: {
        followCursor: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data = w.globals.initialSeries[seriesIndex].name;
            var date = w.globals.lastXAxis.categories[dataPointIndex];
            return '<div class="charts-tooltip">' +
                '<span class="charts-tooltip__name">' + data + '</span>' +
                '<span class="charts-tooltip__value">' + w.globals.series[seriesIndex][dataPointIndex] + '</span>' +
                '<span class="charts-tooltip__date">' + date + '</span>' +
                '</div>'
        },
    },
    grid: {
        strokeDashArray: 20,
    },
    markers: {
        colors: ['#FDC300', '#64B6AC'],
        strokeWidth: 5,
        hover: {
            size: 7,
        }
    },
    responsive: [
        {
            breakpoint: 1366,
            options: {
                xaxis: {
                    tickAmount: 4,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                xaxis: {
                    tickAmount: 2,
                    labels: {
                        style: {
                            fontSize: '14px',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '14px',
                        },
                    }
                },
            },
        },
    ],
};
var lineChart2 = new ApexCharts(document.querySelector("#line-chart2"), lineChartOptions2);
lineChart2.render();

// Круговая диаграмма 1
var pieOptions1 = {
    series: graphSeries[0],
    labels: [
        'Наложенный',
        'На карту',
        'Онлайн',
        'На счет',
        'Наличными',
    ],
    chart: {
        width: '100%',
        height: '80%',
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            donut: {
                size: '55%'
            },
            customScale: 1,
            offsetX: 0,
            offsetY: 10,
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'solid',
        colors: [
            '#64B6AC',
            '#FDC300',
            '#9870CC',
            '#EB6767',
            '#92DD47',
        ],
    },
    legend: {
        position: 'left',
        width: '360',
        height: '250',
        horizontalAlign: 'left',
        itemMargin: {
            horizontal: 0,
            vertical: 7,
        },
        markers: {
            fillColors: [
                '#64B6AC',
                '#FDC300',
                '#9870CC',
                '#EB6767',
                '#92DD47',
            ]
        },
        formatter: function (val, opts) {
            let seriesCount = opts.w.globals.series;
            let sum = 0;
            let value = opts.w.globals.series[opts.seriesIndex];
            for (let index = 0; index < seriesCount.length; index++) {
                const el = seriesCount[index];
                sum += el;
            }
            let percentage = Math.round((value * 100 / sum) * 10) / 10;
            let output = '<div class="chart-legend">';
            output += '<span class="chart-legend__name">' + val + ' </span>';
            output += '<span class="chart-legend__value">' + value + ' ' + graphType[0] + '</span>';
            output += '<span class="chart-legend__percentage">' + percentage + ' %</span>';
            output += '</div>';
            return output;
        }
    },
    tooltip: {
        followCursor: true,
        fillSeriesColor: false,
        marker: {
            show: false,
        },
        style: {
            fontSize: '16px',
            fontFamily: 'FuturaNew, sans-serif',
        },
    },
    responsive: [
        {
            breakpoint: 1680,
            options: {
                legend: {
                    position: 'top',
                    width: '100%',
                    offsetY: 20,
                },
                chart: {
                    height: '95%',
                },
            }
        },
        {
            breakpoint: 993,
            options: {
                legend: {
                    position: 'left',
                    width: '360',
                },
                chart: {
                    height: '80%',
                },
            }
        },
        {
            breakpoint: 768,
            options: {
                legend: {
                    position: 'top',
                    width: '100%',
                    offsetY: 20,
                },
                chart: {
                    height: '95%',
                },
            }
        },
    ]
};
var pieChart1 = new ApexCharts(document.querySelector("#pie-chart1"), pieOptions1);
pieChart1.render();

// Круговая диаграмма 2
var pieOptions2 = {
    series: graphSeries[1],
    labels: [
        'Новая почта',
        'Justin',
        'УкрПочта',
        'Самовывоз',
        'Курьер',
    ],
    chart: {
        width: '100%',
        height: '80%',
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            donut: {
                size: '55%'
            },
            customScale: 1,
            offsetX: 0,
            offsetY: 10,
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'solid',
        colors: [
            '#EB6767',
            '#0093FD',
            '#FDC300',
            '#626F6A',
            '#64B6AC',
        ],
    },
    legend: {
        position: 'left',
        width: '360',
        height: '250',
        horizontalAlign: 'left',
        itemMargin: {
            horizontal: 0,
            vertical: 7,
        },
        markers: {
            fillColors: [
                '#EB6767',
                '#0093FD',
                '#FDC300',
                '#626F6A',
                '#64B6AC',
            ]
        },
        formatter: function (val, opts) {
            let seriesCount = opts.w.globals.series;
            let sum = 0;
            let value = opts.w.globals.series[opts.seriesIndex];
            for (let index = 0; index < seriesCount.length; index++) {
                const el = seriesCount[index];
                sum += el;
            }
            let percentage = Math.round((value * 100 / sum) * 10) / 10;
            let output = '<div class="chart-legend">';
            output += '<span class="chart-legend__name">' + val + ' </span>';
            output += '<span class="chart-legend__value">' + value + ' ' + graphType[1] + '</span>';
            output += '<span class="chart-legend__percentage">' + percentage + ' %</span>';
            output += '</div>';
            return output;
        }
    },
    tooltip: {
        followCursor: true,
        fillSeriesColor: false,
        marker: {
            show: false,
        },
        style: {
            fontSize: '16px',
            fontFamily: 'FuturaNew, sans-serif',
        },
    },
    responsive: [
        {
            breakpoint: 1680,
            options: {
                legend: {
                    position: 'top',
                    width: '100%',
                    offsetY: 20,
                },
                chart: {
                    height: '95%',
                },
            }
        },
        {
            breakpoint: 993,
            options: {
                legend: {
                    position: 'left',
                    width: '360',
                },
                chart: {
                    height: '80%',
                },
            }
        },
        {
            breakpoint: 768,
            options: {
                legend: {
                    position: 'top',
                    width: '100%',
                    offsetY: 20,
                },
                chart: {
                    height: '95%',
                },
            }
        },
    ]
};
var pieChart2 = new ApexCharts(document.querySelector("#pie-chart2"), pieOptions2);
pieChart2.render();

// Круговая диаграмма 3
var pieOptions3 = {
    series: graphSeries[2],
    labels: [
        'Сайт',
        'Телефон',
        'JS',
        'Rozetka',
        'Epicentr',
        'OLX',
        'Prom',
        'IZI',
        'Instagram',
    ],
    chart: {
        width: '100%',
        height: '80%',
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            donut: {
                size: '55%'
            },
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'solid',
        colors: [
            '#64B6AC',
            '#626F6A',
            '#EB6767',
            '#92DD47',
            '#0093FD',
            '#67EBC3',
            '#9870CC',
            '#EBAE67',
            '#E04E7A',
        ],
    },
    legend: {
        position: 'left',
        width: '360',
        horizontalAlign: 'left',
        itemMargin: {
            horizontal: 0,
            vertical: 7,
        },
        markers: {
            fillColors: [
                '#64B6AC',
                '#626F6A',
                '#EB6767',
                '#92DD47',
                '#0093FD',
                '#67EBC3',
                '#9870CC',
                '#EBAE67',
                '#E04E7A',
            ]
        },
        formatter: function (val, opts) {
            let seriesCount = opts.w.globals.series;
            let sum = 0;
            let value = opts.w.globals.series[opts.seriesIndex];
            for (let index = 0; index < seriesCount.length; index++) {
                const el = seriesCount[index];
                sum += el;
            }
            let percentage = Math.round((value * 100 / sum) * 10) / 10;
            let output = '<div class="chart-legend">';
            output += '<span class="chart-legend__name">' + val + ' </span>';
            output += '<span class="chart-legend__value">' + value + ' ' + graphType[2] + '</span>';
            output += '<span class="chart-legend__percentage">' + percentage + ' %</span>';
            output += '</div>';
            return output;
        }
    },
    tooltip: {
        followCursor: true,
        fillSeriesColor: false,
        marker: {
            show: false,
        },
        style: {
            fontSize: '16px',
            fontFamily: 'FuturaNew, sans-serif',
        },
    },
    responsive: [
        {
            breakpoint: 1440,
            options: {
                legend: {
                    position: 'top',
                    width: '100%',
                },
                chart: {
                    height: '95%',
                },
            }
        },
        {
            breakpoint: 993,
            options: {
                legend: {
                    position: 'left',
                    width: '360',
                },
                chart: {
                    height: '80%',
                },
            }
        },
        {
            breakpoint: 768,
            options: {
                legend: {
                    position: 'top',
                    width: '100%',
                    height: '370',
                },
                chart: {
                    height: '95%',
                },
            }
        },
    ]
};
var pieChart3 = new ApexCharts(document.querySelector("#pie-chart3"), pieOptions3);
pieChart3.render();


// Диаграмма категорий
var catOptions = {
    chart: {
        type: 'bar',
        height: 692,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            horizontal: true,
            barHeight: 45,
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: 'Электронные компоненты',
                y: [0, 190000],
                fillColor: "#143127",
            },
            {
                x: 'Гирлянды',
                y: [0, 165000],
                fillColor: "#64B6AC",
            },
            {
                x: 'Штаны',
                y: [0, 155000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Посуда',
                y: [0, 115000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Круассаны',
                y: [0, 110000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Столы',
                y: [0, 100000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Стиральный порошок',
                y: [0, 95000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Линзы',
                y: [0, 95000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Кофемашины',
                y: [0, 90000],
                fillColor: "#143127",
            },
            {
                x: 'Освежители воздуха',
                y: [0, 85000],
                fillColor: "#64B6AC",
            },
            {
                x: 'Постеры “Сумерки',
                y: [0, 75000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Шины и диски',
                y: [0, 70000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Матрасы',
                y: [0, 65000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Болгарки',
                y: [0, 63000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Средства связи',
                y: [0, 60000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Чайный сервиз',
                y: [0, 55000],
                fillColor: "#143127",
            },
            {
                x: 'Ноутбуки',
                y: [0, 52000],
                fillColor: "#64B6AC",
            },
            {
                x: 'Стаканы',
                y: [0, 45000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Картины',
                y: [0, 38000],
                fillColor: "#BDDEDA",
            },
            {
                x: 'Пуховики',
                y: [0, 18000],
                fillColor: "#BDDEDA",
            },
        ],
    }],
    xaxis: {
        min: 0,
        max: 240000,
        tickAmount: 12,
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
                colors: ['#626F6A'],
                fontSize: '16px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            },
            offsetY: 7,
        }
    },
    grid: {
        show: true,
        borderColor: '#90A4AE',
        xaxis: {
            lines: {
                show: true
            },
        },
        yaxis: {
            lines: {
                show: false
            },
        },
    },
    tooltip: {
        followCursor: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return '<div class="charts-tooltip">' +
                '<span class="charts-tooltip__name">' + w.globals.labels[dataPointIndex] + '</span>' +
                '<span class="charts-tooltip__value">' + series[seriesIndex][dataPointIndex] + '</span>' +
                '</div>'
        },
    },
    yaxis: {
        labels: {
            maxWidth: 250,
            style: {
                colors: [
                    '#143127',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#143127',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#143127',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                    '#626F6A',
                ],
                fontSize: '18px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            }
        }
    },
}
var catChart = new ApexCharts(document.querySelector("#cat-chart"), catOptions);
catChart.render();

// Диаграмма товаров
var prodOptions = {
    chart: {
        type: 'bar',
        height: 692,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            horizontal: true,
            barHeight: 45,
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Categories',
        data: [
            {
                x: 'Электронные компоненты',
                y: [0, 190000],
            },
            {
                x: 'Гирлянды',
                y: [0, 165000],
            },
            {
                x: 'Штаны',
                y: [0, 155000],
            },
            {
                x: 'Посуда',
                y: [0, 115000],
            },
            {
                x: 'Круассаны',
                y: [0, 110000],
            },
            {
                x: 'Столы',
                y: [0, 100000],
            },
            {
                x: 'Стиральный порошок',
                y: [0, 95000],
            },
            {
                x: 'Линзы',
                y: [0, 95000],
            },
            {
                x: 'Кофемашины',
                y: [0, 90000],
            },
            {
                x: 'Освежители воздуха',
                y: [0, 85000],
            },
            {
                x: 'Постеры “Сумерки',
                y: [0, 75000],
            },
            {
                x: 'Шины и диски',
                y: [0, 70000],
            },
            {
                x: 'Матрасы',
                y: [0, 65000],
            },
            {
                x: 'Болгарки',
                y: [0, 63000],
            },
            {
                x: 'Средства связи',
                y: [0, 60000],
            },
            {
                x: 'Чайный сервиз',
                y: [0, 55000],
            },
            {
                x: 'Ноутбуки',
                y: [0, 52000],
            },
            {
                x: 'Стаканы',
                y: [0, 45000],
            },
            {
                x: 'Картины',
                y: [0, 38000],
            },
            {
                x: 'Пуховики',
                y: [0, 18000],
            },
        ],
    }],
    fill: {
        colors: ['#64B6AC'],
    },
    xaxis: {
        min: 0,
        max: 240000,
        tickAmount: 12,
        labels: {
            style: {
                colors: ['#626F6A'],
                fontSize: '16px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            },
            offsetY: 7,
        },
        axisBorder: {
            show: false,
        },
    },
    grid: {
        show: true,
        borderColor: '#90A4AE',
        xaxis: {
            lines: {
                show: true
            },
        },
        yaxis: {
            lines: {
                show: false
            },
        },
    },
    tooltip: {
        followCursor: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return '<div class="charts-tooltip">' +
                '<span class="charts-tooltip__name">' + w.globals.labels[dataPointIndex] + '</span>' +
                '<span class="charts-tooltip__value">' + series[seriesIndex][dataPointIndex] + '</span>' +
                '</div>'
        },
    },
    yaxis: {
        labels: {
            maxWidth: 250,
            style: {
                colors: ['#626F6A'],
                fontSize: '18px',
                fontFamily: 'FuturaNew, sans-serif',
                fontWeight: 400,
            }
        }
    },
}
var prodChart = new ApexCharts(document.querySelector("#prod-chart"), prodOptions);
prodChart.render();


function initUI() {
    select();
    modal();
    switchers();
    autorefresh();
    uncover();
    pagination();
    analyticsMenu();
    chartSelect();
    datePicker();
    showImage('.table__product-photo');
    showImage('.comparison-table__photo');
    sidebarMinimize();
    addToCompare()
}

initUI();

// Select
function select() {
    let selects = document.querySelectorAll('.select');

    let selectScript = function (select) {
        select.forEach((item) => {
            const selectCurrent = item.querySelector(".select__current");
            item.addEventListener("click", (event) => {
                const el = event.target.dataset.choice;
                const id = event.target.dataset.id;
                const text = event.target.innerText;
                if (el === "choosen" && selectCurrent.innerHTML !== text) {
                    selectCurrent.innerText = text;
                    const inputHidden = selectCurrent.previousElementSibling;
                    if (inputHidden) {
                        inputHidden.value = id;
                    }
                }
                item.classList.toggle("is-active");
            });
            document.addEventListener("click", function (event) {
                if (!item.contains(event.target)) {
                    item.classList.remove("is-active");
                }
            });
        });
    }

    selectScript(selects);

    window.addEventListener("DOMContentLoaded", () => {
    });

    window.addEventListener("resize", () => {

    });
}

// modals
function modal() {
    class Modal {
        constructor(options) {
            let defaultOptions = {
                onOpen: () => { },
                onClose: () => { },
            };
            this.options = Object.assign(defaultOptions, options);
            this.modal = document.querySelector('.modal');
            this.speed = false;
            this.animation = false;
            this.isOpen = false;
            this.modalContainer = false;
            this.previousActiveElement = false;
            this.fixBlocks = document.querySelectorAll('.fix-block');
            this.focusElements = [
                'a[href]',
                'input',
                'button',
                'select',
                'textarea',
                '[tabindex]'
            ];
            this.events();
        }

        events() {
            if (this.modal) {
                document.addEventListener('click', function (e) {
                    const clickedElement = e.target.closest('[data-path]');
                    if (clickedElement) {
                        if (this.isOpen) {
                            this.close();
                        }

                        let target = clickedElement.dataset.path;
                        let animation = clickedElement.dataset.animation;
                        let speed = clickedElement.dataset.speed;
                        this.animation = animation ? animation : 'fade';
                        this.speed = speed ? parseInt(speed) : 300;
                        this.modalContainer = document.querySelector(`[data-target="${target}"]`);
                        this.open();
                        return;
                    }

                    if (e.target.closest('.modal-close')) {
                        this.close();
                        return;
                    }
                }.bind(this));

                window.addEventListener('keydown', function (e) {
                    if (e.keyCode == 27) {
                        if (this.isOpen) {
                            this.close();
                        }
                    }
                }.bind(this));

                this.modal.addEventListener('click', function (e) {
                    if (!e.target.classList.contains('.modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
                        this.close();
                    }
                }.bind(this));
            }
        }

        open() {
            this.previousActiveElement = document.activeElement;

            this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
            this.modal.classList.add('is-open');
            this.disableScroll();

            this.modalContainer.classList.add('modal-open');
            this.modalContainer.classList.add(this.animation);

            setTimeout(() => {
                this.modalContainer.classList.add('animate-open');
                this.options.onOpen(this);
                this.isOpen = true;
            }, this.speed);
        }

        close() {
            if (this.modalContainer) {
                this.modalContainer.classList.remove('animate-open');
                this.modalContainer.classList.remove(this.animation);
                this.modal.classList.remove('is-open');
                this.modalContainer.classList.remove('modal-open');

                this.enableScroll();
                this.options.onClose(this);
                this.isOpen = false;
            }
        }

        focusCatch(e) {
            const focusable = this.modalContainer.querySelectorAll(this.focusElements);
            const focusArray = Array.prototype.slice.call(focusable);
            const focusedIndex = focusArray.indexOf(document.activeElement);

            if (e.shiftKey && focusedIndex === 0) {
                focusArray[focusArray.length - 1].focus();
                e.preventDefault();
            }

            if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                focusArray[0].focus();
                e.preventDefault();
            }
        }

        focusTrap() {
            const focusable = this.modalContainer.querySelectorAll(this.focusElements);
            if (this.isOpen) {
                focusable[0].focus();
            } else {
            }
        }

        disableScroll() {
            let pagePosition = window.scrollY;
            this.lockPadding();
            document.body.classList.add('disable-scroll');
            document.body.dataset.position = pagePosition;
            document.body.style.top = -pagePosition + 'px';
        }

        enableScroll() {
            let pagePosition = parseInt(document.body.dataset.position, 10);
            this.unlockPadding();
            document.body.style.top = 'auto';
            document.body.classList.remove('disable-scroll');
            window.scroll({ top: pagePosition, left: 0 });
            document.body.removeAttribute('data-position');
        }

        lockPadding() {
            let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
            this.fixBlocks.forEach((el) => {
                el.style.paddingRight = paddingOffset;
            });
            document.body.style.paddingRight = paddingOffset;
        }

        unlockPadding() {
            this.fixBlocks.forEach((el) => {
                el.style.paddingRight = '0px';
            });
            document.body.style.paddingRight = '0px';
        }
    }

    const modal = new Modal({
        onOpen: (modal) => {

        },
        onClose: () => {

        },
    });
}

function datePicker() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDate = date.getDate();
    let days = new Date(2022, currentMonth + 1, 0).getDate();
    const monthes = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];


    const datePickers = document.querySelectorAll('.date-analytics');
    if (datePickers.length > 0) {
        for (let index = 0; index < datePickers.length; index++) {
            const datePicker = datePickers[index];
            const startBlock = datePicker.querySelector('.date-analytics__start');
            const startDay = startBlock.querySelector('.date-picker__date');
            const startMonth = startBlock.querySelector('.date-picker__month');
            const startYear = startBlock.querySelector('.date-picker__year');
            const endBlock = datePicker.querySelector('.date-analytics__end');
            const endDay = endBlock.querySelector('.date-picker__date');
            const endMonth = endBlock.querySelector('.date-picker__month');
            const endYear = endBlock.querySelector('.date-picker__year');

            startDay.querySelector('.date-picker__select-current').innerHTML = currentDate;
            startMonth.querySelector('.date-picker__select-current').innerHTML = monthes[currentMonth];
            startYear.querySelector('.date-picker__select-current').innerHTML = currentYear;
            endDay.querySelector('.date-picker__select-current').innerHTML = currentDate;
            endMonth.querySelector('.date-picker__select-current').innerHTML = monthes[currentMonth];
            endYear.querySelector('.date-picker__select-current').innerHTML = currentYear;

            // Показать форму выбора
            const dateBtn = datePicker.querySelector('.date-analytics__btn');
            dateBtn.addEventListener('click', () => {
                dateBtn.closest('.date-analytics').classList.toggle('active');
            });

            // Переключение периодов
            const datePeriodOptions = datePicker.querySelectorAll('.date-analytics__option');
            if (datePeriodOptions) {
                datePeriodOptions.forEach((el) => {
                    el.addEventListener('click', () => {
                        if (!el.classList.contains('active')) {
                            datePeriodOptions.forEach((el) => {
                                el.classList.remove('active');
                            });
                            el.classList.add('active');
                        }
                    });
                });
            }

            // Заполняем Даты
            function fillDate(days, point) {
                for (let index = 1; index <= days; index++) {
                    const newFromDay = document.createElement('li');
                    newFromDay.classList.add('date-picker__select-item');
                    newFromDay.classList.add('select-item');
                    newFromDay.setAttribute('data-choice', 'choosen');
                    newFromDay.setAttribute('data-id', index);
                    if (index < 10) {
                        newFromDay.innerHTML = '0' + index;
                    } else {
                        newFromDay.innerHTML = index;
                    }
                    const newToDay = newFromDay.cloneNode(true);

                    point.querySelector('.date-picker__select-body').append(newFromDay);
                }
            }
            fillDate(days, startDay);
            fillDate(days, endDay);


            // Заполняем Месяцы
            for (let index = 0; index < monthes.length; index++) {
                const newFromMonth = document.createElement('li');
                newFromMonth.classList.add('date-picker__select-item');
                newFromMonth.classList.add('select-item');
                newFromMonth.setAttribute('data-choice', 'choosen');
                newFromMonth.setAttribute('data-id', index);

                newFromMonth.innerHTML = monthes[index];
                const newToMonth = newFromMonth.cloneNode(true);

                startMonth.querySelector('.date-picker__select-body').append(newFromMonth);
                endMonth.querySelector('.date-picker__select-body').append(newToMonth);
            }

            // Заполняем Года
            for (let index = 10; index >= 0; index--) {
                const newFromYear = document.createElement('li');
                newFromYear.classList.add('date-picker__select-item');
                newFromYear.classList.add('select-item');
                newFromYear.setAttribute('data-choice', 'choosen');
                newFromYear.setAttribute('data-id', index);

                newFromYear.innerHTML = currentYear - index;
                const newToYear = newFromYear.cloneNode(true);

                startYear.querySelector('.date-picker__select-body').append(newFromYear);
                endYear.querySelector('.date-picker__select-body').append(newToYear);
            }

            // Проверка правильности даты
            const monthOptions = startMonth.querySelectorAll('.date-picker__select-item');
            if (monthOptions) {
                for (let index = 0; index < monthOptions.length; index++) {
                    const monthOption = monthOptions[index];
                    monthOption.addEventListener('click', () => {
                        let days = new Date(2022, index + 1, 0).getDate();
                        let date = startDay.querySelector('.date-picker__select-current');
                        if (Number(date.innerHTML) > days) {
                            date.innerHTML = days;
                            startDay.querySelector('.date-picker__select-body').innerHTML = null;
                            fillDate(days, startDay);
                        } else {
                            startDay.querySelector('.date-picker__select-body').innerHTML = null;
                            fillDate(days, startDay);
                        }
                    });
                }
            }
            const monthEndOptions = endMonth.querySelectorAll('.date-picker__select-item');
            if (monthEndOptions) {
                for (let index = 0; index < monthEndOptions.length; index++) {
                    const monthEndOption = monthEndOptions[index];
                    monthEndOption.addEventListener('click', () => {
                        let days = new Date(2022, index + 1, 0).getDate();
                        let date = endDay.querySelector('.date-picker__select-current');
                        if (Number(date.innerHTML) > days) {
                            date.innerHTML = days;
                            endDay.querySelector('.date-picker__select-body').innerHTML = null;
                            fillDate(days, endDay);
                        } else {
                            endDay.querySelector('.date-picker__select-body').innerHTML = null;
                            fillDate(days, endDay);
                        }
                    });
                }
            }

            // Применить изменения
            const apply = datePicker.querySelector('.date-analytics__apply');
            const out = datePicker.querySelectorAll('.date-analytics__btn span');
            if (apply) {
                apply.addEventListener('click', () => {
                    let from = '';
                    let to = '';
                    let monthIndex = monthes.indexOf(startMonth.querySelector('.date-picker__select-current').innerHTML) + 1;
                    let toMonthIndex = monthes.indexOf(endMonth.querySelector('.date-picker__select-current').innerHTML) + 1;
                    from += startDay.querySelector('.date-picker__select-current').innerHTML + '.';
                    to += endDay.querySelector('.date-picker__select-current').innerHTML + '.';
                    if (monthIndex < 10) {
                        from += '0' + monthIndex + '.';
                    } else {
                        from += monthIndex + '.';
                    }
                    if (toMonthIndex < 10) {
                        to += '0' + toMonthIndex + '.';
                    } else {
                        to += toMonthIndex + '.';
                    }
                    from += startYear.querySelector('.date-picker__select-current').innerHTML;
                    to += endYear.querySelector('.date-picker__select-current').innerHTML;
                    out[0].innerHTML = from;
                    out[1].innerHTML = to;
                    apply.closest('.date-analytics').classList.remove('active');
                });
            }
        }
    }
}

function analyticsMenu() {
    const analyticsBtn = document.querySelector('.navigation-analytics__btn');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            document.querySelector('.navigation-analytics').classList.toggle('visible');
        });
    }
}

function switchers() {
    const onSwitchers = document.querySelectorAll(".table__product-switcher.on");
    const offSwitchers = document.querySelectorAll(".table__product-switcher.off");
    const extraEl = document.querySelectorAll('.table__resources-extra .table__product-item');

    if (onSwitchers.length > 0) {
        for (let index = 0; index < onSwitchers.length; index++) {
            const onSwitcher = onSwitchers[index];
            const offSwitcher = offSwitchers[index];

            onSwitcher.addEventListener('click', function () {
                const parentEl = onSwitcher.closest('.table__product-item');

                parentEl.classList.toggle('available');
                parentEl.classList.toggle('unavailable');

                if (extraEl.length > 0) {
                    extraEl[index + 1].classList.toggle('available');
                    extraEl[index + 1].classList.toggle('unavailable');
                }
            });

            offSwitcher.addEventListener('click', function () {
                const parentEl = offSwitcher.closest('.table__product-item');

                parentEl.classList.toggle('available');
                parentEl.classList.toggle('unavailable');

                if (extraEl.length > 0) {
                    extraEl[index + 1].classList.toggle('available');
                    extraEl[index + 1].classList.toggle('unavailable');
                }
            });
        }
    }

    const singleSwitchers = document.querySelectorAll(".table__product-switcher-single");

    if (singleSwitchers.length > 0) {
        for (let index = 0; index < singleSwitchers.length; index++) {
            const singleSwitcher = singleSwitchers[index];

            singleSwitcher.addEventListener('click', function () {
                const parentEl = singleSwitcher.closest('.table__product-status');

                parentEl.classList.toggle('available');
                parentEl.classList.toggle('unavailable');
            });
        }
    }

    const showSearchBtns = document.querySelectorAll('.special-table__search-show');
    const closeSearchBtns = document.querySelectorAll('.special-table__search-close');

    if (showSearchBtns.length > 0) {
        for (let index = 0; index < showSearchBtns.length; index++) {
            const showSearchBtn = showSearchBtns[index];

            showSearchBtn.addEventListener('click', () => {
                showSearchBtn.nextElementSibling.classList.toggle('active');
                showSearchBtn.classList.toggle('active');
            });
        }
    }

    if (closeSearchBtns.length > 0) {
        for (let index = 0; index < closeSearchBtns.length; index++) {
            const closeSearchBtn = closeSearchBtns[index];

            closeSearchBtn.addEventListener('click', () => {
                const parentEl = closeSearchBtn.closest('.special-table__search')
                parentEl.classList.toggle('active');
                parentEl.previousElementSibling.classList.toggle('active');
            });
        }
    }

    const filterAutoBtn = document.querySelector('.filter__info-change .filter__checkbox-input');

    if (filterAutoBtn) {
        checkIfActive();

        filterAutoBtn.addEventListener('click', () => {
            checkIfActive();
        });
    }

    function checkIfActive() {
        if (filterAutoBtn.checked == true) {
            filterAutoBtn.closest('.filter__info-change').classList.add('active');
        } else {
            filterAutoBtn.closest('.filter__info-change').classList.remove('active');
        }
    }

    const chartsSortSwitchers = document.querySelectorAll('.charts__sort-switcher');
    var graphName;
    if (chartsSortSwitchers.length > 0) {
        chartsSortSwitchers.forEach((chartsSortSwitcher, index) => {
            chartsSortSwitcher.addEventListener('click', () => {
                chartsSortSwitcher.closest('.charts__sort').classList.toggle('left');
                chartsSortSwitcher.closest('.charts__sort').classList.toggle('right');

                if (chartsSortSwitcher.closest('.charts__sort').classList.contains('right')) {
                    graphType[index] = "шт.";
                    graphName = "pieChart" + (index + 1);
                    eval(graphName).updateOptions({
                        series: newGraphSeries[index],
                    });

                } else {
                    graphType[index] = "грн.";
                    graphName = "pieChart" + (index + 1);
                    eval(graphName).updateOptions({
                        series: graphSeries[index],
                    });
                }
            });
        });
    }

    const graphSources = document.querySelectorAll('.graph-block__sources');
    if (graphSources.length > 0) {
        graphSources.forEach((graphSource) => {
            const graphSourceBtns = graphSource.querySelectorAll('.graph-block__sources-option');
            graphSourceBtns.forEach((graphSourceBtn, index) => {
                graphSourceBtn.addEventListener('click', (e) => {
                    if (!graphSourceBtn.classList.contains('active')) {
                        graphSourceBtns.forEach((el) => {
                            el.classList.remove('active');
                        });
                        e.target.classList.add('active');
                        pieChart3.updateOptions({
                            series: bigGraph[index],
                        });
                    } else {
                        pieChart3.updateOptions({
                            series: bigGraph[index],
                        });
                    }
                });
            });
        });
    }
}

function autorefresh() {
    const refreshBlocks = document.querySelectorAll('.form-modal__autorefresh');

    if (refreshBlocks.length > 0) {
        for (let index = 0; index < refreshBlocks.length; index++) {
            const refreshBlock = refreshBlocks[index];
            const refreshBtn = refreshBlock.querySelector('.filter__checkbox-input');

            modalCheckIfActive();

            refreshBtn.addEventListener('click', function (e) {
                modalCheckIfActive();
            });

            function modalCheckIfActive() {
                if (refreshBtn.checked == true) {
                    refreshBtn.closest('.form-modal__info-block').classList.add('active');
                } else {
                    refreshBtn.closest('.form-modal__info-block').classList.remove('active');
                }
            }
        }
    }
}

function uncover() {
    const coverBtns = document.querySelectorAll('.cover');
    const uncoverBtns = document.querySelectorAll('.uncover');
    const coverSecondBtns = document.querySelectorAll('.cover-second');
    const uncoverSecondBtns = document.querySelectorAll('.uncover-second');
    const warehouses = document.querySelectorAll('.table__warehouse');

    let value = 0;

    if (coverBtns.length > 0) {
        for (let index = 0; index < coverBtns.length; index++) {
            const coverBtn = coverBtns[index];

            coverBtn.addEventListener('click', function () {
                const parentItem = coverBtn.closest('.table__product-item');

                value = index;
                console.log(coverBtns.length);

                if (parentItem.classList.contains('uncovered')) {
                    parentItem.classList.remove('uncovered');

                    const sublist = parentItem.nextElementSibling;
                    if (sublist.classList.contains('visible')) {
                        sublist.classList.remove('visible');
                        sublist.classList.add('hidden');

                        if (warehouses.length > 0) {
                            for (let index = 0; index < warehouses.length; index++) {
                                const warehouse = warehouses[index];

                                const list = warehouse.querySelectorAll('.table__warehouse-sublist')[value];
                                if (!list.classList.contains('hidden')) {
                                    list.classList.add('hidden')
                                }

                            }
                        }
                    }
                }
            });
        }
    }

    if (coverSecondBtns.length > 0) {
        for (let index = 0; index < coverSecondBtns.length; index++) {
            const coverSecondBtn = coverSecondBtns[index];

            coverSecondBtn.addEventListener('click', function () {
                const parentItem = coverSecondBtn.closest('.table__product-item');

                value = index;

                if (parentItem.classList.contains('uncovered')) {
                    parentItem.classList.remove('uncovered');

                    const sublist = parentItem.nextElementSibling;
                    if (sublist.classList.contains('visible')) {
                        sublist.classList.remove('visible');
                        sublist.classList.add('hidden');

                        if (warehouses.length > 0) {
                            for (let index = 0; index < warehouses.length; index++) {
                                const warehouse = warehouses[index];

                                const list = warehouse.querySelectorAll('.table__warehouse-sublist-second')[value];
                                if (!list.classList.contains('hidden')) {
                                    list.classList.add('hidden')
                                }

                            }
                        }
                    }
                }
            });
        }
    }

    if (uncoverBtns.length > 0) {
        for (let index = 0; index < uncoverBtns.length; index++) {
            const uncoverBtn = uncoverBtns[index];

            uncoverBtn.addEventListener('click', function () {
                const parentItem = uncoverBtn.closest('.table__product-item');

                value = index;

                if (!parentItem.classList.contains('uncovered')) {
                    parentItem.classList.add('uncovered');

                    const sublist = parentItem.nextElementSibling;
                    if (sublist.classList.contains('hidden')) {
                        sublist.classList.remove('hidden');
                        sublist.classList.add('visible');

                        if (warehouses.length > 0) {
                            for (let index = 0; index < warehouses.length; index++) {
                                const warehouse = warehouses[index];

                                const list = warehouse.querySelectorAll('.table__warehouse-sublist')[value];
                                if (list.classList.contains('hidden')) {
                                    list.classList.remove('hidden')
                                }

                            }
                        }
                    }
                }
            });
        }
    }

    if (uncoverSecondBtns.length > 0) {
        for (let index = 0; index < uncoverSecondBtns.length; index++) {
            const uncoverSecondBtn = uncoverSecondBtns[index];

            uncoverSecondBtn.addEventListener('click', function () {
                const parentItem = uncoverSecondBtn.closest('.table__product-item');

                value = index;

                if (!parentItem.classList.contains('uncovered')) {
                    parentItem.classList.add('uncovered');

                    const sublist = parentItem.nextElementSibling;
                    if (sublist.classList.contains('hidden')) {
                        sublist.classList.remove('hidden');
                        sublist.classList.add('visible');

                        if (warehouses.length > 0) {
                            for (let index = 0; index < warehouses.length; index++) {
                                const warehouse = warehouses[index];

                                const list = warehouse.querySelectorAll('.table__warehouse-sublist-second')[value];
                                if (list.classList.contains('hidden')) {
                                    list.classList.remove('hidden')
                                }

                            }
                        }
                    }
                }
            });
        }
    }

    const showAll = document.querySelector('.btn-show-all');

    if (showAll) {
        const warehouseLists = document.querySelectorAll('.table__warehouse-sublist');
        const warehouseListsSecond = document.querySelectorAll('.table__warehouse-sublist-second');
        const productLists = document.querySelectorAll('.table__product-sublist');

        showAll.classList.add('modal-close');

        showAll.addEventListener('click', () => {

            warehouseLists.forEach((el) => {
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    el.classList.add('visible');
                }
            });

            warehouseListsSecond.forEach((el) => {
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    el.classList.add('visible');
                }
            });

            productLists.forEach((el) => {
                if (el.classList.contains('hidden')) {
                    el.classList.remove('hidden');
                    el.classList.add('visible');
                    el.previousElementSibling.classList.add('uncovered');
                }
            });
        });
    }
}

function chartSelect() {
    const chartSelects = document.querySelectorAll('.select-charts');
    if (chartSelects.length > 0) {
        for (let index = 0; index < chartSelects.length; index++) {
            const chartSelect = chartSelects[index];
            const chartSelectBtn = chartSelect.querySelector('.select-charts__btn');
            let count;
            let options
            if (chartSelectBtn.classList.contains('select-charts__btn--categories')) {
                count = document.querySelectorAll('.choose__modal-content .choose__categories-item').length;
                chartSelect.querySelector('.select-charts__from').innerHTML = count;
                options = document.querySelectorAll('.choose__modal-content .choose__input');
            } else {
                count = chartSelect.querySelectorAll('.select-charts__item').length;
                chartSelect.querySelector('.select-charts__from').innerHTML = count;
                options = chartSelect.querySelectorAll('.select-charts__checkbox-input');
            }

            chartSelectBtn.addEventListener('click', () => {
                if (!chartSelectBtn.closest('.select-charts').classList.contains('active')) {
                    chartSelects.forEach((el) => {
                        el.classList.remove('active');
                    });
                    chartSelectBtn.closest('.select-charts').classList.add('active');
                } else {
                    chartSelectBtn.closest('.select-charts').classList.remove('active');
                }
            });

            let selected = 0;
            options.forEach((option) => {
                if (option.checked == true) {
                    selected++;
                    chartSelect.querySelector('.select-charts__selected').innerHTML = selected;
                }
                option.addEventListener('click', () => {
                    if (option.checked == true) {
                        selected++;
                    } else {
                        selected--;
                    }
                    chartSelect.querySelector('.select-charts__selected').innerHTML = selected;
                });
            });
        }
    }
}

function pagination() {

    const paginationBtns = document.querySelectorAll('.pagination__list-link');
    if (paginationBtns.length > 0) {
        paginationBtns.forEach((paginationBtn) => {
            paginationBtn.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });
    }
}

function showImage(photo) {
    const photoThumbs = document.querySelectorAll(photo);

    if (photoThumbs.length > 0) {
        for (let index = 0; index < photoThumbs.length; index++) {
            const photoThumb = photoThumbs[index];

            photoThumb.addEventListener('mouseover', () => {
                const photoSrc = photoThumb.querySelector('picture').outerHTML;
                const newPhoto = document.createElement('div');
                newPhoto.classList.add('image-viewer');
                newPhoto.innerHTML = photoSrc;
                photoThumb.append(newPhoto);
            });

            photoThumb.addEventListener('mouseout', () => {
                document.querySelector('.image-viewer').remove();
            });
        }
    }
}

function sidebarMinimize() {
    const miniBtn = document.querySelector('.minimize-btn');
    const sidebar = document.querySelector('.sidebar');
    if (miniBtn) {
        miniBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mini');
        });
    }

    window.addEventListener('resize', () => {
        ifMini();
    });

    ifMini();

    function ifMini() {
        if (window.innerWidth < 768 && sidebar.classList.contains('mini')) {
            sidebar.classList.remove('mini');
        }
    }
}

function addToCompare() {
    const lists = document.querySelectorAll('.comparison-table__sublist');
    const compareItems = document.querySelectorAll('.compare__item');

    if (lists.length > 0) {
        for (let index = 0; index < lists.length; index++) {
            const list = lists[index];
            const listItems = list.querySelectorAll('.comparison-table__subitem');
            const compareItem = compareItems[index];
            listItems.forEach((listItem) => {
                listItem.addEventListener('click', () => {
                    compareItem.querySelector('.compare__art').innerHTML = listItem.querySelector('.comparison-table__partner-art span').innerHTML;
                    compareItem.querySelector('.compare__title').innerHTML = listItem.querySelector('.comparison-table__title span').innerHTML;

                    if (!listItem.classList.contains('active')) {
                        listItems.forEach((el) => {
                            el.classList.remove('active');
                        });
                        listItem.classList.add('active');
                    }
                });
            });

        }
    }
}


/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesAllowlist = {
        text: true,
        search: true,
        url: true,
        tel: true,
        email: true,
        password: true,
        number: true,
        date: true,
        month: true,
        week: true,
        time: true,
        datetime: true,
        'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
        if (
            el &&
            el !== document &&
            el.nodeName !== 'HTML' &&
            el.nodeName !== 'BODY' &&
            'classList' in el &&
            'contains' in el.classList
        ) {
            return true;
        }
        return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
        var type = el.type;
        var tagName = el.tagName;

        if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
            return true;
        }

        if (tagName === 'TEXTAREA' && !el.readOnly) {
            return true;
        }

        if (el.isContentEditable) {
            return true;
        }

        return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
        if (el.classList.contains('focus-visible')) {
            return;
        }
        el.classList.add('focus-visible');
        el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
        if (!el.hasAttribute('data-focus-visible-added')) {
            return;
        }
        el.classList.remove('focus-visible');
        el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
        if (e.metaKey || e.altKey || e.ctrlKey) {
            return;
        }

        if (isValidFocusTarget(scope.activeElement)) {
            addFocusVisibleClass(scope.activeElement);
        }

        hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
        hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
        // Prevent IE from focusing the document or HTML element.
        if (!isValidFocusTarget(e.target)) {
            return;
        }

        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
            addFocusVisibleClass(e.target);
        }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
        if (!isValidFocusTarget(e.target)) {
            return;
        }

        if (
            e.target.classList.contains('focus-visible') ||
            e.target.hasAttribute('data-focus-visible-added')
        ) {
            // To detect a tab/window switch, we look for a blur event followed
            // rapidly by a visibility change.
            // If we don't see a visibility change within 100ms, it's probably a
            // regular focus change.
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
                hadFocusVisibleRecently = false;
            }, 100);
            removeFocusVisibleClass(e.target);
        }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
        if (document.visibilityState === 'hidden') {
            // If the tab becomes active again, the browser will handle calling focus
            // on the element (Safari actually calls it twice).
            // If this tab change caused a blur on an element with focus-visible,
            // re-apply the class when the user switches back to the tab.
            if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
            }
            addInitialPointerMoveListeners();
        }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
        document.addEventListener('mousemove', onInitialPointerMove);
        document.addEventListener('mousedown', onInitialPointerMove);
        document.addEventListener('mouseup', onInitialPointerMove);
        document.addEventListener('pointermove', onInitialPointerMove);
        document.addEventListener('pointerdown', onInitialPointerMove);
        document.addEventListener('pointerup', onInitialPointerMove);
        document.addEventListener('touchmove', onInitialPointerMove);
        document.addEventListener('touchstart', onInitialPointerMove);
        document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
        document.removeEventListener('mousemove', onInitialPointerMove);
        document.removeEventListener('mousedown', onInitialPointerMove);
        document.removeEventListener('mouseup', onInitialPointerMove);
        document.removeEventListener('pointermove', onInitialPointerMove);
        document.removeEventListener('pointerdown', onInitialPointerMove);
        document.removeEventListener('pointerup', onInitialPointerMove);
        document.removeEventListener('touchmove', onInitialPointerMove);
        document.removeEventListener('touchstart', onInitialPointerMove);
        document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
        // Work around a Safari quirk that fires a mousemove on <html> whenever the
        // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
        if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
            return;
        }

        hadKeyboardEvent = false;
        removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
        // Since a ShadowRoot is a special kind of DocumentFragment, it does not
        // have a root element to add a class to. So, we add this attribute to the
        // host element instead:
        scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
        document.documentElement.classList.add('js-focus-visible');
        document.documentElement.setAttribute('data-js-focus-visible', '');
    }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
        event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
        // IE11 does not support using CustomEvent as a constructor directly:
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
}


/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function (e) { var t, s, r, i, n, c, a, u = navigator.userAgent; e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"), r = function (e) { var t, r, i = e.parentNode; "PICTURE" === i.nodeName.toUpperCase() ? (t = s.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout((function () { i.removeChild(t) }))) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout((function () { e.sizes = r }))) }, i = function () { var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]"); for (e = 0; e < t.length; e++)r(t[e]) }, n = function () { clearTimeout(t), t = setTimeout(i, 99) }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () { n(), c && c.addListener && c.addListener(n) }, s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n)) }(window),
    /*! Picturefill - v3.0.2
     * http://scottjehl.github.io/picturefill
     * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
     *  License: MIT
     */
    function (e, t, s) { "use strict"; var r, i, n; t.createElement("picture"); var c = {}, a = !1, u = function () { }, o = t.createElement("img"), l = o.getAttribute, f = o.setAttribute, d = o.removeAttribute, p = t.documentElement, A = {}, m = { algorithm: "" }, h = navigator.userAgent, g = /rident/.test(h) || /ecko/.test(h) && h.match(/rv\:(\d+)/) && RegExp.$1 > 35, v = "currentSrc", w = /\s+\+?\d+(e\d+)?w/, S = /(\([^)]+\))?\s*(.+)/, x = e.picturefillCFG, y = "font-size:100%!important;", E = !0, z = {}, b = {}, T = e.devicePixelRatio, C = { px: 1, in: 96 }, R = t.createElement("a"), L = !1, M = /^[ \t\n\r\u000c]+/, P = /^[, \t\n\r\u000c]+/, D = /^[^ \t\n\r\u000c]+/, B = /[,]+$/, I = /^\d+$/, U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, $ = function (e, t, s, r) { e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s) }, k = function (e) { var t = {}; return function (s) { return s in t || (t[s] = e(s)), t[s] } }; function W(e) { return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e } var Q, G, H, F, N, O, q, j, V, _, K, J, X, Y, Z, ee, te = (Q = /^([\d\.]+)(em|vw|px)$/, G = k((function (e) { return "return " + function () { for (var e = arguments, t = 0, s = e[0]; ++t in e;)s = s.replace(e[t], e[++t]); return s }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";" })), function (e, t) { var s; if (!(e in z)) if (z[e] = !1, t && (s = e.match(Q))) z[e] = s[1] * C[s[2]]; else try { z[e] = new Function("e", G(e))(C) } catch (e) { } return z[e] }), se = function (e, t) { return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e }, re = function (e) { if (a) { var s, r, i, n = e || {}; if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (s = n.elements || c.qsa(n.context || t, n.reevaluate || n.reselect ? c.sel : c.selShort)).length) { for (c.setupRun(n), L = !0, r = 0; r < i; r++)c.fillImg(s[r], n); c.teardownRun(n) } } }; function ie(e, t) { return e.res - t.res } function ne(e, t) { var s, r, i; if (e && t) for (i = c.parseSet(t), e = c.makeUrl(e), s = 0; s < i.length; s++)if (e === c.makeUrl(i[s].url)) { r = i[s]; break } return r } e.console && console.warn, v in o || (v = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + (new Date).getTime()).substr(0, 9), c.supSrcset = "srcset" in o, c.supSizes = "sizes" in o, c.supPicture = !!e.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (H = t.createElement("img"), o.srcset = "data:,a", H.src = "data:,a", c.supSrcset = o.complete === H.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (F = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N = t.createElement("img"), O = function () { 2 === N.width && (c.supSizes = !0), i = c.supSrcset && !c.supSizes, a = !0, setTimeout(re) }, N.onload = O, N.onerror = O, N.setAttribute("sizes", "9px"), N.srcset = F + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", N.src = F) : a = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = m, c.DPR = T || 1, c.u = C, c.types = A, c.setSize = u, c.makeUrl = k((function (e) { return R.href = e, R.href })), c.qsa = function (e, t) { return "querySelector" in e ? e.querySelectorAll(t) : [] }, c.matchesMedia = function () { return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) { return !e || matchMedia(e).matches } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments) }, c.mMQ = function (e) { return !e || te(e) }, c.calcLength = function (e) { var t = te(e, !0) || !1; return t < 0 && (t = !1), t }, c.supportsType = function (e) { return !e || A[e] }, c.parseSize = k((function (e) { var t = (e || "").match(S); return { media: t && t[1], length: t && t[2] } })), c.parseSet = function (e) { return e.cands || (e.cands = function (e, t) { function s(t) { var s, r = t.exec(e.substring(o)); if (r) return s = r[0], o += s.length, s } var r, i, n, c, a, u = e.length, o = 0, l = []; function f() { var e, s, n, c, a, u, o, f, d, p = !1, A = {}; for (c = 0; c < i.length; c++)u = (a = i[c])[a.length - 1], o = a.substring(0, a.length - 1), f = parseInt(o, 10), d = parseFloat(o), I.test(o) && "w" === u ? ((e || s) && (p = !0), 0 === f ? p = !0 : e = f) : U.test(o) && "x" === u ? ((e || s || n) && (p = !0), d < 0 ? p = !0 : s = d) : I.test(o) && "h" === u ? ((n || s) && (p = !0), 0 === f ? p = !0 : n = f) : p = !0; p || (A.url = r, e && (A.w = e), s && (A.d = s), n && (A.h = n), n || s || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, l.push(A)) } function d() { for (s(M), n = "", c = "in descriptor"; ;) { if (a = e.charAt(o), "in descriptor" === c) if (W(a)) n && (i.push(n), n = "", c = "after descriptor"); else { if ("," === a) return o += 1, n && i.push(n), void f(); if ("(" === a) n += a, c = "in parens"; else { if ("" === a) return n && i.push(n), void f(); n += a } } else if ("in parens" === c) if (")" === a) n += a, c = "in descriptor"; else { if ("" === a) return i.push(n), void f(); n += a } else if ("after descriptor" === c) if (W(a)); else { if ("" === a) return void f(); c = "in descriptor", o -= 1 } o += 1 } } for (; ;) { if (s(P), o >= u) return l; r = s(D), i = [], "," === r.slice(-1) ? (r = r.replace(B, ""), f()) : d() } }(e.srcset, e)), e.cands }, c.getEmValue = function () { var e; if (!r && (e = t.body)) { var s = t.createElement("div"), i = p.style.cssText, n = e.style.cssText; s.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", p.style.cssText = y, e.style.cssText = y, e.appendChild(s), r = s.offsetWidth, e.removeChild(s), r = parseFloat(r, 10), p.style.cssText = i, e.style.cssText = n } return r || 16 }, c.calcListLength = function (e) { if (!(e in b) || m.uT) { var t = c.calcLength(function (e) { var t, s, r, i, n, a, u, o = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i; for (r = (s = function (e) { var t, s = "", r = [], i = [], n = 0, c = 0, a = !1; function u() { s && (r.push(s), s = "") } function o() { r[0] && (i.push(r), r = []) } for (; ;) { if ("" === (t = e.charAt(c))) return u(), o(), i; if (a) { if ("*" === t && "/" === e[c + 1]) { a = !1, c += 2, u(); continue } c += 1 } else { if (W(t)) { if (e.charAt(c - 1) && W(e.charAt(c - 1)) || !s) { c += 1; continue } if (0 === n) { u(), c += 1; continue } t = " " } else if ("(" === t) n += 1; else if (")" === t) n -= 1; else { if ("," === t) { u(), o(), c += 1; continue } if ("/" === t && "*" === e.charAt(c + 1)) { a = !0, c += 2; continue } } s += t, c += 1 } } }(e)).length, t = 0; t < r; t++)if (n = (i = s[t])[i.length - 1], u = n, o.test(u) && parseFloat(u) >= 0 || l.test(u) || "0" === u || "-0" === u || "+0" === u) { if (a = n, i.pop(), 0 === i.length) return a; if (i = i.join(" "), c.matchesMedia(i)) return a } return "100vw" }(e)); b[e] = t || C.width } return b[e] }, c.setRes = function (e) { var t; if (e) for (var s = 0, r = (t = c.parseSet(e)).length; s < r; s++)se(t[s], e.sizes); return t }, c.setRes.res = se, c.applySetCandidate = function (e, t) { if (e.length) { var s, r, i, n, a, u, o, l, f, d, p, A, h, w, S, x, y = t[c.ns], E = c.DPR; if (u = y.curSrc || t[v], (o = y.curCan || function (e, t, s) { var r; return !s && t && (s = (s = e[c.ns].sets) && s[s.length - 1]), (r = ne(t, s)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = r, r.res || se(r, r.set.sizes)), r }(t, u, e[0].set)) && o.set === e[0].set && ((f = g && !t.complete && o.res - .1 > E) || (o.cached = !0, o.res >= E && (a = o))), !a) for (e.sort(ie), a = e[(n = e.length) - 1], r = 0; r < n; r++)if ((s = e[r]).res >= E) { a = e[i = r - 1] && (f || u !== c.makeUrl(s.url)) && (d = e[i].res, p = s.res, A = E, h = e[i].cached, w = void 0, S = void 0, x = void 0, "saveData" === m.algorithm ? d > 2.7 ? x = A + 1 : (S = (p - A) * (w = Math.pow(d - .6, 1.5)), h && (S += .1 * w), x = d + S) : x = A > 1 ? Math.sqrt(d * p) : d, x > A) ? e[i] : s; break } a && (l = c.makeUrl(a.url), y.curSrc = l, y.curCan = a, l !== u && c.setSrc(t, a), c.setSize(t)) } }, c.setSrc = function (e, t) { var s; e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s)) }, c.getSet = function (e) { var t, s, r, i = !1, n = e[c.ns].sets; for (t = 0; t < n.length && !i; t++)if ((s = n[t]).srcset && c.matchesMedia(s.media) && (r = c.supportsType(s.type))) { "pending" === r && (s = r), i = s; break } return i }, c.parseSets = function (e, t, s) { var r, n, a, u, o = t && "PICTURE" === t.nodeName.toUpperCase(), p = e[c.ns]; (void 0 === p.src || s.src) && (p.src = l.call(e, "src"), p.src ? f.call(e, "data-pfsrc", p.src) : d.call(e, "data-pfsrc")), (void 0 === p.srcset || s.srcset || !c.supSrcset || e.srcset) && (r = l.call(e, "srcset"), p.srcset = r, u = !0), p.sets = [], o && (p.pic = !0, function (e, t) { var s, r, i, n, a = e.getElementsByTagName("source"); for (s = 0, r = a.length; s < r; s++)(i = a[s])[c.ns] = !0, (n = i.getAttribute("srcset")) && t.push({ srcset: n, media: i.getAttribute("media"), type: i.getAttribute("type"), sizes: i.getAttribute("sizes") }) }(t, p.sets)), p.srcset ? (n = { srcset: p.srcset, sizes: l.call(e, "sizes") }, p.sets.push(n), (a = (i || p.src) && w.test(p.srcset || "")) || !p.src || ne(p.src, n) || n.has1x || (n.srcset += ", " + p.src, n.cands.push({ url: p.src, d: 1, set: n }))) : p.src && p.sets.push({ srcset: p.src, sizes: null }), p.curCan = null, p.curSrc = void 0, p.supported = !(o || n && !c.supSrcset || a && !c.supSizes), u && c.supSrcset && !p.supported && (r ? (f.call(e, "data-pfsrcset", r), e.srcset = "") : d.call(e, "data-pfsrcset")), p.supported && !p.srcset && (!p.src && e.src || e.src !== c.makeUrl(p.src)) && (null === p.src ? e.removeAttribute("src") : e.src = p.src), p.parsed = !0 }, c.fillImg = function (e, t) { var s, r = t.reselect || t.reevaluate; e[c.ns] || (e[c.ns] = {}), s = e[c.ns], (r || s.evaled !== n) && (s.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), s.supported ? s.evaled = n : function (e) { var t, s = c.getSet(e), r = !1; "pending" !== s && (r = n, s && (t = c.setRes(s), c.applySetCandidate(t, e))), e[c.ns].evaled = r }(e)) }, c.setupRun = function () { L && !E && T === e.devicePixelRatio || (E = !1, T = e.devicePixelRatio, z = {}, b = {}, c.DPR = T || 1, C.width = Math.max(e.innerWidth || 0, p.clientWidth), C.height = Math.max(e.innerHeight || 0, p.clientHeight), C.vw = C.width / 100, C.vh = C.height / 100, n = [C.height, C.width, T].join("-"), C.em = c.getEmValue(), C.rem = C.em) }, c.supPicture ? (re = u, c.fillImg = u): (X = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, Y = function () { var e = t.readyState || ""; Z = setTimeout(Y, "loading" === e ? 200 : 999), t.body && (c.fillImgs(), (q = q || X.test(e)) && clearTimeout(Z)) }, Z = setTimeout(Y, t.body ? 9 : 99), ee = p.clientHeight, $(e,"resize",(j = function () { E = Math.max(e.innerWidth || 0, p.clientWidth) !== C.width || p.clientHeight !== ee, ee = p.clientHeight, E && c.fillImgs() }, V = 99, J = function () { var e = new Date - K; e < V ? _ = setTimeout(J, V - e) : (_ = null, j()) },function(){ K = new Date, _ || (_ = setTimeout(J, V)) })), $(t, "readystatechange", Y)), c.picturefill = re, c.fillImgs = re, c.teardownRun = u, re._ = c, e.picturefillCFG = { pf: c, push: function (e) { var t = e.shift(); "function" == typeof c[t] ? c[t].apply(c, e) : (m[t] = e[0], L && c.fillImgs({ reselect: !0 })) } }; for (; x && x.length;)e.picturefillCFG.push(x.shift()); e.picturefill = re, "object" == typeof module && "object" == typeof module.exports ? module.exports = re : "function" == typeof define && define.amd && define("picturefill", (function () { return re })), c.supPicture || (A["image/webp"] = function (t, s) { var r = new e.Image; return r.onerror = function () { A[t] = !1, re() }, r.onload = function () { A[t] = 1 === r.width, re() }, r.src = s, "pending" }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")) }(window, document);

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    // Инициализация обычных слойлеров
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }

    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('_init');
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerAction);
            } else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerAction);
            }
        });
    }

    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute('tabindex');
                    if (!spollerTitle.classList.contains('_active')) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute('tabindex', '-1');
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }

    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
                if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }

    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
}

//SlideToggle
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
};

let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
};

let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
};


// dropdown
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerHTML = this.innerHTML;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
            this.classList.remove('dropdown__button--active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!dropDownBtn.contains(e.target)) {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        }
    });
});



const stickyBlocks = [...document.querySelectorAll('[data-sticky]')];
const activeClass = 'sticky';
const stickyOffset = 350;

const stickyElFunction = (block, activeClass, stickyOffset) => {
    window.onscroll = function () {
        block.map((item) => {
            if (window.pageYOffset > stickyOffset) {
                item.classList.add(activeClass)
            } else {
                item.classList.remove(activeClass)
            }
        });

    };
};

const checkAllBtns = document.querySelectorAll('.check-all');
const warehouseTables = document.querySelectorAll('.table__warehouse');

if (checkAllBtns.length > 0) {
    for (let index = 0; index < checkAllBtns.length; index++) {
        const checkAllBtn = checkAllBtns[index];

        checkAllBtn.addEventListener('click', function () {
            const checkboxes = warehouseTables[index].querySelectorAll('.filter__checkbox-input');

            checkboxes.forEach((checkbox) => {
                if (!checkbox.nextElementSibling.classList.contains('check-all')) {
                    if (!checkAllBtn.previousElementSibling.checked) {
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                }
            });
        });
    }
}

stickyElFunction(stickyBlocks, activeClass, stickyOffset)

let sortingBtn = document.querySelector('.sorting');
let formParentBtn = document.querySelector('.form__btns');
let mobileSiblingstBtn = document.querySelector('.form__info-block--sorting');


let breakpointSorting = 768;


const replaceMobileMenu = (element, parentDesktop, parentMobile) => {
    let containerWidth = document.documentElement.clientWidth;
    if (containerWidth <= breakpointSorting) {
        parentMobile.insertAdjacentElement('afterend', element);
    };
    if (containerWidth > breakpointSorting) {
        parentDesktop.insertAdjacentElement('afterbegin', element);
    }
}

window.addEventListener('resize', () => {
    replaceMobileMenu(sortingBtn, formParentBtn, mobileSiblingstBtn);
});

window.addEventListener('DOMContentLoaded', () => {
    replaceMobileMenu(sortingBtn, formParentBtn, mobileSiblingstBtn);
});