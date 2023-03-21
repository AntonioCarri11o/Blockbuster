import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmovieformComponent } from './newmovieform.component';

describe('NewmovieformComponent', () => {
  let component: NewmovieformComponent;
  let fixture: ComponentFixture<NewmovieformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmovieformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmovieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
