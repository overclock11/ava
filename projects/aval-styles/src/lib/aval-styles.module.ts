import {NgModule} from '@angular/core';
import {AvlCardContentComponent, AvlCardFooterComponent, AvlCardHeaderComponent, CardComponent} from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    CardComponent,
    AvlCardHeaderComponent,
    AvlCardContentComponent,
    AvlCardFooterComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    AvlCardHeaderComponent,
    AvlCardContentComponent,
    AvlCardFooterComponent,
    ProgressBarComponent
  ]
})
export class AvalStylesModule {
}
