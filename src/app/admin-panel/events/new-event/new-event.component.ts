import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface EventModel {
  title: string;
}

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent extends DialogComponent<EventModel, string> implements OnInit {

  title: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  apply() {
    this.close();
  }

  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {
  }

}
