/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UgandaComponent } from './uganda.component';

describe('UgandaComponent', () => {
  let component: UgandaComponent;
  let fixture: ComponentFixture<UgandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
