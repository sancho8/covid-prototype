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
          name: 'Surge Rate',
          data: [44, 55, 41, 67, 22, 43]
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
          'Clorox',
          'Kleenex',
          'Purell',
          'Lysol',
          'Downy'
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
