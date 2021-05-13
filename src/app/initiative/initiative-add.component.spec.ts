import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeAddComponent } from './initiative-add.component';

describe('InitiativeAddComponent', () => {
  let component: InitiativeAddComponent;
  let fixture: ComponentFixture<InitiativeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiativeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
