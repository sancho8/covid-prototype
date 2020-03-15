import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'src/@vex/components/chart/chart.component';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'vex-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie'
      },
      tooltip: {
        theme: 'dark'
      },
      legend: {
        labels: {
          colors: ['#fff']
        } as any
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  }
}
