import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalStylesComponent } from './aval-styles.component';

describe('AvalStylesComponent', () => {
  let component: AvalStylesComponent;
  let fixture: ComponentFixture<AvalStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvalStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
