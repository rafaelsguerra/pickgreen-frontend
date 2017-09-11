import { Component, OnInit } from '@angular/core';

import { NewDepositPlaceComponent } from './new-deposit-place/new-deposit-place.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { DepositPlace } from './deposit-place.model';
import { CrudService } from '../../_services/crud.service';

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

  route = 'localApi/';

  constructor(private dialogService: DialogService, private crudService: CrudService) { }

  createDepositPlace() {
    this.dialogService.addDialog(NewDepositPlaceComponent, {
      title: 'Novo local de depósito',
      place: new DepositPlace(null, null, null)
    }).subscribe((placeFromModal) => {
      if (typeof placeFromModal !== 'undefined') {
        this.depositPlaces.push(placeFromModal);
        this.crudService.create(this.route, placeFromModal);
      }
    });
  }

  updateDepositPlace(place: DepositPlace) {
    this.dialogService.addDialog(NewDepositPlaceComponent, {
      title: 'Editar local de depósito',
      place: place
    }).subscribe((placeFromModal) => {
      if (typeof placeFromModal !== 'undefined') {
        const index = this.depositPlaces.indexOf(place);
        this.depositPlaces[index] = placeFromModal;
        this.crudService.update(this.route, placeFromModal, index);
      }
    });
  }

  deleteDepositPlace(place: DepositPlace) {
    const index = this.depositPlaces.indexOf(place);

    if (index !== -1) {
      this.depositPlaces.splice(index, 1);
      this.crudService.deleteById(this.route, index);
    }
  }

  loadDepositPLaces() {
    this.crudService.getAll(this.route).subscribe(depositPlaces => {this.depositPlaces = depositPlaces});
  }

  ngOnInit() {
    // this.loadDepositPLaces();
  }

}
