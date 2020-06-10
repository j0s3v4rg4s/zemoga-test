import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  image = ''
  like = 50;
  time = 3;
  job = 'Entertainment'

  constructor() { }

  ngOnInit(): void {
  }

}
