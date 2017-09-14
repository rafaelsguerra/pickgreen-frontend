import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showMenu = false;
  showAdmMenu = false;
  showCollectorMenu = false;

  constructor(private loginService: LoginService, private cdref: ChangeDetectorRef) {}

  ngOnInit() {
    this.loginService.showMenuEmitter.subscribe(show => {
      this.showMenu = show;
      this.cdref.detectChanges();
    });

    this.loginService.showAdmMenuEmitter.subscribe(show => {
      this.showAdmMenu = show;
      this.cdref.detectChanges();
    });

    this.loginService.showCollectorMenuEmitter.subscribe(show => {
      this.showCollectorMenu = show;
      this.cdref.detectChanges();
    });
  }
}
