import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AnalyzeModule } from './analyze/analyze.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule.forRoot(),

    // Vex
    VexModule,
    CustomLayoutModule,

    // App
    DashboardModule,
    AnalyzeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
