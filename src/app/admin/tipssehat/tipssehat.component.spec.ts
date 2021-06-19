import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipssehatComponent } from './tipssehat.component';

describe('TipssehatComponent', () => {
  let component: TipssehatComponent;
  let fixture: ComponentFixture<TipssehatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipssehatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipssehatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
