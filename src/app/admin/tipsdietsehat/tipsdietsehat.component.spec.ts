import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsdietsehatComponent } from './tipsdietsehat.component';

describe('TipsdietsehatComponent', () => {
  let component: TipsdietsehatComponent;
  let fixture: ComponentFixture<TipsdietsehatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsdietsehatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsdietsehatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
