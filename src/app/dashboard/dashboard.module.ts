import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPopupComponent } from './map-popup/map-popup.component';
import { MatDialogModule, MatButtonModule, MatIcon, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { IconModule } from '@visurel/iconify-angular';



@NgModule({
  declarations: [DashboardComponent, MapPopupComponent],
  imports: [
    CommonModule,
    LeafletModule,
    MatDialogModule,
    RouterModule,
    MatIconModule,
    IconModule,
    MatButtonModule
  ],
  entryComponents: [
    MapPopupComponent
  ]
})
export class DashboardModule { }
