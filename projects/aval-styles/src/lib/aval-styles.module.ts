import {NgModule} from '@angular/core';
import {AvlCardContentComponent, AvlCardFooterComponent, AvlCardHeaderComponent, CardComponent} from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {CommonModule} from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';


@NgModule({
  declarations: [
    CardComponent,
    AvlCardHeaderComponent,
    AvlCardContentComponent,
    AvlCardFooterComponent,
    ProgressBarComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    AvlCardHeaderComponent,
    AvlCardContentComponent,
    AvlCardFooterComponent,
    ProgressBarComponent,
    IconButtonComponent
  ]
})
export class AvalStylesModule {
}
