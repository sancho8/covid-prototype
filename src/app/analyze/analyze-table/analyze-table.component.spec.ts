import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeTableComponent } from './analyze-table.component';

describe('AnalyzeTableComponent', () => {
  let component: AnalyzeTableComponent;
  let fixture: ComponentFixture<AnalyzeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
