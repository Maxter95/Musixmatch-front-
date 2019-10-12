import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLComponent } from './show-l.component';

describe('ShowLComponent', () => {
  let component: ShowLComponent;
  let fixture: ComponentFixture<ShowLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
