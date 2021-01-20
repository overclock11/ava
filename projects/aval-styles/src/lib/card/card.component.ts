import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'avl-card-header',
  template: '<ng-content></ng-content>',
})
export class AvlCardHeaderComponent { }

@Component({
  selector: 'avl-card-content',
  template: '<ng-content></ng-content>',
})
export class AvlCardContentComponent { }

@Component({
  selector: 'avl-card-footer',
  template: '<ng-content></ng-content>',
})
export class AvlCardFooterComponent { }


@Component({
  selector: 'avl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
