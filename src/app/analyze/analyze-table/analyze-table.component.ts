import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { AnalyzeService, Product } from '../analyze.service';

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
export class AnalyzeTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input()
  columns: TableColumn<Product>[] = [
    { label: 'Rank', property: 'rank', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Surge Rate', property: 'surgeRate', type: 'text', visible: true },
    { label: 'Urgency', property: 'urgency', type: 'text', visible: true },
  ];
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Product> | null = new MatTableDataSource();
  selection = new SelectionModel<Product>(true, []);

  constructor(private analyzeService: AnalyzeService) { }

  ngOnInit() {
    this.dataSource.data = this.analyzeService.getProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

}
