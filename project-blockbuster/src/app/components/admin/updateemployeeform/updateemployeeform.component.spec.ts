import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployeeformComponent } from './updateemployeeform.component';

describe('UpdateemployeeformComponent', () => {
  let component: UpdateemployeeformComponent;
  let fixture: ComponentFixture<UpdateemployeeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemployeeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateemployeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
