import { Component, OnInit } from '@angular/core';

import { NewBraceletComponent } from './new-bracelet/new-bracelet.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Bracelet } from './bracelet.model';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.css']
})
export class BraceletsComponent implements OnInit {

  bracelets: Bracelet[] = [
    new Bracelet('Usuário A', new Date('November, 11, 11'), new Date('November, 12, 11')),
    new Bracelet('Usuário B', new Date('December, 25, 2015'), new Date('January, 25, 2017')),
    new Bracelet(null, new Date('October, 25, 2016'), new Date('October, 25, 2016'))
  ];

  constructor(private dialogService: DialogService) { }

  showBracelet() {
    this.dialogService.addDialog(NewBraceletComponent, {
      title: 'Nova pulseira'
    });
  }

  ngOnInit() {
  }

}
