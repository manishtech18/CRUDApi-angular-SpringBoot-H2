import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddBookComponent } from './post-add-book.component';

describe('PostAddBookComponent', () => {
  let component: PostAddBookComponent;
  let fixture: ComponentFixture<PostAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAddBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
