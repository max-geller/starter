import { Component } from '@angular/core';
import { AuthService } from './../../../../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'hci-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss']
})
export class IconMenuComponent {
  events: string[] = [];
  opened: boolean;


  email: string;
  password: string;

  constructor(public auth: AuthService, private afs: AngularFirestore) {}

  signOut() {
    this.auth.signOut();
  }
  onNavigate(){
    // this.router.navigateByUrl("https://www.google.com");
    window.open("https://support.hcianalytics.com", "_blank");
}
}
