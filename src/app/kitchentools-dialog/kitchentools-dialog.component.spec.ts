import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchentoolsDialogComponent } from './kitchentools-dialog.component';

describe('KitchentoolsDialogComponent', () => {
  let component: KitchentoolsDialogComponent;
  let fixture: ComponentFixture<KitchentoolsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchentoolsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchentoolsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
