import { Component, OnInit } from '@angular/core';

import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Collector } from '../collector.model';

export interface NewCollectorModel {
  title: string;
  collector: Collector;
}

@Component({
  selector: 'app-new-collector',
  templateUrl: './new-collector.component.html',
  styleUrls: ['./new-collector.component.css']
})
export class NewCollectorComponent extends DialogComponent<NewCollectorModel, Collector> implements OnInit {

  title: string;
  collector: Collector;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  onSubmit(form) {
    this.result = new Collector(form.value.nome, form.value.email, form.value.cnpj);
    this.close();
  }

  ngOnInit() {
  }

}
