import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemovieformComponent } from './updatemovieform.component';

describe('UpdatemovieformComponent', () => {
  let component: UpdatemovieformComponent;
  let fixture: ComponentFixture<UpdatemovieformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemovieformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemovieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
