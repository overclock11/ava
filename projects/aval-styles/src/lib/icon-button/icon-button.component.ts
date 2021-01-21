import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'avl-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;
  @Output() click = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  emitClick(): void {
    this.click.emit();
  }
}
