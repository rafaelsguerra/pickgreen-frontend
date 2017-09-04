import { Component, OnInit } from '@angular/core';

import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Event } from '../event.model';

export interface EventModel {
  title: string;
  event: Event;
}

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent extends DialogComponent<EventModel, Event> implements OnInit {

  title: string;
  event: Event;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  onSubmit(form) {
    this.result = new Event(form.value.local, form.value.descricao, form.value.dataInicio, form.value.dataFim);
    this.close();
  }

  ngOnInit() {
  }

}
