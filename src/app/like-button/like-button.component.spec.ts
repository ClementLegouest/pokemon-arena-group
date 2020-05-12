import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeButtonComponent } from './like-button.component';

describe('LikeButtonComponent', () => {
  let component: LikeButtonComponent;
  let fixture: ComponentFixture<LikeButtonComponent>;
  let view = fixture.nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be 0 like by default', () => {
    expect(view.innerHTML).toContain('O like');
  })

  it('Should display 1 like when giving 1 like', () => {
    component.initialLikes = 1;
    fixture.detectChanges();
    expect(view.innerHTML).toContain('1 like');
  })
});
