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
      title: 'Novo coletor',
      collector: new Collector(null, null, null)
    }).subscribe((collectorFromModal) => {
      if (typeof collectorFromModal !== 'undefined') {
        this.collectors.push(collectorFromModal);
      }
    });
  }

  updateCollector(collector: Collector) {
    this.dialogService.addDialog(NewCollectorComponent, {
      title: 'Editar coletor',
      collector: collector
    }).subscribe((collectorFromModal) => {
      if (typeof collectorFromModal !== 'undefined') {
        const index = this.collectors.indexOf(collector);
        this.collectors[index] = collectorFromModal;
      }
    });
  }

  deleteCollector(collector: Collector) {
    const index = this.collectors.indexOf(collector);

    if (index !== -1) {
      this.collectors.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
