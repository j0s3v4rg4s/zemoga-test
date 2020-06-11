import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PersonModel } from 'src/core/person.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() key: string;
  @Input() person: PersonModel;
  @Output() onVote = new EventEmitter<void>()
  like = 50;
  vote: number;
  isVote = false

  constructor() {}

  ngOnInit(): void {
    this.calculateVote();
  }



  clickVote(vote: 1 | 2) {
    this.vote = vote;
    document.getElementById(this.key + '-vote').classList.remove('dismiss')
    switch (vote) {
      case 1:
        document.getElementById(this.key + '-like').classList.add('select');
        document.getElementById(this.key + '-dislike').classList.remove('select');
        break;
      case 2:
        document.getElementById(this.key + '-like').classList.remove('select');
        document.getElementById(this.key + '-dislike').classList.add('select');
    }
  }

  goToVote() {
    if(!this.vote) {
      return
    }
    this.openModal()
    this.isVote = true
    this.person.vote.total += 1
    if (this.vote === 1) {
      this.person.vote.likes += 1
    } else {
      this.person.vote.dislike += 1
    }
    this.calculateVote()
    this.onVote.emit()
  }

  private openModal() {
    const element = document.getElementById(this.key + '-dialog')
    element.classList.add('open')
    setTimeout(() => element.classList.remove('open'), 2000)
  }

  private calculateVote() {
    const likes = this.person.vote.likes;
    const total = this.person.vote.total;
    this.like = likes / total * 100
  }

  ngAfterViewInit(): void {}
}
