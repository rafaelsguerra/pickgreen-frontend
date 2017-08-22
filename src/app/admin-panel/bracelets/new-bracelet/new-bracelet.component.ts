import { Component, OnInit } from '@angular/core';

import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';

export interface NewBraceletModel {
  title: string;
}

@Component({
  selector: 'app-new-bracelet',
  templateUrl: './new-bracelet.component.html',
  styleUrls: ['./new-bracelet.component.css']
})
export class NewBraceletComponent extends DialogComponent<NewBraceletModel, string> implements OnInit {

  title: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
  }

}
