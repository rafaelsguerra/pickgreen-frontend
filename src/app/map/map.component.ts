import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  y = -7.216521;
  x = -35.909413;

  coords = [
    { lat: -7.218492, lon: -35.910362 },
    { lat: -7.218922, lon: -35.902269 },
    { lat: -7.218734, lon: -35.905996 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
