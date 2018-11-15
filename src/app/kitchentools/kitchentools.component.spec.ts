import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchentoolsComponent } from './kitchentools.component';

describe('KitchentoolsComponent', () => {
  let component: KitchentoolsComponent;
  let fixture: ComponentFixture<KitchentoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchentoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchentoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
