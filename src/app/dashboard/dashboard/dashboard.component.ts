import { Component, OnInit } from '@angular/core';
import L, { tileLayer, latLng, circle, polygon, marker, icon } from 'leaflet';
import { MapService } from './map.service';
import { MatDialog } from '@angular/material';
import { MapPopupComponent } from '../map-popup/map-popup.component';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  map: L.Map;

  options = {
    layers: [
      tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' +
        'pk.eyJ1IjoiYWxleHNhbmNobzgiLCJhIjoiY2s3dDk4Z3k0MDZteTNvbjFqY2lzMDZ5dyJ9.nnlGSGgLRrkCugzcTfKhkQ', {
        id: 'mapbox/light-v9',
        attribution: '...',
        tileSize: 512,
        zoomOffset: -1
      }),
      marker([33.753746, -84.386330], {
        icon: new L.Icon({
          iconSize: new L.Point(50, 50),
          iconAnchor: new L.Point(25, 50),
          iconUrl: '/assets/img/icons/biohazard-512.png'
        })
      })
        .on('click', this.showPopup.bind(this))
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  layersControl = {
  };

  constructor(private mapService: MapService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  mapReady(map: L.Map) {
    this.map = map;
    this.map.setView([37.8, -96], 4);
    L.geoJSON(this.mapService.getStatesData() as any, { style: this.style }).addTo(this.map);
    map.addControl(L.control.zoom({ position: 'bottomright' }));
  }

  style(feature) {
    const getColor = (d) => {
      return d > 1000 ? '#800026' :
        d > 500 ? '#BD0026' :
          d > 200 ? '#E31A1C' :
            d > 100 ? '#FC4E2A' :
              d > 50 ? '#FD8D3C' :
                d > 20 ? '#FEB24C' :
                  d > 10 ? '#FED976' :
                    '#FFEDA0';
    };
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  showPopup(): void {
    const infoDialogRef = this.dialog.open(MapPopupComponent, {
      width: '250px',
    });
  }

}
