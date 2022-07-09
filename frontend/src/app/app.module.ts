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

@NgModule({
  declarations: [AppComponent,
    WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
    }),
    ProductModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
