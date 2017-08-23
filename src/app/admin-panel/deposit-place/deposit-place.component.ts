import { Component, OnInit } from '@angular/core';

import { NewDepositPlaceComponent } from './new-deposit-place/new-deposit-place.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { DepositPlace } from './deposit-place.model';

@Component({
  selector: 'app-deposit-place',
  templateUrl: './deposit-place.component.html',
  styleUrls: ['./deposit-place.component.css']
})
export class DepositPlaceComponent implements OnInit {

  depositPlaces: DepositPlace[] = [
    new DepositPlace('Local A', '111111111', 'Rua exemplo 1, número 123'),
    new DepositPlace('Local B', '222222222', 'Rua exemplo 2, número 456'),
    new DepositPlace('Local C', '333333333', 'Rua exemplo 3, número 789')
  ];

  constructor(private dialogService: DialogService) { }

  showDepositPlace() {
    this.dialogService.addDialog(NewDepositPlaceComponent, {
      title: 'Novo local de depósito'
    });
  }

  ngOnInit() {
  }

}
