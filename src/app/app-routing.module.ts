import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AnalyzePageComponent } from './analyze/analyze-page/analyze-page.component';

const childrenRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'analyze',
    component: AnalyzePageComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: childrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
