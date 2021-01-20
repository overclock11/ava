import {NgModule} from '@angular/core';
import {AvlCardContentComponent, AvlCardFooterComponent, AvlCardHeaderComponent, CardComponent} from './card/card.component';


@NgModule({
  declarations: [
    CardComponent,
    AvlCardHeaderComponent,
    AvlCardContentComponent,
    AvlCardFooterComponent
  ],
  imports: [],
  exports: [
    CardComponent,
    AvlCardHeaderComponent,
    AvlCardContentComponent,
    AvlCardFooterComponent
  ]
})
export class AvalStylesModule {
}
