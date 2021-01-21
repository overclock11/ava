import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BankFilterPipe} from './bank-filter.pipe';
import { CardMaskPipe } from './card-mask.pipe';



@NgModule({
  declarations: [BankFilterPipe, CardMaskPipe],
  imports: [
    CommonModule
  ],
  exports:[BankFilterPipe, CardMaskPipe]
})
export class PipesModule { }
