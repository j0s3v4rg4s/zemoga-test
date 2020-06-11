import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.person = {
      name: 'Malala Yousafzai',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/9/96/David_Cameron_meets_with_Malala_Yousafzai_at_the_Syria_Conference_%2824517518040%29_%28cropped%29.jpg',
      timeJob: 1,
      job: 'Entertainment',
      vote: {
        likes: 50,
        dislike: 50,
        total: 100,
      },
    };
    component.key = 'key'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.key).toEqual('key')
  });

  it('should select like button', () => {
    component.clickVote(1)
    const bannerElement: HTMLElement = fixture.nativeElement;
    const buttonVote = bannerElement.querySelector('#'+component.key + '-vote');
    expect(buttonVote.classList.contains('dismiss')).toEqual(false)
    expect(component.vote).toEqual(1)
  })

  it('should select dislike button', ()=> {
    component.clickVote(2)
    expect(component.vote).toEqual(2)
  })

  it('shouldn\'t be able to vote without select option', () => {
    component.goToVote()
    expect(component.person.vote.total).toEqual(100)
  })

  it('should vote with like', ()=> {
    component.clickVote(1)
    component.goToVote()
    expect(component.person.vote.total).toEqual(101)
    expect(component.person.vote.likes).toEqual(51)
  })

  it('should vote with dislike', ()=> {
    component.clickVote(2)
    component.goToVote()
    expect(component.person.vote.total).toEqual(101)
    expect(component.person.vote.dislike).toEqual(51)
  })

});
