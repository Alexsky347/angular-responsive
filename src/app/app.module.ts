import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './page/home/home.component';
import { CardUserInfoComponent } from './shared/ui/card-user-info/card-user-info.component';
import { ErrorLayoutComponent } from './shared/ui/error-layout/error-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardUserInfoComponent,
    ErrorLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
