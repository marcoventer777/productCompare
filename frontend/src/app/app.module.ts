import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './components/products/product.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfileComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: ErrorComponent, pathMatch: 'full' },
    ]),
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
    }),
    ProductModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
