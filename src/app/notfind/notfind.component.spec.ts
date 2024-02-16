import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfindComponent } from './notfind.component';

describe('NotfindComponent', () => {
  let component: NotfindComponent;
  let fixture: ComponentFixture<NotfindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfindComponent]
    });
    fixture = TestBed.createComponent(NotfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
