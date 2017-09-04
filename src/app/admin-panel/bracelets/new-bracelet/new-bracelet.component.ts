import { Component, OnInit } from '@angular/core';

import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { Bracelet } from '../bracelet.model';

export interface NewBraceletModel {
  title: string;
  bracelet: Bracelet;
}

@Component({
  selector: 'app-new-bracelet',
  templateUrl: './new-bracelet.component.html',
  styleUrls: ['./new-bracelet.component.css']
})
export class NewBraceletComponent extends DialogComponent<NewBraceletModel, Bracelet> implements OnInit {

  title: string;
  bracelet: Bracelet;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  onSubmit(form) {
    this.result = new Bracelet(form.value.nome, form.value.dataCriacao, form.value.dataAtivacao);
    this.close();
  }

  ngOnInit() {
  }

}
