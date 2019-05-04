import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFirstConnectionComponent } from './home-first-connection.component';

describe('HomeFirstConnectionComponent', () => {
  let component: HomeFirstConnectionComponent;
  let fixture: ComponentFixture<HomeFirstConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFirstConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFirstConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
