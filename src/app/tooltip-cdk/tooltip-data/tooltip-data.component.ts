import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-tooltip-data',
  templateUrl: './tooltip-data.component.html',
  styleUrls: ['./tooltip-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class TooltipDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
