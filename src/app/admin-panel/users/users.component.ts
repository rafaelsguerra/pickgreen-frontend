import { Component, OnInit } from '@angular/core';

import { NewUserComponent } from './new-user/new-user.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  showModal() {
    let disposable = this.dialogService.addDialog(NewUserComponent, {
      title: 'Confirm title',
      message: 'Confirm message'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        alert('accepted');
      } else {
        alert('declined');
      }
    });
  }

  ngOnInit() {
  }

}
