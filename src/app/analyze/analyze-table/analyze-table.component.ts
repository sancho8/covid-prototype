import { Component, OnInit, Input } from '@angular/core';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-analyze-table',
  templateUrl: './analyze-table.component.html',
  styleUrls: ['./analyze-table.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class AnalyzeTableComponent implements OnInit {

  @Input()
  columns: TableColumn<Product>[] = [
    { label: 'Rank', property: 'rank', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Brand', property: 'brand', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Surge Rate', property: 'surgeRate', type: 'text', visible: true },
    { label: 'Urgency', property: 'urgency', type: 'text', visible: true },
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Product> | null = new MatTableDataSource();
  selection = new SelectionModel<Product>(true, []);

  constructor() { }

  ngOnInit() {
    this.dataSource.data = [{
      rank: 1,
      brand: 'Clorox',
      surgeRate: 192,
      urgency: 'High'
    }];
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

}

export class Product {
  rank: number;
  brand: string;
  surgeRate: number;
  urgency: string;
}
