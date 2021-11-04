import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbyChildComponent } from './trackby-child.component';

describe('TrackbyChildComponent', () => {
  let component: TrackbyChildComponent;
  let fixture: ComponentFixture<TrackbyChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackbyChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
