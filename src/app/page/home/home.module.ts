import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardUserInfoComponent } from 'src/app/shared/ui/card-user-info/card-user-info.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
