import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexOptions } from 'src/@vex/components/chart/chart.component';

@Component({
  selector: 'vex-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Reported Symptomatic',
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: 'Confirmed Cases',
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: 'Discharged',
          data: [11, 17, 15, 15, 21, 14]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      tooltip: {
        theme: 'dark'
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      yaxis: {
        labels: {
          style: {
            cssClass: 'text-secondary fill-current caption font-medium',
            fontFamily: 'inherit'
          }
        },
      },
      xaxis: {
        type: 'category',
        labels: {
          style: {
            cssClass: 'text-secondary fill-current caption font-medium',
            fontFamily: 'inherit'
          }
        },
        categories: [
          '01/2011',
          '02/2011',
          '03/2011',
          '04/2011',
          '05/2011',
          '06/2011'
        ]
      },
      legend: {
        position: 'right',
        offsetY: 40,
        markers: {
          radius: 4,
          width: 12,
          height: 12
        },
        labels: {
          colors: ['#fff']
        } as any
      },
      fill: {
        opacity: 1
      },
    };
  }
}
