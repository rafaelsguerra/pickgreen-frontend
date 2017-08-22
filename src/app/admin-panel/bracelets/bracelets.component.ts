import { Component, OnInit } from '@angular/core';

import { NewBraceletComponent } from './new-bracelet/new-bracelet.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.css']
})
export class BraceletsComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  showBracelet() {
    this.dialogService.addDialog(NewBraceletComponent, {
      title: 'Nova pulseira'
    });
  }

  ngOnInit() {
  }

}
