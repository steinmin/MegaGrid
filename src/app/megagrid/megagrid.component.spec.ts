import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaGridComponent } from './megagrid.component';

describe('MegaGridComponent', () => {
  let component: MegaGridComponent;
  let fixture: ComponentFixture<MegaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
