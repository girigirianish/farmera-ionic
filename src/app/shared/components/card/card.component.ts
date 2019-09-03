import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'farmera-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public collapsible: boolean = false;

  public collapsed: boolean = true;

  constructor() {}

  ngOnInit() {}

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
