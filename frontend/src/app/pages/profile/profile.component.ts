import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {}

  callApi(): void {
    this.http
      .get(`${env.serverUrl}/products`)
      .subscribe((result: any) => console.log(result));
  }

  callSecureApi(): void {
    this.http
      .get(`${env.serverUrl}/protected`)
      .subscribe((result: any) => console.log(result));
  }
}
