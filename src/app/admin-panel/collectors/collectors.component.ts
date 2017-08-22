import { Component, OnInit } from '@angular/core';

import { NewCollectorComponent } from './new-collector/new-collector.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  showCollector() {
    this.dialogService.addDialog(NewCollectorComponent, {
      title: 'Novo coletor'
    });
  }

  ngOnInit() {
  }

}
