import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AvalStylesModule} from 'aval-styles';
import {PipesModule} from '../pipes/pipes.module';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        AvalStylesModule,
        PipesModule,
        TranslateModule
    ]
})
export class HomeModule { }
