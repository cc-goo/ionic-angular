import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentListPage } from './incident-list.page';

describe('IncidentListPage', () => {
  let component: IncidentListPage;
  let fixture: ComponentFixture<IncidentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
