import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgameformComponent } from './newgameform.component';

describe('NewgameformComponent', () => {
  let component: NewgameformComponent;
  let fixture: ComponentFixture<NewgameformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgameformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgameformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
