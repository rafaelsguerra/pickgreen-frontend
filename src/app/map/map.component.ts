import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lon = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
