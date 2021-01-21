import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'avl-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() percentage = 50;
  @Input() width: number | 'auto' = 50;
  @Input() height = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
