import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageTitle = 'Product Compare';
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) { }
}
