import { Component, OnInit } from '@angular/core';

import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface NewDepositModel {
  title: string;
}

@Component({
  selector: 'app-new-deposit-place',
  templateUrl: './new-deposit-place.component.html',
  styleUrls: ['./new-deposit-place.component.css']
})
export class NewDepositPlaceComponent extends DialogComponent<NewDepositModel, string> implements OnInit {

  title: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  apply() {
    this.close();
  }

  ngOnInit() {
  }

}
