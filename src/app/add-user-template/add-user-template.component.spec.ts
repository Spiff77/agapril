import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTemplateComponent } from './add-user-template.component';

describe('AddUserTemplateComponent', () => {
  let component: AddUserTemplateComponent;
  let fixture: ComponentFixture<AddUserTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
