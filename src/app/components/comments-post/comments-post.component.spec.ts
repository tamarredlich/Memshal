import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsPostComponent } from './comments-post.component';

describe('CommentsPostComponent', () => {
  let component: CommentsPostComponent;
  let fixture: ComponentFixture<CommentsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
