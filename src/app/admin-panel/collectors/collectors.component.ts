import { Component, OnInit } from '@angular/core';

import { NewCollectorComponent } from './new-collector/new-collector.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Collector } from './collector.model';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {

  collectors: Collector[] = [
    new Collector('Coletor A', 'coletora@exemplo.com', '11.111.111/0001-11'),
    new Collector('Coletor B', 'coletorb@example.com', '22.222.222/0001-22'),
    new Collector('Coletor C', 'coletorc@example.com', '33.333.333/0001-33')
  ];

  constructor(private dialogService: DialogService) { }

  showCollector() {
    this.dialogService.addDialog(NewCollectorComponent, {
      title: 'Novo coletor'
    });
  }

  ngOnInit() {
  }

}
