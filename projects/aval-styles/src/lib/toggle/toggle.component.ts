import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'avl-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Output() checked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onChecked(value): void{
    this.checked.emit(value);
  }
}
