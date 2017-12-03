import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})
export class ChartsPage {

    @ViewChild('barCanvas') barCanvas;
    @ViewChild('barCanvas2') barCanvas2;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;

    barChart: any;
    doughnutChart: any;
    lineChart: any;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {

        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Burbank", "Albuquerque", "Seattle", "Austin", "Las Vegas", "Palm Springs"],
                datasets: [{
                    label: 'Final Score',
                    data: [918, 943, 937, 898, 889, 881],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });




        this.barChart = new Chart(this.barCanvas2.nativeElement, {
            
                        type: 'bar',
                        data: {
                            labels: ["Santiago, Chile", "Cancun, Mexico", "Providenciales, Caicos Islands", "Oranjestad, Aruba", "Grand Cayman, Cayman Islands", "Havana, Cuba"],
                            datasets: [{
                                label: 'Final Score',
                                data: [860, 847, 830, 726, 722, 712],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }
            
                    });





        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["USA", "Cuba", "England", "Spain", "Japan", "Iceland"],
                datasets: [{
                    label: 'Most Traveled Countires (%)',
                    data: [10, 19, 4, 25, 22, 20],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: ["JAN", "", "FEB", 
                "", "MAR", "", "APR", 
                "", "MAY", "", "JUN",
                "", "JUL", "", "AUG",],
                datasets: [
                    {
                        label: "Net Travel Rewards Points",
                        fill: false,
                        lineTension: .01,
                        backgroundColor: "rgba(26, 196, 34, .4)",
                        borderColor: "rgb(26, 196, 34)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgb(26, 196, 34)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(26, 196, 34)",
                        pointHoverBorderColor: "rgb(26, 196, 34)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [0, 1000, 600, 1200, 1800, 2700, 8500, 
                          8000, 12500, 40600, 50000, 78000, 104200, 
                          185000, 204200],
                        spanGaps: false,
                    }
                ]}
        });
    }
}