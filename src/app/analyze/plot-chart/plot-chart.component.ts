import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexOptions } from 'src/@vex/components/chart/chart.component';

@Component({
  selector: 'vex-plot-chart',
  templateUrl: './plot-chart.component.html',
  styleUrls: ['./plot-chart.component.scss']
})
export class PlotChartComponent {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Clorox',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'Kleenex',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: 'Purell',
          data: [31, 43, 69, 19, 45, 100, 180]
        },
        {
          name: 'Lysol',
          data: [63, 32, 68, 79, 75, 50, 120]
        },
        {
          name: 'Downy',
          data: [11, 32, 45, 32, 34, 152, 130]
        }
      ],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2020-03-10T00:00:00.000Z',
          '2020-03-11T01:30:00.000Z',
          '2020-03-12T02:30:00.000Z',
          '2020-03-13T03:30:00.000Z',
          '2020-03-14T04:30:00.000Z',
          '2020-03-15T05:30:00.000Z',
          '2020-03-16T06:30:00.000Z'
        ],
        labels: {
          style: {
            cssClass: 'text-secondary fill-current caption font-medium',
            fontFamily: 'inherit'
          }
        },
      },
      yaxis: {
        min: 0,
        max: 200,
        labels: {
          style: {
            cssClass: 'text-secondary fill-current caption font-medium',
            fontFamily: 'inherit'
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
        theme: 'dark'
      },
      legend: {
        labels: {
          colors: ['#fff']
        } as any
      }
    };
  }

  public generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

}
