import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AvalStylesModule} from 'aval-styles';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AvalStylesModule
  ]
})
export class HomeModule { }
