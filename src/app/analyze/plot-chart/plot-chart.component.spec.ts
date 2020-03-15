import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotChartComponent } from './plot-chart.component';

describe('PlotChartComponent', () => {
  let component: PlotChartComponent;
  let fixture: ComponentFixture<PlotChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
