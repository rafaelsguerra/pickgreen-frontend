import { Component, OnInit } from '@angular/core';

import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface NewCollectorModel {
  title: string;
}

@Component({
  selector: 'app-new-collector',
  templateUrl: './new-collector.component.html',
  styleUrls: ['./new-collector.component.css']
})
export class NewCollectorComponent extends DialogComponent<NewCollectorModel, string> implements OnInit {

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
