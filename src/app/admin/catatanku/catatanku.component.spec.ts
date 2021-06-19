import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatatankuComponent } from './catatanku.component';

describe('CatatankuComponent', () => {
  let component: CatatankuComponent;
  let fixture: ComponentFixture<CatatankuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatatankuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatatankuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
