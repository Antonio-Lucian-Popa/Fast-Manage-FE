import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.scss']
})
export class NoAuthComponent {

  codMessage: string;
  message: string = '';

  constructor(private route: ActivatedRoute) {
    this.codMessage = this.route.snapshot.params['privateSection'];
    switch (this.codMessage) {
      case '100':
        this.message = "You don't have the right permission to access to this page";
        break;
      default: {
        break;
      }
    }
  }

}
