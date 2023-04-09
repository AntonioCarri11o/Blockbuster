import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsaleformComponent } from './newsaleform.component';

describe('NewsaleformComponent', () => {
  let component: NewsaleformComponent;
  let fixture: ComponentFixture<NewsaleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsaleformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsaleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
