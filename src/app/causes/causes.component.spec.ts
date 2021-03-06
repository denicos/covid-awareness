/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CausesComponent } from './causes.component';

describe('CausesComponent', () => {
  let component: CausesComponent;
  let fixture: ComponentFixture<CausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
