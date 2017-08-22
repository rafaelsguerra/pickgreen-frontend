import { Component, OnInit } from '@angular/core';

import { NewEventComponent } from './new-event/new-event.component';
import { DialogService } from 'ng2-bootstrap-modal'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dialogService: DialogService) {}

  showEvent() {
    this.dialogService.addDialog(NewEventComponent, {
      title: 'Novo evento'
    })
  }

  ngOnInit() {
  }

}
