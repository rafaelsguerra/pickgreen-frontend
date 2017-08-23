import { Component, OnInit } from '@angular/core';

import { NewEventComponent } from './new-event/new-event.component';
import { DialogService } from 'ng2-bootstrap-modal'
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [
    new Event('Campina Grande', 'Coleta seletiva', new Date('Mar 25 2015'), new Date('Mar 26 2015')),
    new Event('João Pessoa', 'Coleta seletiva', new Date('July 11 2015'), new Date('July 16 2015')),
    new Event('Sumé', 'To sem ideia de evento', new Date('September 12 2015'), new Date('September 12 2015'))
  ];

  constructor(private dialogService: DialogService) {}

  showEvent() {
    this.dialogService.addDialog(NewEventComponent, {
      title: 'Novo evento'
    })
  }

  ngOnInit() {
  }

}
