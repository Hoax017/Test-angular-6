import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
  HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
