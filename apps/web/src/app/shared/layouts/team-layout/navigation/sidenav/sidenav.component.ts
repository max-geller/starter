import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hci-team-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  onNavigate(){
    // this.router.navigateByUrl("https://www.google.com");
    window.open("https://hollinsconsulting.slack.com/", "_blank");
  }
}
