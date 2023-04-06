import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategameformComponent } from './updategameform.component';

describe('UpdategameformComponent', () => {
  let component: UpdategameformComponent;
  let fixture: ComponentFixture<UpdategameformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategameformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdategameformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
