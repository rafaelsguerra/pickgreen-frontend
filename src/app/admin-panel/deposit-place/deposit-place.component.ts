import { Component, OnInit } from '@angular/core';

import { NewDepositPlaceComponent } from './new-deposit-place/new-deposit-place.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-deposit-place',
  templateUrl: './deposit-place.component.html',
  styleUrls: ['./deposit-place.component.css']
})
export class DepositPlaceComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  showDepositPlace() {
    this.dialogService.addDialog(NewDepositPlaceComponent, {
      title: 'Novo local de depósito'
    });
  }

  ngOnInit() {
  }

}
