import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LeafletModule
  ]
})
export class DashboardModule { }
