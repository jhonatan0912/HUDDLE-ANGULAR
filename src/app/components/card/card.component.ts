import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() image_url: string = '';
  @Input() title: string = '';
  @Input() paragraph: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
