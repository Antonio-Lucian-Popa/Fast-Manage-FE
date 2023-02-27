import { Injectable } from '@angular/core';
// TODO: Install Keycloak ANgular import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  status: boolean = false;
  private roles = [];
  private  readonly rolesAllowed = [
    'TRANSPORTER',
    'MANAGER',
    'CEO'
  ]

  //constructor(private readonly authService: KeycloakService) { }
  constructor() { }

  isLoggedIn() {
    this.setStatus();
    return this.status;
  }

  private setStatus() {
   // this.roles = this.authService.getUserRoles();
    this.status = this.roles.some(r => this.rolesAllowed.includes(r));
  }
}
