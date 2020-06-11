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
    if (!!localStorage['persons']) {
      this.persons = JSON.parse(localStorage['persons']);
    } else {
      fetch('/assets/data.json')
        .then((resp) => resp.json())
        .then((data) => (this.persons = data));
    }
  }

  ngOnInit(): void {}

  saveVote() {
    localStorage['persons'] = JSON.stringify(this.persons);
  }
}
