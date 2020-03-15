import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent implements OnInit {

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
