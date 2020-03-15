import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'vex-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent implements OnInit {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<MapPopupComponent>, private router: Router) { }

  ngOnInit() {
  }

  goToAnalyze() {
    this.close('Redirect');
    this.router.navigate(['/analyze']);
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

}
