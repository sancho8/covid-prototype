import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPopupComponent } from './map-popup/map-popup.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent, MapPopupComponent],
  imports: [
    CommonModule,
    LeafletModule,
    MatDialogModule,
    RouterModule,
    MatButtonModule
  ],
  entryComponents: [
    MapPopupComponent
  ]
})
export class DashboardModule { }
