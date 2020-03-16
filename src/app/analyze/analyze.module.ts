import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { WidgetQuickValueCenterModule } from 'src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module';
import { AnalyzePageComponent } from './analyze-page/analyze-page.component';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AnalyzeTableComponent } from './analyze-table/analyze-table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { PlotChartComponent } from './plot-chart/plot-chart.component';
import { StackedBarChartComponent } from '../../../stacked-bar-chart/stacked-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AnalyzePageComponent,
    BarChartComponent,
    AnalyzeTableComponent,
    PlotChartComponent,
    StackedBarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    RouterModule,
    WidgetQuickValueCenterModule,
    FlexLayoutModule,
    MatCardModule,
    NgApexchartsModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class AnalyzeModule { }
