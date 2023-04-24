import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imagePath: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
