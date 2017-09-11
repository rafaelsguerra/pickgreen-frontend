import { Component, OnInit } from '@angular/core';

import { NewBraceletComponent } from './new-bracelet/new-bracelet.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Bracelet } from './bracelet.model';
import { CrudService } from '../../_services/crud.service';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.css']
})
export class BraceletsComponent implements OnInit {

  bracelets: Bracelet[] = [
    new Bracelet('Usuário A', new Date('November, 11, 2011'), new Date('November, 12, 2011')),
    new Bracelet('Usuário B', new Date('December, 25, 2015'), new Date('January, 25, 2017')),
    new Bracelet(null, new Date('October, 25, 2016'), new Date('October, 25, 2016'))
  ];

  constructor(private dialogService: DialogService, private crudService: CrudService) { }

  createBracelet() {
    this.dialogService.addDialog(NewBraceletComponent, {
      title: 'Nova pulseira',
      bracelet: new Bracelet(null, null, null)
    }).subscribe((braceletFromModal) => {
      if (typeof braceletFromModal !== 'undefined') {
        this.bracelets.push(braceletFromModal);
      }
    });
  }

  updateBracelet(bracelet: Bracelet) {
    this.dialogService.addDialog(NewBraceletComponent, {
      title: 'Editar pulseira',
      bracelet: bracelet
    }).subscribe((braceletFromModal) => {
      if (typeof braceletFromModal !== 'undefined') {
        const index = this.bracelets.indexOf(bracelet);
        this.bracelets[index] = braceletFromModal;
      }
    });
  }

  deleteBracelet(bracelet: Bracelet) {
    const index: number = this.bracelets.indexOf(bracelet);

    if (index !== -1) {
      this.bracelets.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
