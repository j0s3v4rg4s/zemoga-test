import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/core/person.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  persons: PersonModel[] = [];

  constructor() {
    fetch('/assets/data.json')
      .then((resp) => resp.json())
      .then((data) => (this.persons = data));
  }

  ngOnInit(): void {}
}
