import { listadoSumEntries } from '../../script.js';

$(function () {
    new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
    new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
});

function getChartJs(type) {
    var config = null;

    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: ["spain", "argelia", "germany", "finland", "argentina"],
                datasets: [{
                    label: "Entries",
                    data: [196, 1, 165, 162, 58],
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }, {
                    label: "cases",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: 'rgba(233, 30, 99, 0.75)',
                    backgroundColor: 'rgba(233, 30, 99, 0.3)',
                    pointBorderColor: 'rgba(233, 30, 99, 0)',
                    pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'bar') {
        config = {
            type: 'bar',
            data: {
                labels: ["Bahamas", "Ecuador", "China", "Japan", "paletine"],
                datasets: [{
                    label: "Entries",
                    data: [60, 77, 111, 117, 131],
                    backgroundColor: 'rgba(0, 188, 212, 0.8)'
                }, {
                    label: "Cases",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    backgroundColor: 'rgba(233, 30, 99, 0.8)'
                }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'radar') {
        config = {
            type: 'radar',
            data: {
                labels: ["Yemen", "Belgium", "Monaco", "poland", "Sweden"],
                datasets: [{
                    label: "Entries",
                    data: [146, 153, 183, 188, 197],
                    borderColor: 'rgba(0, 188, 212, 0.8)',
                    backgroundColor: 'rgba(0, 188, 212, 0.5)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.8)',
                    pointBorderWidth: 1
                }, {
                    label: "Cases",
                    data: [72, 48, 40, 19, 96, 27, 100],
                    borderColor: 'rgba(233, 30, 99, 0.8)',
                    backgroundColor: 'rgba(233, 30, 99, 0.5)',
                    pointBorderColor: 'rgba(233, 30, 99, 0)',
                    pointBackgroundColor: 'rgba(233, 30, 99, 0.8)',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'pie') {
        config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [225, 50, 100, 40],
                    backgroundColor: [
                        "rgb(233, 30, 99)",
                        "rgb(255, 193, 7)",
                        "rgb(0, 188, 212)",
                        "rgb(139, 195, 74)"
                    ],
                }],
                labels: [
                    "Pink",
                    "Amber",
                    "Cyan",
                    "Light Green"
                ]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    return config;
}