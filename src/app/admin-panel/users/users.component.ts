import { Component, OnInit } from '@angular/core';

import { NewUserComponent } from './new-user/new-user.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    new User('John Doe', 'john@exa-mple.com', '111.111.111-11'),
    new User('Mary Moe', 'mary@example.com', '222.222.222-22'),
    new User('July Dooley', 'july@example.com', '333.333.333-33')
  ];

  constructor(private dialogService: DialogService) { }

  showModal() {
    const disposable = this.dialogService.addDialog(NewUserComponent, {
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
