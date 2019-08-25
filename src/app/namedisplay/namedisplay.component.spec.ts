import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedisplayComponent } from './namedisplay.component';

describe('NamedisplayComponent', () => {
  let component: NamedisplayComponent;
  let fixture: ComponentFixture<NamedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
